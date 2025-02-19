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
      title: "Transforming Resumes, Elevating Careers!",
      paragraphs: [
        "Resumes play a crucial role in recruitment, acting as the gateway to career opportunities. However, managing and formatting bulk resumes can be time-consuming for agencies. Outsourcing resume formatting and processing services ensures uniformity, enhances candidate selection efficiency, and maintains a well-organized database.",
        "With advanced technology, Computyne specializes in transforming varied resume formats into structured, professional layouts. Our expertise helps recruitment firms handle massive resume databases efficiently while maintaining accuracy. We cater to staffing agencies, HR firms, recruiters, and job boards, offering seamless resume creation, formatting, data collection, and modifications.",
        "By outsourcing resume data entry services to Computyne, businesses can reduce operational costs, save time, and focus on core recruitment activities. Let us simplify your hiring process with precision and professionalism!"
      ],
    },
    
  ];

  const solutionsData = [
    {
      image: "/images/icons/budget-1.svg",
      title: "Layout Design and Restructuring Resumes",
      description:
        "We create visually appealing, structured layouts to enhance readability and ensure a professional presentation.",
      link: "#",
      time: "600",
      bg: "white",
    },
    {
      image: "/images/icons/pdf-1.svg",
      title: "Typesetting and Formatting of Resumes",
      description:
        "Our experts standardize fonts, alignments, and styles to maintain a consistent and polished resume format.",
      link: "#",
      time: "1200",
    },
    {
      image: "/images/icons/property.svg",
      title: "Placing Information Under Appropriate Headers",
      description:
        " Key details are organized under relevant sections for easy navigation and better understanding.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/checklist-3.svg",
      title: "Resume Data Processing",
      description:
        "We digitize and process resume data efficiently, ensuring quick access and systematic record-keeping.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
    {
      image: "/images/icons/budget-1.svg",
      title: "Resume Standard Font Styles and Sizes",
      description:
        " We implement industry-approved font styles and sizes to improve readability and maintain professional aesthetics.",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/property.svg",
      title: "CV Structuring and Improving the Phrases",
      description:
        "Our team refines CV content, ensuring clarity, conciseness, and impactful phrasing.",
      link: "#",
      time: "1800",
    },

    {
      image: "/images/icons/budget-1.svg",
      title: "Resume Document Margin Corrections and Realignment",
      description:
        "Margins and alignments are adjusted for a neat, symmetrical, and visually balanced resume format.",
      link: "#",
      time: "600",
      bg: "white",
    },
    {
      image: "/images/icons/pdf-1.svg",
      title: "Resume Collection and Resume Data Collection",
      description:
        "We gather and process critical resume details, such as candidate name, education, and experience, for an organized database.",
      link: "#",
      time: "1200",
    },
  ];
  const timeLineContent = [
    {
      heading: "Initial Consultation",
      details: "Discuss resume goals and gather necessary information.",
    },
    {
      heading: "Resume Review and Analysis",
      details: "Analyze current resume and identify areas for improvement.",
    },
    {
      heading: "Formatting and Customization",
      details:
        "Apply industry-specific formatting and enhance resume structure.",
    },
    {
      heading: "Proofreading and Editing",
      details: "Review for grammar, spelling, and formatting errors.",
    },
    {
      heading: "Final Delivery",
      details: "Deliver the polished, formatted resume within the agreed timeframe.",
    },
  ];
  const whyusData = [
    {
      image: "/images/icons/data-analytics.svg",
      title: "Expert Formatting and Design",
      description:
        "We specialize in creating well-structured, visually appealing resumes that make a lasting impression. Our expert designers ensure your resume highlights key achievements in a clean, organized format.  ",
      link: "#",
      time: "600",
      bg: "white",
    },
    {
      image: "/images/icons/team.svg",
      title: "ATS-Optimized Resumes",
      description:
        "Our resumes are designed to pass Applicant Tracking Systems (ATS), ensuring your resume is seen by recruiters and hiring managers. We use the latest techniques to optimize your resume for these systems..",
      link: "#",
      time: "1200",
    },
    {
      image: "/images/icons/interest-rate.svg",
      title: "Industry-Specific Customization",
      description:
        "We tailor your resume to meet the specific requirements of your industry. Whether you're in IT, healthcare, or finance, we ensure your resume aligns with industry standards and expectations.",
      link: "#",
      time: "1800",
    },
    {
      image: "/images/icons/magnifying.svg",
      title: "Error-Free Content",
      description:
        "We offer thorough proofreading and editing services, ensuring your resume is free from any spelling, grammar, or formatting errors. A polished resume reflects professionalism and attention to detail.",
      link: "#",
      time: "600",
      bg: "#fff",
    },
    {
      image: "/images/icons/chip.svg",
      title: "Fast Turnaround Time",
      description:
        "We understand the urgency of job applications. Our team works efficiently to deliver your formatted resume within the agreed timeline, ensuring you never miss an opportunity.",
      link: "#",
      time: "1200",
      bg: "white",
    },
    {
      image: "/images/icons/24-hours.svg",
      title: "Affordable and Value-Driven Services",
      description:
        "Our resume formatting services offer high-quality results at competitive prices, ensuring excellent value for your investment. We strive to provide results that help you stand out and land your dream job.",
      link: "#",
      time: "1800",
    },
  ];
  const tab = [
    {
      title: "Why Choose Us?",
      content: [
        {
          heading: "1. Competitive Budget Pricing ",
          details: [
            " Our cost-effective solutions help you cut operational expenses while maintaining high-quality resume formatting services.",
          ],
        },
        {
          heading: "2.Quality Support",
          details: [
            "We format resumes to align with industry standards, ensuring a polished and professional presentation for every candidate.",
          ],
        },
        {
          heading: "3.24/7 Availability",
          details: [
            "Our dedicated team works round-the-clock, delivering bulk resume processing with speed and efficiency.",
          ],
        },
        {
          heading: "4.Accurate Results",
          details: [
            "A skilled quality assurance team ensures error-free resumes, maintaining high accuracy in data formatting and structuring.",
          ],
        },
        {
          heading: "5.Highly Skilled Professionals",
          details: [
            "Our experienced professionals handle large-scale resume formatting projects with precision and expertise.",
          ],
        },
        {
          heading: "6.Promise for Confidentiality",
          details: [
            "As an ISO & GDPR-certified company, we guarantee data security with advanced protection measures to prevent breaches.",
          ],
        },
      ],
    },
    {
      title: "FAQs",
      content: Array.from({ length: 4 }).map((_, index) => {
        const questions = [
          {
            question: "Professional Resume Formatting",
            answer:
              "We specialize in creating clear, concise, and visually appealing resumes. Our expert team ensures your resume is formatted for maximum impact, highlighting your skills, experience, and accomplishments in a clean, organized layout.",
          },
          {
            question: "ATS-Compatible Resumes",
            answer:
              "Our resumes are designed with ATS (Applicant Tracking Systems) in mind, ensuring they are optimized to pass through automated screening processes. We include industry-relevant keywords and use the right structure for optimal compatibility.",
          },
          {
            question: "Tailored to Your Industry",
            answer:
              "Whether you’re in IT, healthcare, or finance, we customize your resume according to industry-specific standards. This ensures that your resume meets the expectations of hiring managers and recruiters in your field.",
          },
          {
            question: "Error-Free and Polished Content",
            answer:
              "We meticulously proofread and edit every resume, eliminating any spelling, grammar, or formatting errors. Our attention to detail ensures your resume is professional and ready for submission to potential employers.",
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
                pagetitle="Resume Processing"
                title="Streamlining Your Business Processes"
                subtitle="Rebate Data Entry and Processing from Rebate Forms"
                description="Computyne support key-in information accurate and 100%"
                bgimage="/images/innerbanner/baner-18.webp"
                cardimg="/images/case-study/11.jpg"
                caseLink="/case-studies/rebate-data-entry-and-processing-from-rebate-forms"
                linkText="Succes Stories"
                breadcrumbtitle2="Data Processing"
                breadcrumbtitle3="Resume Processing"
                breadcrumb1="/"
                breadcrumb2="/data-processing-services"
                breadcrumb3="/resume-formatting-and-processing-services"
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
                                            <InnerService title="Resume Formatting & Processing Services" subtitle="Perfectly Formatted Resumes for a Professional Edge!" solutions={solutionsData} />
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
                                            {/* <Timeline title="Resume Formatting and Processing Services Workflow" content={timeLineContent} /> */}
                                        </div>
                                    </div>    
                                </Container>
                            </div>
                            
                            <div className="stretch-container">
                                <Container>
                                    <div className="grid grid-cols-12">
                                        <div className="lg:col-span-9 md:col-span-12 col-span-12">
                                            <TabSection title="Your Trusted Partner in Resume Formatting!" tabData={tab} />
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
