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
        "Here the client needed support to create a media contact database for healthcare industry for which he wanted to do mass mailing.",
      },
      {
        backgroundColor: "",
        subtitle: "General Benefits:",
        title: "General Benefits:",
        contentType: "list",
        content: [
          {
            icon: "/images/icons/dash.svg",
            text: "Search the suitable media contacts which suit our client’s requirement and would subscribe to his blogs and articles.",
          },
          {
            icon: "/images/icons/dash.svg",
            text: "Writing and proofreading his articles content so it sounds good to the media contacts and in order they make the decision to subscribe him.",
        },
        ],
      },
      {
        backgroundColor: "bg-[#f6f5f5]",
        subtitle: "The Solutions:",
        title: "The Solutions:",
        contentType: "list",
        content: [
          {
            icon: "/images/icons/dash.svg",
            text: "We did research and collated healthcare media contacts from the top healthcare magazines and blogs.",
            },
            {
              icon: "/images/icons/dash.svg",
              text: "We also searched sites like LinkedIn, and other directories to collect the media contacts.",
                    },
            {
              icon: "/images/icons/dash.svg",
              text: "After completing the database, we verified it from the client and later did mass emailing to the contacts and received confirmation if they were interested to subscribe our client’s articles.",
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
                title="Creating Media Contact Database for Marketing Company"
                subtitle="Data Support & Property Matching"
                description="Streamline your operations with our expert data entry and management services!"
                bgimage="/images/innerbanner/baner-19.webp"
                caseLink="#"
                linkText="Succes Stories"
                breadcrumbtitle2="Case Studies"
                breadcrumbtitle3="Creating Media..."
                breadcrumb1="/"
                breadcrumb2="/case-studies"
                breadcrumb3="/virtual-assistant-services-creating-media-contact-database"
                />
        <CaseTemplate  sections={caseStudyData}/>
    <div className="pb-[100px]">
        <Form/>
    </div>
</Layout>
</>
)
}