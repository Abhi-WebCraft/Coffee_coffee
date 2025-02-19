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
      title: "Document Data Entry Services",
      paragraphs: [
        "Efficient document data management is crucial for businesses to maintain accurate records and streamline operations. Handling large volumes of documents, such as contracts, agreements, and other legal documents, requires precision and expertise. Computyne specializes in comprehensive document data entry services, ensuring accurate data extraction, organization, and digital conversion. Our skilled professionals work with various document formats to provide seamless, error-free data entry solutions. With a commitment to security, efficiency, and reliability, we help businesses process and manage critical data while maintaining compliance with industry standards.",
      ],
    },
  ];

  const solutionsData = [
    {
      image: "/images/icons/budget-1.svg",
      title: "Legal Documents Data Entry Services ",
      description:
        "We accurately process contracts, agreements, and legal records while ensuring compliance and confidentiality.",
      link: "#",
      time: "600",
      bg: "white",
    },
    {
      image: "/images/icons/pdf-1.svg",
      title: "Invoice and Billing Data Entry ",
      description:
        "Convert paper-based invoices and billing records into digital formats for efficient financial management.",
      link: "#",
      time: "1200",
    },
    {
      image: "/images/icons/property.svg",
      title: "Medical Records Data Entry ",
      description:
        "Maintain patient records with precision and security for healthcare institutions.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/checklist-3.svg",
      title: "Handwritten Document Digitization",
      description:
        "Transform handwritten notes and documents into structured, searchable digital formats.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
    {
      image: "/images/icons/budget-1.svg",
      title: "Survey and Forms Processing ",
      description:
        "Capture and input data from forms, surveys, and questionnaires for business analytics.",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/property.svg",
      title: "Insurance Claims Data Entry",
      description:
        "Process insurance claims efficiently to improve turnaround time and accuracy.",
      link: "#",
      time: "1800",
    },
  ];
  const timeLineContent = [
    {
      heading: "Data Collection ",
      details: "Gathering documents from multiple sources and formats for structured data entry.",
    },
    {
      heading: "Data Validation ",
      details: "Ensuring accuracy and consistency by cross-checking entries with reference data.",
    },
    {
      heading: "Data Entry Tools ",
      details:
        "Utilizing advanced software and automation for speed and precision.",
    },
    {
      heading: "Data Review ",
      details: "Conducting thorough quality checks to eliminate errors.",
    },
    {
      heading: "Reporting and Analytics ",
      details: "Organize data for easy retrieval and generate insightful reports for business decision-making.",
    },
  ];
  const whyusData = [
    {
      image: "/images/icons/data-analytics.svg",
      title: "Expert Team",
      description:
        "Our skilled team ensures accurate and efficient data entry, handling documents with precision to meet your business needs. ",
      link: "#",
      time: "600",
      bg: "white",
    },
    {
      image: "/images/icons/team.svg",
      title: "Tailored Solutions",
      description:
        "We offer customized document data entry services, adapting to your unique requirements for streamlined and effective workflows",
      link: "#",
      time: "1200",
    },
    {
      image: "/images/icons/interest-rate.svg",
      title: "High Accuracy",
      description:
        "We prioritize accuracy, ensuring your document data is processed correctly and consistently without errors or discrepancies.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/magnifying.svg",
      title: "Quick Turnaround",
      description:
        "Our team works efficiently, delivering data entry results within the agreed deadlines, ensuring minimal disruption to your operations.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
    {
      image: "/images/icons/chip.svg",
      title: "Secure Data Handling",
      description:
        "We follow stringent security protocols to protect your sensitive data, ensuring confidentiality and compliance with privacy regulations.",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/24-hours.svg",
      title: "Scalable Services",
      description:
        "Our solutions are scalable to meet the needs of businesses of all sizes, from startups to large enterprises.",
      link: "#",
      time: "1800",
    },
  ];
  const tab = [
    {
      title: "Why Choose Us?",
      content: [
        {
          heading: "1. Expertise in Document Data Entry",
          details: [
            " Skilled professionals ensure high-quality data entry.",
            "	Efficient handling of various document formats.",
            "	Accurate extraction and entry for error-free results.",
          ],
        },
        {
          heading: "2.Advanced Data Security",
          details: [
            "Implementing encryption and strict access control.",
            "	Ensuring confidentiality and privacy throughout the process.",
            "Compliance with industry standards for data security.",
          ],
        },
        {
          heading: "3.Timely and Reliable Delivery",
          details: [
            "	Fast turnaround time meeting your deadlines.",
            "	Consistent and dependable results for business continuity.",
            "	Dedicated team ensuring timely project completion.",
          ],
        },
       
      ],
    },
    {
      title: "FAQs",
      content: Array.from({ length: 4 }).map((_, index) => {
        const questions = [
          {
            question: "What types of documents can you process?",
            answer:
              "We handle a wide range of documents, including invoices, contracts, forms, PDFs, and scanned images, ensuring accurate data entry.",
          },
          {
            question: "How do you ensure data accuracy?",
            answer:
              "We use manual and automated methods, cross-checking entries, and performing quality checks to ensure the highest level of accuracy.",
          },
          {
            question: "How do you protect confidential data?",
            answer:
              "Our team follows strict security protocols, using encryption and access controls to ensure your data remains confidential and secure.",
          },
          {
            question: "What is your turnaround time for projects?",
            answer:
              "Our turnaround time varies depending on project size, but we always prioritize meeting deadlines without compromising on data quality.",
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
                pagetitle="Document Data Entry"
                title="Streamlining Your Business Processes"
                subtitle="Data Entry (PDF to Excel) and Web Research Support"
                description="Here the client is a logistics & supply chain company  which needed assistance"
                bgimage="/images/innerbanner/baner-19.webp"
                cardimg="/images/case-study/6.jpg"
                caseLink="/case-studies/excel-data-entry-and-web-research-support-to-logistic-company"
                linkText="Succes Stories"
                breadcrumbtitle2="Data Entry"
                breadcrumbtitle3="Document Data Entry"
                breadcrumb1="/"
                breadcrumb2="/data-entry-services"
                breadcrumb3="/document-data-entry-services"
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
                                            <InnerService title="Our Document Data Entry Services" description=" " solutions={solutionsData} />
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
                                            <TabSection title="Your Reliable Partner for Document Data Entry Services" tabData={tab} />
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
