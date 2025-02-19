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
    //         { label: "The Company", value: " B2B Fintech" },
    //         { label: "Location", value: "Singapore" },
    //         { label: "Industry", value: " Food & Beverages" },
    //       ]
    //     },
    //     objective: {
    //       title: "The Objective",
    //       content: "Based in Singapore, our client is a leading F&B platform provider to restaurants, which helps them to handle their paperwork, likes invoices, purchase orders, and sales orders, etc. they needed someone to handle their back-end needs of data entry from the scanned invoices, receipt, purchase orders and sales orders. That can’t be processed through their platform’s optical character recognition."
    //     },
    //     challenges: {
    //       title: "The Challenges",
    //       items: [
    //         "The client used to receive around 3000 invoices and purchase orders on a daily basis from their restaurant clients, from which approx. half of the images were hard to process through OCR, so we needed to process 1500 to 2000 images in real-time on a daily basis.",
    //         "Many of the receipts and invoices were in handwritten format, so it was a tough job to read and process them.",
    //         "We also had to deal with receipts in foreign languages other than English.",
    //         "The format of receipts and invoices varied from each supplier to supplier so for some cases we had to keep in touch with the client’s staff for any questions.",
    //         "As the nature of the task was real-time, we had to process all the received receipts on the same day to meet the client’s 24-hour deadline SLA."
    //       ]
    //     },
    //     benefits: {
    //       title: "General Benefits",
    //       items: [
    //         "We made sure to process all the invoices received in a day which helped the client to have more work from their clients, resulting increase in clients revenue.",
    //         "Using our services helped the client’s in-house staff to get rid of tedious and time-consuming tasks and enabled them to concentrate on high-value activities.",
    //         "We arranged expert resources to make sure the task is done with quality and in a timely manner.",
    //       ]
    //     },
    //     values: {
    //       title: "Value Addition",
    //       items: ["After completing the trial phase, the client was extremely impressed with the results and opted to continue with our services. Since then, the volume of work has been increased, and we have also added new resources to the team."]
    //     },
    //     solutions: {
    //       title: "The Solutions",
    //       items: [
    //         "We used dedicated training rooms to train the whole team with the specific guidelines provided by the client on each field and invoices.",
    //         "We created custom shift timings as per the client’s need to match the client’s time zone.",
    //         "We made sure to have enough experienced users on the project so that the daily workloads are done without getting any backlog or delay in delivery time.",
    //         "The initial training which was given to the team, lead to a better output of the data captured by the team."
    //       ]
    //     },
    //     technology: {
    //       title: "Technology / Software Used",
    //       items: [" Invoice Process Web-Based Application"]
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
          "Based in Singapore, our client is a leading F&B platform provider to restaurants, which helps them to handle their paperwork, likes invoices, purchase orders, and sales orders, etc. they needed someone to handle their back-end needs of data entry from the scanned invoices, receipt, purchase orders and sales orders. That can’t be processed through their platform’s optical character recognition.",
      },
      {
        backgroundColor: "",
        subtitle: "Project Challenges",
        title: "The Challenges:",
        contentType: "list",
        content: [
          {
            icon: "/images/icons/dash.svg",
            text: "The client used to receive around 3000 invoices and purchase orders on a daily basis from their restaurant clients, from which approx. half of the images were hard to process through OCR, so we needed to process 1500 to 2000 images in real-time on a daily basis.",
          },
          {
            icon: "/images/icons/dash.svg",
            text: "Many of the receipts and invoices were in handwritten format, so it was a tough job to read and process them.",
          },
          {
            icon: "/images/icons/dash.svg",
            text: "We also had to deal with receipts in foreign languages other than English.",
          },
          {
            icon: "/images/icons/dash.svg",
            text: "The format of receipts and invoices varied from each supplier to supplier so for some cases we had to keep in touch with the client’s staff for any questions.",
          },
          {
            icon: "/images/icons/dash.svg",
            text: "As the nature of the task was real-time, we had to process all the received receipts on the same day to meet the client’s 24-hour deadline SLA.",
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
            text: "We made sure to process all the invoices received in a day which helped the client to have more work from their clients, resulting increase in clients revenue.",
            },
            {
              icon: "/images/icons/dash.svg",
              text: "Using our services helped the client’s in-house staff to get rid of tedious and time-consuming tasks and enabled them to concentrate on high-value activities.",
              },
              {
                icon: "/images/icons/dash.svg",
                text: "We arranged expert resources to make sure the task is done with quality and in a timely manner.",
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
        text: "We used dedicated training rooms to train the whole team with the specific guidelines provided by the client on each field and invoices.",
        },
      {
        icon: "/images/icons/dash.svg",
        text: "We created custom shift timings as per the client’s need to match the client’s time zone.",
        },
      {
        icon: "/images/icons/dash.svg",
        text: "We made sure to have enough experienced users on the project so that the daily workloads are done without getting any backlog or delay in delivery time.",
        },
        {
          icon: "/images/icons/dash.svg",
          text: "The initial training which was given to the team, lead to a better output of the data captured by the team.",
          },
  ],
      },
      {
        backgroundColor: "bg-[#f6f5f5]",
        title: " Technology / Software Used:",
        contentType: "list",
        extraContent: [
          { src: "/images/icons/web.svg", alt: "acrobat-icon" },
          { src: "/images/icons/invoice.svg", alt: "excel-icon" },
        ],
      },
    ];
return(
<>
<PageHead PageMeta={PageMeta} />
<Layout>
    {/* <InnerBanner
        image="/images/innerbanner/case-banner7.jpg"
        title="Invoice Data Entry into "
        title2="Restaurant Expense Management Software"
        link1="/"
        link2="/real-estate-data-entry-from-pdf-records-to-update-database"
        breadcrumb1="Home"
        breadcrumb2="real-estate-data-entry-from-pdf-records-to-update-database"
        /> */}
          <InnerBanner
                pagetitle="Client's Stories"
                title="Invoice Data Entry into Restaurant Expense Management Software"
                subtitle="Data Support & Property Matching"
                description="Streamline your operations with our expert data entry and management services!"
                bgimage="/images/innerbanner/baner-13.webp"
                caseLink="#"
                linkText="Succes Stories"
                breadcrumbtitle2="Case Studies"
                breadcrumbtitle3="Invoice Data ..."
                breadcrumb1="/"
                breadcrumb2="/case-studies"
                breadcrumb3="/invoice-data-entry-support-to-restaurant-expense-software"
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