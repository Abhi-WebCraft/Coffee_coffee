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
      title: "retail and ecommerce back office solutions",
      paragraphs: [
        "The Retail & e-commerce business is experiencing explosive growth around the globe over the past few years, each in terms of competition and client base. Retail and e-commerce corporations should meet the advancing need of their clients’ overall channels to remain ahead of the competition.",
        "There are numerous challenges for this industry nowadays, so to coordinate shoppers’ expectations and distinguish themselves from other contenders, Retail & e-commerce businesses should enhance their client service structure.",
        "Computyne, With over ten years in providing e-commerce outsourcing services & Retail of business involvement, has attained the desired business insight to help e-commerce businesses grow. Computyne’s extraordinarily trained and skilled team helps Retail & e-commerce companies to extend and build up their client base and market presence.",
        "We try to produce a consistent shopping experience and responsive client assistance for the Retail & e-commerce business. Our customized and quick Retail & e-commerce outsourcing services will facilitate our clients with an edge over other competitors."
      ],
    },
  ];

  const solutionsData = [
    {
      image: "/images/icons/budget-1.svg",
      title: "Order Processing & Fulfillment",
      description:
        "We handle all aspects of order processing, ensuring smooth transitions from purchase to delivery. From order verification to packing, we streamline the fulfillment process.",
      link: "#",
      time: "600",
      bg: "white",
    },
    {
      image: "/images/icons/pdf-1.svg",
      title: "Inventory Management",
      description:
        "We provide real-time tracking and management of your stock, helping you avoid overstocking or stockouts and optimizing your supply chain.",
      link: "#",
      time: "1200",
    },
    {
      image: "/images/icons/property.svg",
      title: "Product Listings & Catalog Management",
      description:
        "Our team ensures your product listings are accurate, optimized, and regularly updated to improve visibility and sales across platforms.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/checklist-3.svg",
      title: "Customer Service Support",
      description:
        "We offer 24/7 customer service support, managing inquiries, returns, and troubleshooting to enhance customer satisfaction and loyalty.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
    {
      image: "/images/icons/budget-1.svg",
      title: "Accounting & Financial Reporting",
      description:
        "We manage your financial data with precision, offering detailed reports and ensuring compliance, helping you focus on growth while we handle the backend.",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/property.svg",
      title: "Shipping and Logistics Coordination",
      description:
        "We take care of shipping logistics, ensuring timely and cost-effective delivery, optimizing routes, and handling returns efficiently.",
      link: "#",
      time: "1800",
    },
  ];
  const timeLineContent = [
    {
      heading: "Order Processing",
      details: "Efficient order verification, packing, and shipping management.",
    },
    {
      heading: "Inventory Management",
      details: "Real-time tracking to prevent stockouts and overstock. ",
    },
    {
      heading: "Catalog Management ",
      details:
        "Product listing updates and optimization across platforms.",
    },
    {
      heading: "Customer Service",
      details: "Handling inquiries, returns, and customer satisfaction issues.",
    },
    {
      heading: "Financial Reporting",
      details: "Accurate financial management and detailed performance reports.",
    },
  ];
  const whyusData = [
    {
      image: "/images/icons/data-analytics.svg",
      title: "End-to-End Process Management",
      description:
        "We manage your entire retail and eCommerce operations, from order processing to delivery, ensuring a seamless experience for both you and your customers.",
      link: "#",
      time: "600",
      bg: "white",
    },
    {
      image: "/images/icons/team.svg",
      title: "Scalable Solutions",
      description:
        "Our services are designed to grow with your business, whether you're a small startup or an established enterprise. We tailor our solutions to your specific needs.",
      link: "#",
      time: "1200",
    },
    {
      image: "/images/icons/interest-rate.svg",
      title: "Cost Efficiency",
      description:
        "By optimizing your inventory, shipping, and order fulfillment processes, we reduce operational costs, helping you achieve greater profitability.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/magnifying.svg",
      title: "Expert Customer Support",
      description:
        "Our dedicated team provides round-the-clock customer service, handling inquiries, returns, and issues efficiently, fostering customer satisfaction and loyalty.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
    {
      image: "/images/icons/chip.svg",
      title: "Data-Driven Insights",
      description:
        "We provide comprehensive reporting on sales, inventory, and financial data, enabling informed decision-making and continuous business improvement.",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/24-hours.svg",
      title: "Compliance and Security",
      description:
        "We ensure your business adheres to all regulatory requirements, with secure data handling practices to protect your sensitive information.",
      link: "#",
      time: "1800",
    },
  ];
  const tab = [
    {
      title: "Why Choose Us?",
      content: [
        {
          heading: "1. Comprehensive Order Management",
          details: [
            "Streamlined order processing from purchase to delivery.",
            "Order tracking and accurate shipment updates.",
            "Timely order fulfillment to enhance customer satisfaction.",
          ],
        },
        {
          heading: "2. Efficient Inventory & Catalog Management",
          details: [
            "Real-time stock tracking to avoid shortages or excess.",
            "Regular product listings updates and optimization.",
            "Accurate catalog management across multiple sales platforms.",
          ],
        },
        {
          heading: "3. Dedicated Customer Support Services",
          details: [
            "24/7 assistance for customer inquiries and concerns.",
            "Returns handling with minimal disruption.",
            "Quick resolution of customer service issues to ensure loyalty.",
          ],
        },
       
      ],
    },
    {
      title: "FAQs",
      content: Array.from({ length: 4 }).map((_, index) => {
        const questions = [
          {
            question: "What services are included in your back-office solutions?",
            answer:
              "Our comprehensive services cover order processing, inventory management, product listings and catalog management, customer support, financial reporting, and shipping logistics. We handle the essential operations so you can focus on growing your business.",
          },
          {
            question: "How can your solutions improve my business?",
            answer:
              "By streamlining operations, reducing manual work, and ensuring accurate and efficient processes, we help you save time and cut costs. Our solutions optimize your workflow, enhance customer satisfaction, and provide real-time insights for better decision-making.",
          },
          {
            question: "Are your solutions scalable for businesses of all sizes?",
            answer:
              "Yes, our services are fully scalable. Whether you're a small startup or a large enterprise, we tailor our solutions to fit your specific needs and help you grow sustainably.",
          },
          {
            question: "How do you ensure data security and compliance?",
            answer:
              "We prioritize the security of your business and customer data, implementing strong encryption methods, secure payment systems, and following industry best practices for compliance with data protection regulations.",
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
                pagetitle="Retail & E-Commerce"
                title="Streamlining Your Business Processes"
                subtitle="Formatting Resume/CVs into a Uniform Structure"
                description="Computyne skilled CV editors helps Australia based staffing and recruiting company,"
                bgimage="/images/innerbanner/baner-4.webp"
                cardimg="/images/case-study/1.jpg"
                caseLink="/case-studies/formatting-resume-into-uniform-structure"
                linkText="Succes Stories"
                breadcrumbtitle2="Industries"
                breadcrumbtitle3="Retail & E-Commerce"
                breadcrumb1="/"
                breadcrumb2="#"
                breadcrumb3="/retail-and-ecommerce-back-office-solutions"
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
                                            <InnerService title="We Take Care of All Your retail and ecommerce back office solutions Needs" solutions={solutionsData} />
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
                                            <Timeline title="retail and ecommerce back office solutions Workflow" content={timeLineContent} />
                                        </div>
                                    </div>    
                                </Container>
                            </div>
                            
                            <div className="stretch-container">
                                <Container>
                                    <div className="grid grid-cols-12">
                                        <div className="lg:col-span-9 md:col-span-12 col-span-12">
                                            <TabSection title="Your Reliable Partner for retail and ecommerce back office solutions" tabData={tab} />
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
