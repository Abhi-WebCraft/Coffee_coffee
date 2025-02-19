import PageHead from "@/components/Layout/PageHead";
import Layout from "@/components/Layout/Layout";
import InnerBanner from "@/components/Innerpagedesign/InnerBanner";
import Work from "@/components/Common/Work";
import Form from "@/components/NewHome/Form";
import Container from "@/components/Layout/Container";
import Detail from "@/components/Innerpagedesign/Detail";
import InnerService from "@/components/Innerpagedesign/InnerService";
import CtaBlock from "@/components/NewHome/CtaBlock";
import Timeline from "@/components/Innerpagedesign/Timeline";
import WorkService from "@/components/Common/WorkService";
import RightForm from "@/components/Common/RightForm";
import Abhi from "@/components/Common/DynamicPage";
import DynamicPage from "@/components/Common/DynamicPage";

export default function AboutUs ({referrer }){
console.log(referrer)
const PageMeta = 
        {
        title: "Computyne",
        description:"New Webiste"
    }
    const detaildata = [
        {
          title: "Data Entry Services",
          paragraphs: [
            "Every business requires the maintenance of its huge database, which needs to be precise and seamless. It involves efficiency in processing and managing all the data that is generated on a daily basis while carrying out a variety of business processes. Such data handling may include PDF files, business records and various other documented details. Managing all these records could be complicated for your organization and may distract you from your core business values.",
            "Ever since its inception in 2009, Computyne has been serving as a trusted data entry outsourcing company, globally. The experts in our team help us deliver high-quality results with utmost precision. We have been serving multiple clients in India and overseas, in the countries including UK, Canada, Europe, USA, Australia, etc.",
          ],
        },
      ];
    
      const solutionsData = [
        {
          image: "/images/icons/budget-1.svg",
          title: "Invoice and Accounting Bills Data Entry",
          description:
            "Computyne provides precise Invoice and Accounting Bills Data Entry services, ensuring accurate recording and management of financial documents. ",
          link: "#",
          time: "600",
          bg: "white",
        },
        {
          image: "/images/icons/pdf-1.svg",
          title: "PDF Documents Data Entry",
          description:
            "Computyne offers specialized PDF Documents Data Entry services, accurately converting and extracting information from PDF files into editable formats.",
          link: "#",
          time: "1200",
        },
        {
          image: "/images/icons/property.svg",
          title: "Property-Related Documents Entry",
          description:
            "Computyne provides efficient Property-Related Documents Entry services, ensuring accurate and timely processing of real estate documents such as leases, contracts,",
          link: "#",
          time: "1800",
        },
        {
          image: "/images/icons/checklist-3.svg",
          title: "Survey Forms Data Entry",
          description:
            "Computyne offers reliable Survey Forms Data Entry services, accurately capturing and processing responses from various survey formats. Our solutions ensure efficient data",
          link: "#",
          time: "600",
          bg: "#fff",
        },
        {
          image: "/images/icons/budget-1.svg",
          title: "Financial Reports Entry",
          description:
            "Computyne provides expert Financial Reports Entry services, ensuring accurate and timely recording of financial data into structured reports. Our solutions enhance ",
          link: "#",
          time: "1200",
          bg: "white",
        },
        {
          image: "/images/icons/property.svg",
          title: "Property-Related Documents Entry",
          description:
            "Computyne provides efficient Property-Related Documents Entry services, ensuring accurate and timely processing of real estate documents such as leases, contracts,",
          link: "#",
          time: "1800",
        },
      ];
      const whyusData = [
        {
          image: "/images/icons/data-analytics.svg",
          title: "Top-Notch Results With Computyne",
          description:
            "Computyne provides precise Invoice and Accounting Bills Data Entry services, ensuring accurate recording and management of financial documents. ",
          link: "#",
          time: "600",
          bg: "white",
        },
        {
          image: "/images/icons/team.svg",
          title: "Experienced Team of Data Entry Experts",
          description:
            "Computyne offers specialized PDF Documents Data Entry services, accurately converting and extracting information from PDF files into editable formats.",
          link: "#",
          time: "1200",
        },
        {
          image: "/images/icons/interest-rate.svg",
          title: "Cost-Effective",
          description:
            "Computyne provides efficient Property-Related Documents Entry services, ensuring accurate and timely processing of real estate documents such as leases, contracts,",
          link: "#",
          time: "1800",
        },
        {
          image: "/images/icons/magnifying.svg",
          title: "Get Into The Details",
          description:
            "Computyne offers reliable Survey Forms Data Entry services, accurately capturing and processing responses from various survey formats. Our solutions ensure efficient data",
          link: "#",
          time: "600",
          bg: "#fff",
        },
        {
          image: "/images/icons/chip.svg",
          title: "Hi-Tech Services",
          description:
            "Computyne provides expert Financial Reports Entry services, ensuring accurate and timely recording of financial data into structured reports. Our solutions enhance ",
          link: "#",
          time: "1200",
          bg: "white",
        },
        {
          image: "/images/icons/24-hours.svg",
          title: "24/7 Availability",
          description:
            "Computyne provides efficient Property-Related Documents Entry services, ensuring accurate and timely processing of real estate documents such as leases, contracts,",
          link: "#",
          time: "1800",
        },
      ];


      const sections = [
        {
            type: "intro",
            title: "We Recommend Two Solutions for Transferring the Data",
            subtitle: "Successful Data outsourcing depends on a continuous and smooth transition of business processes.",
            content: "Our process renovation strategies are guided by experience gained from transitioning several complex data solutions and payroll processes over more than a decade. Our effective and comprehensive transition practice makes sure to have a seamless transfer of your in-house processes to our environment.",
        },
        {
            type: "faq",
            title: "Our Transition Management Solutions",
            subtitle: "",
            content: "Our transition management solution is categorized into five sections, from the identification phase to the monitoring & review phase.",
        },
    ];
    
    const solutions = [
        { title: "1. Working in the Client’s Environment", description: "Computyne works on the client’s system in the client’s network environment by using remote desktop login with restricted access to the files and folders. This solution ensures that the data remains in one secure place throughout the process." },
        { title: "2. Working in the Computyne Environment", description: "Computyne makes the necessary arrangements to create a secure network environment for our client at our Gandhinagar office. We set up secure servers on which the Computyne staff will remotely login to access necessary information." },
    ];
    
    const faqData = [
        { question: "1. Identification", answer: "During the identification stage, Computyne’s team of experts work with the client to:",
           li:"Determine the volume and nature of the business processes outsourced.",
          li1:"High-level documentation of the processes and systems that are currently in use.",
        li2:"Assess the impact of any integration plans.",
        li3:"Our marketing manager or marketing team can connect via phone, teleconference and chat to understand your business model and requirements.",
        li4:"Work closely with your team and define the processes you want to outsource and outline your expectations.",

        },
        { question: "2.Agree Target Operating Model", answer: "Working in combination with your business, the data collected during the identification stage is used to determine an operating model. Key actions in developing the model include:"
          ,li:"Clearly define the boundaries between Computyne and the client’s operational business units.",
          li1:"Agree on the timelines for reporting business-critical KPIs.",
          li2:"Ensure that where necessary new processes are developed by Computyne and the client."
         },
        { question: "3.Planning", 
           li1:"We design a detailed migration plan as per your inputs, which include the clarity in the process, resource deployment, and timeline.",
            li2:"We also create detailed plans on technology and infrastructure for a seamless and effective transition as per project requirements.",
          },
        { question: "4. Transition Implementation", li:"The method we follow for applying process transformation depends on the size and complexity of the project.",
          li1:"We may also use a combination of all the above approaches for different processes under the same project if required.",
          li2:"The size and nature of the process of the project decide the transition period; usually, it may vary from one to ten weeks.",
          li3:"Each process is well documented, and any changes and revisions to the agreed process are updated accordingly",
          li4:"We perform any course corrections that are required to make the processes more efficient.",
          li5:"Along with information exchange on process know-how, the project team is educated regarding software functionality, features, and output.",
          li6:"We establish regulation for various processes, which can be implemented at the very beginning of the transition.",
         },
        { question: "5. Monitoring and Review",li:"All process facets are studied from the perspective of precise delivery of tasks allocated to each process owner.",
          li1:"We safeguard improved precision by engaging extra control checks, applying apparent automation, and making quick fixes to the existing process.",
          li2:"Complete project control competence in terms of quality and precision is attained through regular reporting through constant monitoring.",

         },
    ];
return(
<>
<PageHead PageMeta={PageMeta} />
<Layout>
<InnerBanner
    pagetitle="Computyne"
    title="Transition Process"
    subtitle="Data Support & Property Matching"
    description="Streamline your operations with our expert data entry and management services!"
    bgimage="/images/innerbanner/baner-4.webp"
    breadcrumbtitle2="Company"
    breadcrumbtitle3="Transition Process"
    breadcrumb1="/"
    breadcrumb2="#"
    breadcrumb3="/transition-process"
    />
    <section className="amamaa">
                <Container>
                    <div className="grid grid-cols-12 gap-5">
                        <div className="lg:col-span-9 md:col-span-12 col-span-12">
                            <div className="stretch-container">
                                <Container>
                                    <div className="grid grid-cols-12">
                                        <div className="lg:col-span-9 md:col-span-12 col-span-12">
                                        <DynamicPage
                                            sections={sections}
                                            solutions={solutions}
                                            faq={faqData}
                                            btnText="Get in Touch"
                                            btnLink="/contact-us"
                                        />
                                        </div>
                                    </div>    
                                </Container>                       
                            </div>
                        </div>                    
                        <div className="col-span-3 mt-[25px] mb-[30px]">
                            <div className="sticky top-[100px]  case-temp-main right-form">
                            <RightForm/>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <div className="pt-[50px]">
            <WorkService/>
            </div>
 <div className="pb-[100px]">
 <Form />
 </div>
</Layout>
</>
)
}