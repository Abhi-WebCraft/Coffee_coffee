import React from "react";
import PageHead from "@/components/Layout/PageHead";
import Layout from "@/components/Layout/Layout";
import Banner from "@/components/NewHome/Banner";
import { getAllPostsForLandingPage } from "@/lib/api";
export default function Home({ blogPosts = { edges: [], pageInfo: {} },referrer, }) {
 
  const PageMeta = {
    title: "Computyne",
    description: "New Webiste",
  };
 
 
  return (
    <>
      <PageHead PageMeta={PageMeta} />
      <Layout>
        <Banner />
      </Layout>
    </>
  );
}
export const getServerSideProps= async ({
  preview = false,
  }) => {
    const blogPosts = await getAllPostsForLandingPage(preview);
    return {
      props: { 
        blogPosts, 
        preview,
       },
    };
 }
