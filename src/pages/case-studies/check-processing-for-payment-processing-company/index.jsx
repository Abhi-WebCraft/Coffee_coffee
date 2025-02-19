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
        "Setting up a process of transferring data from all checks to a software/online web application within a stipulated time frame. This is to be followed with verifications of the SLF rejected by the OCR, payee and the amounts in cash and studs.",
      },
      {
        backgroundColor: "",
        subtitle: "Project Challenges",
        title: "The Challenges:",
        contentType: "list",
        content: [
          {
            icon: "/images/icons/dash.svg",
            text: "Highlighting efficiency and keeping the cost low while providing improved quality as demanded by customers.",
          },
          {
            icon: "/images/icons/dash.svg",
            text: "To plan the batch of data entry experts, well versed with financials of a foreign country",
          },
          {
            icon: "/images/icons/dash.svg",
            text: "Verify SLF rejected by OCR, payees and amounts in cash as well as studs – simultaneously.",
          },
          {
            icon: "/images/icons/dash.svg",
            text: "Enter the data in the software in a given time frame, with zero errors.",
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
            text: "Accurate check processing banged with online data entry streamlined the payment observing for multiple plans, divisions & organizations – as per client requirements.",
            },
            {
              icon: "/images/icons/dash.svg",
              text: "Final results were highly cost-effective and timely.",
                    },
            {
              icon: "/images/icons/dash.svg",
              text: "Errors and inconsistencies in the entries were mitigated by 45% through multi-layered quality check process.",
              },
            {
              icon: "/images/icons/dash.svg",
              text: "The activity helped the client flow in deliverance of successful premium fundraising and membership projects and programs to our various clients.",
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
        text: "With the approval of client workflow was discussed, designed, developed, where online data entry operators would enter all the data from the checks to a software/web based application in a given time frame.",
        },
      {
        icon: "/images/icons/dash.svg",
        text: "Assigned 15 operators on the project who made entries of more than 140,000 checks daily.",
        },
      {
        icon: "/images/icons/dash.svg",
        text: "Project was difficult involving high risks; hence to reduce unwarranted dependencies and implementation errors, we established a smooth communication channel between key staff members to comprehend the existing data systems, as well as their current and future business requirements.",
        },
        {
          icon: "/images/icons/dash.svg",
          text: "The final entries were thoroughly checked for any inconsistencies or problems. Issues found were handed over to concerned operator for rectification.",
              },

        {
          icon: "/images/icons/dash.svg",
          text: "Data Entry Operators Performed Enlisted Task:",
        },
          {
            icon: "/images/icons/dash.svg",
            text: "Scan Line Fix – Verify the SLF rejected by the OCR system.",
          },
        {
          icon: "/images/icons/dash.svg",
          text: "Payee Verification – Verify the payee.",
        },
        {
          icon: "/images/icons/dash.svg",
          text: "Amount Entry – Enter the check amount.",
        },
              {
        icon: "/images/icons/dash.svg",
        text: "Date Entry – Enter the check date.",
        },
        {
          icon: "/images/icons/dash.svg",
          text: "Stub Entry – Enter the stub amount",
        },
              {
        icon: "/images/icons/dash.svg",
        text: "Balancing – Cross verify the amounts in check and stubs.",
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
              <InnerBanner
                pagetitle="Client's Stories"
                title="Online Check Processing for Payment Processing Company"
                subtitle="Data Support & Property Matching"
                description="Streamline your operations with our expert data entry and management services!"
                bgimage="/images/innerbanner/baner-8.webp"
                caseLink="#"
                linkText="Succes Stories"
                breadcrumbtitle2="Case Studies"
                breadcrumbtitle3="Online Check Processing"
                breadcrumb1="/"
                breadcrumb2="/case-studies"
                breadcrumb3="/check-processing-for-payment-processing-company"
                />
         <CaseTemplate  sections={caseStudyData}/>
    <div className="pb-[100px]">
        <Form/>
    </div>
</Layout>
</>
)
}