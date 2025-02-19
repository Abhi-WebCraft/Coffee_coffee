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
    //         { label: "The Company", value: "Logistics & Supply Chain" },
    //         { label: "Location", value: " London, United Kingdom" },
    //         { label: "Industry", value: "Logistics" },
    //       ]
    //     },
    //     objective: {
    //       title: "The Objective",
    //       content: "Here the client is a logistics & supply chain company which needed assistance with administrative tasks like data entry from PDF to excel documents, creating invoice and tracking shipments and doing job postings. They also wanted us to search suitable localities to setup their warehouse and distribution centers."
    //     },
    //     challenges: {
    //       title: "The Challenges",
    //       items: [
    //         "Tracking various shipments on FedEx and invoices and keep the client updated with the information.",
    //         "Search for various cities and localities which would better suit client’s need of setting up a Warehouse and center.",
    //       ]
    //     },
    //     benefits: {
    //       title: "General Benefits",
    //       items: [
    //         "",
    //       ]
    //     },
    //     values: {
    //       title: "Value Addition",
    //       items: ["After completing the trial phase, the client was extremely impressed with the results and opted to continue with our services. Since then, the volume of work has been increased, and we have also added new resources to the team."]
    //     },
    //     solutions: {
    //       title: "The Solutions",
    //       items: [
    //         "Manually typed the data from scanned PDF files to excel in given format by using dual data entry technique.",
    //         "Tracked various shipments given to us on FedEx website using client’s login credentials.",
    //         "Posted jobs for the available recruiting posts in the company on various job posting portals.",
    //         "Conducted internet research and searched for suitable localities which would suit their criteria to set up their centers and ware house.",
    //       ]
    //     },
    //     technology: {
    //       title: "Technology / Software Used",
    //       items: ["We Used To Update The Track Of Shipments Fetched From FedEx To The Web Application Provided By Client."]
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
          "Here the client is a logistics & supply chain company which needed assistance with administrative tasks like data entry from PDF to excel documents, creating invoice and tracking shipments and doing job postings. They also wanted us to search suitable localities to setup their warehouse and distribution centers.",
      },
      {
        backgroundColor: "",
        subtitle: "Project Challenges",
        title: "The Challenges:",
        contentType: "list",
        content: [
          {
            icon: "/images/icons/dash.svg",
            text: "Tracking various shipments on FedEx and invoices and keep the client updated with the information.",
          },
          {
            icon: "/images/icons/dash.svg",
            text: "Search for various cities and localities which would better suit client’s need of setting up a Warehouse and center.",
          },
        
        ],
      },
      {
        backgroundColor: "bg-[#f6f5f5]",
        subtitle: "The Solutions",
        title: "The Solutions:",
        contentType: "list",
        content: [
          {
            icon: "/images/icons/dash.svg",
            text: "Manually typed the data from scanned PDF files to excel in given format by using dual data entry technique.",
            },
            {
              icon: "/images/icons/dash.svg",
              text: "Tracked various shipments given to us on FedEx website using client’s login credentials.",
              },
              {
                icon: "/images/icons/dash.svg",
                text: "Posted jobs for the available recruiting posts in the company on various job posting portals.",
                },
                {
                  icon: "/images/icons/dash.svg",
                  text: "Conducted internet research and searched for suitable localities which would suit their criteria to set up their centers and ware house.",
                  },
        ],
      },
     
      {
        backgroundColor: "bg-[#f6f5f5]",
        title: " Technology / Software Used:",
        contentType: "list",
        extraContent: [
          { src: "/images/icons/email-client.svg", alt: "acrobat-icon" },
          { src: "/images/icons/bill.svg", alt: "excel-icon" },
        ],
      },
    ];
return(
<>
<PageHead PageMeta={PageMeta} />
<Layout>
    {/* <InnerBanner
        image="/images/innerbanner/case-banner4.jpg"
        title="Data Entry (PDF to Excel)"
        title2="  and Web Research Support"
        link1="/"
        link2="/excel-data-entry-and-web-research-support-to-logistic-company"
        breadcrumb1="Home"
        breadcrumb2="Data Entry (PDF to Excel) and Web Research Support"
        /> */}
         <InnerBanner
                pagetitle="Client's Stories"
                title="Data Entry (PDF to Excel) and Web Research Support"
                subtitle="Data Support & Property Matching"
                description="Streamline your operations with our expert data entry and management services!"
                bgimage="/images/innerbanner/baner-10.webp"
                caseLink="#"
                linkText="Succes Stories"
                breadcrumbtitle2="Case Studies"
                breadcrumbtitle3="Data Entry (PDF..."
                breadcrumb1="/"
                breadcrumb2="/case-studies"
                breadcrumb3="/excel-data-entry-and-web-research-support-to-logistic-company"
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