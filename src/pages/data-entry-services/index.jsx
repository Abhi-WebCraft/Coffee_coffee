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
      title: "Data Entry Services",
      paragraphs: [
        "Every business relies on accurate and efficient data management to maintain a seamless workflow. Handling vast amounts of data daily—from business records to PDF files and other documented details—can be complex and time-consuming. Partnering with a reliable data entry outsourcing company ensures that your data processing needs are met with precision, efficiency, and security.",
        "Since 2009, Computyne has been a leading data entry services provider, serving businesses worldwide, including clients from the UK, Canada, Europe, the USA, and Australia. With a team of over 200 skilled professionals, we specialize in delivering high-quality data entry services with a 99% accuracy rate. Our expertise, affordability, and commitment to on-time project delivery make us the ideal data entry partner for businesses of all sizes.",
      ],
    },
  ];

  const solutionsData = [
    {
      image: "/images/icons/budget-1.svg",
      title: "Manual Data Entry & Digitization",
      description:
        "Transform physical records into digital formats with utmost accuracy.",
      link: "#",
      time: "600",
      bg: "white",
    },
    {
      image: "/images/icons/pdf-1.svg",
      title: "Data Processing & Transcription",
      description:
        "Convert and manage crucial data efficiently for easy accessibility.",
      link: "#",
      time: "1200",
    },
    {
      image: "/images/icons/property.svg",
      title: "Data Cleansing & Validation",
      description:
        " Ensure consistency and eliminate errors in your datasets.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/checklist-3.svg",
      title: "E-commerce & Product Data Entry",
      description:
        "Manage and update product listings with precision.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
    {
      image: "/images/icons/budget-1.svg",
      title: "Financial & Healthcare Data Entry",
      description:
        " Securely process financial records and medical documentation.",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/property.svg",
      title: "Comprehensive Data Entry Services",
      description:
        "Including manual data entry, digitization, transcription, and more.",
      link: "#",
      time: "1800",
    },
  ];
  const timeLineContent = [
    {
      heading: "Data Collection",
      details: "Gathering accurate, relevant data from various sources.",
    },
    {
      heading: "Data Validation",
      details: "Verifying data for consistency and accuracy.",
    },
    {
      heading: "Data Entry Tools ",
      details:
        "Using automated software and AI-driven solutions to enhance speed and precision.",
    },
    {
      heading: "Data Review",
      details: "Conducting quality checks and rectifying errors.",
    },
    {
      heading: "Reporting and Analytics",
      details: "Leveraging data to gain valuable insights.",
    },
  ];
  const whyusData = [
    {
      image: "/images/icons/data-analytics.svg",
      title: "Accuracy & Quality Assurance",
      description:
        "We implement stringent quality control processes with rigorous validation checks to ensure error-free data entry services.",
      link: "#",
      time: "600",
      bg: "white",
    },
    {
      image: "/images/icons/team.svg",
      title: "Tailored Solutions for Every Industry",
      description:
        "Our data entry outsourcing services cater to healthcare, finance, retail, real estate, and more industries.",
      link: "#",
      time: "1200",
    },
    {
      image: "/images/icons/interest-rate.svg",
      title: "Fast Turnaround Times",
      description:
        "We deliver quick, reliable results without compromising accuracy, ensuring your business remains efficient and competitive.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/magnifying.svg",
      title: "Cost-Effective & Scalable Services",
      description:
        "Our outsourced data entry services are budget-friendly and scalable to meet growing business demands without hidden costs.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
    {
      image: "/images/icons/chip.svg",
      title: "Data Security & Confidentiality",
      description:
        "With robust security protocols and NDAs, we prioritize the protection of sensitive business data",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/24-hours.svg",
      title: "Dedicated Team for Exceptional Quality",
      description:
        "Mention your team of professionals who prioritize precision and quality. ",
      link: "#",
      time: "1800",
    },
  ];
  const tab = [
    {
      title: "Why Choose Us?",
      content: [
        {
          heading: "1. Comprehensive Data Solutions",
          details: [
            "Accuracy Guaranteed: We ensure 100% accuracy and high-quality data entry services.",
            "Diverse Services: We handle everything from data entry to data processing and data analysis.",
            "Custom Solutions: We offer tailored solutions to meet your business’s unique needs.",
          ],
        },
        {
          heading: "2. Security and Confidentiality",
          details: [
            "Advanced Security Protocols: We prioritize the security of your data, protecting it from unauthorized access.",
            "Non-Disclosure Agreements: NDAs are implemented to secure the client’s confidentiality.",
            "Regular Audits: We conduct regular reviews to ensure compliance with data handling and storage standards.",
          ],
        },
        {
          heading: "3. Affordable and Scalable Services",
          details: [
            "Flexible Pricing: Large as well as small businesses can easily afford our services.",
            "On-Demand Scaling: Our services can easily scale to meet your growing business demands and evolving needs.",
            "No Hidden Costs: We offer transparent pricing with no hidden fees, so you know exactly what you're paying for.",
          ],
        },
       
      ],
    },
    {
      title: "FAQs",
      content: Array.from({ length: 4 }).map((_, index) => {
        const questions = [
          {
            question: "1. What Types of Data Services Do You Provide?",
            answer:
              "We provide a comprehensive range of data services, including data entry for manual and automated input with high accuracy, data processing to organize, filter, and analyze raw data, and data management for secure storage, retrieval, and maintenance of your records.",
          },
          {
            question: "2. How Do You Ensure Data Accuracy and Quality?",
            answer:
              "We ensure data accuracy and quality through rigorous quality checks at multiple stages to eliminate errors. Our team of experienced professionals uses advanced tools and software to handle data precisely and deliver results you can trust.",
          },
          {
            question: "3. Is My Data Secure with You?",
            answer:
              "Yes, your data is completely secure with us. We adhere to strict confidentiality policies, including signing Non-Disclosure Agreements (NDAs) for every project. Additionally, we use advanced encryption methods and robust security protocols to safeguard sensitive data.",
          },
          {
            question: "4. Can You Scale Your Services to Match My Business Growth?",
            answer:
              "Absolutely, our services are fully scalable to meet your business needs. We offer custom plans tailored to match your growth, supported by scalable infrastructure to handle increasing data volumes. Our dedicated team is always ready to provide on-demand support for expanding requirements.",
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
    {title:"Document Data Entry", link:"/document-data-entry-services"},
    {title:"Mortgage Data Entry", link:"/mortgage-data-entry-services"},
    {title:"Real Estate Data Collection", link:"/real-estate-data-collection-services"},
    {title:"Image Data Entry", link:"/image-data-entry-services"},
    {title:"Typing Services", link:"/outsourcing-typing-services"},
    ];

  return (
    <>
        <PageHead PageMeta={PageMeta} />
        <Layout>
            <BannerSection
                pagetitle="Data Entry"
                title="Streamlining Your Business Processes"
                subtitle="Data Support & Property Matching"
                description="Streamline your operations with our expert data entry and management services!"
                bgimage="/images/innerbanner/baner-12.webp"
                cardimg="/images/client-story.jpg"
                caseLink="#"
                linkText="Succes Stories"
                breadcrumbtitle2="Data Entry"
                breadcrumb1="/"
                breadcrumb2="/data-entry-services"
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
                                            <InnerService title="We Take Care of All Your Data Entry Needs" solutions={solutionsData} />
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
                                            <Timeline title="Data Entry Services Workflow" content={timeLineContent} />
                                        </div>
                                    </div>    
                                </Container>
                            </div>
                            
                            <div className="stretch-container">
                                <Container>
                                    <div className="grid grid-cols-12">
                                        <div className="lg:col-span-9 md:col-span-12 col-span-12">
                                            <TabSection title="Your Reliable Partner for Data Entry Services " tabData={tab} />
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
