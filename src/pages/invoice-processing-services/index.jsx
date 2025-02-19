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
      title: "Effortless Business Operations with Invoice Processing Outsourcing",
      paragraphs: [
        "Managing invoices efficiently is a critical aspect of any business. Errors in invoice processing can disrupt financial operations, leading to inefficiencies and losses. To ensure systematic and accurate invoice management, businesses need a reliable solution. This is where Computyne’s outsource invoice processing services come into play, offering seamless, high-quality results at competitive pricing.",
        "Outsourcing invoice processing not only ensures error-free transactions but also helps businesses cut down on operational costs. By eliminating the need for in-house resources, training, and infrastructure, companies can allocate their finances more effectively. Computyne’s advanced tools and efficient methodologies guarantee a hassle-free experience, allowing businesses to focus on their core operations while we handle their financial documentation with precision.",
      ],
    },
  ];

  const solutionsData = [
    {
      image: "/images/icons/budget-1.svg",
      title: "Invoice Data Entry into Web-Based Application",
      description:
        "We accurately enter invoice details into web-based platforms, ensuring smooth processing and real-time accessibility for businesses.",
      link: "#",
      time: "600",
      bg: "white",
    },
    {
      image: "/images/icons/pdf-1.svg",
      title: "Data Entry of Sales Order, Bill, and Purchase Order",
      description:
        "Our experts handle sales orders, bills, and purchase orders with precision, reducing errors and improving financial data management.",
      link: "#",
      time: "1200",
    },
    {
      image: "/images/icons/property.svg",
      title: "Self-Billing Invoice Data Entry",
      description:
        "We process self-billing invoices efficiently, ensuring compliance with tax regulations and smooth transactions between vendors and buyers.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/checklist-3.svg",
      title: "Data Entry from Hard Copy Invoices",
      description:
        "We digitize hard copy invoices with high accuracy, reducing paperwork and enabling seamless data storage and retrieval.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
    {
      image: "/images/icons/budget-1.svg",
      title: "Credit and Debit Memos Data Entry",
      description:
        "Our team ensures accurate recording of credit and debit memos, preventing discrepancies and maintaining financial records efficiently.",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/property.svg",
      title: "Data Input into CMS Database Applications",
      description:
        "We streamline invoice processing by inputting data into CMS databases, enhancing accessibility and operational efficiency.",
      link: "#",
      time: "1800",
    },

    {
      image: "/images/icons/budget-1.svg",
      title: "Scanned Invoices Data Entry",
      description:
        "Our professionals extract and enter data from scanned invoices with precision, ensuring seamless integration into your accounting system.",
      link: "#",
      time: "600",
      bg: "white",
    },
    {
      image: "/images/icons/pdf-1.svg",
      title: "Document Sorting and Indexing of Invoices",
      description:
        "We categorize, index, and organize invoices systematically, making retrieval easy and improving workflow efficiency.",
      link: "#",
      time: "1200",
    },
  ];
  const timeLineContent = [
    {
      heading: "Pro forma Invoice Processing",
      details: "We ensure accurate data entry and validation of pro forma invoices, helping businesses streamline their pre-sale transactions.",
    },
    {
      heading: "Utilities Bill Data Entry",
      details: "Our experts efficiently process utility bills, ensuring timely and error-free data entry for electricity, water, and telecom expenses.",
    },
    {
      heading: "Auditing of Scanned Invoices",
      details:
        "We audit scanned invoices with precision, verifying details to prevent discrepancies and ensure compliance with financial regulations.",
    },
    {
      heading: "Sales Order Processing",
      details: "Computyne processes sales orders quickly, ensuring proper documentation and timely invoicing to enhance customer satisfaction and cash flow.",
    },
    {
      heading: "Self-Billing Invoice",
      details: "We manage self-billing invoices efficiently, helping businesses automate their billing process and maintain accurate financial records.",
    },


    {
      heading: "Freight Invoice Auditing",
      details: "Our freight invoice auditing services help companies verify shipping charges, detect discrepancies, and optimize logistics costs.",
    },
    {
      heading: "Scanned Invoices Processing",
      details: "We extract, digitize, and organize data from scanned invoices to ensure easy retrieval and secure financial record-keeping.",
    },
    {
      heading: "Debit Memo Processing",
      details:
        "Our team efficiently processes debit memos, ensuring proper reconciliation of transactions and maintaining financial accuracy.",
    },
    {
      heading: "Expense Receipt Data Entry",
      details: "We handle expense receipt data entry with precision, helping businesses track expenditures and maintain accurate financial reports.",
    },
    {
      heading: "Bank Statement Processing",
      details: "Computyne digitizes and organizes bank statements, allowing businesses to track transactions and manage their accounts effortlessly.",
    },

    {
      heading: "Bill, Sales Order Data Entry",
      details: "We ensure accurate entry of bills and sales orders, minimizing errors and improving financial documentation.",
    },
    {
      heading: "Delivery Order Data Entry",
      details: "Our experts process delivery orders efficiently, ensuring accurate tracking and seamless order fulfillment.",
    },
  ];
  const whyusData = [
    {
      image: "/images/icons/data-analytics.svg",
      title: "Expertise and Experience",
      description:
        "Our team brings years of experience in handling complex invoice processing tasks with precision and efficiency.",
      link: "#",
      time: "600",
      bg: "white",
    },
    {
      image: "/images/icons/team.svg",
      title: "Accurate and Reliable",
      description:
        "We ensure accurate data extraction and validation, minimizing errors and ensuring your financial records are correct.",
      link: "#",
      time: "1200",
    },
    {
      image: "/images/icons/interest-rate.svg",
      title: "Fast Turnaround Times",
      description:
        "We prioritize timely processing to ensure invoices are processed quickly, avoiding late fees and keeping your cash flow smooth.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/magnifying.svg",
      title: "Cost-Effective Solutions",
      description:
        "Our services are designed to be budget-friendly while maintaining high-quality performance and reducing administrative costs.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
    {
      image: "/images/icons/chip.svg",
      title: "Secure Data Handling",
      description:
        "Your sensitive financial information is protected with robust security protocols, ensuring confidentiality and compliance. ",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/24-hours.svg",
      title: "Customized Services",
      description:
        "We tailor our invoice processing solutions to fit the unique needs of your business and industry.",
      link: "#",
      time: "1800",
    },
  ];
  const tab = [
    {
      title: "Why Choose Us?",
      content: [
        {
          heading: "1. Error-Free Data",
          details: [
            "With advanced automated invoice management technology, we ensure precise data entry, eliminating errors in invoice numbers, amounts, and other details.",
          ],
        },
        {
          heading: "2.Skilled Manpower",
          details: [
            "Our team of invoice processing experts efficiently handles large volumes of invoices while maintaining high accuracy and efficiency.",
          ],
        },
        {
          heading: "3.High Confidentiality",
          details: [
            "We prioritize data security and implement strict confidentiality measures to protect your business's sensitive financial information.",
          ],
        },
        {
          heading: "4.Cost Reduction",
          details: [
            "Our cost-effective invoice processing solutions help businesses save on operational expenses and eliminate the need for expensive software investments.",
          ],
        },
        {
          heading: "5.Quality Check",
          details: [
            "A dedicated quality assurance team meticulously reviews all processed invoices, ensuring accuracy and compliance with industry standards.",
          ],
        },
       
      ],
    },
    {
      title: "FAQs",
      content: Array.from({ length: 4 }).map((_, index) => {
        const questions = [
          {
            question: "What Invoice Processing Services Do You Offer?",
            answer:
              "We offer comprehensive invoice processing services, including data extraction, validation, approval, and payment processing, ensuring timely and accurate handling of your invoices.",
          },
          {
            question: "How Do You Ensure Data Accuracy?",
            answer:
              "Our experienced team uses advanced tools for automated data extraction and manual verification to minimize errors and ensure that your invoice data is precise and reliable.",
          },
          {
            question: "How Secure Is My Invoice Data?",
            answer:
              "We prioritize data security by using encryption, secure transfer protocols, and restricted access controls, ensuring that your sensitive financial information remains protected at all stages.",
          },
          {
            question: "Can Your Invoice Processing Be Customized for My Business?",
            answer:
              "Yes, we provide flexible solutions tailored to your specific industry needs, adjusting workflows and processes to integrate seamlessly with your existing systems.",
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
                pagetitle="Invoice Processing"
                title="Streamlining Your Business Processes"
                subtitle="Survey forms Scanning and Data Entry into Excel Sheets"
                description="Computyne helps UK based security agency, accurate data "
                bgimage="/images/innerbanner/baner-15.webp"
                cardimg="/images/case-study/10.jpg"
                caseLink="/case-studies/scanning-and-data-entry-of-survey-forms"
                linkText="Succes Stories"
                breadcrumbtitle2="Data Processing"
                breadcrumbtitle3="Invoice Processing"
                breadcrumb1="/"
                breadcrumb2="/data-processing-services"
                breadcrumb3="/invoice-processing-services"
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
                                            <InnerService subtitle="Our Invoice Processing Services" title="Effortless Invoice Management for Smarter Business Operations" solutions={solutionsData} />
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
                                            <Timeline title="Types of Invoices Processed By Computyne" content={timeLineContent} />
                                        </div>
                                    </div>    
                                </Container>
                            </div>
                            
                            <div className="stretch-container">
                                <Container>
                                    <div className="grid grid-cols-12">
                                        <div className="lg:col-span-9 md:col-span-12 col-span-12">
                                            <TabSection title="The Smart Way to Process Invoices" tabData={tab} />
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
