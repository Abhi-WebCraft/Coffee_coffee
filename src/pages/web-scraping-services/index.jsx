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
      title: "Web Scraping Services",
      paragraphs: [
        "Data scraping is a popular and efficient way to collect large volumes of data from different sources on the web and track the ongoing market trends. An experienced professional can help you by crawling countless websites and gathering useful data, effortlessly. This is an excellent way to strengthen your core by gaining insights into the industry and making necessary improvements in your business model. Computyne is reliable outsourcing companies that can help you give a structure to this extracted data, which can be highly beneficial for you any time in the future.",
        "Web scraping serves multiple purposes for different types of companies, depending on their functions. We have a squad of experts who possess a vast knowledge of web scraping professionals that efficiently extract crucial data from different internet portals and structure them into easily retrievable formats. We offer services to a wide array of industries, including healthcare, academics, marketing, eCommerce, real estate, etc.",
        "Computyne is highly preferred to outsource web scraping services as we have mastery in deliveries with 99% accuracy rates and quick turnaround time. Our comprehensive data scraping services involve eCommerce product extraction, web data mining, scraping solutions, data extraction from Google maps, and customized web scraping at an affordable pricing structure. This is an excellent way to improve your business strategies and also create new business opportunities successfully.",
        "We have a team of 250+ skilled workers who are well-versed with the techniques of extracting high-value data from an assortment of sources, such as social networking sites, online shopping websites, blogs, podcasts, job portals, Google maps, etc. We are your best bet for web scraping outsourcing projects in different formats, including Excel, Word, TXT, PDF, etc."
      ],
    },
  ];

  const solutionsData = [
    {
      image: "/images/icons/budget-1.svg",
      title: "Comprehensive Data Extraction",
      description:
        "Extract data from diverse online sources, ensuring accuracy and completeness for your specific requirements.",
      link: "#",
      time: "600",
      bg: "white",
    },
    {
      image: "/images/icons/pdf-1.svg",
      title: "Customized Web Scraping Solutions",
      description:
        "Tailor scraping processes to meet your business objectives, focusing on industry-specific data needs.",
      link: "#",
      time: "1200",
    },
    {
      image: "/images/icons/property.svg",
      title: "Advanced Tools and Technology",
      description:
        "Utilize cutting-edge web scraping tools to gather data efficiently and securely from websites.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/checklist-3.svg",
      title: "Real-Time Data Updates",
      description:
        "Deliver up-to-date and real-time data to keep you ahead in competitive markets.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
    {
      image: "/images/icons/budget-1.svg",
      title: "Scalable and Flexible Services",
      description:
        "Offer scalable solutions that adapt to varying data volumes and project complexities.",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/property.svg",
      title: "Data Security and Compliance",
      description:
        "Maintain robust security protocols to safeguard sensitive information and ensure compliance with legal standards.",
      link: "#",
      time: "1800",
    },
  ];
  const timeLineContent = [
    {
      heading: "Requirement Analysis",
      details: "Understand client needs and target data sources.",
    },
    {
      heading: "Tool Configuration",
      details: "Set up advanced tools for efficient scraping.",
    },
    {
      heading: "Data Extraction",
      details:
        "Collect structured data from identified websites.",
    },
    {
      heading: "Data Cleaning",
      details: "Filter and refine data for accuracy and usability.",
    },
    {
      heading: "Final Delivery",
      details: "Provide formatted and actionable data promptly.",
    },
  ];
  const whyusData = [
    {
      image: "/images/icons/data-analytics.svg",
      title: "Expertise in Web Scraping",
      description:
        "Our experienced team specializes in extracting accurate and relevant data from a variety of online sources, tailored to your needs.",
      link: "#",
      time: "600",
      bg: "white",
    },
    {
      image: "/images/icons/team.svg",
      title: "Advanced Tools and Technology",
      description:
        "We use cutting-edge web scraping tools to deliver precise, efficient, and scalable solutions, ensuring maximum data quality.",
      link: "#",
      time: "1200",
    },
    {
      image: "/images/icons/interest-rate.svg",
      title: "Customized Solutions",
      description:
        "Our services are tailored to your specific industry and objectives, offering personalized approaches that align with your business goals.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/magnifying.svg",
      title: "Real-Time Data Access",
      description:
        "We provide up-to-date and real-time data, enabling you to stay ahead in competitive markets with actionable insights.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
    {
      image: "/images/icons/chip.svg",
      title: "Data Security and Compliance",
      description:
        "We prioritize security and adhere to compliance standards, ensuring your data remains confidential and ethically sourced.",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/24-hours.svg",
      title: "Scalable and Cost-Effective Services",
      description:
        "From startups to enterprises, our flexible solutions adapt to varying data needs, offering value-driven services for all business sizes.",
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
            "Extract data from diverse and reliable online sources.",
            "Tailor data scraping processes to meet unique business needs.",
            "Deliver accurate, structured, and ready-to-use data.",
          ],
        },
        {
          heading: "2. Advanced Technology and Expertise",
          details: [
            "Utilize cutting-edge web scraping tools for precision.",
            "Leverage expertise across industries for targeted data extraction.",
            "Ensure efficient and timely project completion with minimal errors.",
          ],
        },
        {
          heading: "3. Secure and Scalable Services",
          details: [
            "Implement robust security measures to protect data integrity.",
            "Offer scalable solutions to handle varying project sizes and complexities.",
            "Ensure compliance with legal standards for ethical data practices.",
          ],
        },
       
      ],
    },
    {
      title: "FAQs",
      content: Array.from({ length: 4 }).map((_, index) => {
        const questions = [
          {
            question: "What is web scraping?",
            answer:
              "Web scraping is the process of extracting structured data from websites. It allows businesses to collect valuable information such as product listings, reviews, and competitor data for analysis and decision-making.",
          },
          {
            question: "How secure is web scraping?",
            answer:
              "We prioritize data security and implement strict measures to ensure your data is protected. We comply with industry regulations and ethical guidelines, ensuring secure and confidential data handling throughout the process.",
          },
          {
            question: "What industries benefit from web scraping?",
            answer:
              "Industries such as e-commerce, finance, market research, and real estate benefit from web scraping services. We tailor solutions to meet the specific data needs of each sector, providing valuable insights.",
          },
          {
            question: "How does web scraping help my business?",
            answer:
              "Web scraping enables your business to gather real-time data, stay updated on market trends, and gain a competitive edge by providing actionable insights that support strategic decision-making.",
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
    {title:"Catalog Management", link:"/outsource-catalog-management"},
    {title:"Data Collection", link:"/data-collection-services"},
    {title:"Web Research", link:"/web-research-services"},
    {title:"Web Scraping", link:"/web-scraping-services"},
    {title:"Virtual Assistants", link:"/virtual-assistant-services"},
  ];

  return (
    <>
        <PageHead PageMeta={PageMeta} />
        <Layout>
            <BannerSection
                pagetitle="Web Scraping"
                title="Streamlining Your Business Processes"
                subtitle="Online Check Processing for Payment Processing Company"
                description="Computyne setting up a process of transferring data from all checks to a software"
                bgimage="/images/innerbanner/baner-8.webp"
                cardimg="/images/case-study/9.jpg"
                caseLink="/case-studies/check-processing-for-payment-processing-company"
                linkText="Succes Stories"
                breadcrumbtitle2="Data Management"
                breadcrumbtitle3="Web Scraping"
                breadcrumb1="/"
                breadcrumb2="/data-management-services"
                breadcrumb3="/web-scraping-services"
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
                                            <InnerService title="We Take Care of All Your Web Scraping Services Needs" solutions={solutionsData} />
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
                                            <Timeline title="Web Scraping Services Workflow" content={timeLineContent} />
                                        </div>
                                    </div>    
                                </Container>
                            </div>
                            
                            <div className="stretch-container">
                                <Container>
                                    <div className="grid grid-cols-12">
                                        <div className="lg:col-span-9 md:col-span-12 col-span-12">
                                            <TabSection title="Your Reliable Partner for Web Scraping Services" tabData={tab} />
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
