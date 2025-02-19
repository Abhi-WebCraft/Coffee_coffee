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
          "Web property data research, collection and compilation for real estate sales & ownership, real estate listings, commercial real estate listings, legal documents, non-commercial and commercial valuation details, craigslist real estate and many more…",
      },
      {
        backgroundColor: "",
        subtitle: "Project Challenges",
        title: "The Challenges:",
        contentType: "list",
        content: [
          {
            icon: "/images/icons/dash.svg",
            text: "Operating out of 6 states, the client required 28,000 records weekly to be collected and compiled from several Assignments, Agreements, Credit docs, Deed, Discharge, Mortgage, and Foreclosure.",
          },
          {
            icon: "/images/icons/dash.svg",
            text: "Client wished to publish a weekly newspaper and monthly magazine based on our online data entry records, making quality and accuracy with quick turnaround time – a more.",
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
            text: "Outsourced online data entry and processing requirements fulfilled by Computyne, enabled the client to effectively and efficiently continue publishing the printed and online publications, including a weekly newspaper and a monthly magazine as well.",
            },
            {
              icon: "/images/icons/dash.svg",
              text: "By leveraging the time-zone advantage, the customer was able to publish articles at competitive prices.",
              },
              {
                icon: "/images/icons/dash.svg",
                text: "Client redirected the in-house resources to focus on other core functions to streamline operations – effectively.",
                },
                {
                  icon: "/images/icons/dash.svg",
                  text: "Prevailing restrained real estate market conditions compel buyers and sellers to identify the true value of property. Seller, if quotes arbitrarily high prices will make a genuine customer walk away, and if quotes too less may reduce the ROI. A buyer, who pays more for a property than what it deserves, automatically will reduce the potential returns from it. Real estate data, though crucial is not conveniently available.",
                  },
                  {
                    icon: "/images/icons/dash.svg",
                    text: "Unlike mutual funds, where value of units is declared daily or share market where one can see the price of a particular share on real time basis – determining the availability and prices in real estate is a big challenge. Real estate indices and Multiple Listing Service – MLS listings do exist; however, owning real estate database of 10 Million records in 2 years has its own benefits. And your services to the client base in form of reduced homework to ascertain availability of a property and accurate prices – will make your their partner of choice.",
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
        text: "Project Manager led and apprised the team, comprising of team leaders and executives specializing in Data Collection from Real Estate Property Documents, about the importance of accuracy and coordination for this project.",
        },
      {
        icon: "/images/icons/dash.svg",
        text: "Use of Customized bots / spiders to automate data collection process through a highly secured network with firewalls and auto fail over systems",
        },
      {
        icon: "/images/icons/dash.svg",
        text: "400+ workstations with top of the line hardware, spread across 3 locations equipped with 60 Mbps dedicated bandwidth from multiple ISPs were utilized to populate data in the web based application through remote access to client server",
        },
        {
          icon: "/images/icons/dash.svg",
          text: "Dedicated training rooms to accommodate 25-30 attendees at a time, equipped with contemporary training facilities",
          },
          {
            icon: "/images/icons/dash.svg",
            text: "ISO certified process built on multi-layered quality checks parameters for critically analyzing data points and data types. Used logical data controls to check each data item for any size of data set.",
            },
            {
              icon: "/images/icons/dash.svg",
              text: "Preparedness to ramp up to 100 seats at one months’ notice, while managing unpredictable spikes / drops in volumes up to 30%",
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
                title="Real Estate Property Data Collection and Data Research"
                subtitle="Data Support & Property Matching"
                description="Streamline your operations with our expert data entry and management services!"
                bgimage="/images/innerbanner/baner-14.webp"
                caseLink="#"
                linkText="Succes Stories"
                breadcrumbtitle2="Case Studies"
                breadcrumbtitle3="Real Estate..."
                breadcrumb1="/"
                breadcrumb2="/case-studies"
                breadcrumb3="/real-estate-data-collection-and-research-services"
                />
         <CaseTemplate  sections={caseStudyData}/>
    <div className="pb-[100px]">
        <Form/>
    </div>
</Layout>
</>
)
}