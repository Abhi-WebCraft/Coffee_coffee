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
      title: "Accounting & Finance Back-Office Solutions",
      paragraphs: [
        "In today’s extremely competitive business condition, the financial and accounting services industry search for extraordinary and low-risk financial services. Financial establishments like accounting and other financial institutions wish to lessen operational expenses so they can concentrate on development and other core purposeful activities. They search for a renowned outsourcing accomplice to outsource their document workflow management, and to facilitate them to hold client loyalty.",
        "This is where Computyne steps in. Computyne enables companies to pick up profitability with tailor-made and digitized 24×7 client service. Computyne helps leading Finance and Accounting companies to extend their domain by providing innovation enabled outsourcing solutions. Finance and Accounting Outsourcing services industry has reformed extremely and to deal with the needs associated with this business, and one must be versatile in the market approach.",
      ],
    },
  ];

  const solutionsData = [
    {
      image: "/images/icons/budget-1.svg",
      title: "Comprehensive Accounting Solutions",
      description:
        "We offer end-to-end accounting services, including bookkeeping, financial statement preparation, and account reconciliation, ensuring accurate and timely financial reporting. ",
      link: "#",
      time: "600",
      bg: "white",
    },
    {
      image: "/images/icons/pdf-1.svg",
      title: "Tax Preparation and Filing",
      description:
        "Our experts handle tax preparation and filing, ensuring compliance with local and international tax laws, minimizing risks and maximizing savings.",
      link: "#",
      time: "1200",
    },
    {
      image: "/images/icons/property.svg",
      title: "Accounts Payable and Receivable Management",
      description:
        "We efficiently manage accounts payable and receivable, ensuring smooth cash flow, timely payments, and proper invoicing for optimal financial management.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/checklist-3.svg",
      title: "Payroll Processing",
      description:
        "Our payroll services ensure timely, accurate salary distribution, tax calculations, and compliance with labor laws, reducing administrative burdens.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
    {
      image: "/images/icons/budget-1.svg",
      title: "Financial Analysis and Reporting",
      description:
        "We provide in-depth financial analysis and reports, offering valuable insights to guide decision-making, budgeting, and forecasting.",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/property.svg",
      title: "Cost Reduction and Efficiency",
      description:
        "By outsourcing your accounting and finance functions, you reduce overhead costs and improve operational efficiency, focusing resources on core business growth.",
      link: "#",
      time: "1800",
    },
  ];
  const timeLineContent = [
    {
      heading: "Data Collection",
      details: "Gather financial data from multiple sources for accuracy.",
    },
    {
      heading: "Transaction Entry",
      details: "Record financial transactions in the accounting system.",
    },
    {
      heading: "Reconciliation",
      details:
        "Match accounts, bank statements, and other financial records.",
    },
    {
      heading: "Tax Preparation",
      details: "Prepare tax documents and ensure legal compliance.",
    },
    {
      heading: "Reporting & Analysis",
      details: "Generate financial reports to support decision-making.",
    },
  ];
  const whyusData = [
    {
      image: "/images/icons/data-analytics.svg",
      title: "Comprehensive Expertise",
      description:
        "Our team has in-depth knowledge of accounting and finance practices, providing expert solutions tailored to your business needs, ensuring accuracy and compliance.",
      link: "#",
      time: "600",
      bg: "white",
    },
    {
      image: "/images/icons/team.svg",
      title: "Cost Efficiency",
      description:
        "By outsourcing your accounting back-office tasks to us, you significantly reduce overhead costs while accessing top-tier financial expertise, optimizing your budget allocation.",
      link: "#",
      time: "1200",
    },
    {
      image: "/images/icons/interest-rate.svg",
      title: "Timely Financial Reporting",
      description:
        "We ensure that all your financial reports are delivered on time, empowering you with the data needed to make informed business decisions and maintain financial health.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/magnifying.svg",
      title: "Scalability",
      description:
        "Whether you're a small business or a large corporation, our flexible solutions scale according to your business needs, adapting to changes in your operations and growth.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
    {
      image: "/images/icons/chip.svg",
      title: "Data Security and Compliance",
      description:
        "We adhere to the highest security protocols and industry standards, ensuring your financial data remains secure and compliant with legal and regulatory requirements.",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/24-hours.svg",
      title: "Streamlined Operations",
      description:
        "By outsourcing, you eliminate the complexities of managing finance and accounting internally, allowing you to focus on core business operations and driving growth.",
      link: "#",
      time: "1800",
    },
  ];
  const tab = [
    {
      title: "Why Choose Us?",
      content: [
        {
          heading: "1. Expert Financial Management",
          details: [
            "Accurate bookkeeping and financial reporting.",
            "Skilled team providing tailored financial solutions.",
            "In-depth industry knowledge for optimal financial management.",
          ],
        },
        {
          heading: "2. Cost-Effective Solutions",
          details: [
            "Minimize overhead costs by outsourcing finance tasks.",
            "Scalable services to match business size and growth.",
            "Reduce administrative burdens and streamline processes.",
          ],
        },
        {
          heading: "3. Timely and Compliant Services",
          details: [
            "On-time tax filings and financial reporting.",
            "Ensure full compliance with local and international regulations.",
            "Focus on strategic decision-making with timely insights.",
          ],
        },
       
      ],
    },
    {
      title: "FAQs",
      content: Array.from({ length: 4 }).map((_, index) => {
        const questions = [
          {
            question: "What services do you offer for accounting and finance?",
            answer:
              "We offer a wide range of accounting and finance back-office services, including bookkeeping, tax preparation, financial reporting, payroll processing, and accounts management, tailored to meet your specific business needs.",
          },
          {
            question: "How do you ensure data security and compliance?",
            answer:
              "We implement robust security protocols to protect your sensitive financial data. Our services comply with industry regulations and legal standards, ensuring your financial information remains secure and up to date.",
          },
          {
            question: "Can you customize solutions based on our business size?",
            answer:
              "Yes, our solutions are scalable and customizable to suit businesses of all sizes. Whether you’re a small startup or a large enterprise, we can adapt our services to match your unique requirements.",
          },
          {
            question: "How can outsourcing accounting and finance services benefit my business?",
            answer:
              "Outsourcing your accounting functions reduces overhead costs, improves efficiency, ensures compliance, and provides access to expert financial management, allowing you to focus on growing your core business.",
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
                pagetitle="Finance and Accounting"
                title="Streamlining Your Business Processes"
                subtitle="Data Entry from PDF Records to Update Database"
                description="How a US based real estate company got accurate deed entry"
                bgimage="/images/innerbanner/baner-3.webp"
                cardimg="/images/case-study/01.jpg"
                caseLink="/case-studies/real-estate-data-entry-from-pdf-records-to-update-database"
                linkText="Succes Stories"
                breadcrumbtitle2="Finance and Accounting"
                breadcrumb1="/"
                breadcrumb2="/accounting-and-finance-back-office-solutions"
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
                                            <InnerService title="We Take Care of All Your Accounting & Finance Back-Office Solutions Needs" solutions={solutionsData} />
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
                                            <Timeline title="Accounting & Finance Back-Office Solutions Workflow" content={timeLineContent} />
                                        </div>
                                    </div>    
                                </Container>
                            </div>
                            
                            <div className="stretch-container">
                                <Container>
                                    <div className="grid grid-cols-12">
                                        <div className="lg:col-span-9 md:col-span-12 col-span-12">
                                            <TabSection title="Your Reliable Partner for Accounting & Finance Back-Office Solutions" tabData={tab} />
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
