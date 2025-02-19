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
      title: "Efficient Data Processing Outsourcing Services for Seamless Business Operations",
      paragraphs: [
        "Every business generates a massive volume of data daily, and as time passes, managing this data becomes increasingly complex. This is where a reliable data processing company comes in—one that can efficiently handle, organize, and manage your data with precision. Computyne is your trusted partner for data processing outsourcing services, specializing in the processing of forms, mailing lists, orders, and essential documents with unmatched accuracy and operational cost savings.",
        "Data processing involves collecting and converting data from various sources into a digital format that is machine-readable. This ensures the security of your crucial business information in a digital form. Computyne offers top-tier outsource data processing services, providing you with fast, accurate, and reliable results. Our dedicated, skilled team ensures the correct and efficient digitization of your data, with a quick time."
      ],
    },
  ];

  const solutionsData = [
    {
      image: "/images/icons/budget-1.svg",
      title: "Invoice Processing Services",
      description:
        "Automate and streamline invoice handling to ensure accurate data entry, timely payments, and reduced processing errors.",
      link: "#",
      time: "600",
      bg: "white",
    },
    {
      image: "/images/icons/pdf-1.svg",
      title: "Resume Processing Services",
      description:
        "Organize and extract key information from resumes to create structured, searchable databases for efficient hiring and recruitment processes.",
      link: "#",
      time: "1200",
    },
    {
      image: "/images/icons/property.svg",
      title: "Data Mining Services",
      description:
        "Extract valuable insights from large datasets, helping businesses make informed decisions and identify trends for growth.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/checklist-3.svg",
      title: "Cheque Processing Services",
      description:
        "Digitize and verify cheque transactions with accuracy, ensuring fast clearance and secure financial record-keeping.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
    {
      image: "/images/icons/budget-1.svg",
      title: "Handwritten Forms’ Data Capture",
      description:
        "Convert handwritten documents into digital formats with high precision, ensuring easy access, organization, and retrieval.",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/property.svg",
      title: "Survey Processing Services",
      description:
        "Collect, organize, and analyze survey responses to generate meaningful insights for market research and decision-making. ",
      link: "#",
      time: "1800",
    },

    {
      image: "/images/icons/budget-1.svg",
      title: "Forms Processing Services",
      description:
        "Digitally capture and process structured or unstructured data from forms, improving accuracy and workflow efficiency.",
      link: "#",
      time: "600",
      bg: "white",
    },
    {
      image: "/images/icons/pdf-1.svg",
      title: "Insurance Claims Processing",
      description:
        "Efficiently handle and validate insurance claims, ensuring quick approvals, fraud detection, and seamless policyholder experiences.",
      link: "#",
      time: "1200",
    },
    {
      image: "/images/icons/property.svg",
      title: "Word Formatting Services",
      description:
        "Standardize and format documents to enhance readability, consistency, and professional presentation across business reports, manuals, and proposals.",
      link: "#",
      time: "1800",
    },
  ];
  
  const timeLineContent = [
    {
      heading: "Data Collection and Extraction",
      details: "We gather raw data from various sources, ensuring accuracy and relevance for processing.",
    },
    {
      heading: "Data Cleaning and Validation",
      details: "Data is cleaned and validated to remove errors and inconsistencies before further processing.",
    },
    {
      heading: "Data Transformation",
      details:
        "We convert data into the desired format, ensuring it’s structured for easy analysis.",
    },
    {
      heading: "Data Analysis and Processing",
      details: "Our team processes data, generating valuable insights and reports for decision-making.",
    },
    {
      heading: "Data Storage and Security",
      details: "Processed data is securely stored with encryption, ensuring confidentiality and protection.",
    },
  ];
  const whyusData = [
    {
      image: "/images/icons/data-analytics.svg",
      title: "Expertise and Experience",
      description:
        "Our team brings years of expertise, ensuring accurate and efficient data processing tailored to your business needs.",
      link: "#",
      time: "600",
      bg: "white",
    },
    {
      image: "/images/icons/team.svg",
      title: " Advanced Technology",
      description:
        "We use cutting-edge tools and automated solutions to streamline data processing, reducing errors and increasing efficiency for your business.",
      link: "#",
      time: "1200",
    },
    {
      image: "/images/icons/interest-rate.svg",
      title: "Customized Solutions",
      description:
        "We offer tailored data processing services that meet the specific requirements of your industry and business operations.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/magnifying.svg",
      title: "High Accuracy and Quality",
      description:
        "Our strict quality assurance ensures every processed dataset is accurate, reliable, and ready for actionable insights with minimal errors.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
    {
      image: "/images/icons/chip.svg",
      title: " Fast and Scalable Solutions",
      description:
        "We provide quick turnarounds and scalable services to handle growing data needs, accommodating both small and large projects.",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/24-hours.svg",
      title: "Secure and Confidential Handling",
      description:
        "We prioritize data security, using encryption and compliance measures to guarantee the confidentiality and protection of your sensitive information.",
      link: "#",
      time: "1800",
    },
  ];
  const tab = [
    {
      title: "Why Choose Us?",
      content: [
        {
          heading: "1.24/7 Support",
          details: [
            "Get round-the-clock assistance from our expert team, ensuring smooth operations and timely consultations whenever needed.",
          ],
        },
        {
          heading: "2.Transparent Business Contracts",
          details: [
            "We maintain complete transparency by disclosing pricing, delivery timelines, and service terms in a formal contract.",
          ],
        },
        {
          heading: "3.Highly Skilled Team",
          details: [
            "Our data processing specialists handle large volumes of complex data efficiently while ensuring accuracy and compliance with global standards.",
          ],
        },
        {
          heading: "4.Cost Reduction",
          details: [
            "We offer competitive pricing and flexible payment plans, helping businesses save on operational costs without compromising quality.",
          ],
        },
        {
          heading: "5.Advanced Technology",
          details: [
            "We use cutting-edge technology and rigorous analysis to deliver high-quality, error-free data processing results.",
          ],
        },
        {
          heading: "6.Multi-Industry Coverage",
          details: [
            "Our services cater to diverse industries, including real estate, finance, healthcare, education, and more.",
          ],
        },
       
      ],
    },
    {
      title: "FAQs",
      content: Array.from({ length: 4 }).map((_, index) => {
        const questions = [
          {
            question: "What Types of Data Processing Services Do You Offer?",
            answer:
              "We offer customized data processing services including data entry, transformation, validation, and analysis tailored to your business needs.",
          },
          {
            question: "How Do You Ensure Data Accuracy in Processing?",
            answer:
              "Our team follows strict quality checks and uses advanced tools to ensure accurate and error-free data processing for every project.",
          },
          {
            question: "Is My Data Secure with Your Services?",
            answer:
              "We prioritize data security with encryption, strict compliance measures, and confidentiality agreements to protect your sensitive information at all stages.",
          },
          {
            question: "Can You Handle Large-Scale Data Processing Projects?",
            answer:
              "Yes, we offer scalable solutions to handle large-scale data processing, ensuring timely and efficient completion of extensive data tasks.",
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
                pagetitle="Data Processing"
                title="Streamlining Your Business Processes"
                subtitle="Data Support & Property Matching"
                description="Streamline your operations with our expert data entry and management services!"
                bgimage="/images/innerbanner/baner-14.webp"
                cardimg="/images/innerbanner/baner-5.webp"
                caseLink="#"
                linkText="Succes Stories"
                breadcrumbtitle2="Data Processing"
                breadcrumb1="/"
                breadcrumb2="/data-processing-services"
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
                                            <InnerService 
                                            title="Our Data Processing Services"
                                            description=""
                                            solutions={solutionsData} />
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
                                            <Timeline title="Data Processing Services Workflow" content={timeLineContent} />
                                        </div>
                                    </div>    
                                </Container>
                            </div>
                            
                            <div className="stretch-container">
                                <Container>
                                    <div className="grid grid-cols-12">
                                        <div className="lg:col-span-9 md:col-span-12 col-span-12">
                                            <TabSection title="Transforming Data into Actionable Insights" tabData={tab} />
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
