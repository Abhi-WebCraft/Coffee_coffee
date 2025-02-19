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
      title: "Data Collection Services",
      paragraphs: [
        "It is essential for organizations to grow with the latest industrial demands constantly. This is highly beneficial to help them serve their clientele with high-quality results. Computyne is a trusted data collection outsourcing company that can help your business attain unimaginable heights. We let you dive into the unexplored world of crucial data, which is essential for maintaining a clean database by getting rid of outdated information. This is a sure way to facilitate the decision making of your business and improve the quality of your services.",
        "We empower businesses with a robust and dependable depository of data collection services. This allows us to scrape volumes of niche-based data in a short time period. It allows you to enjoy access to real-time usable data and let you modify your business results for better results.",
        "One of the primary reasons to outsource data collection services to Computyne is that we perform web scraping operations, enabling us to collect all the necessary data relevant for your business. We are equipped with AI, which helps us seamlessly deliver error-free data. This is a sure-shot way to fortify your professional decision-making process."
      ],
    },
  ];

  const solutionsData = [
    {
      image: "/images/icons/budget-1.svg",
      title: "Comprehensive Data Gathering",
      description:
        "We collect data from various reliable sources, ensuring accuracy and relevance for informed business decision-making. ",
      link: "#",
      time: "600",
      bg: "white",
    },
    {
      image: "/images/icons/pdf-1.svg",
      title: "Customized Solutions",
      description:
        "Tailored data collection processes to meet the unique needs of different industries and businesses.",
      link: "#",
      time: "1200",
    },
    {
      image: "/images/icons/property.svg",
      title: "Real-Time Data Updates",
      description:
        "Ensure timely updates with real-time data collection, helping you stay ahead in a dynamic market.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/checklist-3.svg",
      title: "Advanced Tools and Techniques",
      description:
        "Utilize the latest technologies and tools to streamline the data collection process and maximize efficiency.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
    {
      image: "/images/icons/budget-1.svg",
      title: "Data Accuracy and Quality Assurance",
      description:
        "Maintain the highest standards of accuracy through thorough validation and error-checking processes. ",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/property.svg",
      title: "Scalable Services",
      description:
        "Flexible and scalable solutions to accommodate businesses of all sizes, from startups to large enterprises.",
      link: "#",
      time: "1800",
    },
  ];
  const timeLineContent = [
    {
      heading: "Identify Requirements",
      details: "Define objectives and sources for data collection.",
    },
    {
      heading: "Data Sourcing",
      details: "Gather information from reliable and verified sources.",
    },
    {
      heading: "Data Validation ",
      details:
        "Ensure data accuracy through rigorous quality checks.",
    },
    {
      heading: "Data Organization",
      details: "Structure and format data for easy accessibility.",
    },
    {
      heading: "Final Delivery",
      details: "Provide processed data in the required format.",
    },
  ];
  const whyusData = [
    {
      image: "/images/icons/data-analytics.svg",
      title: "Comprehensive Data Solutions",
      description:
        "We specialize in collecting accurate, relevant, and actionable data tailored to your business needs. ",
      link: "#",
      time: "600",
      bg: "white",
    },
    {
      image: "/images/icons/team.svg",
      title: "Advanced Technology",
      description:
        "Our use of cutting-edge tools ensures efficient and precise data collection processes.",
      link: "#",
      time: "1200",
    },
    {
      image: "/images/icons/interest-rate.svg",
      title: "Expert Team",
      description:
        "A team of skilled professionals ensures high-quality and error-free data collection.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/magnifying.svg",
      title: "Customized Approaches",
      description:
        "We adapt our strategies to match the unique requirements of your industry and projects.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
    {
      image: "/images/icons/chip.svg",
      title: "Scalability and Flexibility",
      description:
        "Our services can scale with your growing business, offering flexible solutions for varying needs. ",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/24-hours.svg",
      title: "Data Security and Confidentiality",
      description:
        "Robust measures are in place to protect your sensitive information and maintain confidentiality.",
      link: "#",
      time: "1800",
    },
  ];
  const tab = [
    {
      title: "Why Choose Us?",
      content: [
        {
          heading: "1. Comprehensive and Accurate Data Solutions",
          details: [
            "Collect data from diverse and reliable sources.",
            "Ensure data accuracy through thorough validation checks.",
            "Provide tailored data collection strategies for specific business needs.",
          ],
        },
        {
          heading: "2.Advanced Tools and Expertise",
          details: [
            "Utilize cutting-edge tools for efficient data gathering.",
            "Leverage expertise in various industries for targeted data solutions.",
            "Ensure quick turnaround times without compromising quality.",
          ],
        },
        {
          heading: "3. Secure and Scalable Services",
          details: [
            "Implement robust data security measures to protect sensitive information.",
            "Offer scalable solutions to accommodate businesses of all sizes.",
            "Maintain confidentiality through strict access controls and compliance standards.",
          ],
        },
       
      ],
    },
    {
      title: "FAQs",
      content: Array.from({ length: 4 }).map((_, index) => {
        const questions = [
          {
            question: "Comprehensive Data Collection",
            answer:
              "We gather data from reliable and diverse sources, ensuring accuracy and relevance for your business needs. Our customized strategies align with your objectives for precise outcomes.",
          },
          {
            question: "Advanced Tools and Techniques",
            answer:
              "Utilizing the latest technologies and tools, we streamline the data collection process to save time and enhance accuracy, giving you a competitive edge in the market.",
          },
          {
            question: "Scalable and Flexible Solutions",
            answer:
              "Our services cater to businesses of all sizes, from startups to enterprises. We adapt to your evolving requirements, offering scalable and flexible solutions to support growth.",
          },
          {
            question: "Secure and Confidential Services",
            answer:
              "With robust data security protocols and compliance standards, we ensure the protection and confidentiality of your sensitive information, giving you peace of mind throughout the process.",
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
                pagetitle="Data Collection"
                title="Streamlining Your Business Processes"
                subtitle="Web Research of Educational"
                description="Computyne help research online programs from different"
                bgimage="/images/innerbanner/baner-7.webp"
                cardimg="/images/case-study/8.jpg"
                caseLink="/case-studies/web-research-of-online-education-courses"
                linkText="Succes Stories"
                breadcrumbtitle2="Data Management"
                breadcrumbtitle3="Data Collection"
                breadcrumb1="/"
                breadcrumb2="/data-management-services"
                breadcrumb3="/data-collection-services"
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
                                            <InnerService title="We Take Care of All Your Data Collection Services Needs" solutions={solutionsData} />
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
                                            <Timeline title="Data Collection Services  Workflow" content={timeLineContent} />
                                        </div>
                                    </div>    
                                </Container>
                            </div>
                            
                            <div className="stretch-container">
                                <Container>
                                    <div className="grid grid-cols-12">
                                        <div className="lg:col-span-9 md:col-span-12 col-span-12">
                                            <TabSection title="Your Reliable Partner for Data Collection Services" tabData={tab} />
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
