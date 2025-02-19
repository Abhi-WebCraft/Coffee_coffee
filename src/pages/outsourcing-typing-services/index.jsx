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
      title: "Precision Typing Solutions for a Digital World",
      paragraphs: [
        "In today’s fast-paced business environment, converting handwritten or printed documents into secure digital formats is essential for efficiency. Computyne specializes in providing top-notch data typing services, ensuring accuracy, speed, and cost-effectiveness for businesses worldwide.",
        "With over a decade of experience, we have successfully delivered outsourcing typing services across various industries, including medical, legal, media, publishing, academic, government, and banking. Our team of 250+ skilled professionals excels in data typing, word processing, and manual data keying, ensuring seamless document conversion with unmatched precision.",
        "Outsource typing services to Computyne and experience a streamlined, hassle-free process that enhances productivity and minimizes costs. Our commitment to excellence makes us the trusted partner for businesses seeking high-quality data typing solutions."
      ],
    },
  ];

  const solutionsData = [
    {
      image: "/images/icons/budget-1.svg",
      title: "Typing Documents to Word or Excel",
      description:
        "Convert printed or handwritten documents into accurate Word or Excel formats for easy editing, organization, and data management.",
      link: "#",
      time: "600",
      bg: "white",
    },
    {
      image: "/images/icons/pdf-1.svg",
      title: "Resume Formatting",
      description:
        "Professionally format resumes with structured layouts, ensuring clarity, readability, and industry-standard alignment for better job opportunities",
      link: "#",
      time: "1200",
    },
    {
      image: "/images/icons/property.svg",
      title: "Typing Books and Manuals",
      description:
        "Digitize books and manuals with precision, preserving content structure, readability, and formatting for professional and personal use.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/checklist-3.svg",
      title: "Typing of Property Documents",
      description:
        " Accurately type and format property-related documents, ensuring structured data for legal, financial, and real estate records.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
    {
      image: "/images/icons/budget-1.svg",
      title: "Typing of Handwritten Notes and Reports",
      description:
        "Transform handwritten notes and reports into digital, well-organized documents, enhancing accessibility and efficiency.",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/property.svg",
      title: "PDF Documents to Type Into MS Word & Formatting",
      description:
        "Convert PDF files into editable Word documents while maintaining proper formatting, fonts, and layout consistency.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/budget-1.svg",
      title: "Manuscripts Typing",
      description:
        "Accurately type and format manuscripts, ensuring proper structure for authors, researchers, and publishers.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/checklist-3.svg",
      title: "Historical Documents Typing",
      description:
        "Digitize historical records while preserving their originality and accuracy for research, archiving, or publication purposes.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/property.svg",
      title: "Typing of Legal Documents",
      description:
        "Transcribe legal contracts, agreements, and court documents with precision, ensuring compliance with industry standards.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/checklist-3.svg",
      title: "Manual Keying of Invoices, Bills or Receipts",
      description:
        "Enter invoice, bill, and receipt data manually into digital formats, ensuring accuracy and easy financial tracking.",
      link: "#",
      time: "1800",
    },
  ];
  const timeLineContent = [
    {
      heading: "Initial Consultation",
      details: "Understand client needs and define project requirements.",
    },
    {
      heading: "Data Collection",
      details: "Gather relevant data for accurate processing.",
    },
    {
      heading: "Typing and Data Entry",
      details:
        "Perform typing tasks with precision and efficiency.",
    },
    {
      heading: "Quality Check",
      details: "Review data for errors and ensure accuracy.",
    },
    {
      heading: "Final Delivery",
      details: "Submit completed work within the agreed timeframe.",
    },
  ];
  const whyusData = [
    {
      image: "/images/icons/data-analytics.svg",
      title: "Highly Skilled Typists",
      description:
        "Our experienced professionals deliver fast, accurate typing services, ensuring your data is processed efficiently.",
      link: "#",
      time: "600",
      bg: "white",
    },
    {
      image: "/images/icons/team.svg",
      title: "Cost-Effective Solutions",
      description:
        "We provide affordable pricing tailored to your needs, delivering high-quality results within your budget.",
      link: "#",
      time: "1200",
    },
    {
      image: "/images/icons/interest-rate.svg",
      title: "Timely Delivery",
      description:
        "We understand the importance of deadlines, and ensure every project is completed and delivered on time.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/magnifying.svg",
      title: "Data Security",
      description:
        "We implement strict security measures to protect your confidential information, maintaining your trust.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
    {
      image: "/images/icons/chip.svg",
      title: "Customized Services",
      description:
        "Our services are flexible and can be tailored to meet the specific requirements of your project. ",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/24-hours.svg",
      title: "Unmatched Accuracy",
      description:
        "We focus on precision, ensuring every data entry task is error-free and of the highest quality.",
      link: "#",
      time: "1800",
    },
  ];
  const tab = [
    {
      title: "Why Choose Us?",
      content: [
        {
          heading: "1.Highly Skilled Professionals",
          details: [
            "Our experienced data typing specialists handle large volumes of data efficiently while maintaining high accuracy and quality."
          ],
        },
        {
          heading: "2. Quality Delivery",
          details: [
            "We ensure 99% accuracy in all outsourcing typing services through thorough data analysis and quality control measures.",
          ],
        },
        {
          heading: "3.Quick Turnaround",
          details: [
            " Our team is proficient in delivering precise document typing services within short deadlines without compromising quality.",
          ],
        },
        {
          heading: "4.Cost-Effective Solution",
          details: [
            "We offer competitive pricing, fast service, and 24/7 support, making Computyne the ideal partner for outsourcing typing services.",
          ],
        },
        {
          heading: "5.Secured Data",
          details: [
            " We prioritize data confidentiality by using safeguarded servers and strict security protocols to protect your sensitive information.",
          ],
        },
        {
          heading: "4.Reduced Efforts",
          details: [
            "Outsource typing services to focus on core business activities while saving time, effort, and operational costs.",
          ],
        },
       
      ],
    },
    {
      title: "FAQs",
      content: Array.from({ length: 4 }).map((_, index) => {
        const questions = [
          {
            question: "What services do you offer?",
            answer:
              "We offer a wide range of typing services, including data entry, document transcription, and PDF conversions.",
          },
          {
            question: "How do you ensure data security?",
            answer:
              "We implement strict security measures, including encrypted file transfers and confidentiality agreements to protect your data.",
          },
          {
            question: "What industries do you serve?",
            answer:
              "Our services cater to various industries, including healthcare, finance, retail, and legal, ensuring customized solutions.",
          },
          {
            question: "What is your turnaround time?",
            answer:
              "We prioritize timely delivery, ensuring all projects are completed within your specified deadlines without compromising quality.",
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
                pagetitle="Typing Services"
                title="Streamlining Your Business Processes"
                subtitle="Data Support & Property Matching"
                description="Computyne helps USA based leading accounting company "
                bgimage="/images/innerbanner/banner-01.jpg"
                cardimg="/images/case-study/4.jpg"
                caseLink="/case-studies/data-entry-of-scanned-invoices-and-purchase-order"
                linkText="Succes Stories"
                breadcrumbtitle2="Data Entry"
                breadcrumbtitle3="Typing Services"
                breadcrumb1="/"
                breadcrumb2="/data-entry-services"
                breadcrumb3="/outsourcing-typing-services"
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
                                            <InnerService title="Complete Outsourcing Typing Services Solution" solutions={solutionsData} />
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
                                            <Timeline title="Outsourcing Typing Services Workflow" content={timeLineContent} />
                                        </div>
                                    </div>    
                                </Container>
                            </div>
                            
                            <div className="stretch-container">
                                <Container>
                                    <div className="grid grid-cols-12">
                                        <div className="lg:col-span-9 md:col-span-12 col-span-12">
                                            <TabSection title="Delivering Accuracy, Speed, and Security in Every Keystroke!" tabData={tab} />
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
