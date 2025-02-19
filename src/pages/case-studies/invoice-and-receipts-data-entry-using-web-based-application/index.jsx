import PageHead from "@/components/Layout/PageHead";
import Layout from "@/components/Layout/Layout";
import Footercta from '@/components/Common/Footercta';
import InnerBanner from "@/components/Innerpagedesign/InnerBanner";
import Form from '@/components/NewHome/Form';
import ContactForm from "@/components/Common/ContactForm";
import CaseTemplate from "../../../components/Common/CaseTemplate";
export default function RealEstate ({referrer }){
console.log(referrer)
const PageMeta = 
        {
        title: "Computyne",
        description:"New Webiste"
    }
    // const caseData = {
    //     clientProfile: {
    //       title: "Client Profile",
    //       details: [
    //         { label: "The Company", value: "Travel Expense Management" },
    //         { label: "Location", value: "Spain, Europe" },
    //         { label: "Industry", value: " Finance & Expense Management" },
    //       ]
    //     },
    //     objective: {
    //       title: "The Objective",
    //       content: "When a leading European customer outsourced the receipt and invoice data capture process completely to us, we needed to capture information from the scanned receipts and invoices and input into their web application."
    //     },
    //     challenges: {
    //       title: "The Challenges",
    //       items: [
    //         "Relocating the information from scanned receipt and input it into the respective fields of an application.",
    //         "Meeting the short TAT of 15 minutes of a receipt after arriving in an application.",
    //         "Optimum level of accuracy as it contains fields for amount and date, as any mistake would result in financial damage to the client.",
    //         "Working in specific time zone as per the clients requirement.",
    //       ]
    //     },
    //     benefits: {
    //       title: "General Benefits",
    //       items: [
    //         "Dual checking of the entered data to ensure a accuracy rate of 99.99%",
    //         "Multiple rounds of quality assurance to ensure high quality data",
    //         "Client received reliable data that translated directly into bottom-line savings.",
    //         "The significance and accuracy of information increased as the size and volume of project increased.",
    //       ]
    //     },
    //     values: {
    //       title: "Value Addition",
    //       items: ["After completing the trial phase, the client was extremely impressed with the results and opted to continue with our services. Since then, the volume of work has been increased, and we have also added new resources to the team."]
    //     },
    //     solutions: {
    //       title: "The Solutions",
    //       items: [
    //         "We trained a devoted team of professionals as per the guidelines given by the client for each and every field present on an invoice or receipt.",
    //         "We made sure that enough resources are working on the receipt capture so the workload is completed without getting the backlog which would delay in delivery time.",
    //         "Created custom shifts so the specific time zone is matched and work is done as per client’s requirement.",
    //         "The extensive training given to team resulted in better accuracy of the data that’s captured by the team.",
    //       ]
    //     },
    //     technology: {
    //       title: "Technology / Software Used",
    //       items: ["We were given web based application for the data entry of receipts and invoices."]
    //     },
        
    //   };
      
const caseStudyData = [
  {
    backgroundColor: "",
    subtitle: "The Client",
    title: "A Management Consulting Firm in the Energy Sector",
    contentType: "text",
    content:
      "Our client is based in the United States and specializes in delivering strategic and operational excellence to enterprises.",
  },
  {
    backgroundColor: "bg-[#f6f5f5]",
    subtitle: "Project Objective",
    title: "The Objective:",
    contentType: "text",
    content:
      "When a leading European customer outsourced the receipt and invoice data capture process completely to us, we needed to capture information from the scanned receipts and invoices and input into their web application.",
  },
  {
    backgroundColor: "",
    subtitle: "Project Challenges",
    title: "The Challenges:",
    contentType: "list",
    content: [
      {
        icon: "/images/icons/dash.svg",
        text: "Relocating the information from scanned receipt and input it into the respective fields of an application.",
      },
      {
        icon: "/images/icons/dash.svg",
        text: "Meeting the short TAT of 15 minutes of a receipt after arriving in an application.",
      },
      {
        icon: "/images/icons/dash.svg",
        text: "Optimum level of accuracy as it contains fields for amount and date, as any mistake would result in financial damage to the client.",
      },
      {
        icon: "/images/icons/dash.svg",
        text: "Working in specific time zone as per the clients requirement.",
      },
    ],
  },
  {
    backgroundColor: "bg-[#f6f5f5]",
    subtitle: "General Benefits",
    title: "General Benefits:",
    contentType: "list",
    content: [
      {
        icon: "/images/icons/dash.svg",
        text: "Dual checking of the entered data to ensure a accuracy rate of 99.99%",
        },
        {
          icon: "/images/icons/dash.svg",
          text: "Multiple rounds of quality assurance to ensure high quality data",
          },
          {
            icon: "/images/icons/dash.svg",
            text: "Client received reliable data that translated directly into bottom-line savings.",
            },
            {
              icon: "/images/icons/dash.svg",
              text: "The significance and accuracy of information increased as the size and volume of project increased.",
              },
    ],
  },
 
  {
    backgroundColor: "",
    subtitle: "The Solutions",
    title: "The Solutions:",
    contentType: "list",
    content: [
  {
    icon: "/images/icons/dash.svg",
    text: "We trained a devoted team of professionals as per the guidelines given by the client for each and every field present on an invoice or receipt.",
    },
  {
    icon: "/images/icons/dash.svg",
    text: "We made sure that enough resources are working on the receipt capture so the workload is completed without getting the backlog which would delay in delivery time.",
    },
  {
    icon: "/images/icons/dash.svg",
    text: "Created custom shifts so the specific time zone is matched and work is done as per client’s requirement.",
    },
    {
      icon: "/images/icons/dash.svg",
      text: "The extensive training given to team resulted in better accuracy of the data that’s captured by the team.",
      },
],
  },
  {
    backgroundColor: "bg-[#f6f5f5]",
    title: " Technology / Software Used:",
    contentType: "list",
    extraContent: [
      { src: "/images/icons/understanding.svg", alt: "acrobat-icon" },
      { src: "/images/icons/bill.svg", alt: "excel-icon" },
    ],
  },
];
return(
<>
<PageHead PageMeta={PageMeta} />
<Layout>
    {/* <InnerBanner
        image="/images/innerbanner/case-banner6.jpg"
        title="Invoice and Receipts Data Entry"
        title2=" into Customer Web Based Application"
        link1="/"
        link2="/invoice-and-receipts-data-entry-using-web-based-application"
        breadcrumb1="Home"
        breadcrumb2="Invoice and Receipts Data Entry into Web Based Application"
        /> */}
        <InnerBanner
                pagetitle="Client's Stories"
                title="Invoice and Receipts Data Entry into Customer Web Based Application"
                subtitle="Data Support & Property Matching"
                description="Streamline your operations with our expert data entry and management services!"
                bgimage="/images/innerbanner/baner-12.webp"
                caseLink="#"
                linkText="Succes Stories"
                breadcrumbtitle2="Case Studies"
                breadcrumbtitle3="Invoice and Receipts..."
                breadcrumb1="/"
                breadcrumb2="/case-studies"
                breadcrumb3="/invoice-and-receipts-data-entry-using-web-based-application"
                />
      <CaseTemplate sections={caseStudyData} />
    {/* <ContactForm/>
    <Footercta/> */}
    <div className="pb-[100px]">
        <Form/>
    </div>
</Layout>
</>
)
}