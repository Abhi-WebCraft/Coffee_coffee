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
    //         { label: "The Company", value: "Recruitment Company" },
    //         { label: "Location", value: " Australia, Multi Location" },
    //         { label: "Industry", value: "Staffing and Recruiting" },
    //       ]
    //     },
    //     objective: {
    //       title: "The Objective",
    //       content: "Our client, who is a recruitment agency based in Australia and provides a platform for job seekers for multiple disciplines such as accounting, constructions, financial services, to name a few. They receive a huge number of resumes daily and required to format and convert all the resumes into their predesigned template. So they needed help from a reliable outsourcing partner to handle the task and provide the outputs on time."
    //     },
    //     challenges: {
    //       title: "The Challenges",
    //       items: [
    //         "Examining any resume would need manual review, as all resumes have different fields and skillsets.",
    //         "As all the received resumes are different and have information spread in different ways and parts of a resume, it makes it hard to screen a candidate’s education history, total experience, and other technical skills.",
    //         "Some of the candidate’s resumes are not readable, so it required to process the whole resume by manually typing.",
    //         "Many of the resumes are hard to read, and so it was challenging to interpret and put the details in the client’s template.",
    //         "The resumes needed to be formatted and sent back in real-time with a deadline of 30 mins, regardless of any difficulty or length of a resume."
    //       ]
    //     },
    //     benefits: {
    //       title: "General Benefits",
    //       items: [
    //         "The process helped the client’s staff to focus on other important tasks instead of indulging in processing resumes."
    //       ]
    //     },
    //     values: {
    //       title: "Value Addition",
    //       items: ["After completing the trial phase, the client was extremely impressed with the results and opted to continue with our services. Since then, the volume of work has been increased, and we have also added new resources to the team."]
    //     },
    //     solutions: {
    //       title: "The Solutions",
    //       items: [
    //         "We assigned a team of 4 users to work on the project, which started their shifts at early hours of the morning at 0400 hours.",
    //         "Because of the nature of the resumes, we had to choose our highly skilled operators who had significant expertise in handling complex resume formatting tasks.",
    //         "ur resources made sure to deliver the completed resumes within the set deadline with high quality to omit any chances of errors, which reciprocally saved the time of staff working at our client’s end."
    //       ]
    //     },
    //     technology: {
    //       title: "Technology / Software Used",
    //       items: ["Advanced MS Word", "MS Excel For Reporting"]
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
          "Our client, who is a recruitment agency based in Australia and provides a platform for job seekers for multiple disciplines such as accounting, constructions, financial services, to name a few. They receive a huge number of resumes daily and required to format and convert all the resumes into their predesigned template. So they needed help from a reliable outsourcing partner to handle the task and provide the outputs on time.",
      },
      {
        backgroundColor: "",
        subtitle: "Project Challenges",
        title: "The Challenges:",
        contentType: "list",
        content: [
          {
            icon: "/images/icons/dash.svg",
            text: "Examining any resume would need manual review, as all resumes have different fields and skillsets.",
          },
          {
            icon: "/images/icons/dash.svg",
            text: "As all the received resumes are different and have information spread in different ways and parts of a resume, it makes it hard to screen a candidate’s education history, total experience, and other technical skills.",
          },
          {
            icon: "/images/icons/dash.svg",
            text: "Some of the candidate’s resumes are not readable, so it required to process the whole resume by manually typing.",
          },
          {
            icon: "/images/icons/dash.svg",
            text: "Many of the resumes are hard to read, and so it was challenging to interpret and put the details in the client’s template.",
          },
          {
            icon: "/images/icons/dash.svg",
            text: "The resumes needed to be formatted and sent back in real-time with a deadline of 30 mins, regardless of any difficulty or length of a resume.",
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
            text: "The process helped the client’s staff to focus on other important tasks instead of indulging in processing resumes.",
            },
        ],
      },
      {
        backgroundColor: "",
        subtitle: "Value Addition:",
        title: "Value Addition:",
        contentType: "list",
        content: [
          {
            icon: "/images/icons/dash.svg",
            text: "After completing the trial phase, the client was extremely impressed with the results and opted to continue with our services. Since then, the volume of work has been increased, and we have also added new resources to the team.",
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
        text: "We assigned a team of 4 users to work on the project, which started their shifts at early hours of the morning at 0400 hours.",
        },
      {
        icon: "/images/icons/dash.svg",
        text: "Because of the nature of the resumes, we had to choose our highly skilled operators who had significant expertise in handling complex resume formatting tasks.",
        },
      {
        icon: "/images/icons/dash.svg",
        text: "Our resources made sure to deliver the completed resumes within the set deadline with high quality to omit any chances of errors, which reciprocally saved the time of staff working at our client’s end.",
        },
  ],
      },
      {
        backgroundColor: "bg-[#f6f5f5]",
        title: " Technology / Software Used:",
        contentType: "list",
        extraContent: [
          { src: "/images/icons/technology.svg", alt: "acrobat-icon" },
          { src: "/images/icons/excel-1.svg", alt: "excel-icon" },
        ],
      },
    ];
return(
<>
<PageHead PageMeta={PageMeta} />
<Layout>
    {/* <InnerBanner
        image="/images/innerbanner/case-banner5.jpg"
        title="Formatting Resume / "
        title2="CVs into a Uniform Structure"
        link1="/"
        link2="/real-estate-data-entry-from-pdf-records-to-update-database"
        breadcrumb1="Home"
        breadcrumb2="real-estate-data-entry-from-pdf-records-to-update-database"
        /> */}
         <InnerBanner
                pagetitle="Client's Stories"
                title="Formatting Resume/CVs into a Uniform Structure"
                subtitle="Data Support & Property Matching"
                description="Streamline your operations with our expert data entry and management services!"
                bgimage="/images/innerbanner/baner-11.webp"
                caseLink="#"
                linkText="Succes Stories"
                breadcrumbtitle2="Case Studies"
                breadcrumbtitle3="Formatting Resume..."
                breadcrumb1="/"
                breadcrumb2="/case-studies"
                breadcrumb3="/formatting-resume-into-uniform-structure"
                />
         <CaseTemplate sections={caseStudyData} />
    <div className="pb-[100px]">
      <Form/>
    </div>
    {/* <Footercta/> */}
</Layout>
</>
)
}