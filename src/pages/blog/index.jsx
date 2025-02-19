import { getAllPostsForHome } from "@/lib/api";
import PageHead from "@/components/Layout/PageHead";
import Layout from "@/components/Layout/Layout";
import Container from "@/components/Layout/Container";
import HeroPost from "@/components/blog/HeroPost";
import MoreStories from "@/components/blog/MoreStories";
import InnerBanner from "@/components/Innerpagedesign/InnerBanner";

const Index = ({ allPosts, preview }) => {
  // const heroPost = allPosts.edges[0]?.node;
  const morePosts = allPosts.edges;
  const PageMeta = 
        {
        title: "Computyne",
        description:"Data Entry Service"
    }

  return (
    <>
    <PageHead PageMeta={PageMeta} />
    <Layout preview={preview}>
    <InnerBanner
                pagetitle="Computyne"
                title="Our Blogs"
                subtitle="Data Support & Property Matching"
                description="Streamline your operations with our expert data entry and management services!"
                bgimage="/images/innerbanner/baner-2.webp"
                breadcrumbtitle2="Company"
                breadcrumbtitle3="Blogs"
                breadcrumb1="/"
                breadcrumb2="#"
                breadcrumb3="/blog"
                />
        <section className="section">
            <Container ContainerClass=''>
                {morePosts.length > 0 && <MoreStories posts={morePosts} />}
            </Container>
        </section>
    </Layout>
    </>
  );
};

export const getStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { 
      allPosts,
      preview ,
    },
    revalidate: 10,
  };
};

export default Index;
