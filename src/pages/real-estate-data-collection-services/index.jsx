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
      title: "Effortless Real Estate Data Management – Accuracy, Efficiency, and Growth!",
      paragraphs: [
        "The real estate industry is growing at an unprecedented pace, making efficient data management crucial for business success. With vast amounts of data generated daily—such as property records, legal documents, sales transactions, and commission details—it is essential to keep everything well-organized for seamless operations. Accurate real estate data entry not only enhances decision-making but also ensures compliance and operational efficiency.",
        "By choosing to outsource real estate data entry services, you can save valuable time and resources while ensuring precision in data management. Whether you're a real estate agent, property manager, or broker, outsourcing helps you structure and document critical data efficiently, allowing you to focus on business growth. Computyne specializes in delivering high-quality real estate data entry solutions, backed by advanced technology and a team of skilled professionals. With years of industry experience, we ensure that your real estate data is processed with the highest level of accuracy."
      ],
    },
  ];

  const solutionsData = [
    {
      image: "/images/icons/budget-1.svg",
      title: "Property Listings",
      description:
        "Organizing and updating property listings with accurate details, including location, price, features, and availability for potential buyers.",
      link: "#",
      time: "600",
      bg: "white",
    },
    {
      image: "/images/icons/pdf-1.svg",
      title: "Real Estate Database Creation",
      description:
        "Building and maintaining structured databases with comprehensive property-related information for efficient management.",
      link: "#",
      time: "1200",
    },
    {
      image: "/images/icons/property.svg",
      title: "Gathering Buyer and Seller Information",
      description:
        "Collecting, verifying, and organizing buyer and seller details to facilitate smooth real estate transactions.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/checklist-3.svg",
      title: "Property Sales Records Data Entry",
      description:
        "Recording sales transactions, including purchase prices, dates, and client details, for accurate financial tracking and reporting.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
    {
      image: "/images/icons/budget-1.svg",
      title: "Real Estate Tax and Insurance Data Entry",
      description:
        "Entering and updating tax and insurance details to ensure compliance with legal and financial regulations.",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/property.svg",
      title: "Real Estate Data Extraction",
      description:
        "Extracting valuable real estate data from multiple sources to create structured and well-organized datasets.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/budget-1.svg",
      title: "Non-commercial Valuation Details Data Entry",
      description:
        "Entering and managing valuation data for residential properties to support accurate appraisals and investment decisions.",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/property.svg",
      title: "Commercial Valuation Details Data Entry",
      description:
        "Handling data entry for commercial property valuations, including market analysis and investment potential.",
      link: "#",
      time: "1800",
    },
  ];
  const timeLineContent = [
      {
        heading: "Data Collection",
        details: "Gather accurate property data from multiple sources.",
      },
      {
        heading: "Data Validation",
        details: "Ensure data accuracy through rigorous verification checks.",
      },
      {
        heading: "Data Organization",
        details: "Categorize and structure data for easy access.",
      },
      {
        heading: "Data Entry",
        details: "Input verified data into secure databases and systems.",
      },
      {
        heading: "Data Reporting",
        details: "Generate insightful reports for decision-making and analysis.",
      },

  ];
  const whyusData = [
    {
      image: "/images/icons/data-analytics.svg",
      title: "Comprehensive Data Collection Expertise",
      description:
        "We offer complete real estate data collection, including property listings, market trends, and transactional data, ensuring precision and reliability.",
      link: "#",
      time: "600",
      bg: "white",
    },
    {
      image: "/images/icons/team.svg",
      title: "Industry-Specific Knowledge",
      description:
        "Our team specializes in real estate, understanding market nuances and collecting relevant data for efficient decision-making and accurate reporting.",
      link: "#",
      time: "1200",
    },
    {
      image: "/images/icons/interest-rate.svg",
      title: "Advanced Data Collection Tools",
      description:
        "We utilize cutting-edge tools and technology for data collection, ensuring quick, efficient, and accurate data gathering across various platforms.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/magnifying.svg",
      title: "Data Accuracy and Quality",
      description:
        "Quality control is our priority. Our team cross-verifies data to eliminate errors, ensuring your business gets reliable, high-quality data.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
    {
      image: "/images/icons/chip.svg",
      title: "Scalable Solutions",
      description:
        "Whether you're a small firm or large enterprise, our scalable solutions are tailored to meet your specific data collection needs and volume.",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/24-hours.svg",
      title: "Timely Delivery",
      description:
        "We understand deadlines. Our team ensures timely data collection and reporting, helping you stay ahead in a competitive real estate market.",
      link: "#",
      time: "1800",
    },
  ];
  const tab = [
    {
      title: "Why Choose Us?",
      content: [
        {
          heading: "1. Accurate Outcomes",
          details: [
            "Delivering real estate data collection with a 99% accuracy rate.",
            "Ensuring error-free and precise data for your business decisions."
          ],
        },
        {
          heading: "2. Affordable Prices",
          details: [
            "Cost-effective pricing structure without compromising quality.",
            "Seamless real estate data collection at budget-friendly rates."
          ],
        },
        {
          heading: "3. Timeline Adherence",
          details: [
            "Expert team handling complex data collection tasks efficiently.",
            "Guaranteed timely delivery with quick turnaround times."
          ],
        },
        {
          heading: "4. Quality Assurance",
          details: [
            "Dedicated in-house quality assurance team for meticulous supervision.",
            "Minimizing errors through rigorous checks and validations."
          ],
        },
        {
          heading: "5.24/7 Availability",
          details: [
            "Round-the-clock support for client queries and assistance.",
            "Ensuring smooth operations and a high customer satisfaction rate."
          ],
        },
        {
          heading: "6. Advanced Technology",
          details: [
            "Leveraging the latest technology for superior data processing.",
            "Enhancing accuracy, speed, and efficiency in real estate data collection."
          ],
        },
       
      ],
    },
    {
      title: "FAQs",
      content: Array.from({ length: 4 }).map((_, index) => {
        const questions = [
          {
            question: "What types of real estate data do you collect?",
            answer:
              "We collect comprehensive property details, including listings, transactions, prices, ownership records, and market trends. Our services cater to real estate agents, investors, and property developers for accurate data.",
          },
          {
            question: "How do you ensure data accuracy and reliability?",
            answer:
              "Our team cross-checks data from multiple sources and uses advanced verification techniques to ensure accurate, up-to-date information. We implement strict quality control to minimize errors and guarantee reliability.",
          },
          {
            question: "What industries benefit from your real estate data services?",
            answer:
              "Our real estate data services are tailored for real estate agents, brokers, developers, investors, property managers, and other related industries, providing them with actionable insights and valuable property market data.",
          },
          {
            question: "What is the typical turnaround time for real estate data collection projects?",
            answer:
              "The turnaround time depends on the project scope and data requirements. However, we prioritize efficiency and aim to deliver high-quality data within the agreed timelines, meeting your business needs.",
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
                pagetitle="Real Estate Data Collection"
                title="Streamlining Your Business Processes"
                subtitle="Real Estate Property Data Collection and Data Research"
                description="Computyne helps Canada based Real Estate Company, property data collection"
                bgimage="/images/innerbanner/baner-13.webp"
                cardimg="/images/case-study/7.jpg"
                caseLink="/case-studies/real-estate-data-collection-and-research-services"
                linkText="Succes Stories"
                breadcrumbtitle2="Data Entry"
                breadcrumbtitle3="Real Estate Data Collection"
                breadcrumb1="/"
                breadcrumb2="/data-entry-services"
                breadcrumb3="/real-estate-data-collection-services"
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
                                            <InnerService title="One-Stop Solution For Real Estate Data Collection Outsourcing" solutions={solutionsData} />
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
                                            <Timeline title="Real Estate Data Collection Services Workflow" content={timeLineContent} />
                                        </div>
                                    </div>    
                                </Container>
                            </div>
                            
                            <div className="stretch-container">
                                <Container>
                                    <div className="grid grid-cols-12">
                                        <div className="lg:col-span-9 md:col-span-12 col-span-12">
                                            <TabSection title="Precision, Affordability & Reliability" tabData={tab} />
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
