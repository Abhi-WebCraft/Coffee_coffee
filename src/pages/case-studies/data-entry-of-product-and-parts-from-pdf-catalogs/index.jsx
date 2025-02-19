import PageHead from "@/components/Layout/PageHead";
import Layout from "@/components/Layout/Layout";
import Footercta from '@/components/Common/Footercta';
// import InnerBanner from "@/components/Common/InnerBanner";
import ContactForm from "@/components/Common/ContactForm";
import CaseTemplate from "../../../components/Common/CaseTemplate";
import InnerBanner from "@/components/Innerpagedesign/InnerBanner";
import Form from '@/components/NewHome/Form';
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
    //         { label: "The Company", value: "Wholesale Equipment Distribution" },
    //         { label: "Location", value: "Canada" },
    //         { label: "Industry", value: "Industrial Supplies & Equipment" },
    //       ]
    //     },
    //     objective: {
    //       title: "The Objective",
    //       content: "Founded with a humble beginning our client with decades in the business of industrial product distribution has grown and evolved to leading business providers in Canada. The client needed to data entry from their product catalogs to excel spreadsheets with fields like product name, dimensions, variants, and prices respectively."
    //     },
    //     challenges: {
    //       title: "The Challenges",
    //       items: [
    //         "The client had hundreds of Product Catalogs for different product categories, while each of them had 5000 to 15000 products in a single catalog.",
    //         "To deal with the different categories and their respective instructions we first separated them and allotted them to separate teams to curb out any confusion and mistakes.",
    //         "Copy & paste from the catalogs was not viable as it yielded spaces and junk characters doing so.",
    //         "They approached our team to have the information taken into their preformatted spreadsheets, which on the other hand needed to have a separate set of instructions for each category.",
    //         "We had a very short deadline of 6 weeks to complete the task which contained approx. 1.5M products."
    //       ]
    //     },
    //     benefits: {
    //       title: "General Benefits",
    //       items: [
    //         "We provided timely outputs to the client which enabled them to efficiently publish the completed data on their website.",
    //         "The process helped the client to convey their resources to streamline their core and important functions.",
    //         "We made sure to provide the completed data without any errors with the help of our Audit and Quality check teams.",
    //         "The process helped our client to map the output data into their website which resulted in improved search and user interface resulting increase in their client base."
    //       ]
    //     },
    //     solutions: {
    //       title: "The Solutions",
    //       items: [
    //         "We worked diligently and used our expertise to complete the project in a timely and proficient manner.",
    //         "We created a team of Project Managers and Team Leads specializing in Data Entry from PDFs, and they handled their respective team of Data Entry users.",
    //         "We were required to select a team of our well-experienced users to work on this project which helped us to achieve the weekly deadline of 0.25M products.",
    //         "We used dedicated training rooms which accommodated 40 to 50 users to provide appropriate briefings and training as per their allotted catalog category.",
    //         "As the size of outputs was huge, we used multi-layered and logical data check parameters to analyze each data point."
    //       ]
    //     },
    //     technology: {
    //       title: "Technology / Software Used",
    //       items: ["Adobe Acrobat", "MS Excel"]
    //     },
    //     values: {
    //       title: "Value Addition",
    //       items: ["Keeping up with ever evolving technological demands, of our clients and for our clients, we constantly upgrade our systems, processes and skills of our employees; to ensure that our data entry of products and catalogs, are the ones with latest technological adoptions to assist our clients to stay competitive"]
    //     }
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
            "Founded with a humble beginning our client with decades in the business of industrial product distribution has grown and evolved to leading business providers in Canada. The client needed to data entry from their product catalogs to excel spreadsheets with fields like product name, dimensions, variants, and prices respectively.",
        },
        {
          backgroundColor: "",
          subtitle: "Project Challenges",
          title: "The Challenges:",
          contentType: "list",
          content: [
            {
              icon: "/images/icons/dash.svg",
              text: "The client had hundreds of Product Catalogs for different product categories, while each of them had 5000 to 15000 products in a single catalog.",
            },
            {
              icon: "/images/icons/dash.svg",
              text: "To deal with the different categories and their respective instructions we first separated them and allotted them to separate teams to curb out any confusion and mistakes.",
            },
            {
              icon: "/images/icons/dash.svg",
              text: "Copy & paste from the catalogs was not viable as it yielded spaces and junk characters doing so.",
            },
            {
              icon: "/images/icons/dash.svg",
              text: "They approached our team to have the information taken into their preformatted spreadsheets, which on the other hand needed to have a separate set of instructions for each category.",
            },
            {
              icon: "/images/icons/dash.svg",
              text: "We had a very short deadline of 6 weeks to complete the task which contained approx. 1.5M products.",
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
              text: "We provided timely outputs to the client which enabled them to efficiently publish the completed data on their website.",
            },
            {
              icon: "/images/icons/dash.svg",
              text: "The process helped the client to convey their resources to streamline their core and important functions.",
            },
            {
                icon: "/images/icons/dash.svg",
                text: "We made sure to provide the completed data without any errors with the help of our Audit and Quality check teams.",
              },
              {
                icon: "/images/icons/dash.svg",
                text: "The process helped our client to map the output data into their website which resulted in improved search and user interface resulting increase in their client base.",
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
              text: "Keeping up with ever evolving technological demands, of our clients and for our clients, we constantly upgrade our systems, processes and skills of our employees; to ensure that our data entry of products and catalogs, are the ones with latest technological adoptions to assist our clients to stay competitive",
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
          text: "We worked diligently and used our expertise to complete the project in a timely and proficient manner.",
          },
        {
          icon: "/images/icons/dash.svg",
          text: "We created a team of Project Managers and Team Leads specializing in Data Entry from PDFs, and they handled their respective team of Data Entry users.",
          },
        {
          icon: "/images/icons/dash.svg",
          text: "We were required to select a team of our well-experienced users to work on this project which helped us to achieve the weekly deadline of 0.25M products.",
          },
        {
          icon: "/images/icons/dash.svg",
          text: "We used dedicated training rooms which accommodated 40 to 50 users to provide appropriate briefings and training as per their allotted catalog category.",
        },
        {
          icon: "/images/icons/dash.svg",
          text: "As the size of outputs was huge, we used multi-layered and logical data check parameters to analyze each data point.",
          },
    ],
        },
        {
          backgroundColor: "bg-[#f6f5f5]",
          title: " Technology / Software Used:",
          contentType: "list",
          extraContent: [
            { src: "/images/icons/acrobat.svg", alt: "acrobat-icon" },
            { src: "/images/icons/excel-1.svg", alt: "excel-icon" },
          ],
        },
      ];
return(
<>
<PageHead PageMeta={PageMeta} />
<Layout>
    {/* <InnerBanner
        image="/images/innerbanner/case-banner2.jpg"
        title="Data Entry from PDF "
        title2="Records to Update Database"
        link1="/"
        link2="/real-estate-data-entry-from-pdf-records-to-update-database"
        breadcrumb1="Home"
        breadcrumb2="real-estate-data-entry-from-pdf-records-to-update-database"
        /> */}
        <InnerBanner
                pagetitle="Client's Stories"
                title="Data Entry of Products and Parts from PDF Catalogs"
                subtitle="Data Support & Property Matching"
                description="Streamline your operations with our expert data entry and management services!"
                bgimage="/images/innerbanner/baner-9.webp"
                caseLink="#"
                linkText="Succes Stories"
                breadcrumbtitle2="Case Studies"
                breadcrumbtitle3="Data Entry of Products.."
                breadcrumb1="/"
                breadcrumb2="/case-studies"
                breadcrumb3="/data-entry-of-product-and-parts-from-pdf-catalogs"
                />
        
        <CaseTemplate sections={caseStudyData} />
    {/* <ContactForm/> */}
   <div className="mb-[100px]">
      <Form/>
   </div>
    {/* <Footercta/> */}
</Layout>
</>
)
}