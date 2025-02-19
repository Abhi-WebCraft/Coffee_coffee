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
      title: "Virtual Assistant Services",
      paragraphs: [
        "As the growth of a business is accelerated, the workload also increases. This makes it hard to manage all the managerial and administrative tasks. Hiring an outsourcing company that can provide you with premium virtual assistance services is the best solution in reducing your efforts and achieving high results.",
        "A virtual assistant can help you streamline your business even from a remote location. All you need to do is e-mail or call to hand over the task. This is an excellent way to streamline your business process and focus on other crucial areas. By hiring a third-party and outsourcing virtual assistant services, you get to enhance your entire business experience, regardless of the size of your organization.",
        "Computyne has been helping companies grow and manage their complex technical and other in-house tasks with ease. Established in the year 2009, Computyne has been providing quality virtual assistant outsourcing solutions to businesses throughout the globe with its efficient services. This is a sure way to boost the performance of your business model and grow in your core region. We are known for providing highly accurate and quick results, at best in the industry pricing structure."
      ],
    },
  ];

  const solutionsData = [
    {
      image: "/images/icons/budget-1.svg",
      title: "Administrative Support",
      description:
        "Our virtual assistants handle scheduling, email management, and document preparation, allowing you to focus on more critical tasks and operations.",
      link: "#",
      time: "600",
      bg: "white",
    },
    {
      image: "/images/icons/pdf-1.svg",
      title: "Customer Support Management",
      description:
        "We provide efficient customer service, managing inquiries, troubleshooting, and providing timely responses to ensure customer satisfaction.",
      link: "#",
      time: "1200",
    },
    {
      image: "/images/icons/property.svg",
      title: "Social Media Management",
      description:
        "Our team assists with social media account management, content creation, and engagement strategies to help grow your online presence.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/checklist-3.svg",
      title: "Data Entry and Management",
      description:
        "We handle all your data entry needs, from inputting information to organizing and maintaining records, ensuring everything is accurate and up to date.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
    {
      image: "/images/icons/budget-1.svg",
      title: "Market Research and Lead Generation",
      description:
        "Our virtual assistants conduct market research and generate quality leads to support your business growth and help you stay ahead of competitors.",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/property.svg",
      title: "Travel and Event Planning",
      description:
        "We assist with planning and booking business trips, events, and meetings, ensuring everything runs smoothly without stress.",
      link: "#",
      time: "1800",
    },
  ];
  const timeLineContent = [
    {
      heading: "Task Identification",
      details: "Determine tasks and prioritize them based on urgency.",
    },
    {
      heading: "Resource Allocation",
      details: "Assign the appropriate virtual assistant based on expertise.",
    },
    {
      heading: "Execution of Tasks",
      details:
        "Virtual assistants complete tasks as per instructions.",
    },
    {
      heading: "Progress Monitoring",
      details: "Regular check-ins to ensure tasks are on track.",
    },
    {
      heading: "Final Review and Delivery",
      details: "Review completed work for accuracy and quality.",
    },
  ];
  const whyusData = [
    {
      image: "/images/icons/data-analytics.svg",
      title: "Expert and Skilled Assistants",
      description:
        "Our virtual assistants are highly trained and skilled in various domains, ensuring your business gets top-tier support for all tasks.",
      link: "#",
      time: "600",
      bg: "white",
    },
    {
      image: "/images/icons/team.svg",
      title: "Time-Saving Efficiency",
      description:
        "By outsourcing tasks to us, you can focus on strategic business decisions while we handle day-to-day operations, increasing overall productivity.",
      link: "#",
      time: "1200",
    },
    {
      image: "/images/icons/interest-rate.svg",
      title: "Cost-Effective Solutions",
      description:
        "Our virtual assistant services offer cost savings compared to hiring in-house staff, providing high-quality support without the overhead costs.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/magnifying.svg",
      title: "Customized Services",
      description:
        "We offer tailored virtual assistant solutions that match your business requirements, ensuring a personalized approach to your needs.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
    {
      image: "/images/icons/chip.svg",
      title: "Confidentiality and Security",
      description:
        "We prioritize data security and confidentiality, ensuring that all sensitive business information is handled securely and responsibly.",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/24-hours.svg",
      title: "Seamless Communication",
      description:
        "We maintain clear and consistent communication, ensuring you stay informed about the progress of your tasks at all times.",
      link: "#",
      time: "1800",
    },
  ];
  const tab = [
    {
      title: "Why Choose Us?",
      content: [
        {
          heading: "1. Comprehensive Task Management",
          details: [
            "Handle a wide range of administrative, technical, and creative tasks.",
            "Provide support for scheduling, email management, and document preparation.",
            "Ensure timely completion and high-quality execution of tasks.",
          ],
        },
        {
          heading: "2. Scalable and Flexible Solutions",
          details: [
            "Adjust our services to meet the growing needs of your business.",
            "Scale tasks as your business demands change.",
            "Provide flexible solutions tailored to specific project requirements.",
          ],
        },
        {
          heading: "3.Dedicated and Skilled Assistants",
          details: [
            "Work with a dedicated virtual assistant trained in your business's unique requirements.",
            "Ensure the highest standards of quality and professionalism.",
            "Provide continuous training to keep assistants updated with industry trends.",
          ],
        },
       
      ],
    },
    {
      title: "FAQs",
      content: Array.from({ length: 4 }).map((_, index) => {
        const questions = [
          {
            question: "What tasks can a virtual assistant handle?",
            answer:
              "Our virtual assistants can handle a wide range of tasks including administrative support, customer service, data entry, social media management, email management, and more, depending on your business needs.",
          },
          {
            question: "How do you ensure the quality of work?",
            answer:
              "We select skilled virtual assistants who undergo rigorous training and provide ongoing support. We maintain regular check-ins and reviews to ensure that tasks are completed to your satisfaction.",
          },
          {
            question: "Are your virtual assistants available 24/7?",
            answer:
              "Yes, we offer flexible working hours to ensure that you have access to virtual assistant services at any time, according to your business needs and time zone.",
          },
          {
            question: "How do I communicate with my virtual assistant?",
            answer:
              "We provide seamless communication through email, chat, or video calls, ensuring that you stay informed and can provide instructions whenever needed.",
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
    {title:"Catalog Management", link:"/outsource-catalog-management"},
    {title:"Data Collection", link:"/data-collection-services"},
    {title:"Web Research", link:"/web-research-services"},
    {title:"Web Scraping", link:"/web-scraping-services"},
    {title:"Virtual Assistants", link:"/virtual-assistant-services"},
  ];

  return (
    <>
        <PageHead PageMeta={PageMeta} />
        <Layout>
            <BannerSection
                pagetitle="Virtual Assistants"
                title="Streamlining Your Business Processes"
                subtitle="Real Estate Property Data Collection and Data Research"
                description="Computyne helps Canada based Real Estate Company, property"
                bgimage="/images/innerbanner/baner-3.webp"
                cardimg="/images/case-study/7.jpg"
                caseLink="/case-studies/real-estate-data-collection-and-research-services"
                linkText="Succes Stories"
                breadcrumbtitle2="Data Management"
                breadcrumbtitle3="Virtual Assistants"
                breadcrumb1="/"
                breadcrumb2="/data-management-services"
                breadcrumb3="/virtual-assistant-services"
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
                                            <InnerService title="We Take Care of All Your Virtual Assistant Services Needs" solutions={solutionsData} />
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
                                            <Timeline title=" Virtual Assistant Services Workflow" content={timeLineContent} />
                                        </div>
                                    </div>    
                                </Container>
                            </div>
                            
                            <div className="stretch-container">
                                <Container>
                                    <div className="grid grid-cols-12">
                                        <div className="lg:col-span-9 md:col-span-12 col-span-12">
                                            <TabSection title="Your Reliable Partner for Virtual Assistant Services" tabData={tab} />
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
