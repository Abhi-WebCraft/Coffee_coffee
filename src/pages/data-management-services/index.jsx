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
      title: "Empowering Your Business with Accurate & Actionable Data!",
      paragraphs: [
        "In today's fast-paced businxess environment, accurate and up-to-date data is essential for making informed decisions and driving success. Without proper data management, organizations risk inefficiencies, inaccurate insights, and missed opportunities. Computyne provides reliable data management outsourcing solutions that streamline your operations, ensuring well-organized, high-quality data that enhances business performance. By outsourcing data management tasks to Computyne, businesses can focus on their core objectives while we handle data collection, organization, and analysis.",
        "Well-managed data strengthens a company’s foundation, enabling improved customer insights, enhanced decision-making, and operational efficiency. Our expert team ensures that your data is structured, validated, and enriched, allowing you to make better business decisions while optimizing time and resources. Computyne offers comprehensive solutions, including custom email list management, data cleansing, data enrichment, web scraping, and web research, helping businesses gain valuable market insights and cater to customer needs effectively."
      ],
    },
  ];

  const solutionsData = [
    {
      image: "/images/icons/budget-1.svg",
      title: "Data Cleansing Services ",
      description:
        "Ensure accuracy by eliminating duplicate, outdated, and incorrect data, improving efficiency and decision-making.",
      link: "#",
      time: "600",
      bg: "white",
    },
    {
      image: "/images/icons/pdf-1.svg",
      title: "Web Scraping Services",
      description:
        "Extract valuable data from websites to gain insights into market trends, competition, and customer behavior.",
      link: "#",
      time: "1200",
    },
    {
      image: "/images/icons/property.svg",
      title: "Web Research Services",
      description:
        "Gather reliable online information to support data-driven strategies for business growth and development.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/checklist-3.svg",
      title: "Data Analytics Services",
      description:
        "Analyze and interpret complex data to uncover meaningful trends and actionable insights for better decision-making.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
    {
      image: "/images/icons/budget-1.svg",
      title: "Data Collection Services ",
      description:
        "Accurately compile data from multiple sources to enhance business intelligence and operational efficiency.",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/property.svg",
      title: "B2B and Custom Email Listing ",
      description:
        "Build targeted email lists to improve marketing outreach and maximize customer engagement.",
      link: "#",
      time: "1800",
    },

    {
      image: "/images/icons/checklist-3.svg",
      title: "Data Extraction Services ",
      description:
        "Retrieve essential data from various sources, ensuring structured and organized information for business use.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
    {
      image: "/images/icons/budget-1.svg",
      title: "Data Abstraction Services  ",
      description:
        "Simplify and summarize complex data, making it more accessible and easier to analyze.",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/property.svg",
      title: "Market Research Services",
      description:
        "Conduct in-depth research to understand industry trends, customer preferences, and competitive landscapes for business growth.",
      link: "#",
      time: "1800",
    },
  ];
  
  const timeLineContent = [
    {
      heading: "Data Collection",
      details: "Gathering data from multiple sources, including databases, websites, and customer interactions, ensuring completeness and reliability.",
    },
    {
      heading: "Data Cleansing & Validation",
      details: "Removing duplicates, correcting errors, and validating information to enhance accuracy and consistency.",
    },
    {
      heading: "Data Analysis & Processing",
      details: "Applying advanced tools and techniques to analyze trends, patterns, and performance indicators.",
    },
    {
      heading: "Reporting & Client Review",
      details: "Providing structured reports, dashboards, and real-time updates for informed decision-making.",
    },
    {
      heading: "Final Data Delivery",
      details: "Delivering processed, ready-to-use data in the required format, ensuring seamless integration into client systems.",
    },
    {
      heading: "Ongoing Support & Maintenance",
      details: "Offering continuous monitoring, updates, and support to keep data accurate and up to date.",
    },
  ];
  const whyusData = [
    {
      image: "/images/icons/data-analytics.svg",
      title: "Expertise in Data Management",
      description:
        "We bring years of experience in managing and processing data, ensuring efficient solutions tailored to your business needs.",
      link: "#",
      time: "600",
      bg: "white",
    },
    {
      image: "/images/icons/team.svg",
      title: "Customized Solutions",
      description:
        "Our services are fully customizable, allowing us to meet your unique data management requirements, regardless of industry or size.",
      link: "#",
      time: "1200",
    },
    {
      image: "/images/icons/interest-rate.svg",
      title: "Advanced Technology",
      description:
        "We leverage cutting-edge technology, including AI-driven tools and automation, to streamline data management and enhance precision.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/magnifying.svg",
      title: "High Data Security",
      description:
        "Your data’s security is our top priority. We use advanced encryption techniques and follow strict compliance protocols to protect your information.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
    {
      image: "/images/icons/chip.svg",
      title: "Scalability",
      description:
        "Our solutions are scalable, ensuring that as your business grows, your data management processes can easily scale with it.",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/24-hours.svg",
      title: "Timely and Accurate Results",
      description:
        "We ensure fast turnaround times while maintaining high-quality data accuracy, enabling your business to make informed decisions without delays.",
      link: "#",
      time: "1800",
    },
  ];
  
  const tab = [
    {
      title: "Why Choose Us?",
      content: [
        {
          heading: "1. High-Quality Data Management",
          details: [
            "Our experts handle complex data with 99% accuracy, eliminating errors and enhancing business performance for increased sales.",
          ],
        },
        {
          heading: "2. Cost-Effective Solutions",
          details: [
            "Reduce infrastructure and operational costs with our affordable outsourcing services, ensuring maximum efficiency at minimal expenses.",
          ],
        },
        {
          heading: "3. Client Empowerment",
          details: [
            "We provide regular reports and professional assistance, keeping you in full control of your data management projects",
          ],
        },
        {
          heading: "4. Quick & Seamless Integration",
          details: [
            "We transform raw data into useful, structured information, allowing you to focus on business operations without delays.",
          ],
        },
        {
          heading: "5. Cutting-Edge Technology",
          details: [
            "Equipped with the latest tools and infrastructure, we ensure rapid turnaround times and precise data delivery.",
          ],
        },
        {
          heading: "6.Ready-for-Use Data",
          details: [
            "Our data is delivered in well-structured, accessible formats tailored to your requirements, enabling instant database updates.",
          ],
        },
      ],
    },
    {
      title: "FAQs",
      content: Array.from({ length: 4 }).map((_, index) => {
        const questions = [
          {
            question: "What services do you offer in data management?",
            answer:
              "We provide comprehensive data management services, including data entry, processing, storage, and analysis to streamline your operations effectively.",
          },
          {
            question: "How secure is my data with your services?",
            answer:
              "We prioritize data security, using encryption, access control, and compliance with industry standards to ensure the confidentiality of your data.",
          },
          {
            question: "Can you handle large volumes of data?",
            answer:
              "Yes, our scalable solutions allow us to handle both small and large data volumes efficiently, ensuring timely processing and management.",
          },
          {
            question: "How quickly can I expect results?",
            answer:
              "We deliver accurate data management solutions within agreed timelines, ensuring high-quality output while adhering to deadlines.",
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
                pagetitle="Data Management"
                title="Streamlining Your Business Processes"
                subtitle="Data Support & Property Matching"
                description="Streamline your operations with our expert data entry and management services!"
                bgimage="/images/innerbanner/baner-8.webp"
                cardimg="/images/innerbanner/baner-5.webp"
                caseLink="#"
                linkText="Succes Stories"
                breadcrumbtitle2="Data Management"
                breadcrumb1="/"
                breadcrumb2="/data-management-services"
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
                                            <InnerService subtitle="Our Data Management Services" title="Transforming Raw Data into Business Intelligence!" description="" solutions={solutionsData} />
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
                                            <Timeline title="Data Management Services Workflow " content={timeLineContent} />
                                        </div>
                                    </div>    
                                </Container>
                            </div>
                            
                            <div className="stretch-container">
                                <Container>
                                    <div className="grid grid-cols-12">
                                        <div className="lg:col-span-9 md:col-span-12 col-span-12">
                                            <TabSection title="Precision, Efficiency, and Growth – All in One Place!" tabData={tab} />
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
