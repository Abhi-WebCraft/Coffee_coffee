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
      title: "Your Trusted Partner for Survey and Forms Processing Services",
      paragraphs: [
        "Businesses handle vast amounts of physical and digital forms daily, including application forms, invoices, surveys, insurance claims, and more. Managing these manually can be time-consuming and prone to errors. Outsourcing survey and forms processing helps you save time, reduce operational costs, and focus on core business objectives.",
        "Companies rely on surveys to analyze market trends, understand customer preferences, and improve services. However, managing and organizing this data can be overwhelming. Computyne efficiently processes survey forms, questionnaires, and other data sources, converting them into structured formats like MS Word, Excel, and Access for seamless storage and retrieval. Our team ensures fast turnaround times, cost-effective solutions, and completes data confidentiality, allowing you to operate with confidence and efficiency.",
      ],
    },
  ];

  const solutionsData = [
    {
      image: "/images/icons/budget-1.svg",
      title: "Market Research Forms Processing",
      description:
        "Digitize and analyze market research forms to gain valuable insights and drive data-driven business strategies.",
      link: "#",
      time: "600",
      bg: "white",
    },
    {
      image: "/images/icons/pdf-1.svg",
      title: "Insurance Form Processing",
      description:
        "Streamline insurance claims and policy forms with precise data entry and fast processing.",
      link: "#",
      time: "1200",
    },
    {
      image: "/images/icons/property.svg",
      title: "Medical Forms Processing",
      description:
        "Maintain accurate patient records, medical claims, and healthcare documentation with secure processing solutions.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/checklist-3.svg",
      title: "Property Document Processing",
      description:
        "Process real estate and mortgage-related documents efficiently for smooth property transactions.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
    {
      image: "/images/icons/budget-1.svg",
      title: "HR Forms Processing",
      description:
        "Manage employee records, applications, and performance reviews with structured and accurate data processing.",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/property.svg",
      title: "Student Forms Processing",
      description:
        "Organize and digitize student applications, enrollment, and academic records with high accuracy.",
      link: "#",
      time: "1800",
    },

    {
      image: "/images/icons/budget-1.svg",
      title: "Rental and Mortgage Forms Processing",
      description:
        "Simplify lease agreements and mortgage paperwork by converting them into structured digital formats.",
      link: "#",
      time: "600",
      bg: "white",
    },
    {
      image: "/images/icons/pdf-1.svg",
      title: "Payroll and Tax Forms Processing",
      description:
        "Ensure error-free payroll calculations and tax document management with expert data entry services.",
      link: "#",
      time: "1200",
    },
    {
      image: "/images/icons/property.svg",
      title: "Shipping Forms Processing",
      description:
        "Process shipping documents, invoices, and tracking records efficiently for improved logistics operations.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/checklist-3.svg",
      title: "Legal Forms Processing",
      description:
        "Convert legal agreements, contracts, and case files into digital formats for easy retrieval and compliance.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
    {
      image: "/images/icons/budget-1.svg",
      title: "Survey Forms Processing",
      description:
        "Transform survey data into actionable insights with accurate processing and analysis.",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/property.svg",
      title: "Registration Forms Processing",
      description:
        "Digitally organize customer, employee, or event registrations for streamlined data management.",
      link: "#",
      time: "1800",
    },
  ];
  const timeLineContent = [
    {
      heading: "Data Collection",
      details: "Gather survey forms in various formats, including paper-based, scanned, or digital files.",
    },
    {
      heading: "Document Digitization",
      details: "Convert physical forms into digital format using OCR (Optical Character Recognition) and manual data entry.",
    },
    {
      heading: "Data Extraction & Processing",
      details:
        "Extract key information from survey forms, including customer responses, feedback, and statistical data.",
    },
    {
      heading: "Data Validation & Quality Check",
      details: "Verify extracted data for errors, duplicates, or inconsistencies.",
    },
    {
      heading: "Data Formatting & Standardization",
      details: "Format and structure data for easy integration into CRM, databases, or analytics platforms.",
    },
    {
      heading: "Secure Data Storage & Delivery",
      details: "Encrypt and store processed data securely to maintain confidentiality.",
    },
    {
      heading: "Reporting & Final Review",
      details: "Provide clients with detailed reports and analytics for informed decision-making.",
    },
  ];
  const whyusData = [
    {
      image: "/images/icons/data-analytics.svg",
      title: "Accurate Data Handling",
      description:
        "Our team ensures precise data capture and processing, minimizing errors and maintaining the integrity of your survey and form data.",
      link: "#",
      time: "600",
      bg: "white",
    },
    {
      image: "/images/icons/team.svg",
      title: "Customized Solutions",
      description:
        "We tailor our services to meet the specific needs of your industry, ensuring flexibility and relevance in data handling and processing.",
      link: "#",
      time: "1200",
    },
    {
      image: "/images/icons/interest-rate.svg",
      title: "Efficient Turnaround Time",
      description:
        "With streamlined workflows and advanced tools, we guarantee quick processing without compromising on quality, helping you meet tight deadlines.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/magnifying.svg",
      title: "Secure Data Management",
      description:
        "Your data's confidentiality is our top priority. We employ robust security protocols, including encryption and controlled access, to safeguard sensitive information.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
    {
      image: "/images/icons/chip.svg",
      title: "Scalable Services",
      description:
        "Whether you're a small business or a large enterprise, we provide scalable solutions to handle varying volumes of surveys and forms effectively.",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/24-hours.svg",
      title: "Comprehensive Reporting",
      description:
        "We deliver detailed, organized reports that transform raw data into actionable insights, helping you make informed decisions.",
      link: "#",
      time: "1800",
    },
  ];
  const tab = [
    {
      title: "Why Choose Us?",
      content: [
        {
          heading: "1. 24/7 Availability ",
          details: [
            "Our team is available round-the-clock, providing daily or weekly progress reports for complete transparency and support.",
          ],
        },
        {
          heading: "2.Expert Supervision",
          details: [
            "Work with skilled professionals experienced in handling complex survey and forms processing tasks efficiently.",
          ],
        },
        {
          heading: "3. Top-Quality Results",
          details: [
            "We ensure high accuracy and precision in processing survey and form data for error-free outcomes.",
          ],
        },

        {
          heading: "4. Cost-Effective Strategies ",
          details: [
            "Our competitive pricing helps businesses save costs while maintaining top-tier processing efficiency.",
          ],
        },
        {
          heading: "5.Highly Secured Services",
          details: [
            "We guarantee data protection through secure FTP servers, encryption, and strict confidentiality agreements.",
          ],
        },
        {
          heading: "6. Quick Turnaround",
          details: [
            "Expect 99% accuracy with fast processing speeds, helping you meet deadlines without compromising quality. ",
          ],
        },
       
      ],
    },
    {
      title: "FAQs",
      content: Array.from({ length: 4 }).map((_, index) => {
        const questions = [
          {
            question: "What Services Do You Offer for Surveys and Forms?",
            answer:
              "We specialize in data collection, validation, entry, and reporting for surveys and forms. Our services cater to various industries and include customized solutions for your specific needs, ensuring data accuracy and efficiency.",
          },
          {
            question: "How Do You Ensure Data Security?",
            answer:
              "We prioritize data confidentiality through advanced encryption, controlled access, and compliance with industry standards. Our robust security measures protect your sensitive information at every stage of the processing workflow.",
          },
          {
            question: "Can Your Services Handle Large-Scale Data?",
            answer:
              "Yes, our scalable solutions are designed to manage high volumes of surveys and forms efficiently. Whether your project is small or large, we ensure timely processing and deliver reliable insights.",
          },
          {
            question: "What Is the Turnaround Time for Processing?",
            answer:
              "Our team works efficiently to meet deadlines. The turnaround time depends on the volume and complexity of the data, but we prioritize timely delivery without compromising on quality.",
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
                pagetitle="Survey Forms Processing"
                title="Streamlining Your Business Processes"
                subtitle="Creating Media Contact Database For Marketing Company"
                description="Computyne helps USA based marketing company, web research and "
                bgimage="/images/innerbanner/baner-6.webp"
                cardimg="/images/case-study/12.jpg"
                caseLink="/case-studies/virtual-assistant-services-creating-media-contact-database"
                linkText="Succes Stories"
                breadcrumbtitle2="Data Processing"
                breadcrumbtitle3="Survey Forms Processing"
                breadcrumb1="/"
                breadcrumb2="/data-processing-services"
                breadcrumb3="/survey-and-forms-processing-services"
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
                                            <InnerService title="Survey and forms processing services" solutions={solutionsData} />
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
                                            <Timeline title="Workflow for Survey Forms Processing" content={timeLineContent} />
                                        </div>
                                    </div>    
                                </Container>
                            </div>
                            
                            <div className="stretch-container">
                                <Container>
                                    <div className="grid grid-cols-12">
                                        <div className="lg:col-span-9 md:col-span-12 col-span-12">
                                            <TabSection title="Accuracy, Security, and Speed – Your Data, Our Priority!" tabData={tab} />
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
