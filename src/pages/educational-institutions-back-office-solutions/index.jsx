import PageHead from "@/components/Layout/PageHead";
import Layout from "@/components/Layout/Layout";
import BannerSection from "@/components/ComponentsSection/BannerSection";
import Detail from "../../components/Innerpagedesign/Detail";
import Container from "../../components/Layout/Container";
import InnerService from "../../components/Innerpagedesign/InnerService";
import InnerRightForm from "@/components/Innerpagedesign/InnerRightForm";
import WhyUs from "../../components/Innerpagedesign/WhyUs";
import TabSection from "@/components/ComponentsSection/TabSection";
import Timeline from "@/components/Innerpagedesign/Timeline";
import CtaBlock from "../../components/NewHome/CtaBlock";
import IndustryServe from "@/components/Innerpagedesign/Innerindustry";
import Innerbannerstats from "@/components/Innerpagedesign/Innerbannerstats";
export default function AboutUs({ referrer }) {
  console.log(referrer);
  const PageMeta = {
    title: "Computyne",
    description: "New Webiste",
  };
  const detaildata = [
    {
      title: "educational institutions back office solutions",
      paragraphs: [
        "The education sector is one of the quickest evolving industries around the world, producing enormous scope incomes and work. Because of steady changes and updates in the education business, the organizations need to oversee applicable and vital data quickly and precisely. Putting the right knowledge search with the state of the art technology is what we aim to provide to our clients.",
        "At Computyne, we have helped Education Industry outsourcing solutions to a range of institutions and clients worldwide. We have maintained an enormous number of colleges, universities, online course providers, and other businesses in the learning and development industry worldwide to digitize their information.",
        "We have catered our services to some of the most prominent colleges, universities, and companies in education businesses spread across the US, UK, and Australia."
      ],
    },
  ];

  const solutionsData = [
    {
      image: "/images/icons/budget-1.svg",
      title: "Student Enrollment Management",
      description:
        "Efficient management of student admissions, registrations, and enrollment processes to ensure smooth academic transitions and reduce administrative burden.",
      link: "#",
      time: "600",
      bg: "white",
    },
    {
      image: "/images/icons/pdf-1.svg",
      title: "Academic Records and Documentation",
      description:
        "Secure handling and digitization of student records, grades, and transcripts, providing easy access to vital academic data.",
      link: "#",
      time: "1200",
    },
    {
      image: "/images/icons/property.svg",
      title: "Fee Management and Payment Processing",
      description:
        "Streamlined fee collection, payment tracking, and reporting, ensuring accurate financial records and smooth payment processing for both students and parents.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/checklist-3.svg",
      title: "Timetable and Scheduling Management",
      description:
        "We handle course scheduling, class timetables, and faculty assignments, ensuring optimal utilization of resources and smooth academic operations.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
    {
      image: "/images/icons/budget-1.svg",
      title: "Communication with Stakeholders",
      description:
        "We manage communication between students, faculty, and parents, ensuring timely updates on academic progress, events, and deadlines.",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/property.svg",
      title: "Compliance and Reporting",
      description:
        "Our team ensures that your institution adheres to regulatory requirements, handles audits, and provides timely reports to authorities.",
      link: "#",
      time: "1800",
    },
  ];
  const timeLineContent = [
    {
      heading: "Data Collection and Registration",
      details: "Gather and process student data for enrollment.",
    },
    {
      heading: "Fee Management and Billing",
      details: "Streamline payment tracking and billing processes.",
    },
    {
      heading: "Academic Record Management",
      details:
        "Organize and maintain student grades and transcripts.",
    },
    {
      heading: "Scheduling and Timetable Coordination",
      details: "Create and manage class schedules and faculty assignments.",
    },
    {
      heading: "Communication and Reporting",
      details: "Ensure effective communication and reporting with stakeholders.",
    },
  ];
  const whyusData = [
    {
      image: "/images/icons/data-analytics.svg",
      title: "Expertise in Education Sector Operations",
      description:
        "We specialize in handling the unique back-office needs of educational institutions, ensuring tailored solutions for smooth administrative operations.",
      link: "#",
      time: "600",
      bg: "white",
    },
    {
      image: "/images/icons/team.svg",
      title: "Streamlined Data Management",
      description:
        "Our team ensures efficient collection, processing, and management of student data, academic records, and institutional documentation, enhancing data accessibility and accuracy.",
      link: "#",
      time: "1200",
    },
    {
      image: "/images/icons/interest-rate.svg",
      title: "Fee and Financial Management",
      description:
        "We simplify fee collection, payment tracking, and financial reporting, ensuring transparent and error-free financial operations for both students and institutions.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/magnifying.svg",
      title: "Efficient Scheduling and Timetabling",
      description:
        "We provide seamless scheduling solutions, ensuring optimal allocation of classes, faculty, and resources to meet the institution’s academic requirements.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
    {
      image: "/images/icons/chip.svg",
      title: "Regulatory Compliance and Reporting",
      description:
        "Our solutions guarantee adherence to educational regulations, handling audits and generating timely reports for institutional compliance with authorities.",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/24-hours.svg",
      title: "Effective Communication Channels",
      description:
        "We streamline communication between faculty, students, and parents, ensuring clear, timely, and efficient information flow.",
      link: "#",
      time: "1800",
    },
  ];
  const tab = [
    {
      title: "Why Choose Us?",
      content: [
        {
          heading: "1. Student Enrollment and Registration Management",
          details: [
            "Efficient data collection for student admission processes.",
            "Seamless handling of enrollment forms and documents.",
            "Reduced administrative workload with automated registration.",
          ],
        },
        {
          heading: "2. Fee Management and Payment Processing",
          details: [
            "Streamlined fee collection and payment tracking.",
            "Accurate and timely invoicing for students.",
            "Secure payment processing through various methods.",
          ],
        },
        {
          heading: "3. Academic Record Maintenance and Documentation",
          details: [
            "Organizing and storing student grades and transcripts.",
            "Easy access to academic records for students and faculty.",
            "Digital document management to minimize paperwork.",
          ],
        },
       
      ],
    },
    {
      title: "FAQs",
      content: Array.from({ length: 4 }).map((_, index) => {
        const questions = [
          {
            question: "What services are included in educational institution back-office solutions?",
            answer:
              "Our services include student enrollment management, fee processing, academic record maintenance, scheduling, and communication handling. We streamline administrative tasks, improving efficiency and reducing errors.",
          },
          {
            question: "How do you ensure the confidentiality of student data?",
            answer:
              "We follow strict data protection protocols, including encryption, secure storage, and access control to protect sensitive student information. Our team is trained in compliance with data privacy laws.",
          },
          {
            question: "Can your services be customized for specific educational institutions?",
            answer:
              "Yes, we provide tailored solutions based on the unique needs of each institution, whether it's a school, college, or university. We adapt our services to meet your specific requirements.",
          },
          {
            question: "How do you ensure compliance with educational regulations?",
            answer:
              "Our solutions are designed to ensure adherence to local, state, and federal regulations. We regularly update our processes to comply with the latest educational policies and standards.",
          },
        ];
        return questions[index];
      }),
    },
    
  ];
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
    {title:"Finance and Accounting", link:"/accounting-and-finance-back-office-solutions"},
    {title:"Educational Institutions", link:"/educational-institutions-back-office-solutions"},
    {title:"Logistics & Shipping", link:"/logistics-and-shipping-back-office-solutions"},
    {title:"Real Estate & Mortgage", link:"/real-estate-and-mortgage-back-office-solutions"},
    {title:"Retail & E-Commerce", link:"/retail-and-ecommerce-back-office-solutions"},
    {title:"Restaurant & Hospitality", link:"/restaurant-and-hospitality-back-office-solutions"},
  ];

  return (
    <>
        <PageHead PageMeta={PageMeta} />
        <Layout>
            <BannerSection
                pagetitle="Educational Institutions"
                title="Streamlining Your Business Processes"
                subtitle="Resume Data Collection From Online Portal"
                description="Here the client is HR Company which needed support "
                bgimage="/images/innerbanner/baner-15.webp"
                cardimg="/images/case-study/2.jpg"
                caseLink="/case-studies/resume-data-collection-services-for-usa-recruitment-consultancy"
                linkText="Succes Stories"
                breadcrumbtitle2="Industries"
                breadcrumbtitle3="Educational Institutions"
                breadcrumb1="/"
                breadcrumb2="#"
                breadcrumb3="/educational-institutions-back-office-solutions"
                />
            <Innerbannerstats />
            <section className="amamaa">
                <Container>
                    <div className="grid grid-cols-12 gap-5">
                        <div className="lg:col-span-9 md:col-span-12 col-span-12">
                            <div className="stretch-container">
                                <Container>
                                    <div className="grid grid-cols-12">
                                        <div className="lg:col-span-9 md:col-span-12 col-span-12">
                                            <Detail details={detaildata} />
                                        </div>
                                    </div>    
                                </Container>                       
                            </div>
                            <div className="stretch-container bg-[#f5fbfb]">
                                <Container>
                                    <div className="grid grid-cols-12">
                                        <div className="lg:col-span-9 md:col-span-12 col-span-12">
                                            <InnerService title="We Take Care of All Your educational institutions back office solutions Needs" solutions={solutionsData} />
                                        </div>
                                    </div>    
                                </Container>       
                            </div>
                            <div className="stretch-container py-[50px]">
                                <Container>
                                    <div className="grid grid-cols-12">
                                        <div className="lg:col-span-9 md:col-span-12 col-span-12">
                                            <CtaBlock />
                                        </div>
                                    </div>    
                                </Container>       
                            </div>
                            <div className="stretch-container">
                                <Container>
                                    <div className="grid grid-cols-12">
                                        <div className="lg:col-span-9 md:col-span-12 col-span-12">
                                            <Timeline title=" educational institutions back office solutions Workflow" content={timeLineContent} />
                                        </div>
                                    </div>    
                                </Container>
                            </div>
                            
                            <div className="stretch-container">
                                <Container>
                                    <div className="grid grid-cols-12">
                                        <div className="lg:col-span-9 md:col-span-12 col-span-12">
                                            <TabSection title="Your Reliable Partner for  educational institutions back office solutions" tabData={tab} />
                                        </div>
                                    </div>    
                                </Container>       
                            </div>
                            <div className="stretch-container">
                                <Container>
                                    <div className="grid grid-cols-12">
                                        <div className="lg:col-span-9 md:col-span-12 col-span-12">
                                        <IndustryServe services={servicedata}/>
                                        </div>
                                    </div>    
                                </Container>       
                            </div>
                        </div>                    
                        <div className="col-span-3 mt-[25px] mb-[30px]">
                            <div className="sticky top-[100px]  case-temp-main right-form">
                            <InnerRightForm relatedServices ={innerservices}/>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </Layout>
    </>
  );
}
