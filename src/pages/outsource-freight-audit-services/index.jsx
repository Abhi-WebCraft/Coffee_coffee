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
      title: "Ensure Accuracy and Smooth Logistics with Our Freight Audit Services",
      paragraphs: [
        "Managing freight invoices can be complex and time-consuming, especially for businesses handling large-scale shipments. Computyne offers comprehensive freight audit outsourcing services to ensure accurate invoice verification, cost savings, and seamless logistics management. By outsourcing freight audit tasks, businesses can eliminate overcharges, detect duplicate billing, and ensure accurate freight invoice processing. Our team meticulously reviews each invoice, verifying pricing structures, payment records, and potential discrepancies.",
        "With advanced digital processing techniques, we streamline logistics invoice management, reducing manual errors and improving operational efficiency. Computyne’s pre and post-audit solutions help businesses save money by identifying incorrect charges before payments are processed. By digitizing and organizing freight data, we ensure quick access to reports and future references. Whether you are a logistics firm or a third-party payment provider, Computyne is your trusted partner for accurate, efficient, and cost-effective freight auditing services."
      ],
    },
    {
      title: "Pre and post-audit solutions for tedious freight bill handling tasks",
      heading:"Freight Bill Pre Audit Services with Computyne",
      paragraphs: [
        "It is crucial to carefully audit all your freight bills prior to making all the payments. The experts in our team efficiently carry out the essential tasks and spot all the inaccurate data, such as errors in the rates applied and other major issues in your bills. By outsourcing freight bill auditing services to Computyne, you get to enjoy an accurate pre-audit of freight bills, which acts as an intelligent way to minimize the chances of disputes in your bills. It also saves you from the hassles of checking, claiming, and clarifying the payments.",
        
      ],
    },
    {
      title: "",
      heading:"Freight Bill Post Audit Services With Computyne",
      paragraphs: [
        "Hire specialists from Computyne to handle the complex task of freight bill post audits. This is another important aspect of a business process that helps you recover or adjust all the money that you might have lost due to overpayment. The post-audit is required to recover carrier overcharges, reviewing the negotiated prices and contracts, discounts, validation of bills to ensure accuracy, etc. Computyne is an outsourcing company highly entrusted by clients in India and overseas for cleansing of the duplicated bills and other documents from their database. Our freight audit outsourcing services are precise, and we make sure to prompt the audited bills in the client-specified destination. ",
        
      ],
    },
  ];

  const solutionsData = [
    {
      image: "/images/icons/budget-1.svg",
      title: "Audit Actual Paper Freight Bills",
      description:
        "We verify paper freight invoices for accuracy, ensuring no overcharges or billing discrepancies.",
      link: "#",
      time: "600",
      bg: "white",
    },
    {
      image: "/images/icons/pdf-1.svg",
      title: "Audit Historical Data Files",
      description:
        "Our team reviews past freight transactions to identify errors and optimize cost efficiency.",
      link: "#",
      time: "1200",
    },
    {
      image: "/images/icons/property.svg",
      title: "Invoice Receipt Processing",
      description:
        "We manage and digitize freight invoices, ensuring a seamless record-keeping process.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/checklist-3.svg",
      title: "Shipping Invoice Validation",
      description:
        "Each shipping invoice is thoroughly checked to confirm compliance with agreed-upon rates and terms.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
    {
      image: "/images/icons/budget-1.svg",
      title: "Document Data Capture",
      description:
        "We extract and organize key freight data from invoices, improving accuracy and accessibility.",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/property.svg",
      title: "Rate & Service Audit",
      description:
        "Our experts verify rates and services to ensure accurate billing and cost optimization.",
      link: "#",
      time: "1800",
    },

    {
      image: "/images/icons/checklist-3.svg",
      title: "Exception Management",
      description:
        "We detect and resolve freight billing errors, preventing financial discrepancies.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
    {
      image: "/images/icons/budget-1.svg",
      title: "Freight Bill Pre-Audit Processing",
      description:
        "We validate invoices before payment to eliminate overcharges and duplicate billing.",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/property.svg",
      title: "Freight Bill Post-Audit Processing",
      description:
        "We conduct in-depth audits after payment to recover potential overcharges and improve cost efficiency.",
      link: "#",
      time: "1800",
    },
  ];
  const timeLineContent = [
    {
      heading: "Invoice Collection & Data Entry",
      details: "Gather freight invoices from multiple carriers in paper or digital format.",
    },
    {
      heading: "Invoice Verification & Validation",
      details: "Cross-check invoices against contracts, tariffs, and rate agreements.",
    },
    {
      heading: "Freight Bill Pre-Audit ",
      details:
        "Validate freight bills before payment to prevent overcharges and discrepancies.",
    },
    {
      heading: "Rate & Service Audit",
      details: "Compare shipping rates, accessorial charges, and service levels against agreements.",
    },
    {
      heading: "Exception Management & Dispute Resolution",
      details: "Identify billing errors and communicate with carriers for dispute resolution.",
    },

    {
      heading: "Freight Bill Post-Audit ",
      details:
        "Conduct a final review of processed invoices after payment.",
    },
    {
      heading: "Reporting & Insights",
      details: "Generate detailed reports highlighting cost trends, audit findings and provide insights.",
    },
    {
      heading: "Data Integration & Digital Storage",
      details: "Store verified data in secure digital formats for easy access.",
    },
  ];
  const whyusData = [
    {
      image: "/images/icons/data-analytics.svg",
      title: "Accurate Invoice Auditing",
      description:
        "Our team meticulously audits freight invoices to ensure all charges are accurate, identifying discrepancies and overcharges to save you money.",
      link: "#",
      time: "600",
      bg: "white",
    },
    {
      image: "/images/icons/team.svg",
      title: "Cost Reduction Expertise",
      description:
        "We focus on uncovering cost-saving opportunities, helping you reduce unnecessary freight expenses and optimize your logistics spend.",
      link: "#",
      time: "1200",
    },
    {
      image: "/images/icons/interest-rate.svg",
      title: "Timely and Transparent Reporting",
      description:
        "You will receive comprehensive and clear reports that highlight audit findings, potential savings, and actionable insights to improve your freight management.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/magnifying.svg",
      title: "Discrepancy Resolution",
      description:
        "We work directly with your carriers to resolve any discrepancies or billing errors, ensuring you pay only for the services provided.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
    {
      image: "/images/icons/chip.svg",
      title: "Scalable Solutions",
      description:
        "Whether you manage a few shipments or thousands, our services are scalable to meet your unique needs, regardless of volume.",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/24-hours.svg",
      title: "Data Security and Confidentiality",
      description:
        "We prioritize the security of your data, following strict protocols to ensure the confidentiality of your freight and financial information.",
      link: "#",
      time: "1800",
    },
  ];
  const tab = [
    {
      title: "Why Choose Us?",
      content: [
        {
          heading: "1.Competitive Pricing",
          details: [
            "Get high-quality pre and post-bill freight audits at affordable rates without exceeding your budget.",
          ],
        },
        {
          heading: "2. Bulk Deliveries",
          details: [
            "We efficiently handle high-volume freight audit projects with quick turnaround times.",
          ],
        },
        {
          heading: "3. Advanced Technology",
          details: [
            "Our state-of-the-art tools streamline data processing and ensure accurate freight invoice audits.",
          ],
        },
       
        {
          heading: "4.Quality Assurance",
          details: [
            "Our expert QA team continuously monitors processed data, ensuring 100% error-free results.",
          ],
        },
        {
          heading: "5. Round-the-clock Support",
          details: [
            "Our 24/7 customer support team ensures timely assistance for all your freight audit concerns.",
          ],
        },
        {
          heading: "6. Professional Supervision",
          details: [
            "With a workforce of 250+ skilled professionals, we guarantee precision and efficiency in every project.",
          ],
        },
      ],
    },
    {
      title: "FAQs",
      content: Array.from({ length: 4 }).map((_, index) => {
        const questions = [
          {
            question: "What Is Freight Audit and Why Is It Important?",
            answer:
              "Freight audit involves reviewing invoices to ensure they reflect the correct charges for transportation services. It helps identify overcharges, billing errors, and inefficiencies, ultimately leading to cost savings for your business.",
          },
          {
            question: "How Do You Ensure Accuracy in Freight Auditing?",
            answer:
              "Our team uses advanced auditing tools and manual checks to verify the accuracy of freight invoices. We cross-check each detail, including rates, fees, and discounts, to ensure you are billed correctly.",
          },
          {
            question: "Can You Handle Large Volumes of Freight Invoices?",
            answer:
              "Yes, our services are scalable. We can process small or large volumes of invoices, ensuring each one is audited accurately and promptly, regardless of the size of your business.",
          },
          {
            question: "How Do You Handle Discrepancies with Carriers?",
            answer:
              "We proactively contact carriers to resolve any discrepancies or overcharges, working on your behalf to ensure all issues are corrected quickly, and you receive any refunds owed.",
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
                pagetitle="Freight Audit"
                title="Streamlining Your Business Processes"
                subtitle="Data Entry of Products and Parts from PDF Catalogs"
                description="Computyne helps Canada based industrial parts distributor"
                bgimage="/images/innerbanner/baner-17.webp"
                cardimg="/images/case-study/02.jpg"
                caseLink="/case-studies/data-entry-of-product-and-parts-from-pdf-catalogs"
                linkText="Succes Stories"
                breadcrumbtitle2="Data Processing"
                breadcrumbtitle3="Freight Audit"
                breadcrumb1="/"
                breadcrumb2="/data-processing-services"
                breadcrumb3="/outsource-freight-audit-services"
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
                                            {/* <InnerService title="Pre and post-audit solutions for tedious freight bill handling tasks" solutions={solutionsData} /> */}
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
                                            <Timeline title="Freight Audit Services Workflow" content={timeLineContent} />
                                        </div>
                                    </div>    
                                </Container>
                            </div>
                            <div className="stretch-container bg-[#f5fbfb]">
                                <Container>
                                    <div className="grid grid-cols-12">
                                        <div className="lg:col-span-9 md:col-span-12 col-span-12">
                                            <InnerService title="Effortless Freight Audit Services by Computyne" solutions={solutionsData} />
                                        </div>
                                    </div>    
                                </Container>       
                            </div>
                            <div className="stretch-container">
                                <Container>
                                    <div className="grid grid-cols-12">
                                        <div className="lg:col-span-9 md:col-span-12 col-span-12">
                                            <TabSection title="Precision in Every Audit, Savings in Every Transaction!" tabData={tab} />
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
