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
import Testimonials from '@/components/Common/Testimonials';
import Points from '@/components/Common/Points';
// import Form from '@/components/Common/Form';

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
          image: "/images/abhi/html.svg",
          title: "Banking",
          description:
              "Our mission is to deliver reliable, secure, and scalable IT solutions that enable banks to innovate, operate seamlessly, and grow with confidence in the digital age.",
          link: "#",
      },
      {
          number:"2",
          image: "/images/abhi/style-sheet.svg",
          title: "eLearning & Education",
          description:
              " The educational landscape has transformed, with eLearning as a cornerstone of modern learning. A website designer creates cutting-edge eLearning platforms, empowering educators and students to reach their full potential. Innovative web design and development turn traditional classrooms into dynamic digital environments.",
          link: "#",
      },
      { 
          number:"3",
          image: "/images/abhi/javascript.svg",
          title: "Rental & Sharing",
          description:
              "Rental companies thrive in the digital age with cutting-edge web design and development solutions. Focus areas include optimizing operations, enhancing customer experiences, and driving growth. By harnessing technology, rental businesses streamline processes, predict customer demand, and deliver personalized experiences throughout the entire customer journey.",
          link: "#",
      },
      { 
          number:"4",
          image: "/images/abhi/cross-platform.svg",
          title: "Manufacturing & Logistics",
          description:
              "Manufacturing and logistics companies achieve operational excellence with data-driven strategies. Expertise in web design, development, and data analytics streamlines processes, enhances product development, boosts revenue, and optimizes supply chains. Turning data into actionable insights drives growth and efficiency.",
          link: "#",
      },  
          { 
          number:"5",
          image: "/images/abhi/cross-platform.svg",
          title: "B2B & Enterprises",
          description:
              "Exceptional digital experiences deliver measurable value for global B2B enterprises. Tailored solutions blend cutting-edge web design, development, and marketing strategies to deeply engage target audiences. Highly personalized interactions help businesses stay ahead of the competition and achieve outstanding outcomes.",
          link: "#",
      }, 
          { 
          number:"6",
          image: "/images/abhi/cross-platform.svg",
          title: "Real Estate",
          description:
              "Real estate firms excel and enhance customer satisfaction with innovative web design and development solutions. Focus on improving security, fostering team-client collaboration, reducing costs, and streamlining processes to maximize revenue. Cutting-edge technology helps real estate businesses thrive in today’s competitive market.",
          link: "#",
      }, 
  ];
  const pointsData = [
    {
      id: 1,
      imageSrc: "/images/services/service1.png",
      imageAlt: " Expertise You Can Trust",
      title: "Expertise You Can Trust",
      description:
        "Our team consists of skilled professionals with deep expertise in custom software development, UI/UX design, mobile apps, and cloud solutions. We ensure top-quality delivery with every project.",
      animationDuration: 400,
    },
    {
      id: 2,
      imageSrc: "/images/services/service2.png",
      imageAlt: "Proven Track Record ",
      title: "Proven Track Record",
      description:
        "With years of experience working with both startups and large enterprises, we’ve built a strong portfolio of successful projects, creating tangible results for our clients.",
      animationDuration: 800,
    },
    {
      id: 3,
      imageSrc: "/images/services/service3.png",
      imageAlt: "Agile & Flexible Approach ",
      title: "Agile & Flexible Approach",
      description:
        "We use an agile development process to ensure that your project is adaptive to changing needs and priorities. We value open communication and flexibility, so you're always in the loop.",
      animationDuration: 1200,
    },
    {
      id: 4,
      imageSrc: "/images/services/service1.png",
      imageAlt: " Results-Driven Solutions  ",
      title: " Results-Driven Solutions",
      description:
        "At EvySoft, we focus on delivering measurable results. Whether it's increased efficiency, reduced costs, or improved user engagement, our goal is to help you achieve success.",
      animationDuration: 1600,
    },
    {
      id: 5,
      imageSrc: "/images/services/service2.png",
      imageAlt: "Client-Centered Service ",
      title: "Client-Centered Service",
      description:
        "Your satisfaction is our top priority. We work closely with you, understanding your business challenges and goals, and delivering solutions that make a real impact.",
      animationDuration: 1600,
    },

  ];
  return (
    <>
    <PageHead PageMeta={PageMeta} />
    <Layout>
      <BannerSection/>
      <OurService/>
      {/* <Counter/> */}
      <Key services={serviceData}  subtitle="" title="Industries We Serve" />
      {/* <About/> */}
      <div className='pt-[100px]'></div>
      <Points points={pointsData} title="Why Choose EvySoft?" description="" />
      <CtaBlock/>
      <Testimonials/>
      {/* <Form/> */}
    </Layout>
    </>
  );
}
