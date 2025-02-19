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
      title: "logistics and shipping back office solutions",
      paragraphs: [
        "The Shipping & Logistics industry is a significant element for effective supply chain management and is consistently evolving. While as an industry, Shipping & Logistics faces many challenges and is as unpredictable as the weather.",
        "Due to the uncertain economic environment and rising fuel costs, the Shipping & Logistics companies opt for outsourcing to optimize costs and increase profitability. Before you start outsourcing your Shipping & Logistics operations to an outsourcing partner, here’s what you need to know.",
        "Outsourcing Shipping & Logistics services help the business concentrate on its leading services and keep long-run relations with potential clients. Computyne’s back-office solutions for Shipping & Logistics firms facilitate business pioneers optimize prices and obtain significance in supply chain processes."
      ],
    },
  ];

  const solutionsData = [
    {
      image: "/images/icons/budget-1.svg",
      title: "End-to-End Shipping Management",
      description:
        "We offer comprehensive support for logistics and shipping processes, including order processing, inventory management, and shipping coordination to ensure smooth and timely deliveries.",
      link: "#",
      time: "600",
      bg: "white",
    },
    {
      image: "/images/icons/pdf-1.svg",
      title: "Cost Optimization",
      description:
        "Our services focus on optimizing shipping costs through route planning, freight auditing, and identifying cost-effective shipping solutions, reducing your overall logistics expenses.",
      link: "#",
      time: "1200",
    },
    {
      image: "/images/icons/property.svg",
      title: "Real-Time Tracking",
      description:
        "We provide advanced tracking and monitoring systems that allow you to track shipments in real-time, improving visibility and transparency for both businesses and customers.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/checklist-3.svg",
      title: "Customs and Compliance Management",
      description:
        "Our team handles all customs documentation, ensuring compliance with local and international regulations, preventing delays and avoiding potential penalties for non-compliance.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
    {
      image: "/images/icons/budget-1.svg",
      title: "Order Fulfillment Support",
      description:
        "We help streamline order fulfillment by managing orders from multiple platforms, ensuring accurate and timely processing to improve customer satisfaction.",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/property.svg",
      title: "Scalable and Tailored Solutions",
      description:
        "Whether you're a small business or a large corporation, we offer scalable logistics and shipping solutions customized to meet your specific business needs and goals.",
      link: "#",
      time: "1800",
    },
  ];
  const timeLineContent = [
    {
      heading: "Order Processing",
      details: "Efficiently managing order data for seamless fulfillment.",
    },
    {
      heading: "Inventory Management",
      details: "Real-time tracking and updating of inventory levels.",
    },
    {
      heading: "Shipping Coordination",
      details:
        "Organizing shipments and optimizing delivery schedules.",
    },
    {
      heading: "Freight Auditing",
      details: "Reviewing and verifying freight invoices for cost accuracy.",
    },
    {
      heading: "Compliance Management",
      details: "Ensuring all shipping and customs documentation is compliant.",
    },
  ];
  const whyusData = [
    {
      image: "/images/icons/data-analytics.svg",
      title: "Comprehensive Logistics Support",
      description:
        "We offer end-to-end logistics support, from order processing to final delivery, ensuring your operations run smoothly and efficiently. ",
      link: "#",
      time: "600",
      bg: "white",
    },
    {
      image: "/images/icons/team.svg",
      title: "Cost-Effective Shipping Solutions",
      description:
        "Our team works diligently to optimize shipping routes, reduce freight costs, and find the most economical shipping options, saving you money on logistics.",
      link: "#",
      time: "1200",
    },
    {
      image: "/images/icons/interest-rate.svg",
      title: "Real-Time Shipment Tracking",
      description:
        "With our advanced tracking systems, you can monitor shipments in real time, providing transparency and improving both internal and customer-facing operations.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/magnifying.svg",
      title: "Compliance and Regulatory Expertise",
      description:
        "We ensure your shipments meet all legal and customs regulations, reducing the risk of penalties or delays and ensuring smooth international and domestic transactions.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
    {
      image: "/images/icons/chip.svg",
      title: "Scalable and Flexible Solutions",
      description:
        "Whether you’re a small business or a large enterprise, we provide scalable solutions tailored to your business needs, adapting as your business grows.",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/24-hours.svg",
      title: "Enhanced Efficiency and Customer Satisfaction",
      description:
        "Our efficient back-office solutions streamline operations, reduce errors, and improve overall customer satisfaction, helping you build a loyal customer base.",
      link: "#",
      time: "1800",
    },
  ];
  const tab = [
    {
      title: "Why Choose Us?",
      content: [
        {
          heading: "1. Comprehensive Logistics Management",
          details: [
            "Efficient order processing and fulfillment.",
            "Seamless coordination between inventory and shipping.",
            "Advanced shipment tracking for real-time updates.",
          ],
        },
        {
          heading: "2. Cost Optimization",
          details: [
            "Freight auditing to reduce shipping costs.",
            "Identifying cost-effective shipping routes and methods.",
            "Streamlined logistics processes to minimize operational costs.",
          ],
        },
        {
          heading: "3.Regulatory Compliance and Documentation",
          details: [
            "Expert handling of customs and shipping documentation.",
            "Ensuring compliance with local and international regulations.",
            "Preventing delays and penalties through accurate paperwork.",
          ],
        },
       
      ],
    },
    {
      title: "FAQs",
      content: Array.from({ length: 4 }).map((_, index) => {
        const questions = [
          {
            question: "What logistics services do you offer?",
            answer:
              "We provide a full range of logistics and shipping back-office services, including order processing, inventory management, shipping coordination, freight auditing, and compliance management to ensure timely and efficient operations.",
          },
          {
            question: "How can your services help reduce costs?",
            answer:
              "Our team optimizes shipping routes, audits freight invoices, and identifies cost-effective shipping options to reduce overall shipping expenses. We streamline logistics processes to minimize unnecessary costs.",
          },
          {
            question: "How do you ensure compliance with shipping regulations?",
            answer:
              "We ensure that all shipping and customs documentation is correctly handled and compliant with local and international regulations, helping to prevent delays, fines, or penalties.",
          },
          {
            question: "What makes your solutions scalable?",
            answer:
              "Our services are designed to grow with your business. Whether you’re a small start-up or a large corporation, we offer flexible, scalable logistics solutions tailored to meet your evolving needs.",
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
                pagetitle="Logistics & Shipping"
                title="Streamlining Your Business Processes"
                subtitle="Data Entry of Products and Parts from PDF Catalogs"
                description="Computyne helps Canada based industrial parts distributor get timely data entry "
                bgimage="/images/innerbanner/baner-12.webp"
                cardimg="/images/case-study/02.jpg"
                caseLink="/case-studies/data-entry-of-product-and-parts-from-pdf-catalogs"
                linkText="Succes Stories"
                breadcrumbtitle2="Industries"
                breadcrumbtitle3="Logistics & Shipping"
                breadcrumb1="/"
                breadcrumb2="#"
                breadcrumb3="/logistics-and-shipping-back-office-solutions"
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
                                            <InnerService title="We Take Care of All Your logistics and shipping back office solutions Needs" solutions={solutionsData} />
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
                                            <Timeline title="logistics and shipping back office solutions Workflow" content={timeLineContent} />
                                        </div>
                                    </div>    
                                </Container>
                            </div>
                            
                            <div className="stretch-container">
                                <Container>
                                    <div className="grid grid-cols-12">
                                        <div className="lg:col-span-9 md:col-span-12 col-span-12">
                                            <TabSection title="Your Reliable Partner for logistics and shipping back office solutions" tabData={tab} />
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
