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
      title: "Web Research Services",
      paragraphs: [
        "We are your reliable source of data collection from the web. You can hire professionals from Computyne to outsource web research tasks for your business which can help you by providing an insight into the market. This enables you to find new opportunities by helping you generate custom-made data from the web. It is an excellent way to reach potential leads and grow your business.",
        "The professionals from our team effectively extract data from various sources and store them in structured and unstructured formats, which can further be analyzed to determine consumer requirements. We are your reliable web research outsourcing partner, providing data for various industries, including marketing and finance, sales, procurement, consulting, etc. Web research plays a crucial role in facilitating the overall performance rate of a business model positively.",
        "Computyne is a troop of certified specialists who are proficient in the best of techniques for delivering precise web research results with valuable data, making us the best outsourcing company. Hand over your web research products to Computyne and reduce your in-house operational costs. We ensure high precision in all your projects, with speedy deliveries. We have a decade long industry experience and research specialists with wide domain knowledge with finesse in well-conducted research."
      ],
    },
  ];

  const solutionsData = [
    {
      image: "/images/icons/budget-1.svg",
      title: "What Are Web Research Services?",
      description:
        "Web research services involve gathering, analyzing, and organizing online data to support business decisions. From competitor analysis to market trends, these services provide actionable insights. ",
      link: "#",
      time: "600",
      bg: "white",
    },
    {
      image: "/images/icons/pdf-1.svg",
      title: "Why Are Web Research Services Important?",
      description:
        "Accurate and up-to-date information is crucial for making informed decisions. Professional web research saves time and ensures reliability, giving you a competitive edge.",
      link: "#",
      time: "1200",
    },
    {
      image: "/images/icons/property.svg",
      title: "Who Benefits from Web Research Services?",
      description:
        "Businesses across industries, from startups to enterprises, rely on web research to understand customer behavior, market opportunities, and emerging trends.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/checklist-3.svg",
      title: "What Services Do We Offer?",
      description:
        "Our offerings include market research, competitor analysis, lead generation, data extraction, and more, tailored to your specific needs.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
    {
      image: "/images/icons/budget-1.svg",
      title: "Why Choose Us?",
      description:
        "We deliver accurate, timely, and cost-effective research solutions using advanced tools and methodologies.",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/property.svg",
      title: "How Can You Get Started?",
      description:
        "Reach out to us, share your requirements, and let us handle your research needs efficiently and professionally.",
      link: "#",
      time: "1800",
    },
  ];
  const timeLineContent = [
    {
      heading: "Requirement Gathering",
      details: "Understand client needs and project objectives.",
    },
    {
      heading: "Data Collection",
      details: "Extract relevant information from trusted sources.",
    },
    {
      heading: "Data Verification ",
      details:
        "Ensure accuracy through validation and cross-checking.",
    },
    {
      heading: "Data Organization",
      details: "Structure findings for easy analysis and use.",
    },
    {
      heading: "Delivery",
      details: "Present insights in a clear, actionable format.",
    },
  ];
  const whyusData = [
    {
      image: "/images/icons/data-analytics.svg",
      title: "Expertise in Diverse Domains",
      description:
        "Our team is skilled in conducting in-depth research across industries, ensuring reliable and relevant insights     tailored to your business needs.",
      link: "#",
      time: "600",
      bg: "white",
    },
    {
      image: "/images/icons/team.svg",
      title: "Accuracy and Precision",
      description:
        "We prioritize data accuracy by using advanced tools and verification methods, delivering information you can trust.",
      link: "#",
      time: "1200",
    },
    {
      image: "/images/icons/interest-rate.svg",
      title: "Customized Solutions",
      description:
        "Every project is unique. We offer tailored research strategies to meet your specific goals and requirements.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/magnifying.svg",
      title: "Quick Turnaround Time",
      description:
        "With a streamlined process and efficient team, we ensure timely delivery of your research reports without compromising quality.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
    {
      image: "/images/icons/chip.svg",
      title: "Cost-Effective Services",
      description:
        "Our solutions provide excellent value, offering premium services at competitive rates.",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/24-hours.svg",
      title: "Dedicated Support",
      description:
        "Our team provides consistent communication and support, ensuring your satisfaction at every stage of the project.",
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
            "Gather precise data from reliable sources.",
            "Analyze information to extract meaningful insights.",
            "Validate data for accuracy and consistency.",
          ],
        },
        {
          heading: "2.Customized Research Approach",
          details: [
            "Tailor strategies to fit specific business goals.",
            "Focus on industry-relevant and actionable findings.",
            "Adapt services to changing requirements seamlessly.",
          ],
        },
        {
          heading: "3. Timely and Reliable Delivery",
          details: [
            "Ensure quick turnaround without compromising quality.",
            "Maintain clear communication throughout the project.",
            "Deliver well-organized and easy-to-use reports.",
          ],
        },
       
      ],
    },
    {
      title: "FAQs",
      content: Array.from({ length: 4 }).map((_, index) => {
        const questions = [
          {
            question: "What Do We Offer in Our Reports?",
            answer:
              "Our reports include concise, accurate, and actionable insights tailored to your requirements. We structure the data for easy interpretation and practical application.",
          },
          {
            question: "How Are Our Reports Structured?",
            answer:
              "Each report is carefully organized, featuring clear headings, charts, and visual aids to enhance understanding. We ensure data is categorized logically for seamless navigation.",
          },
          {
            question: "Why Are Our Reports Easy to Use?",
            answer:
              "Our user-friendly formats allow quick access to critical information. Whether you need summaries or detailed analysis, our reports are designed to save time and support decision-making.",
          },
          {
            question: "How Do We Ensure Report Quality?",
            answer:
              "We use advanced tools, rigorous validation, and a meticulous review process to deliver error-free, high-quality reports aligned with your expectations.",
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
                pagetitle="Web Research "
                title="Streamlining Your Business Processes"
                subtitle="Data Entry (PDF to Excel) and Web Research Support"
                description="Here the client is a Logistics Company which needed assistance "
                bgimage="/images/innerbanner/baner-9.webp"
                cardimg="/images/case-study/6.jpg"
                caseLink="/case-studies/excel-data-entry-and-web-research-support-to-logistic-company"
                linkText="Succes Stories"
                breadcrumbtitle2="Data Management"
                breadcrumbtitle3="Web Research"
                breadcrumb1="/"
                breadcrumb2="/data-management-services"
                breadcrumb3="/web-research-services"
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
                                            <InnerService title="We Take Care of All Your Web Research Services Needs" solutions={solutionsData} />
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
                                            <Timeline title="Web Research Services Workflow" content={timeLineContent} />
                                        </div>
                                    </div>    
                                </Container>
                            </div>
                            
                            <div className="stretch-container">
                                <Container>
                                    <div className="grid grid-cols-12">
                                        <div className="lg:col-span-9 md:col-span-12 col-span-12">
                                            <TabSection title="Your Reliable Partner for Web Research Services"      tabData={tab} />
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
