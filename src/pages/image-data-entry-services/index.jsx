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
      title: "Outsource Image Data Entry Services for Seamless Efficiency & Precision",
      paragraphs: [
        "Running a business efficiently involves managing various tasks, and image processing is one area that demands significant time and effort. To save both, outsourcing image data entry services to experts is the ideal solution.Computyne ensures that your image data is well-organized and optimized, maintaining image quality while processing bulk data. ",
        "Computyne stands out as a trusted partner for outsourcing image data entry services. Our team excels in processing high-quality images while ensuring the confidentiality of your data. We specialize in converting large volumes of image data into usable formats, optimizing images for easy searchability, and enhancing accessibility. From adding keywords, captions, and tags to transforming data from various formats like RTF, PDF, PNG, TIF, and JPEG into XHTML, HTML, and XML, we handle it all with precision. Trust us to simplify and streamline your image data management needs efficiently and cost-effectively.",
      ],
    },
  ];

  const solutionsData = [
    {
      image: "/images/icons/budget-1.svg",
      title: "Image Labeling",
      description:
        "Assigning accurate, searchable labels to images to improve organization and facilitate easy retrieval and categorization.",
      link: "#",
      time: "600",
      bg: "white",
    },
    {
      image: "/images/icons/pdf-1.svg",
      title: " BIB and Chest Number Tagging",
      description:
        "Attaching unique BIB and chest numbers to images for event organization and participant identification in sports or competitions.",
      link: "#",
      time: "1200",
    },
    {
      image: "/images/icons/property.svg",
      title: "Image Storage and Retrieval Services",
      description:
        "Efficiently storing and retrieving images using organized databases, ensuring quick access and secure storage solutions.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/checklist-3.svg",
      title: "Image Analysis Services",
      description:
        "Examining and extracting useful data from images to derive insights and support business decision-making processes.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
    {
      image: "/images/icons/budget-1.svg",
      title: " Image Capturing",
      description:
        "Capturing high-quality images from various sources for further processing, storage, or use in digital platforms.",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/property.svg",
      title: "Image Optimization and Conversion",
      description:
        "Enhancing image quality and converting files into various formats for improved performance and compatibility across platforms.",
      link: "#",
      time: "1800",
    },

    {
      image: "/images/icons/budget-1.svg",
      title: "Data Entry from Receipt Images",
      description:
        "Transferring essential data from scanned receipt images into digital formats for easy tracking and record-keeping.",
      link: "#",
      time: "600",
      bg: "white",
    },
    {
      image: "/images/icons/pdf-1.svg",
      title: " Image Sorting",
      description:
        "Organizing and classifying images based on specific attributes for efficient management and streamlined workflow.",
      link: "#",
      time: "1200",
    },
    {
      image: "/images/icons/property.svg",
      title: "Data Entry into Preferred File Format",
      description:
        "Converting and entering image data into your desired file formats, ensuring seamless integration with your systems.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/checklist-3.svg",
      title: " Image Keying and Indexing",
      description:
        "Systematically entering key information and indexing images for easy search, retrieval, and processing.",
      link: "#",
      time: "600",
      bg: "#fff",
    },

    {
      image: "/images/icons/property.svg",
      title: " Image Data Analysis",
      description:
        "Analyzing image data to identify trends, patterns, and actionable insights for better business planning and strategy.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/checklist-3.svg",
      title: " Data Entry from Scanned Images",
      description:
        "Extracting and inputting data from scanned images into digital formats for quick access, sharing, and record-keeping.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
  ];
  const timeLineContent = [
    {
      heading: "Image Collection",
      details: "Gather images from various reliable sources.",
    },
    {
      heading: "Data Extraction",
      details: "Extract relevant information from collected images",
    },
    {
      heading: "Data Validation",
      details:
        "Verify extracted data for accuracy and consistency.",
    },
    {
      heading: "Data Organization",
      details: "Structure and organize data for seamless use.",
    },
    {
      heading: "Final Review and Delivery",
      details: "Perform quality checks and deliver accurate results.",
    },
  ];
  const whyusData = [
    {
      image: "/images/icons/data-analytics.svg",
      title: "Experienced Professionals",
      description:
        "Our team of skilled experts ensures precise and efficient data entry, even for complex image data.",
      link: "#",
      time: "600",
      bg: "white",
    },
    {
      image: "/images/icons/team.svg",
      title: "Advanced Technology",
      description:
        "We leverage cutting-edge tools and software to extract accurate information from images quickly and effectively.",
      link: "#",
      time: "1200",
    },
    {
      image: "/images/icons/interest-rate.svg",
      title: "Customized Solutions",
      description:
        "Tailored services designed to meet the unique requirements of various industries, including healthcare, retail, and finance.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/magnifying.svg",
      title: "Data Security",
      description:
        "We implement strict confidentiality measures, secure file transfer protocols, and encryption to safeguard your sensitive information.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
    {
      image: "/images/icons/chip.svg",
      title: "Timely Delivery",
      description:
        "Our efficient processes and dedicated team ensure quick turnaround times without compromising on quality.",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/24-hours.svg",
      title: "Cost-Effective Services",
      description:
        "High-quality image data entry services offered at competitive prices, delivering excellent value for your investment.",
      link: "#",
      time: "1800",
    },
  ];
  const tab = [
    {
      title: "Why Choose Us?",
      content: [
        {
          heading: "1.Precise Results and Cost-Effective Plans",
          details: [
            "Affordable pricing with no compromise on quality.",
            "High accuracy in all image data entry tasks.",
          ],
        },
        {
          heading: "2.Competitive Pricing",
          details: [
            " Offers cost-effective outsourcing solutions",
            "Provides great value without sacrificing quality",
          ],
        },
        {
          heading: "3. Result-Driven Approach",
          details: [
            "Experts ensure high-quality, precise processing of large image volumes",
            "Consistent focus on achieving optimal outcomes",
          ],
        },

        {
          heading: "4.Secured Services",
          details: [
            " Strong policies to protect your database’s confidentiality",
            "Focused on implementing robust security measures for data protection",
          ],
        },
        {
          heading: "5.Quick Outcomes",
          details: [
            "    Efficient team ensures fast turnaround without losing accuracy",
            " Meets deadlines while maintaining high quality",
          ],
        },
        {
          heading: "6. Expert Supervision",
          details: [
            " Skilled and experienced workforce",
            "Masters of image data entry services ensuring superior quality",
          ],
        },
        {
          heading: "7. 24/7 Support",
          details: [
            "  Round-the-clock assistance available for client queries",
            "Dedicated team for seamless image data entry project management",
          ],
        },
       
      ],
    },
    {
      title: "FAQs",
      content: Array.from({ length: 4 }).map((_, index) => {
        const questions = [
          {
            question: "What Types of Image Data Entry Services Do You Offer?",
            answer:
              "We provide comprehensive services, including data extraction from scanned documents, product catalogs, handwritten notes, and more, ensuring accurate and organized data for your business needs.",
          },
          {
            question: "How Do You Ensure Data Accuracy?",
            answer:
              "Our skilled professionals use advanced tools and manual verification to ensure precise data extraction. Multiple quality checks are conducted to eliminate errors and deliver reliable results.",
          },
          {
            question: "What Measures Do You Take for Data Security?",
            answer:
              "We prioritize your data's confidentiality by implementing secure file transfer methods, encryption protocols, and strict access controls. Confidentiality agreements further ensure your information remains secure.",
          },
          {
            question: "Can Your Services Be Customized?",
            answer:
              "Yes, our image data entry solutions are tailored to meet your unique requirements. We adapt workflows and offer scalable options to handle projects of any size or complexity.",
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
                pagetitle="Image Data Entry"
                title="Streamlining Your Business Processes"
                subtitle="Formatting Resume/CVs into a Uniform Structure"
                description="Computyne skilled CV editors helps Australia based staffing and recruiting company"
                bgimage="/images/innerbanner/baner-14.webp"
                cardimg="/images/case-study/1.jpg"
                caseLink="/case-studies/formatting-resume-into-uniform-structure"
                linkText="Succes Stories"
                breadcrumbtitle2="Data Entry"
                breadcrumbtitle3="Image Data Entry"
                breadcrumb1="/"
                breadcrumb2="/data-entry-services"
                breadcrumb3="/image-data-entry-services"
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
                                            <InnerService title="Efficient Image Data Entry Services Tailored to Your Business Needs" solutions={solutionsData} />
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
                                            <Timeline title="Image Data Entry Services Workflow" content={timeLineContent} />
                                        </div>
                                    </div>    
                                </Container>
                            </div>
                            
                            <div className="stretch-container">
                                <Container>
                                    <div className="grid grid-cols-12">
                                        <div className="lg:col-span-9 md:col-span-12 col-span-12">
                                            <TabSection title="Unmatched Precision, Security, and Support" tabData={tab} />
                                        </div>
                                    </div>    
                                </Container>       
                            </div>
                            <div className="stretch-container">
                                <Container>
                                    <div className="grid grid-cols-12">
                                        <div className="lg:col-span-9 md:col-span-12 col-span-12">
                                        <IndustryServe  services={servicedata}/>
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
