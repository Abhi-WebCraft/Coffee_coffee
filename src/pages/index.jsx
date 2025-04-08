import React from 'react';
import PageHead from "@/components/Layout/PageHead";
import Layout from "@/components/Layout/Layout";
import Section from '@/components/Layout/Section';
import Container from '@/components/Layout/Container';
import Banner from '@/components/Containers/Home/Banner';
import HolidayPackages from '@/components/Containers/Home/HolidayPackages';
import BannerSection from '@/components/HomePage/BannerSection/BannerSection';
import Key from '@/components/HomePage/Key/Key';
import About from '@/components/HomePage/About/About';
import OurService from '@/components/HomePage/OurService/OurService';
import Counter from '@/components/HomePage/Counter';
import CtaBlock from '@/components/HomePage/CtaBlock';

export default function Home({referrer }) {
  console.log(referrer)
    const PageMeta = 
        {
        title: "web site ",
        description:"Discover Dar Aluloom International, your trusted education consultant in Dubai, offering test prep, tutoring & consulting for academic and career success.",
        keywords: "Global Education Consultants in UAE, Study Overseas or Abroad, Educational Consultants,  College Admissions, University Admissions Dubai UAE., Global Education Advisors in UAE,",
        }

    const serviceData = [
      {   
          number:"1",
          image: "/images/icons/guidance-1.svg",
          title: " Expert Consultants",
          description:
              "Our experienced consultants offer unmatched guidance, ensuring optimal academic and career decisions for a brighter future.",
          link: "#",
      },
      {
          number:"2",
          image: "/images/icons/approach.svg",
          title: "Customised Approach",
          description:
              " We craft personalized solutions, addressing unique academic needs to unlock each student's full potential.",
          link: "#",
      },
      { 
          number:"3",
          image: "/images/icons/solution.svg",
          title: "Dynamic Solutions",
          description:
              " We embrace innovative strategies to provide cutting-edge solutions, ensuring an exceptional and dynamic educational experience.",
          link: "#",
      },
      { 
          number:"4",
          image: "/images/icons/compliance.svg",
          title: "Accountability",
          description:
              " We prioritize honest communication, accountability and clear processes, building trust and confidence at every step of your journey.",
          link: "#",
      },  
  ];
  return (
    <>
    <PageHead PageMeta={PageMeta} />
    <Layout>
      <BannerSection/>
      <OurService/>
      <Counter/>
      <About/>
      <CtaBlock/>
      <Key services={serviceData}  subtitle="Key Differentiators" title="We're Your Reliable Education Consultants" />
    </Layout>
    </>
  );
}
