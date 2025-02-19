import React from 'react';
import PageHead from "@/components/Layout/PageHead";
import Layout from "@/components/Layout/Layout";
import Footercta from '@/components/Common/Footercta';
import Counter from '@/components/Homepage/Counter';
import About from '@/components/Homepage/About';
import Brands from '@/components/Homepage/Brands';
import ClientStory from '@/components/Homepage/ClientStory';
import Testimonials from '@/components/Homepage/Testimonials';
import Certifications from '@/components/Common/Certifications';
import Comprehensive from "@/components/ComponentsSection/Comprehensive";
import HomeSectionBanner from '@/components/ComponentsSection/HomeSectionBanner'

export default function Home({referrer }) {
  console.log(referrer)
    const PageMeta = 
        {
        title: "Computyne",
        description:"New Webiste"
    }
    const servicesdata = [
      { title: "Data Entry", 
        subtitle: "Outsourcing Expertise", 
        content: "We streamline data management for your tech platform, AI solution, or any other purpose, providing reliable end-to-end data support services – from data collection, enrichment, and validation to data annotation and management.",
        iconimg:"/images/icons/document.svg",
        time:"400",
        link:"#",
       },
       { title: "Data Processing", 
        subtitle: "Processing Expertise", 
        content: "We streamline data management for your tech platform, AI solution, or any other purpose, providing reliable end-to-end data support services – from data collection, enrichment, and validation to data annotation and management.",
        iconimg:"/images/icons/data-processing.svg",
        time:"800",
        link:"#",
       },
       { title: "Data Management", 
        subtitle: "Management Expertise", 
        content: "We streamline data management for your tech platform, AI solution, or any other purpose, providing reliable end-to-end data support services – from data collection, enrichment, and validation to data annotation and management.",
        iconimg:"/images/icons/system-integration.svg",
        time:"1200",
        link:"#",
       },
       { title: "Document Data Entry", 
        subtitle: "Outsourcing Expertise", 
        content: "We streamline data management for your tech platform, AI solution, or any other purpose, providing reliable end-to-end data support services – from data collection, enrichment, and validation to data annotation and management.",
        iconimg:"/images/icons/data-entry.svg",
        time:"1600",
        link:"#",
       },
       { title: "Invoice Processing", 
        subtitle: "Processing Expertise", 
        content: "We streamline data management for your tech platform, AI solution, or any other purpose, providing reliable end-to-end data support services – from data collection, enrichment, and validation to data annotation and management.",
        iconimg:"/images/icons/billing.svg",
        time:"2000",
        link:"#",
       },
       { title: "Catalog Management", 
        subtitle: "Catalog Expertise", 
        content: "We streamline data management for your tech platform, AI solution, or any other purpose, providing reliable end-to-end data support services – from data collection, enrichment, and validation to data annotation and management.",
        iconimg:"/images/icons/management.svg",
        time:"2500",
        link:"#",
       },
  
  ];
  const tabs = [
    {
        id: 1,
        title: "Tab 1",
        content: (
            <>
                <p>Outsourcing back office accounting services offer several benefits to all types of business entities. These include:</p>
                <h4>1. Cost savings</h4>
                <p>Finance and accounting outsourcing services can be more cost-effective than hiring in-house staff, especially for small and medium-sized businesses...</p>
            </>
        ),
    },
    {
        id: 2,
        title: "FAQs",
        faqs: [
            { question: "What is outsourcing?", answer: "Outsourcing is the practice of hiring external parties to handle certain business functions." },
            { question: "What are the benefits of outsourcing?", answer: "Outsourcing can lead to cost savings, increased efficiency, and access to specialized skills." },
            { question: "How do I choose an outsourcing partner?", answer: "Consider factors like expertise, reputation, and cost when selecting an outsourcing partner." },
        ],
    },
];
  return (
    <>
    <PageHead PageMeta={PageMeta} />
    <Layout>    
      
      <HomeSectionBanner/>
      <Counter/>
      <Comprehensive services={servicesdata}/>
      
      <div className='section'> 
      <About/>
      </div>
      <ClientStory/>
      <Brands/>
      <Certifications/>
      <Testimonials/>
      <Footercta/>
    </Layout>
    </>
  );
}
