import React from "react";
import PageHead from "@/components/Layout/PageHead";
import Layout from "@/components/Layout/Layout";
import Banner from "@/components/NewHome/Banner";
import Clients from "@/components/NewHome/Clients";
import Testimonials from "@/components/Homepage/Testimonials";
import Serve from "@/components/ComponentsSection/Serve";
import Form from "../components/NewHome/Form";
import LandingBlog from "../components/Common/LandingBlog"
import { getAllPostsForLandingPage } from "@/lib/api";
export default function Home({ blogPosts = { edges: [], pageInfo: {} },referrer, }) {
 
  const PageMeta = {
    title: "Computyne",
    description: "New Webiste",
  };
  const servicedata = [
    {name:"Real Estate & Mortgage", links:"/real-estate-and-mortgage-back-office-solutions"},
    { name: "Accounting & Finance", links: "/accounting-and-finance-back-office-solutions" },
    { name: "Educational Institutions", links: "/educational-institutions-back-office-solutions" },
    { name: "Restaurant & Hospitality", links: "/restaurant-and-hospitality-back-office-solutions" },
    { name: "Logistics & Shipping", links: "/logistics-and-shipping-back-office-solutions" },
    { name: "Document Data Entry", links: "/document-data-entry-services" },
    { name: "Web Research", links: "/web-research-services" },
    { name: "Retail & E-commerce", links: "/retail-and-ecommerce-back-office-solutions" },
    { name: "Virtual Assistants", links: "/virtual-assistant-services" },
    { name: "Data Collection", links: "/data-collection-services" },
    { name: "Data Cleansing", links: "/data-cleansing-and-enhancement-services" },
    { name: "Typing Services", links: "/outsourcing-typing-services" },
  ];
  const innerservices = [
    {title:"Invoice Processing", link:"/invoice-processing-services"},
    {title:"Freight Audit", link:"/outsource-freight-audit-services"},
    {title:"Resume Processing", link:"/resume-formatting-and-processing-services"},
    {title:"Data Cleansing", link:"/data-cleansing-and-enhancement-services"},
    {title:"Survey Forms Processing", link:"/survey-and-forms-processing-services"},
  ];
  const industry = [
    {
      bgimage: "/images/industry/1.jpg",
      title: "Accounting & Finance",
    },
    {
      bgimage: "/images/industry/2.jpg",
      title: "Retail & E-commerce",
    },
    {
      bgimage: "/images/industry/3.jpg",
      title: "Shipping & Logistics",
    },
    {
      bgimage: "/images/industry/4.jpg",
      title: "Real Estate & Mortgage",
    },
    {
      bgimage: "/images/industry/5.jpg",
      title: "Restaurant & Hospitality",
    },
    {
      bgimage: "/images/industry/6.jpg",
      title: "Educational Institutions",
    },
  ];
  const tabs = [
    {
      id: 1,
      title: "Tab 1",
      content: (
        <>
          <p>
            Outsourcing back office accounting services offer several benefits
            to all types of business entities. These include:
          </p>
          <h4>1. Cost savings</h4>
          <p>
            Finance and accounting outsourcing services can be more
            cost-effective than hiring in-house staff, especially for small and
            medium-sized businesses...
          </p>
        </>
      ),
    },
    {
      id: 2,
      title: "FAQs",
      faqs: [
        {
          question: "What is outsourcing?",
          answer:
            "Outsourcing is the practice of hiring external parties to handle certain business functions.",
        },
        {
          question: "What are the benefits of outsourcing?",
          answer:
            "Outsourcing can lead to cost savings, increased efficiency, and access to specialized skills.",
        },
        {
          question: "How do I choose an outsourcing partner?",
          answer:
            "Consider factors like expertise, reputation, and cost when selecting an outsourcing partner.",
        },
      ],
    },
  ];

  const servicesData = [
    {
      title: "Data Entry",
      subtitle: "Outsourcing Expertise",
      fullText: " Streamline your operations with accurate and efficient data entry services tailored to your business needs.",
        shortText: "Streamline your operations with accurate and",
      iconimg: "/images/icons/document.svg",
      time: "400",
      link: "/data-entry-services",
    },
    {
      title: "Data Processing",
      subtitle: "Processing Expertise",
      fullText: "Transform raw data into actionable insights with our comprehensive and reliable data processing solutions.",
        shortText: "Transform raw data into actionable insights with",
      iconimg: "/images/icons/data-processing.svg",
      time: "800",
      link: "/data-processing-services",
    },
    {
      title: "Data Management",
      subtitle: "Management Expertise",
      fullText: "Optimize your workflows with expert data management for seamless organization and accessibility.",
        shortText: "Optimize your workflows with expert data management",
      iconimg: "/images/icons/system-integration.svg",
      time: "1200",
      link: "/data-management-services",
    },
    {
      title: "Resume Formatting",
      subtitle: "Resume Formatting",
      fullText: "Present professional, polished resumes with our precise and impactful resume formatting services.",
        shortText: "Present professional, polished resumes with our",
      iconimg: "/images/icons/data-entry.svg",
      time: "1600",
      link: "/document-data-entry-services",
    },
    {
      title: "Invoice Processing",
      subtitle: "Processing Expertise",
      fullText: "Simplify your financial operations with fast, accurate, and hassle-free invoice processing services.",
        shortText: "Simplify your financial operations with fast,",
      iconimg: "/images/icons/billing.svg",
      time: "2000",
      link: "/invoice-processing-services",
    },
    {
      title: "  Freight Audit",
      subtitle: "Freight Audit",
      fullText: "Maximize savings with precise freight audit solutions ensuring cost efficiency and transparency in logistics.",
        shortText: "Maximize savings with precise freight audit solutions",
      iconimg: "/images/icons/management.svg",
      time: "2500",
      link: "/outsource-catalog-management",
    },
  ];
  return (
    <>
      <PageHead PageMeta={PageMeta} />
      <Layout>
        <Banner />
        <Clients />
        {/* <Comprehensive services={servicesData} /> */}
        {/* <Aboutme /> */}
        <Testimonials />
        <LandingBlog blogPosts={blogPosts.edges}/>
        <Form />
        <Serve services={servicedata} />
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
