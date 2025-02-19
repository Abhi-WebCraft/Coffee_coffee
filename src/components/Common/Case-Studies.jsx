import Image from "next/image";
import Link from "next/link";
import Container from "../Layout/Container";
import SectionTitle from "../Layout/SectionTitle";
const casestudies=[
    {
        link:"/case-studies/real-estate-data-entry-from-pdf-records-to-update-database",
        image:"/images/case-study/01.jpg",
        title:"Data Entry from PDF Records to Update Database",
        desc:"How a US based real estate company got accurate deed entry (date, grantor name, address, and other fields.) daily bases.",
    },
    {
        link:"/case-studies/data-entry-of-product-and-parts-from-pdf-catalogs/",
        image:"/images/case-study/02.jpg",
        title:"Data Entry of Products and Parts from PDF Catalogs",
        desc:"Computyne helps Canada based industrial parts distributor get timely data entry from PDF catalogs to spreadsheet for online parts portal.",
    },
    {
        link:"/case-studies/formatting-resume-into-uniform-structure",
        image:"/images/case-study/1.jpg",
        title:"Formatting Resume/CVs into a Uniform Structure",
        desc:"Computyne skilled CV editors helps Australia based staffing and recruiting company, format resume in clients pre-defined template within 20 minute TAT.",
    },
    {
        link:"/case-studies/resume-data-collection-services-for-usa-recruitment-consultancy",
        image:"/images/case-study/2.jpg",
        title:"Resume Data Collection From Online Portal",
        desc:"Here the client is HR Company which needed support with student resume data collection (name, education detail, contact detail etc.)",
    },
    {
        link:"/case-studies/invoice-data-entry-support-to-restaurant-expense-software",
        image:"/images/case-study/3.jpg",
        title:"Invoice Data Entry into Restaurant Software",
        desc:"How a Singapore based F&B Expense Management company got real-time invoice, purchase order, sales order, bill, receipt data entry services.",
    },
    {
        link:"/case-studies/data-entry-of-scanned-invoices-and-purchase-order",
        image:"/images/case-study/4.jpg",
        title:"Data Entry of Scanned Invoices into Client Application",
        desc:"Computyne helps USA based leading accounting company get timely data entry from scanned invoice, sales order, PO and credit note etc.",
    },
    {
        link:"/case-studies/invoice-and-receipts-data-entry-using-web-based-application",
        image:"/images/case-study/5.jpg",
        title:"Invoice and Receipts Data Entry into Web Based Application",
        desc:"Computyne invoice processing team support Europe based Expense Management Company, real-time and 24×7 invoice and receipts data entry.",
    },
    {
        link:"/case-studies/excel-data-entry-and-web-research-support-to-logistic-company",
        image:"/images/case-study/6.jpg",
        title:"Data Entry (PDF to Excel) and Web Research Support",
        desc:"Here the client is a Logistics Company which needed assistance with administrative and web research tasks from logistics document.",
    },
    {
        link:"/case-studies/real-estate-data-collection-and-research-services",
        image:"/images/case-study/7.jpg",
        title:"Real Estate Property Data Collection and Data Research",
        desc:"Computyne helps Canada based Real Estate Company, property data collection, listing data research and data entry task.",
    },
    {
        link:"/case-studies/web-research-of-online-education-courses",
        image:"/images/case-study/8.jpg",
        title:"Web Research of Educational (Executive, Short & Long Term) Courses",
        desc:"Computyne help research online programs from different university and provide back-office support to an online education web portal.",
    },
    {
        link:"/case-studies/check-processing-for-payment-processing-company",
        image:"/images/case-study/9.jpg",
        title:"Online Check Processing for Payment Processing Company",
        desc:"Computyne setting up a process of transferring data from all checks to a software/online web application within a stipulated time frame.",
    },
    {
        link:"/case-studies/scanning-and-data-entry-of-survey-forms",
        image:"/images/case-study/10.jpg",
        title:"Survey forms Scanning and Data Entry into Excel Sheets",
        desc:"Computyne helps UK based security agency, accurate data processing of global employee survey from around 24 hours firms who selected for an offline survey.",
    },
    {
        link:"/case-studies/rebate-data-entry-and-processing-from-rebate-forms",
        image:"/images/case-study/11.jpg",
        title:"Rebate Data Entry and Processing from Rebate Forms",
        desc:"Computyne support key-in information accurate and 100% quality data from soft copy rebate receipts into excel spreadsheet for a rebate service center.",
    },
    {
        link:"/case-studies/virtual-assistant-services-creating-media-contact-database",
        image:"/images/case-study/12.jpg",
        title:"Creating Media Contact Database For Marketing Company",
        desc:"Computyne helps USA based marketing company, web research and create media contact database for digital e-mail marketing.",
    },
]

export default function CaseStudies (){
    return (
        <section className="section">
            <Container>
            <div className="max-w-[1000px] mx-auto text-center mb-[50px]">
                <SectionTitle
                    title="Customer Success"
                />
            </div>
                <div className="lg:grid lg:grid-cols-3 lg:gap-10 md:grid md:grid-cols-2 md:gap-6 sm:grid sm:grid-cols-1">
                {casestudies.map((casestudies, index) =>(
                <Link key={index} href={casestudies.link}>
                <div className="case-study-card group relative overflow-hidden mb-6">
                {/* Add the group class here */}
                <div className="case-study-image  overflow-hidden relative">
                    <Image
                        src={casestudies.image}
                        alt="client-story-image"
                        width={1536}
                        height={1024}
                        className="w-full object-cover "
                        loading="lazy"
                        quality={100}
                        />
                        <div className="case-view-more absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[50%]">
                            <p>View More</p>
                        </div>
                </div>
                <div className="flex flex-col gap-2 py-8 px-4">
                <h4>{casestudies.title}</h4> 
                <p>{casestudies.desc}</p>
                </div>
                <div className="flex gap-4 items-center border-t py-4 px-4">
                    <p className="uppercase text-[15px] font-bold text-[#000]">read more</p>
                    <Image src="/images/icons/fast-forward (6).svg" alt="icons" width="15" height="15" className="w-[15px] h-[15px]"/>
                </div>        
                
            </div>
            </Link>
                ))}
                </div>
            </Container>
        </section>
    )
}