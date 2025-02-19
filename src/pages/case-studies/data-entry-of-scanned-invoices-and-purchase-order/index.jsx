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
    //         { label: "The Company", value: " Expense Management (Software)" },
    //         { label: "Location", value: "New York, USA" },
    //         { label: "Industry", value: "Accounting & Finance" },
    //       ]
    //     },
    //     objective: {
    //       title: "The Objective",
    //       content: "Fixing up a data entry process of scanned invoices for energy bills of electricity, gas and water, to give that improved customer service experience."
    //     },
    //     challenges: {
    //       title: "The Challenges",
    //       items: [
    //         "This project was all about relocating data from scanned images into client application.",
    //         "As data entry is essential and seems easy, it can also be the cause to lot of issues for a business when human group plays a dynamic role to it.",
    //         "Human error",
    //         "Managing Supplier Data",
    //         "Data Quality Uniformity",
    //         "Unclear fields and formatting",
    //         "Slow Turnover time",
    //         "Hurry",
    //         "Misunderstanding",
    //         "Data validation",
    //         "Missing values",
    //         "Multiple-level data structures",
    //         "Data recovery",
    //         "Reporting",
    //         "Back up and audit trails",
    //         "Documentation and archiving",

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
    //         "Client selected, from a team of experienced and focused, data entry specialists, proficient in handling more than 10,0000 documents a month.",
    //         "Convenient process flow of accessing documents through FTP servers – with appropriate nomenclature and use of PDF reader & client application to treat the task logically.",
    //         "We made sure to have all documents go through rigorous audits by Auditors and Quality Check teams before providing the outputs to clients with daily reports of progress and of completed data.",
    //       ]
    //     },
    //     technology: {
    //       title: "Technology / Software Used",
    //       items: ["Understanding client necessities, data entry experts concluded on using PDF reader and dual key-in method and web based applications on given clients application through remote login facility."]
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
          "Fixing up a data entry process of scanned invoices for energy bills of electricity, gas and water, to give that improved customer service experience.",
      },
      {
        backgroundColor: "",
        subtitle: "Project Challenges",
        title: "The Challenges:",
        contentType: "list",
        content: [
          {
            icon: "/images/icons/dash.svg",
            text: "This project was all about relocating data from scanned images into client application.",
          },
          {
            icon: "/images/icons/dash.svg",
            text: "As data entry is essential and seems easy, it can also be the cause to lot of issues for a business when human group plays a dynamic role to it.",
          },
          {
            icon: "",
            text: "The Real Challenges A Data Entry Expert Faces:",
          },
          {
            icon: "/images/icons/dash.svg",
            text: "Human error",
          },
          {
            icon: "/images/icons/dash.svg",
            text: "Managing Supplier Data",
          },
          {
            icon: "/images/icons/dash.svg",
            text: "Data Quality Uniformity",
          },
          {
            icon: "/images/icons/dash.svg",
            text: "Unclear fields and formatting",
          },
          {
            icon: "/images/icons/dash.svg",
            text: "Slow Turnover time",
          },
          {
            icon: "/images/icons/dash.svg",
            text: "Hurry",
          },
          {
            icon: "/images/icons/dash.svg",
            text: "Misunderstanding",
          },
          {
            icon: "/images/icons/dash.svg",
            text: "Data validation",
          },
          {
            icon: "/images/icons/dash.svg",
            text: "Missing values",
          },
          {
            icon: "/images/icons/dash.svg",
            text: "Multiple-level data structures",
          },
          {
            icon: "/images/icons/dash.svg",
            text: "Data recovery",
          },
          {
            icon: "/images/icons/dash.svg",
            text: "Reporting",
          },
          {
            icon: "/images/icons/dash.svg",
            text: "Back up and audit trails",
          },
          {
            icon: "/images/icons/dash.svg",
            text: "Documentation and archiving",
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
        text: "Client selected, from a team of experienced and focused, data entry specialists, proficient in handling more than 10,0000 documents a month.",
        },
      {
        icon: "/images/icons/dash.svg",
        text: "Convenient process flow of accessing documents through FTP servers – with appropriate nomenclature and use of PDF reader & client application to treat the task logically.",
        },
      {
        icon: "/images/icons/dash.svg",
        text: "We made sure to have all documents go through rigorous audits by Auditors and Quality Check teams before providing the outputs to clients with daily reports of progress and of completed data.",
        },
  ],
      },
      {
        backgroundColor: "bg-[#f6f5f5]",
        title: " Technology / Software Used:",
        contentType: "list",
        extraContent: [
          { src: "/images/icons/understanding.svg", alt: "acrobat-icon" },
          { src: "/images/icons/user.svg", alt: "excel-icon" },
        ],
      },
    ];
return(
<>
<PageHead PageMeta={PageMeta} />
<Layout>
    {/* <InnerBanner
        image="/images/innerbanner/case-banner3.jpg"
        title="Data Entry of Scanned "
        title2="Invoices into Client Application"
        link1="/"
        link2="/invoice-data-entry-support-to-restaurant-expense-software"
        breadcrumb1="Home"
        breadcrumb2="Data Entry of Scanned Invoices into Client Application"
        /> */}
        <InnerBanner
                pagetitle="Client's Stories"
                title="Data Entry of Scanned Invoices into Client Application"
                subtitle="Data Support & Property Matching"
                description="Streamline your operations with our expert data entry and management services!"
                bgimage="/images/innerbanner/baner-2.webp"
                caseLink="#"
                linkText="Succes Stories"
                breadcrumbtitle2="Case Studies"
                breadcrumbtitle3="Data Entry of Scanned..."
                breadcrumb1="/"
                breadcrumb2="/case-studies"
                breadcrumb3="/data-entry-of-scanned-invoices-and-purchase-order"
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