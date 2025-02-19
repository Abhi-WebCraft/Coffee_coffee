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
        contentType: "list",
        content: [
          {
            icon: "",
            text: "Web Research online programs from different university and provide virtual assistance to an online education provider.",
          },
          {
            icon: "/images/icons/dash.svg",
            text: "Researching and find out details of different executive courses, short and long terms educational programs across the world.",
          },
          {
            icon: "/images/icons/dash.svg",
            text: "Research and uploading the details of the contemporary courses offered in different countries.",
          },
        ],
      },
      {
        backgroundColor: "",
        subtitle: "Project Challenges",
        title: "The Challenges:",
        contentType: "list",
        content: [
          {
            icon: "/images/icons/dash.svg",
            text: "Thorough data research to find accurate and fresh information about the courses for study foreign programs.",
          },
          {
            icon: "/images/icons/dash.svg",
            text: "Element duplication and daily updates of the latest information of courses.",
          },
          {
            icon: "/images/icons/dash.svg",
            text: "Keep track and check on the daily basis for removing out-date programs on time.",
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
            text: "Wide-ranging online research resulted into collection of diversified data; thus the portal displayed a diversity of courses, apparently drawing more traffic on the site.",
            },
            {
              icon: "/images/icons/dash.svg",
              text: "Management of online programs – Details on a diversity of courses, Updated course details, Element duplication, outdated course and daily updates contributed in drawing number of potential students visiting the portal.",
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
        text: "Meanwhile, the project mainly complex details of “Study Aboard” programs; we hired an expert resource who was well familiar with English, who can carry out a meticulous online research on different courses and sort out the relevant detail from the internet.",
        },
      {
        icon: "/images/icons/dash.svg",
        text: "Detailed training was given on a timely basis to ensure that the resources are well in tune with different universities, colleges and educational institutes that offer global and online education courses.",
        },
      {
        icon: "/images/icons/dash.svg",
        text: "Daily uploaded and the update details under different categories and maintained a database to avoid useless data.",
        },
        {
          icon: "/images/icons/dash.svg",
          text: "Dedicated training rooms to accommodate 25-30 attendees at a time, equipped with contemporary training facilities.",
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
                title="Web Research of Educational (Executive, Short & Long Term) Courses"
                subtitle="Data Support & Property Matching"
                description="Streamline your operations with our expert data entry and management services!"
                bgimage="/images/innerbanner/baner-20.webp"
                caseLink="#"
                linkText="Succes Stories"
                breadcrumbtitle2="Case Studies"
                breadcrumbtitle3="Web Research..."
                breadcrumb1="/"
                breadcrumb2="/case-studies"
                breadcrumb3="/web-research-of-online-education-courses"
                />
         <CaseTemplate  sections={caseStudyData}/>
    <div className="pb-[100px]">
        <Form/>
    </div>
</Layout>
</>
)
}