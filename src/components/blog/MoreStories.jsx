import PostPreview from "@/components/blog/PostPreview";

export default function MoreStories({ posts }) {
  return (
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
    {posts.map(({ node }) => (
      <PostPreview
        key={node.slug}
        title={node.title}
        coverImage={node.featuredImage}
        date={node.date}
        author={node.author}
        slug={node.slug}
        excerpt={node.excerpt}
      />
    ))}
  </div>
  );
}