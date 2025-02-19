import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import Layout from "@/components/Layout/Layout";
import Container from "@/components/Layout/Container";
import PostBody from "@/components/blog/PostBody";
import MoreStories from "@/components/blog/MoreStories";
import PostHeader from "@/components/blog/PostHeader";
import PostTitle from "@/components/blog/PostTitle";
import Tags from "@/components/blog/Tags";
import { getAllPostsWithSlug, getPostAndMorePosts,RecentPostsForHome } from "@/lib/api";
import PageHead from "@/components/Layout/PageHead";
import Link from "next/link";
export default function Post({ post, posts, preview,recentposts }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  const PageMeta = 
        {
        title: post.title,
        description: post.excerpt,
        ogimage:post.featuredImage?.node.sourceUrl
    }

  return (
    <>
    <PageHead PageMeta={PageMeta} />
    <Layout preview={preview}>
        {router.isFallback ? (
            <PostTitle>Loading…</PostTitle>
        ) : (
            <>

                
            <section className="section">
                <article>
                <Container>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 ">
                  <div className="lg:col-span-8">
                  <PostHeader
                      title={post.title}
                      coverImage={post.featuredImage}
                      date={post.date}
                      author={post.author}
                      categories={post.categories}
                  /> 
                     <PostBody content={post.content} />
                            <footer>
                                {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
                            </footer>
                  </div>

                  <div className="lg:col-span-4 p-6 rounded shadow-sm border lg:h-[500px] p-4 ">
                    <h2 className="pb-3 font-[800] text-[42px] mb-6 border-[#ff3221] border-b-4">Recent Posts</h2>
                    <div className="flex flex-col gap-3">
                    {recentposts && recentposts?.map((post, i) => (
                      <Link  key={i} href={`/blog/${post.node.slug}`} className="hover:translate-x-2 hover:text-[#ff3221] text-[18px] transition-transform duration-300 ease-in-out">{post.node.title}</Link>
                    ))}
                    </div>
                  </div>
                  </div>
                    </Container>
                </article>
                {/* <div className="mt-20">
                    <Container>
                        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
                    </Container>
                </div> */}
            </section>

          </>
        )}
    </Layout>
    </>
  );
}

export const getServerSideProps= async ({
  params,
  preview = false,
  previewData,
}) => {
  const data = await getPostAndMorePosts(params?.slug, preview, previewData);
  const recentposts = await RecentPostsForHome();
  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
      recentposts:recentposts?.edges,
      revalidate: 10,
    }
  };
};
