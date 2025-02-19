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
      title: "restaurant and hospitality back office solutions",
      paragraphs: [
        "The Restaurant & Hospitality industry covers an extensive range of businesses linked to traveling such as hotels, restaurants, and travel agencies. The Restaurant & Hospitality industry is mainly comprised of food & beverage, tourism, and accommodation. Dealing with the food & beverage business in the present ferocious rivalry isn’t an easy feat. Businesses related to restaurant, F&B, travel agencies, and hospitality can outsource a number of its non-core tasks to a reputed BPO partner that can help them retain customer loyalty.",
        "As of late the demand for outsourcing restaurant & hospitality back office services has risen considerably, restaurant invoice processing and food menu data entry are a couple of such services. Various leading companies related to the restaurant & hospitality industry have effectively chosen to outsource as a way to enhance the worth of client experience.",
        "Computyne’s decade long expertise in the hospitality industry helps traveling agencies, hoteliers, restaurateurs to enhance cost-effectiveness, customer loyalty, finances, and streamline business procedures and management."
      ],
    },
  ];

  const solutionsData = [
    {
      image: "/images/icons/budget-1.svg",
      title: "Streamlined Operational Efficiency",
      description:
        "We optimize back-office functions to improve workflow, saving time and reducing costs across all operations. Our solutions enhance productivity in areas like inventory management, staff scheduling, and financial tracking. ",
      link: "#",
      time: "600",
      bg: "white",
    },
    {
      image: "/images/icons/pdf-1.svg",
      title: "Customized Services for the Hospitality Industry",
      description:
        "Understanding the unique challenges of the hospitality industry, we provide tailored solutions such as reservation management, guest data handling, and food delivery processing to ensure smooth day-to-day operations.",
      link: "#",
      time: "1200",
    },
    {
      image: "/images/icons/property.svg",
      title: "Compliance and Regulation Management",
      description:
        "We ensure compliance with industry regulations, health standards, and tax laws, allowing your business to operate without worrying about regulatory issues. Our team keeps you updated with any changes to ensure full compliance.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/checklist-3.svg",
      title: "Cost-effective Solutions",
      description:
        "We provide affordable solutions that reduce overhead costs while increasing productivity. By outsourcing back-office tasks, your restaurant or hospitality business can focus on customer satisfaction and core services.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
    {
      image: "/images/icons/budget-1.svg",
      title: "Advanced Technology for Seamless Integration",
      description:
        "We utilize the latest technology to integrate your back-office processes with POS systems, inventory tools, and accounting software, streamlining operations for real-time updates.",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/property.svg",
      title: "Expert Team for Efficient Management",
      description:
        "Our experienced team ensures error-free processing and accurate data management, handling everything from payroll to financial reporting. We take care of your back-office needs so you can focus on guest experiences and growth.",
      link: "#",
      time: "1800",
    },
  ];
  const timeLineContent = [
    {
      heading: "Data Collection and Organization",
      details: "Collect and organize all operational data accurately.",
    },
    {
      heading: "System Integration and Setup",
      details: "Implement seamless integration of all systems.",
    },
    {
      heading: "Staff and Schedule Management ",
      details:
        "Efficiently manage staffing, scheduling, and payroll tasks.",
    },
    {
      heading: "Inventory and Order Tracking",
      details: "Track inventory levels and manage orders effectively.",
    },
    {
      heading: "Reporting and Compliance Management",
      details: "Ensure timely reporting and compliance with industry standards.",
    },
  ];
  const whyusData = [
    {
      image: "/images/icons/data-analytics.svg",
      title: "Tailored Solutions for Your Business Needs",
      description:
        "We provide customized back-office services designed to meet the specific needs of the restaurant and hospitality industry, from reservation management to inventory tracking and compliance. ",
      link: "#",
      time: "600",
      bg: "white",
    },
    {
      image: "/images/icons/team.svg",
      title: "Streamlined Operations for Improved Efficiency",
      description:
        "Our solutions are designed to streamline all operational functions, ensuring smoother workflows, reducing redundancy, and enhancing efficiency across the back-office processes.",
      link: "#",
      time: "1200",
    },
    {
      image: "/images/icons/interest-rate.svg",
      title: "Cost-effective Solutions",
      description:
        "Outsourcing your back-office tasks to us will help you save on operational costs. We provide affordable services that allow your business to invest more in customer service and growth.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/magnifying.svg",
      title: "Expert Team with Industry Experience",
      description:
        "Our team of professionals has extensive experience in the restaurant and hospitality sectors. We understand the intricacies of the industry, offering expert advice and reliable solutions for your back-office needs.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
    {
      image: "/images/icons/chip.svg",
      title: "Compliance and Regulation Management",
      description:
        "We ensure that your business complies with all local and industry-specific regulations, helping you avoid fines and legal issues while keeping your operations running smoothly.",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/24-hours.svg",
      title: "Technology-Driven Efficiency",
      description:
        "We leverage the latest technology to integrate and optimize your systems, providing real-time data management and ensuring that all back-office processes are connected for enhanced productivity and accuracy.",
      link: "#",
      time: "1800",
    },
  ];
  const tab = [
    {
      title: "Why Choose Us?",
      content: [
        {
          heading: "1. Customized Back-Office Solutions for the Hospitality Industry",
          details: [
            "Specialized in inventory management and tracking systems.",
            "Personalized customer service and reservation management solutions.",
            "Streamlined financial accounting processes for enhanced accuracy.",
          ],
        },
        {
          heading: "2.Improved Efficiency and Cost Savings",
          details: [
            "Automating repetitive tasks to save time and resources.",
            "Leveraging cloud-based tools for real-time data management.",
            "Ensuring accurate reporting and data analysis for better decision-making.",
          ],
        },
        {
          heading: "3. Expert Professionals with Industry Knowledge",
          details: [
            "In-depth knowledge of industry regulations and compliance requirements.",
            "Proficient in managing staff scheduling, payroll, and HR services.",
            "Committed to maintaining high-quality customer experience and service standards.",
          ],
        },
       
      ],
    },
    {
      title: "FAQs",
      content: Array.from({ length: 4 }).map((_, index) => {
        const questions = [
          {
            question: "Customized Back-Office Services for Restaurant Operations",
            answer:
              "We offer tailored solutions to meet the unique demands of the restaurant industry. From inventory management to employee scheduling, we provide services that keep your operations running smoothly. Our solutions are designed to reduce administrative burdens, allowing you to focus on customer satisfaction.",
          },
          {
            question: "Cost Efficiency and Streamlined Processes",
            answer:
              "Our back-office services help reduce overhead costs while improving operational efficiency. By automating routine tasks and implementing cost-saving strategies, we ensure your business operates more profitably and effectively. Whether it's managing supplier relationships or handling financial transactions, we have you covered.",
          },
          {
            question: "Industry Expertise with a Focus on Quality",
            answer:
              "With years of experience in the hospitality industry, our team brings deep knowledge and understanding of your needs. We provide solutions that align with industry best practices, ensuring high-quality service and compliance with regulations.",
          },
          {
            question: "Scalable Solutions to Grow with Your Business",
            answer:
              "As your business grows, so do your needs. We offer scalable solutions that adapt to your changing requirements. Whether you’re a small restaurant or a large hotel, our services evolve to meet your expanding needs efficiently.",
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
                pagetitle="Restaurant & Hospitality"
                title="Streamlining Your Business Processes"
                subtitle="Data Entry of Scanned Invoices into Client Application"
                description="Computyne helps USA based leading accounting company"
                bgimage="/images/innerbanner/baner-15.webp"
                cardimg="/images/case-study/4.jpg"
                caseLink="/case-studies/data-entry-of-scanned-invoices-and-purchase-order"
                linkText="Succes Stories"
                breadcrumbtitle2="Industries"
                breadcrumbtitle3="Restaurant & Hospitality"
                breadcrumb1="/"
                breadcrumb2="#"
                breadcrumb3="/restaurant-and-hospitality-back-office-solutions"
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
                                            <InnerService title="We Take Care of All Your restaurant and hospitality back office solutions  Needs" solutions={solutionsData} />
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
                                            <Timeline title="restaurant and hospitality back office solutions Workflow" content={timeLineContent} />
                                        </div>
                                    </div>    
                                </Container>
                            </div>
                            
                            <div className="stretch-container">
                                <Container>
                                    <div className="grid grid-cols-12">
                                        <div className="lg:col-span-9 md:col-span-12 col-span-12">
                                            <TabSection title="Your Reliable Partner for restaurant and hospitality back office solutions" tabData={tab} />
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
