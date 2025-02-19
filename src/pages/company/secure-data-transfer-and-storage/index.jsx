import PageHead from "@/components/Layout/PageHead";
import Layout from "@/components/Layout/Layout";
import InnerBanner from "@/components/Innerpagedesign/InnerBanner";
import Work from "../../../components/Common/Work";
import Form from "@/components/NewHome/Form";
import Container from "../../../components/Layout/Container";
import Detail from "../../../components/Innerpagedesign/Detail";
import InnerService from "../../../components/Innerpagedesign/InnerService";
import CtaBlock from "../../../components/NewHome/CtaBlock";
import Timeline from "@/components/Innerpagedesign/Timeline";
import WorkService from "../../../components/Common/WorkService";
import RightForm from "../../../components/Common/RightForm";
import Abhi from "../../../components/Common/DynamicPage";
import DynamicPage from "../../../components/Common/DynamicPage";
import { type } from "os";
import { title } from "process";

export default function index ({referrer }){
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
            title: "The Significant Features of Computyne’s data security",
            subtitle: "All the office premises and production facilities of Computyne are custom-bond. Random checks are carried out to prevent any violation of guidelines.",
            content: "Computyne’s approach to data protection and privacy is more than legal compliance. It is a core part of both Computyne’s business value proposition and its culture, as well as global in scope. Protecting your privacy is important to our employees and us. We believe the confidentiality and security of customer information to be among our most major responsibilities.",
             
        },
    
        {
            type: "",
            title: "",
            subtitle: "",
            content: "",
        },
    ];
    const solutions = [
        { title: "", description: "We do not use your contact information like your name and email address for personal use. We use this contact information from the registration form to send you information about our company. You can always opt-out of receiving future emails by choosing the unsubscribe option in the registration form." },
        { title: "", description: "Computyne believes in maintaining the confidentiality of the clients and keeps their identity anonymous on the website. All the offices and production facilities of Computyne are custom-bound. Random checks are carried out to prevent any violation. We value the trust entrusted upon us by our clients and see to it that all our employees bind with non-disclosure agreements. That makes us more responsible for the client." },
        { title: "", lidd: "Our all employees are confined under company’s non-disclosure and non-competent agreements." },
        { title: "", lidd: "Every person has an individual password and access to their particular workstation is also restricted." },
        { title: "", lidd: "Staff have their individual key to their assigned workstations and access to other’s is restricted." },
        { title: "", lidd: "Entry of any visitor into the premises is strictly prohibited without consent." },
        { title: "", lidd: "There are no coinciding areas of work as we have strictly defined the responsibilities of all staff members." },
        { title: "", lidd: "Data server area is well protected and only authorized persons can access." },
        { title: "", lidd: "Office premises are safeguarded by adequate security persons." },
        { title: "", lidd: "All servers and workstations are protected by Cyber Security System to avoid any InfoSec violence over the web." },
        {
            btn:"CONTACT US",
        }
        
    ];
    
    const faqData = [
        { question: "1. Estimated Pricing", answer: "No worries of cost escalation as you pay monthly costs that are fixed before starting the projects." },
        { question: "2. Flexibility", answer: "Our infrastructure allows us to serve you round the clock 24×7 according to your geographical time zones and that also with a flexiblity of deploying more resources at any time." },
        { question: "3. Partnership Approach", answer: "Partnering with your association, we are always devoted to better decision making and achieving high-end results." },
        { question: "4. Economies of Scale", answer: "This model works perfect and is economical than an hourly model for the businesses who have medium to high level volumes of work." },
        { question: "4. Ready to Go", answer: "This model allows setting up or hiring additional sources anytime in the urgency of a project, with flexibility in the cost structure." },
       
    ];
   
    
return(
<>
<PageHead PageMeta={PageMeta} />
<Layout>
<InnerBanner
    pagetitle="Computyne"
    title="Secure Data Transfer & Storage"
    subtitle="Data Support & Property Matching"
    description="Streamline your operations with our expert data entry and management services!"
    bgimage="/images/innerbanner/baner-3.webp"
    breadcrumbtitle2="Company"
    breadcrumbtitle3="Secure Data Transfer & Storage"
    breadcrumb1="/"
    breadcrumb2="#"
    breadcrumb3="/secure-data-transfer-and-storage"
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
                                            faqtitle="Volume-Based Pricing Model"
                                            faqcontent="Volume-based pricing models can be helpful to clients with a high level of maturity in business process outsourcing. The success of this engagement model is dependent on the capability to estimate the volume of the data process and the average time needed to process them. The costs are linked straight with the number of volumes handled, with a price per volume that is based on a specified band of size.

                                            We usually offer this model to businesses that have a high level of clearness on these aspects, or we work with clients for a few months on the FTE model to evaluate these factors before proceeding."
                                        />;
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
            <WorkService/>
 <div className="pb-[100px]">

 <Form />
 </div>
</Layout>
</>
)
}