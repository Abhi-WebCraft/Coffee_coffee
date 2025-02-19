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
      title: "Effortless Catalog Management Maximum Impact!",
      paragraphs: [
        "Nowadays, it has become essential for businesses to be present on the internet to succeed in the market. This calls for managing a well-maintained, up-to-date product catalog that effectively displays the goods they have got in their stores. Product catalog management outsourcing is an excellent way to maintain a database of your inventory. An intelligently designed e-catalog is not only beneficial for streamlining your business process, but it also works amazingly for expanding your customer base. You can outsource catalog management and change the way your products are represented out there in the market. It provides a dimension to your business and increases sales resulting in improved outcomes.",
        "Change your business model in this technology-driven world with catalog management outsourcing services by Computyne. Keep your business’s e-catalog upgraded and attract the right bunch of customers from anywhere in the world, and modify it as per the market scenario. Catalog management is required for a diversified range of products, including pharmaceuticals, apparel, home decor, watches, furniture, etc. Computyne provides cost-effective services for digitizing your catalog management tasks, which acts as a catalyst for driving customers to your business."
      ],
    },
  ];

  const solutionsData = [
    {
      image: "/images/icons/budget-1.svg",
      title: "ECommerce Product Data Entry Services",
      description:
        "Accurately enter product details, including descriptions, pricing, and specifications, ensuring a seamless shopping experience for your customers.",
      link: "#",
      time: "600",
      bg: "white",
    },
    {
      image: "/images/icons/pdf-1.svg",
      title: "Web Content Services",
      description:
        "Enhance your product pages with high-quality, SEO-optimized content that attracts and engages potential buyers effectively.",
      link: "#",
      time: "1200",
    },
    {
      image: "/images/icons/property.svg",
      title: "Catalog Building & Indexing Services",
      description:
        "Organize and structure your catalog efficiently, making it easier for customers to navigate and find the right products.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/checklist-3.svg",
      title: "Catalog Content Management Services",
      description:
        "Update and maintain product descriptions, specifications, and categories to keep your catalog fresh and relevant.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
    {
      image: "/images/icons/budget-1.svg",
      title: "Catalog Image Processing Services",
      description:
        "Optimize product images with editing, resizing, and enhancement for a visually appealing and professional look.",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/property.svg",
      title: "Data Entry from Parts Catalog",
      description:
        "Convert and digitize parts catalogs with accurate data entry, making information easily accessible for customers and businesses.",
      link: "#",
      time: "1800",
    },

    {
      image: "/images/icons/checklist-3.svg",
      title: "Catalog Updating & Maintenance Services",
      description:
        "Regularly update your catalog with new products, prices, and specifications to reflect market changes.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
    {
      image: "/images/icons/budget-1.svg",
      title: "Virtual Back Office Support Services",
      description:
        "Outsource administrative catalog tasks to our expert team for seamless operations and improved efficiency.",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/property.svg",
      title: "Catalog Data Processing",
      description:
        "Standardize, validate, and format product data to ensure consistency across different sales platforms.",
      link: "#",
      time: "1800",
    },
  ];
  const timeLineContent = [
    {
      heading: "Data Collection & Compilation",
      details: "Gather product details from various sources like manufacturer databases, websites, and spreadsheets.",
    },
    {
      heading: "Catalog Structuring & Indexing",
      details: "Categorize products logically for easy navigation.",
    },
    {
      heading: "Content Optimization",
      details:
        "Create compelling, SEO-friendly product descriptions to boost visibility.",
    },
    {
      heading: "Image Processing & Enhancement",
      details: "Optimize product images through resizing, retouching, and background removal.",
    },
    {
      heading: "Catalog Updating & Maintenance",
      details: "Regularly update pricing, inventory, and new product details.",
    },

    {
      heading: " Quality Check & Validation",
      details:
        "Verify all product details before publishing.",
    },
    {
      heading: "Ongoing Support & Enhancements",
      details: "Provide 24/7 support for catalog modifications and enhancements."
    },
  ];
  const whyusData = [
    {
      image: "/images/icons/data-analytics.svg",
      title: "Expert Product Data Organization",
      description:
        "We specialize in organizing and structuring your product data, ensuring seamless navigation and easy management for your business.",
      link: "#",
      time: "600",
      bg: "white",
    },
    {
      image: "/images/icons/team.svg",
      title: "Accurate and Detailed Product Listings",
      description:
        "Our team ensures precise product descriptions, specifications, and pricing to maintain the accuracy and reliability of your catalog.",
      link: "#",
      time: "1200",
    },
    {
      image: "/images/icons/interest-rate.svg",
      title: "High-Quality Image Optimization",
      description:
        "We manage and optimize product images, ensuring visually appealing catalogs that enhance customer engagement and satisfaction.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/magnifying.svg",
      title: "Customized Solutions for Your Business Needs",
      description:
        "We tailor our catalog management services to suit the unique needs of your industry, ensuring that your products are presented effectively.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
    {
      image: "/images/icons/chip.svg",
      title: "Integration Across Multiple Platforms",
      description:
        "Our services ensure seamless catalog integration across e-commerce platforms, websites, and marketplaces for consistent product visibility.",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/24-hours.svg",
      title: "Regular Updates and Maintenance",
      description:
        "We provide ongoing updates and maintenance, keeping your catalog fresh and aligned with the latest product offerings and changes.",
      link: "#",
      time: "1800",
    },
  ];
  const tab = [
    {
      title: "Why Choose Us?",
      content: [
        {
          heading: "1. Quick Results",
          details: [
            "Our skilled professionals efficiently process high-quality product catalogs, ensuring faster turnaround times for your business.",
          ],
        },
        {
          heading: "2. Regular Updates",
          details: [
            "We keep your catalog updated with the latest product advancements and offer expert consultation for optimal results.",
          ],
        },
        {
          heading: "3. Accurate Deliveries",
          details: [
            "With a team of 250+ experienced professionals, we ensure 99% accuracy in all catalog management tasks.",
          ],
        },
       

        {
          heading: "4. Advanced Technology",
          details: [
            "Leveraging the latest tools and techniques, we provide precise and high-quality catalog management solutions",
          ],
        },  {
          heading: "5. 24/7 Support",
          details: [
            "Our dedicated support team is available round the clock to assist with queries, updates, and suggestions.",
          ],
        },  {
          heading: "6. Reduced In-House Efforts",
          details: [
            "Outsourcing to Computyne lowers operational costs while ensuring seamless and professional catalog management.",
          ],
        },
      ],
    },
    {
      title: "FAQs",
      content: Array.from({ length: 4 }).map((_, index) => {
        const questions = [
          {
            question: "What is Outsourced Catalog Management?",
            answer:
              "Outsourced catalog management involves delegating the handling and upkeep of your online product catalog to a trusted partner. This ensures accurate product descriptions, pricing, and inventory updates, allowing businesses to focus on growth strategies.",
          },
          {
            question: "Why Choose an Outsourcing Partner?",
            answer:
              "Collaborating with an expert reduces operational challenges and enhances efficiency. With skilled professionals managing your catalog, you can expect consistent quality, faster updates, and seamless integration across platforms.",
          },
          {
            question: "How Does It Benefit Your Business?",
            answer:
              "Outsourcing saves time, reduces costs, and ensures data accuracy. It also improves user experience, boosting customer satisfaction and conversion rates.",
          },
          {
            question: "Why Partner With Us?",
            answer:
              "We provide tailored solutions, cutting-edge tools, and a dedicated team to manage your catalog effectively. Trust us to elevate your e-commerce presence while you focus on your core business goals.",
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
                pagetitle="Catalog Management"
                title="Streamlining Your Business Processes"
                subtitle="Invoice and Receipts Data Entry into Web Based Application"
                description="Computyne invoice processing team support Europe based "
                bgimage="/images/innerbanner/baner-14.webp"
                cardimg="/images/innerbanner/baner-15.webp"
                caseLink="/case-studies/invoice-and-receipts-data-entry-using-web-based-application"
                linkText="Succes Stories"
                breadcrumbtitle2="Data Management"
                breadcrumbtitle3="Catalog Management"
                breadcrumb1="/"
                breadcrumb2="/data-management-services"
                breadcrumb3="/outsource-catalog-management"
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
                                            <InnerService subtitle="Our Services" title="Comprehensive Catalog Management Outsourcing with Computyne" solutions={solutionsData} />
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
                                            <Timeline title="Catalog Management Services Workflow Process" content={timeLineContent} />
                                        </div>
                                    </div>    
                                </Container>
                            </div>
                            
                            <div className="stretch-container">
                                <Container>
                                    <div className="grid grid-cols-12">
                                        <div className="lg:col-span-9 md:col-span-12 col-span-12">
                                            <TabSection title="Keep your online business catalog synchronized!" tabData={tab} />
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
