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
            "Key-in information accurate and 100% quality data entry from soft copy rebate receipts into excel spreadsheet for a rebate service center, a private company, assisting thousands of customers across USA.",
        },
        {
          backgroundColor: "bg-[#f6f5f5]",
          subtitle: "Project Objective",
          title: "The Objective:",
          contentType: "text",
          content:
          "Key-in information accurate and 100% quality data entry from soft copy rebate receipts into excel spreadsheet for a rebate service center, a private company, assisting thousands of customers across USA.",
        },
        {
          backgroundColor: "",
          subtitle: "Project Challenges",
          title: "The Challenges:",
          contentType: "list",
          content: [
            {
              icon: "/images/icons/dash.svg",
              text: "Unclear Fields and Formatting",
            },
            {
              icon: "/images/icons/dash.svg",
              text: "Non-unique fonts & font size of hand written details in the rebate receipts, which could increase human errors & misconceptions",
            },
            {
              icon: "/images/icons/dash.svg",
              text: "Hard copy of rebate receipts, received from client’s end were not clear and required great amount of accuracy, ultimately increasing the time spent on each file to read, decipher & then key in data. It ultimately increased the count of resources required to complete the project.",
            },
            {
              icon: "/images/icons/dash.svg",
              text: "The project included lot of financial information, therefore accuracy was vital? while entering the data.",
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
              text: "First-rate customer service from an skilled person.",
              },
              {
                icon: "/images/icons/dash.svg",
                text: "Consequences and reasons together to changeover plan milepost to certify success.",
                      },
              {
                icon: "/images/icons/dash.svg",
                text: "Safe ability available for mischance rescue plan should be the deal to be required.",
                },
              {
                icon: "/images/icons/dash.svg",
                text: "Permit proposal give for sales and marketing groups via imaging and other related skills like web-based writing.",
                },
                {
                  icon: "/images/icons/dash.svg",
                  text: "Attaining 99.99% accuracy in manual data entry of rebate receipts; which eventually resulted into fulfillment to the end-customers.",
                  },
                  {
                    icon: "/images/icons/dash.svg",
                    text: "Satisfied clients suggested our client to their peers, bringing about a surge in the customer base of our client.",
                    },
                
  ],
        },
        {
          backgroundColor: "",
          subtitle: "Value Addition",
          title: "Value Addition:",
          contentType: "list",
          content: [
            {
              icon: "/images/icons/dash.svg",
              text: "99.99% accuracy in manual data entry of rebate receipts; which ultimately resulted into satisfaction to the end-customers.",
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
          icon: "",
          text: "Upon receipt of rebate receipts on FTP server, they were assigned to a team of process associates for inputting in the data, followed by 100% quality control through keen quality controllers. 10% entries were audited by the team leaders and finally the output was emailed to client in form of excel spreadsheet by the project Manager. Since it was the monetary information of customers, data accuracy and security took the front seat.",
          },
        {
          icon: "/images/icons/dash.svg",
          text: "Rebate receipts received via FTP server from client.",
          },
        {
          icon: "/images/icons/dash.svg",
          text: "Data Entry 1: inputting the data by team-1 into the Excel header provided by client.",
          },
          {
            icon: "/images/icons/dash.svg",
            text: "Data Entry 2: inputting the same data by team-2 into the Excel header provided by client.",
                },
  
          {
            icon: "/images/icons/dash.svg",
            text: "Quality Control: Electronic comparison of 2 entries into Excel spreadsheet to track errors",
          },
            {
              icon: "/images/icons/dash.svg",
              text: "If an error is found, it is rectified by Quality Controller.",
            },
          {
            icon: "/images/icons/dash.svg",
            text: "If there are more than 5% errors, then the batch is rejected for entries to be done again.",
          },
          {
            icon: "/images/icons/dash.svg",
            text: "Audit – 5 % random audit is done of the data file received from Quality Controller.",
          },
                {
          icon: "/images/icons/dash.svg",
          text: "Dispatch – Excel spreadsheets were dispatched to client by Project Manager.",
          },
         
  ],
        },
        {
          backgroundColor: "",
          subtitle: "",
          title: "",
          contentType: "list",
          content: [
            {
              icon: "",
              text: "",
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
                title="Rebate Data Entry and Processing from Rebate Forms"
                subtitle="Data Support & Property Matching"
                description="Streamline your operations with our expert data entry and management services!"
                bgimage="/images/innerbanner/baner-16.webp"
                caseLink="#"
                linkText="Succes Stories"
                breadcrumbtitle2="Case Studies"
                breadcrumbtitle3="Rebate Data ..."
                breadcrumb1="/"
                breadcrumb2="/case-studies"
                breadcrumb3="/rebate-data-entry-and-processing-from-rebate-forms"
                />
         <CaseTemplate  sections={caseStudyData}/>
    <div className="pb-[100px]">
        <Form/>
    </div>
</Layout>
</>
)
}