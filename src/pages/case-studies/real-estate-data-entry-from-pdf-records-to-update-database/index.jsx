import PageHead from "@/components/Layout/PageHead";
import Layout from "@/components/Layout/Layout";
import Footercta from '@/components/Common/Footercta';
import InnerBanner from "@/components/Innerpagedesign/InnerBanner";
import Form from '@/components/NewHome/Form';
import CaseTemplate from "../../../components/Common/CaseTemplate";

export default function RealEstate ({referrer }){
console.log(referrer)
const PageMeta = 
        {
        title: "Computyne",
        description:"New Webiste"
    }

    
    //     {
    //       backgroundColor: "",
    //       subtitle: "The Client",
    //       title: "A Management Consulting Firm in the Energy Sector",
    //       contentType: "text",
    //       content:
    //         "Our client is based in the United States and specializes in delivering strategic and operational excellence to enterprises.",
    //     },
    //     {
    //       backgroundColor: "bg-[#f6f5f5]",
    //       subtitle: "Project Objective",
    //       title: "The Objective:",
    //       contentType: "text",
    //       content:
    //         "Here our client a leading real estate agency needed data entry support for a huge number of real estate records from PDF documents to excel with fields like deed Date, Grantor Name, Address, and other fields.",
    //     },
    //     {
    //       backgroundColor: "",
    //       subtitle: "Project Challenges",
    //       title: "The Challenges:",
    //       contentType: "list",
    //       content: [
    //         {
    //           icon: "/images/icons/dash.svg",
    //           text: "As the number of records needed was huge and also to meet the weekly deadlines, we have to plan specific shifts, the number of resources and other things to have smooth completion of project.",
    //         },
    //         {
    //           icon: "/images/icons/dash.svg",
    //           text: "To meet the weekly turnarounds with enough number of records completed.",
    //         },
    //       ],
    //     },
    //     {
    //       backgroundColor: "bg-[#f6f5f5]",
    //       subtitle: "General Benefits",
    //       title: "General Benefits:",
    //       contentType: "list",
    //       content: [
    //         {
    //           icon: "/images/icons/dash.svg",
    //           text: "As per the client’s need, we created custom shift timings to match the time zone",
    //         },
    //         {
    //           icon: "/images/icons/dash.svg",
    //           text: "The data was processed through multiple rounds of quality assurance to ensure high-quality data",
    //         },
    //         {
    //             icon: "/images/icons/dash.svg",
    //             text: "Devoted more expert resources to make sure the task is done in a timely manner",
    //           },
    //           {
    //             icon: "/images/icons/dash.svg",
    //             text: "With the help of a multi-layered quality check, we made sure to diminish the errors and discrepancies prior to giving the output to the client.",
    //           },
    //       ],
    //     },
    //     {
    //       backgroundColor: "",
    //       subtitle: "The Solutions",
    //       title: "The Solutions:",
    //       contentType: "list",
    //       content: [
    //         {
    //           icon: "/images/icons/dash.svg",
    //           text: "We deployed 50+ real estate data specialists to meet the agreed turnaround time and weekly dispatches.",
    //         },
    //         {
    //           icon: "/images/icons/dash.svg",
    //           text: "Given extra training to the resources as per the client’s requirement.",
    //         },
    //         {
    //             icon: "/images/icons/dash.svg",
    //             text: "To meet the weekly turnarounds we used multi-layered quality checks and expert auditors who made sure to diminish the errors.",
    //           },
    //       ],
    //     },
    //     {
    //       backgroundColor: "bg-[#f6f5f5]",
    //       title: " Technology / Software Used:",
    //       contentType: "list",
    //       extraContent: [
    //         { src: "/images/icons/acrobat.svg", alt: "acrobat-icon" },
    //         { src: "/images/icons/excel-1.svg", alt: "excel-icon" },
    //       ],
    //     },
    //   ];
    
    
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
          "Here our client a leading real estate agency needed data entry support for a huge number of real estate records from PDF documents to excel with fields like deed Date, Grantor Name, Address, and other fields.",
      },
      {
        backgroundColor: "",
        subtitle: "Project Challenges",
        title: "The Challenges:",
        contentType: "list",
        content: [
          {
            icon: "/images/icons/dash.svg",
            text: "As the number of records needed was huge and also to meet the weekly deadlines, we have to plan specific shifts, the number of resources and other things to have smooth completion of project.",
          },
          {
            icon: "/images/icons/dash.svg",
            text: "To meet the weekly turnarounds with enough number of records completed.",
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
            text: "As per the client’s need, we created custom shift timings to match the time zone",
            },
            {
              icon: "/images/icons/dash.svg",
              text: "The data was processed through multiple rounds of quality assurance to ensure high-quality data",
              },
              {
                icon: "/images/icons/dash.svg",
                text: "Devoted more expert resources to make sure the task is done in a timely manner",
                },
                {
                  icon: "/images/icons/dash.svg",
                  text: "With the help of a multi-layered quality check, we made sure to diminish the errors and discrepancies prior to giving the output to the client.",
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
            text: "We deployed 50+ real estate data specialists to meet the agreed turnaround time and weekly dispatches.",
            },
            {
              icon: "/images/icons/dash.svg",
              text: "Given extra training to the resources as per the client’s requirement.",
              },
              {
                icon: "/images/icons/dash.svg",
                text: "To meet the weekly turnarounds we used multi-layered quality checks and expert auditors who made sure to diminish the errors.",
                      },
        ],
      },
     
      {
        backgroundColor: "bg-[#f6f5f5]",
        title: " Technology / Software Used:",
        contentType: "list",
        extraContent: [
          { src: "/images/icons/email-client.svg", alt: "acrobat-icon" },
          { src: "/images/icons/secure.svg", alt: "excel-icon" },
        ],
      },
    ];
    
return(
<>
<PageHead PageMeta={PageMeta} />
<Layout>
<InnerBanner
                pagetitle="Client's Stories"
                title="Data Entry from PDF Records to Update Database"
                subtitle="Data Support & Property Matching"
                description="Streamline your operations with our expert data entry and management services!"
                bgimage="/images/innerbanner/baner-15.webp"
                caseLink="#"
                linkText="Succes Stories"
                breadcrumbtitle2="Case Studies"
                breadcrumbtitle3="Data Entry f..."
                breadcrumb1="/"
                breadcrumb2="/case-studies"
                breadcrumb3="/real-estate-data-entry-from-pdf-records-to-update-database"
                />
          <CaseTemplate  sections={caseStudyData}/>
         <div className="pb-[100px]">
         <Form/>
         </div>
</Layout>
</>
)
}