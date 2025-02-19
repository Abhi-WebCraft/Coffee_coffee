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
    //         { label: "The Company", value: "Staffing Consulting" },
    //         { label: "Location", value: "USA" },
    //         { label: "Industry", value: "Human Resources and Recruiting" },
    //       ]
    //     },
    //     objective: {
    //       title: "The Objective",
    //       content: "Based in the United States, our client needed to extract student resumes from hundreds of different websites. They needed to do the task twice a year and as it was a colossal task we helped them by forming a team of 40 users for a month to meet the deadline."
    //     },
    //     challenges: {
    //       title: "The Challenges",
    //       items: [
    //         "The deadline was too short compared to the man-hours needed to execute the project.",
    //         "We had to deal with a huge number of websites and portals to get the data, and as all of them had different layouts it needed pre-planning of resources to work on them.",
    //         "We had to create various small teams and also had to split the work to cope up with the deadline.",
    //         "The task also involved thorough web research for the student’s accurate and fresh details.",
    //         "We had to keep daily track of the progress and quality check of the completed data."
    //       ]
    //     },
    //     benefits: {
    //       title: "General Benefits",
    //       items: [
    //         "Due to multi-layered QC and audits, the output data was accurate and in the desired format.",
    //         "The in-house staff at the client’s end was unconstrained in the resume data collection task and helped them to focus on other core functions of the project.",
    //         "We made sure to have the irrelevant and duplicates removed from the outputs, which helped clients to map the data to their systems without any flaws.",
    //       ]
    //     },
    //     values: {
    //       title: "Value Addition",
    //       items: ["After completing the trial phase, the client was extremely impressed with the results and opted to continue with our services. Since then, the volume of work has been increased, and we have also added new resources to the team."]
    //     },
    //     solutions: {
    //       title: "The Solutions",
    //       items: [
    //         "We created a team of 40 users along with a team of QC and audits.",
    //         "As the nature of the project was complex, we selected well-experienced users to work on the tasks which helped us to get the proficient output.",
    //         "Used state of the art technologies to support our staff getting the project done.",
    //         "Made sure to provide adequate training to the team so they can be on track with the deadline."
    //       ]
    //     },
    //     technology: {
    //       title: "Technology / Software Used",
    //       items: [" Web Browsers", "MS Excel", "Adobe Acrobat Applications Along With Customized Automation Bots"]
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
          "Based in the United States, our client needed to extract student resumes from hundreds of different websites. They needed to do the task twice a year and as it was a colossal task we helped them by forming a team of 40 users for a month to meet the deadline.",
      },
      {
        backgroundColor: "",
        subtitle: "Project Challenges",
        title: "The Challenges:",
        contentType: "list",
        content: [
          {
            icon: "/images/icons/dash.svg",
            text: "The deadline was too short compared to the man-hours needed to execute the project.",
          },
          {
            icon: "/images/icons/dash.svg",
            text: "We had to deal with a huge number of websites and portals to get the data, and as all of them had different layouts it needed pre-planning of resources to work on them.",
          },
          {
            icon: "/images/icons/dash.svg",
            text: "We had to create various small teams and also had to split the work to cope up with the deadline.",
          },
          {
            icon: "/images/icons/dash.svg",
            text: "The task also involved thorough web research for the student’s accurate and fresh details.",
          },
          {
            icon: "/images/icons/dash.svg",
            text: "We had to keep daily track of the progress and quality check of the completed data.",
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
            text: "Due to multi-layered QC and audits, the output data was accurate and in the desired format.",
            },
            {
              icon: "/images/icons/dash.svg",
              text: "The in-house staff at the client’s end was unconstrained in the resume data collection task and helped them to focus on other core functions of the project.",
              },
              {
                icon: "/images/icons/dash.svg",
                text: "We made sure to have the irrelevant and duplicates removed from the outputs, which helped clients to map the data to their systems without any flaws.",
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
        text: "We created a team of 40 users along with a team of QC and audits.",
        },
      {
        icon: "/images/icons/dash.svg",
        text: "As the nature of the project was complex, we selected well-experienced users to work on the tasks which helped us to get the proficient output.",
        },
      {
        icon: "/images/icons/dash.svg",
        text: "Used state of the art technologies to support our staff getting the project done.",
        },
        {
          icon: "/images/icons/dash.svg",
          text: "Made sure to provide adequate training to the team so they can be on track with the deadline.",
          },
  ],
      },
      {
        backgroundColor: "bg-[#f6f5f5]",
        title: " Technology / Software Used:",
        contentType: "list",
        extraContent: [
          { src: "/images/icons/web.svg", alt: "acrobat-icon" },
          { src: "/images/icons/acrobat.svg", alt: "excel-icon" },
        ],
      },
    ];
return(
<>
<PageHead PageMeta={PageMeta} />
<Layout>
    {/* <InnerBanner
        image="/images/innerbanner/case-banner11.jpg"
        title="Resume Data Collection from "
        title2="Handshake and Other Online Portal"
        link1="/"
        link2="/real-estate-data-entry-from-pdf-records-to-update-database"
        breadcrumb1="Home"
        breadcrumb2="real-estate-data-entry-from-pdf-records-to-update-database"
        /> */}
         <InnerBanner
                pagetitle="Client's Stories"
                title="Resume Data Collection from Handshake and Other Online Portal"
                subtitle="Data Support & Property Matching"
                description="Streamline your operations with our expert data entry and management services!"
                bgimage="/images/innerbanner/baner-17.webp"
                caseLink="#"
                linkText="Succes Stories"
                breadcrumbtitle2="Case Studies"
                breadcrumbtitle3="Resume Data ..."
                breadcrumb1="/"
                breadcrumb2="/case-studies"
                breadcrumb3="/resume-data-collection-services-for-usa-recruitment-consultancy"
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