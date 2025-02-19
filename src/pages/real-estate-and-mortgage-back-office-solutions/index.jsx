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
      title: "real estate and mortgage back office solutions",
      paragraphs: [
        "A real estate company utilizes heaps of data in contracts, sales reports, leases, surveys, etc. All information must be available right away to take any vital business decision. So, to rise above your competitors and get bits of knowledge into the market, it has gained an unquestionable requirement for real estate and mortgage companies to have simple access to real-time information.",
        "To scale up your company while at the same time reducing expenses, to stay sustainable in a competitive Mortgage Market, one should consider Outsourcing REO (Real Estate Owned Properties) Listing and back-office processes.",
        "Outsourcing REO Listing and back-office procedures, such as REO Billing and Reimbursement handling, data management, and REO Administrative services to Computyne, an accomplished Business Process Outsourcing group, is an extraordinary method to unburden your association of these undertakings and let you concentrate on your core capabilities."
      ],
    },
  ];

  const solutionsData = [
    {
      image: "/images/icons/budget-1.svg",
      title: "Property Listings and Data Management",
      description:
        "We handle the management and organization of property listings, ensuring accurate data entry, updates, and listings across multiple platforms.",
      link: "#",
      time: "600",
      bg: "white",
    },
    {
      image: "/images/icons/pdf-1.svg",
      title: "Mortgage Application Processing",
      description:
        "Streamlining the mortgage application process, from document collection and verification to processing, ensuring a smooth experience for clients.",
      link: "#",
      time: "1200",
    },
    {
      image: "/images/icons/property.svg",
      title: "Loan and Payment Tracking",
      description:
        "We track loan disbursements, payments, and provide regular reports to ensure the financial side of real estate transactions runs smoothly.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/checklist-3.svg",
      title: "Title and Deed Management",
      description:
        "We manage title and deed documentation, ensuring proper organization, timely updates, and compliance with regulatory requirements.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
    {
      image: "/images/icons/budget-1.svg",
      title: "Real Estate Document Review and Compliance",
      description:
        "Our team ensures all real estate documents meet legal and regulatory standards through careful review and compliance checks.",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/property.svg",
      title: "Client Communication and Support",
      description:
        "We manage communication between agents, clients, and financial institutions to ensure smooth, transparent, and efficient processes.",
      link: "#",
      time: "1800",
    },
  ];
  const timeLineContent = [
    {
      heading: "Data Collection",
      details: "Collecting and organizing essential property and mortgage data.",
    },
    {
      heading: "Document Verification",
      details: "Verifying documents for authenticity and regulatory compliance.",
    },
    {
      heading: "Data Entry and Management ",
      details:
        "Accurate entry and management of property and loan data.",
    },
    {
      heading: "Payment Tracking",
      details: "Monitoring loan payments and updating financial records.  ",
    },
    {
      heading: "Reporting and Compliance",
      details: "Generating reports and ensuring adherence to regulations.",
    },
  ];
  const whyusData = [
    {
      image: "/images/icons/data-analytics.svg",
      title: "Expertise in Real Estate and Mortgage Processing",
      description:
        "Our team has years of experience in managing real estate and mortgage back-office operations, ensuring seamless processing and timely execution of tasks. ",
      link: "#",
      time: "600",
      bg: "white",
    },
    {
      image: "/images/icons/team.svg",
      title: "Accuracy and Efficiency",
      description:
        "We prioritize accuracy in data entry and documentation handling, ensuring that all property listings, mortgage applications, and legal documents are processed without errors.",
      link: "#",
      time: "1200",
    },
    {
      image: "/images/icons/interest-rate.svg",
      title: "Compliance with Regulations",
      description:
        "We stay up to date with industry regulations and legal requirements to ensure that all processes meet compliance standards, safeguarding your business.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/magnifying.svg",
      title: "Cost-Effective Solutions",
      description:
        "Our services offer a cost-effective alternative to in-house operations, allowing you to save on staffing and overhead costs without compromising on quality.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
    {
      image: "/images/icons/chip.svg",
      title: "Customized Solutions",
      description:
        "We tailor our services to meet your specific needs, whether it’s for property management, mortgage processing, or legal documentation, providing solutions that fit your business. ",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/24-hours.svg",
      title: "Dedicated Support",
      description:
        "Our dedicated team provides round-the-clock support to assist with any questions or challenges, ensuring a smooth and efficient workflow.",
      link: "#",
      time: "1800",
    },
  ];
  const tab = [
    {
      title: "Why Choose Us?",
      content: [
        {
          heading: "1. Expert Team for Seamless Processing",
          details: [
            "Experienced professionals ensuring timely, accurate data processing.",
            "Reducing operational errors with comprehensive back-office solutions.",
            "Handling all your document management and verification tasks.",
          ],
        },
        {
          heading: "2.Regulatory Compliance and Risk Management",
          details: [
            "Keeping your processes compliant with industry standards.",
            "Mitigating risks through secure data management protocols.",
            "Regular updates to ensure adherence to legal requirements.",
          ],
        },
        {
          heading: "3. Customized Solutions to Fit Your Needs",
          details: [
            "Tailored solutions to address specific business needs.",
            "Streamlined workflows for quicker processing and approval.",
            "Cost-effective options designed for businesses of all sizes.",
          ],
        },
       
      ],
    },
    {
      title: "FAQs",
      content: Array.from({ length: 4 }).map((_, index) => {
        const questions = [
          {
            question: "What Services Do You Provide for Real Estate and Mortgage Back Office Solutions?",
            answer:
              "We offer a wide range of services, including data entry, document verification, property listing management, mortgage application processing, loan tracking, compliance reporting, and more. Our team ensures accurate and efficient handling of all your real estate and mortgage needs.",
          },
          {
            question: "How Do You Ensure Data Accuracy and Compliance?",
            answer:
              "Our experienced team follows strict protocols for data entry, document management, and compliance checks. We stay updated with industry regulations to guarantee all processes meet legal standards, minimizing errors and risks.",
          },
          {
            question: "How Can Outsourcing Your Back Office Help My Business?",
            answer:
              "Outsourcing helps reduce operational costs, improve efficiency, and free up resources. By leveraging our expertise, you can focus on core business activities while we manage time-consuming back-office tasks effectively.",
          },
          {
            question: "How Do You Customize Your Solutions for My Business?",
            answer:
              "We understand that each business is unique. We offer tailored solutions to meet your specific needs, whether you require customized workflows, specific compliance requirements, or industry-specific services.",
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
                pagetitle="Real Estate & Mortgage"
                title="Streamlining Your Business Processes"
                subtitle="Invoice Data Entry into Restaurant Software"
                description="How a Singapore based F&B Expense Management company"
                bgimage="/images/innerbanner/baner-16.webp"
                cardimg="/images/case-study/3.jpg"
                caseLink="/case-studies/invoice-data-entry-support-to-restaurant-expense-software"
                linkText="Succes Stories"
                breadcrumbtitle2="Industries"
                breadcrumbtitle3="Real Estate & Mortgage"
                breadcrumb1="/"
                breadcrumb2="#"
                breadcrumb3="/real-estate-and-mortgage-back-office-solutions"
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
                                            <InnerService title="We Take Care of All Your real estate and mortgage back office solutions Needs" solutions={solutionsData} />
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
                                            <Timeline title="real estate and mortgage back office solutions Workflow" content={timeLineContent} />
                                        </div>
                                    </div>    
                                </Container>
                            </div>
                            
                            <div className="stretch-container">
                                <Container>
                                    <div className="grid grid-cols-12">
                                        <div className="lg:col-span-9 md:col-span-12 col-span-12">
                                            <TabSection title="Your Reliable Partner for real estate and mortgage back office solutions" tabData={tab} />
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
