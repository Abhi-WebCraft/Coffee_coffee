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
      title: "Mortgage Data Entry Services",
      paragraphs: [
        "Efficient management of mortgage data is crucial for businesses in industries such as finance, travel, and education. Mortgage data entry involves extracting, organizing, and securely feeding crucial information into digital systems, ensuring accuracy and accessibility. Computyne specializes in mortgage data entry outsourcing, helping businesses streamline their processes with precise and reliable data entry. ",
        "Since 2009, Computyne has been providing premium mortgage data entry services globally. Our expert team conducts thorough research, validates, and inputs data to minimize errors, enhancing workflow efficiency. By leveraging advanced technology, we ensure the highest level of accuracy, security, and flexibility, allowing organizations to maintain well-structured databases and stay ahead of the competition."
      ],
    },
  ];

  const solutionsData = [
    {
      image: "/images/icons/budget-1.svg",
      title: "Re-conveyance / Trustee Services",
      description:
        "We ensure accurate data entry for re-conveyance and trustee services, helping lenders release property liens efficiently after loan repayment.",
      link: "#",
      time: "600",
      bg: "white",
    },
    {
      image: "/images/icons/pdf-1.svg",
      title: "Loan Transfer & Assignment",
      description:
        "Our experts manage the seamless transfer and assignment of mortgage loans, ensuring precise documentation and compliance with regulatory requirements",
      link: "#",
      time: "1200",
    },
    {
      image: "/images/icons/property.svg",
      title: "Document Recording Services",
      description:
        "We handle the entry and organization of legal mortgage documents, ensuring they are accurately recorded in county or state databases.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/checklist-3.svg",
      title: "Document Retrieval Services",
      description:
        "Our team efficiently retrieves mortgage-related documents from various sources, providing quick and reliable access to critical information.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
    {
      image: "/images/icons/budget-1.svg",
      title: "Title Processing & Replacement",
      description:
        "We assist in processing and replacing title documents, ensuring property ownership details are updated and accurately recorded.",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/property.svg",
      title: "Foreclosure Collateral Management",
      description:
        "Our professionals manage foreclosure data entry, ensuring secure tracking of collateral assets and compliance with legal procedures.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/property.svg",
      title: "Title Searches",
      description:
        "We conduct detailed title searches and record findings systematically, helping businesses verify property ownership and potential liabilities.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/property.svg",
      title: "Document Imaging & Delivery",
      description:
        "Our document imaging services convert physical mortgage records into secure digital formats for easy storage, retrieval, and sharing.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/property.svg",
      title: "Rent Recovery Data Entry",
      description:
        "We provide accurate data entry of rent recovery details, ensuring streamlined financial records and efficient rent collection tracking.",
      link: "#",
      time: "1800",
    },
  ];
  const timeLineContent = [
    {
      heading: "Data Collection ",
      details: "Gather relevant mortgage documents and financial details.  ",
    },
    {
      heading: "Data Entry ",
      details: "Accurately input mortgage data into the system. ",
    },
    {
      heading: "Quality Assurance ",
      details:
        "Review and validate data for consistency and accuracy. ",
    },
    {
      heading: "Data Integration ",
      details: "Integrate mortgage data into your workflow seamlessly. ",
    },
    {
      heading: "Final Review and Delivery ",
      details: "Ensure completion, accuracy, and delivery on time.",
    },
  ];
  const whyusData = [
    {
      image: "/images/icons/data-analytics.svg",
      title: "Skilled Professionals",
      description:
        "Our team ensures precise and efficient data entry for mortgage documents.",
      link: "#",
      time: "600",
      bg: "white",
    },
    {
      image: "/images/icons/team.svg",
      title: "Customized Solutions",
      description:
        "Tailored services to meet your unique business needs and processes.",
      link: "#",
      time: "1200",
    },
    {
      image: "/images/icons/interest-rate.svg",
      title: "Secure Data Handling",
      description:
        "Robust security measures to protect sensitive mortgage information.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/magnifying.svg",
      title: "Regulatory Compliance",
      description:
        "Adherence to industry standards and legal requirements for data accuracy.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
    {
      image: "/images/icons/chip.svg",
      title: "Timely Delivery",
      description:
        "Fast turnaround times without compromising quality or accuracy.",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/24-hours.svg",
      title: "Cost-Effective Services",
      description:
        "Affordable pricing while maintaining top-notch service quality.",
      link: "#",
      time: "1800",
    },
  ];
  const tab = [
    {
      title: "Why Choose Us?",
      content: [
        {
          heading: "1.Experienced Team",
          details: [
            "With over a decade of experience, Computyne has successfully managed mortgage data entry services for clients worldwide. Our expertise ensures high-quality results tailored to your business needs.",
          ],
        },
        {
          heading: "2.Quality Assurance",
          details: [
            "Our dedicated QA team meticulously reviews data to eliminate errors, enabling us to deliver mortgage data entry outsourcing projects with an exceptional 99% accuracy rate.",
          ],
        },
        {
          heading: "3. Cost-Effective Solutions",
          details: [
            "Computyne provides budget-friendly mortgage data entry services, making it easier for businesses to streamline their databases without exceeding financial constraints.",
          ],
        },
        {
          heading: "4. Minimized Workload",
          details: [
            "Outsourcing to Computyne allows businesses to focus on core operations while reducing in-house operational costs and benefiting from expert-driven data management.",
          ],
        },
        {
          heading: "5.Fast Turnaround Times",
          details: [
            "Our certified professionals efficiently handle mortgage data entry tasks, ensuring accurate results with a swift turnaround time to meet your deadlines.",
          ],
        },
        {
          heading: "6. Cutting-Edge Technology",
          details: [
            "At Computyne, we leverage the latest technology and advanced methodologies to deliver precise and reliable data entry services within a short timeframe.",
          ],
        },
      ],
    },
    {
      title: "FAQs",
      content: Array.from({ length: 4 }).map((_, index) => {
        const questions = [
          {
            question: "What Services Do You Provide?",
            answer:
              "We offer comprehensive mortgage data entry services, including loan applications, financial record management, and document processing.",
          },
          {
            question: "How Do You Ensure Accuracy?",
            answer:
              "Our skilled team, advanced tools, and rigorous quality checks ensure error-free data entry for all mortgage documents.",
          },
          {
            question: "Is My Data Secure?",
            answer:
              "We implement encryption, confidentiality agreements, and strict access controls to protect your sensitive mortgage information.",
          },
          {
            question: "Can You Customize Your Services?",
            answer:
              "Yes, we provide tailored solutions designed to match your unique business processes and requirements.",
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
                pagetitle="Mortgage Data Entry"
                title="Streamlining Your Business Processes"
                subtitle="Online Check Processing for Payment Processing Company"
                description="Setting up a process of transferring data from all checks to a software/online"
                bgimage="/images/innerbanner/baner-5.webp"
                cardimg="/images/case-study/9.jpg"
                caseLink="/case-studies/check-processing-for-payment-processing-company"
                linkText="Succes Stories"
                breadcrumbtitle2="Data Entry"
                breadcrumbtitle3="Mortgage Data Entry"
                breadcrumb1="/"
                breadcrumb2="/data-entry-services"
                breadcrumb3="/mortgage-data-entry-services"
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
                                            <InnerService title="Comprehensive Mortgage Data Entry Solutions" solutions={solutionsData} />
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
                                            <Timeline title="Mortgage Data Entry Services Workflow  " content={timeLineContent} />
                                        </div>
                                    </div>    
                                </Container>
                            </div>
                            
                            <div className="stretch-container">
                                <Container>
                                    <div className="grid grid-cols-12">
                                        <div className="lg:col-span-9 md:col-span-12 col-span-12">
                                            <TabSection title="Your Trusted Partner for Mortgage Data Entry Outsourcing" tabData={tab} />
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
