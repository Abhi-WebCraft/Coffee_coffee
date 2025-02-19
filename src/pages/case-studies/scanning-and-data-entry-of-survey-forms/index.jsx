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
        "Setting up accurate survey data (hard copies) processing of global employee survey from around 35 hour firms who selected for an offline survey.",
      },
      {
        backgroundColor: "",
        subtitle: "Project Challenges",
        title: "The Challenges:",
        contentType: "list",
        content: [
          {
            icon: "/images/icons/dash.svg",
            text: "To segregate and update the hard copies, as well as categorize them based on demography, date of survey and batch number.",
          },
          {
            icon: "/images/icons/dash.svg",
            text: "Storing and maintaining the data from the scanned copies.",
          },
          {
            icon: "/images/icons/dash.svg",
            text: "Continuous observation to eliminate any chances of errors in scanning or data entry.",
          },
          {
            icon: "/images/icons/dash.svg",
            text: "The client, a prominent international security solutions group, with an determined for effective and accurate data entry approached Computyne.",
          },
        {
          icon: "/images/icons/dash.svg",
          text: "They wanted to scan and enter data of ‘Global Employee Survey’ conducted by them. These data was in hard copies which consisted data of around 30 HR contact who opted for offline survey.",
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
            text: "Quick and Effective conversion of complex and huge voluminous data into digital format.",
            },
            {
              icon: "/images/icons/dash.svg",
              text: "Error-free and streamlined data which can be easily accessed.",
                    },
            {
              icon: "/images/icons/dash.svg",
              text: "Data stored in a centralized system, for convenient access in future.",
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
        icon: "",
        text: "Streamlining and proper categorization of the data was our prime focus. The hard copies were divided and cataloged according to the countries, date of survey and batch numbers.",
        },
      {
        icon: "/images/icons/dash.svg",
        text: "With Batch of surveys arriving at Computyne office, the spread sheets were updated with following information:",
        },
      {
        icon: "/images/icons/dash.svg",
        text: "Date batch received",
        },
        {
          icon: "/images/icons/dash.svg",
          text: "Batch number",
              },

        {
          icon: "/images/icons/dash.svg",
          text: "Country survey received from",
        },
          {
            icon: "/images/icons/dash.svg",
            text: "Upon arrival and opening of a particular bunch of survey, again the following information were updated in the spreadsheet to avoid any further confusion:",
          },
        {
          icon: "/images/icons/dash.svg",
          text: "Location names",
        },
        {
          icon: "/images/icons/dash.svg",
          text: "Observing the surveys using labels, post-it notes, separate sheets of paper etc.",
        },
              {
        icon: "/images/icons/dash.svg",
        text: "Reference code",
        },
        {
          icon: "/images/icons/dash.svg",
          text: "Country co-coordinator survey count",
        },
              {
        icon: "/images/icons/dash.svg",
        text: "Data entry processors reviewed the spread sheet to see where a batch of surveys require processing and update spread sheet with following information:",
        },
        {
          icon: "/images/icons/dash.svg",
          text: "Name(s) of data entry processors",
        },
              {
        icon: "/images/icons/dash.svg",
        text: "Date of data entry",
        },
        {
          icon: "/images/icons/dash.svg",
          text: "Data entry status",
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
                title="Survey forms Scanning and Data Entry into Excel Sheets"
                subtitle="Data Support & Property Matching"
                description="Streamline your operations with our expert data entry and management services!"
                bgimage="/images/innerbanner/baner-18.webp"
                caseLink="#"
                linkText="Succes Stories"
                breadcrumbtitle2="Case Studies"
                breadcrumbtitle3="Survey forms..."
                breadcrumb1="/"
                breadcrumb2="/case-studies"
                breadcrumb3="/scanning-and-data-entry-of-survey-forms"
                />
                  <CaseTemplate  sections={caseStudyData}/>
    <div className="pb-[100px]">
        <Form/>
    </div>
</Layout>
</>
)
}