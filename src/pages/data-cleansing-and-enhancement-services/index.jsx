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
      title: "Clean Data, Clear Decisions, Greater Success!",
      paragraphs: [
        "In today’s data-driven world, maintaining clean, accurate, and updated information is essential for business success. Poor-quality data can hinder business performance, leading to ineffective marketing campaigns and reduced ROI. Outsourcing data cleansing to Computyne ensures that your database is free from inaccuracies, duplicates, and incomplete information, allowing for better decision-making and optimized business operations.",
        "Our team of experts, backed by cutting-edge technology and a robust data management infrastructure, ensures high accuracy, quick turnaround times, and seamless integration into your business processes. Whether you need data validation, deduplication, formatting, or enrichment, Computyne provides tailor-made solutions to meet your specific business needs.",
      ],
    },
  ];

  const solutionsData = [
    {
      image: "/images/icons/budget-1.svg",
      title: "De-Duplication",
      description:
        "Removes redundant entries, ensuring a cleaner and more efficient database for accurate reporting and decision-making.",
      link: "#",
      time: "600",
      bg: "white",
    },
    {
      image: "/images/icons/pdf-1.svg",
      title: "Data Appending & Aggregation",
      description:
        "Enhances existing data by filling in missing information and compiling multiple data sources into a unified database.",
      link: "#",
      time: "1200",
    },
    {
      image: "/images/icons/property.svg",
      title: "Data Collection, Organization, and Scrubbing",
      description:
        "Gathers raw data, organizes it systematically, and removes inconsistencies for a structured and error-free database.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/checklist-3.svg",
      title: "CRM Data Cleaning & Scrubbing",
      description:
        "Ensures CRM records are up-to-date, accurate, and free from irrelevant or outdated data for better customer engagement.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
    {
      image: "/images/icons/budget-1.svg",
      title: "Contact Database Cleansing",
      description:
        "Verifies and updates customer contact details to maintain an error-free and functional contact database.",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/property.svg",
      title: "Data Validation and Enhancement",
      description:
        "Cross-checks data against reliable sources to correct inaccuracies and enrich it with relevant updates.",
      link: "#",
      time: "1800",
    },

    {
      image: "/images/icons/checklist-3.svg",
      title: "Data Cleansing of Product Data",
      description:
        "Organizes and refines product-related information to improve accuracy in e-commerce and inventory management systems.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
    {
      image: "/images/icons/budget-1.svg",
      title: "Updating of Emails, Addresses, and Phone Numbers",
      description:
        "Ensures all communication details are current and correct for seamless customer interactions and outreach.",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/property.svg",
      title: "Data Classification",
      description:
        "Sorts and labels data into the correct categories, improving accessibility and usability across business processes.",
      link: "#",
      time: "1800",
    },
  ];
  const timeLineContent = [
    {
      heading: "Data Collection",
      details: "Gather data from various sources for processing.",
    },
    {
      heading: "Data Validation",
      details: "Identify and correct inaccuracies or inconsistencies.",
    },
    {
      heading: "Data Standardization ",
      details:
        "Format and standardize data for consistency.",
    },
    {
      heading: "Data Enrichment",
      details: "Enhance data by adding relevant external information.",
    },
    {
      heading: "Data Integration and Maintenance",
      details: "Consolidate, update, and maintain the clean data.",
    },
  ];
  const whyusData = [
    {
      image: "/images/icons/data-analytics.svg",
      title: "Expert Data Validation and Correction",
      description:
        "Our team specializes in identifying and correcting errors, inconsistencies, and duplicates in your data, ensuring that your records are accurate and reliable for decision-making.",
      link: "#",
      time: "600",
      bg: "white",
    },
    {
      image: "/images/icons/team.svg",
      title: "Standardized Data Across Platforms",
      description:
        "We provide data standardization across all your platforms, ensuring that your records maintain consistency, regardless of the source, enabling smooth integration and reporting.",
      link: "#",
      time: "1200",
    },
    {
      image: "/images/icons/interest-rate.svg",
      title: "Data Enrichment for Valuable Insights",
      description:
        "We enhance your data by adding external information, such as demographic, geographic, or industry-specific details, providing a deeper understanding for better business decisions.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/magnifying.svg",
      title: "Duplicate Removal and Streamlining",
      description:
        "Our services remove duplicate records, streamlining your data, and improving its quality, making it more efficient for analysis and reporting.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
    {
      image: "/images/icons/chip.svg",
      title: "Seamless Data Integration",
      description:
        "We integrate data from multiple sources, consolidating it into a clean, accessible database, ensuring all information is in one place for efficient use.",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/24-hours.svg",
      title: "Ongoing Data Maintenance",
      description:
        "We offer ongoing maintenance, regularly updating your data to keep it fresh, accurate, and relevant, ensuring its continued effectiveness in your business operations.",
      link: "#",
      time: "1800",
    },
  ];
  const tab = [
    {
      title: "Why Choose Us?",
      content: [
        {
          heading: "1.Better Outcomes",
          details: [
            "Our data cleansing services improve response rates, ensuring higher ROI and enhanced business performance.",
          ],
        },
        {
          heading: "2.24/7 Support",
          details: [
            "We offer round-the-clock support to guarantee uninterrupted services, making us a reliable outsourcing partner.",
          ],
        },
        {
          heading: "3. Maintained Accuracy",
          details: [
            "Computyne performs a comprehensive data quality audit, maintaining a 99% accuracy rate for precise business insights",
          ],
        },
        {
          heading: "4. Protected Brand Image",
          details: [
            "Eliminating duplicate records prevents customer confusion, safeguarding your brand’s reputation in the market.",
          ],
        },
        {
          heading: "5.Competitive Pricing",
          details: [
            "Our cost-effective pricing helps reduce operational expenses while ensuring premium data cleansing services.",
          ],
        },
        {
          heading: "6.Stay Updated",
          details: [
            "We provide daily or weekly progress reports, keeping you informed at every stage of the process.",
          ],
        },
      ],
    },
    {
      title: "FAQs",
      content: Array.from({ length: 4 }).map((_, index) => {
        const questions = [
          {
            question: "Accurate Data Validation and Error Correction",
            answer:
              "We meticulously validate and correct data to eliminate errors, inconsistencies, and duplicates, ensuring your records are reliable and ready for analysis.",
          },
          {
            question: "Standardization Across Multiple Platforms",
            answer:
              "Our team standardizes data formats across all platforms, providing consistency in your records regardless of source, and improving integration and reporting efficiency.",
          },
          {
            question: "Data Enrichment for Informed Decision-Making",
            answer:
              "We enhance your existing data by adding valuable external insights, such as demographic or geographic information, providing a richer data set that supports strategic business decisions.",
          },
          {
            question: "Ongoing Data Maintenance and Updates",
            answer:
              "We offer continuous data updates and regular maintenance, ensuring that your data remains fresh, accurate, and relevant, providing long-term value to your business.",
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
    {title:"Invoice Processing", link:"/invoice-processing-services"},
    {title:"Freight Audit", link:"/outsource-freight-audit-services"},
    {title:"Resume Processing", link:"/resume-formatting-and-processing-services"},
    {title:"Data Cleansing", link:"/data-cleansing-and-enhancement-services"},
    {title:"Survey Forms Processing", link:"/survey-and-forms-processing-services"},
  ];

  return (
    <>
        <PageHead PageMeta={PageMeta} />
        <Layout>
            <BannerSection
                pagetitle="Data Cleansing"
                title="Streamlining Your Business Processes"
                subtitle="Invoice and Receipts Data Entry into Web Based Application"
                description="Computyne invoice processing team support Europe based Expense Management Company..."
                bgimage="/images/innerbanner/baner-5.webp"
                cardimg="/images/case-study/5.jpg"
                caseLink="/case-studies/invoice-and-receipts-data-entry-using-web-based-application"
                linkText="Succes Stories"
                breadcrumbtitle2="Data Processing"
                breadcrumbtitle3="Data Cleansing"
                breadcrumb1="/"
                breadcrumb2="/data-processing-services"
                breadcrumb3="/data-cleansing-and-enhancement-services"
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
                                            <InnerService title="Precision-Driven Data Cleansing Services" solutions={solutionsData} />
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
                                            {/* <Timeline title="Data Cleansing and Enhancement Services Workflow" content={timeLineContent} /> */}
                                        </div>
                                    </div>    
                                </Container>
                            </div>
                            
                            <div className="stretch-container">
                                <Container>
                                    <div className="grid grid-cols-12">
                                        <div className="lg:col-span-9 md:col-span-12 col-span-12">
                                            <TabSection title="High-quality data cleansing outsourcing solutions" tabData={tab} />
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
