import PageHead from "@/components/Layout/PageHead";
import Layout from "@/components/Layout/Layout";
import InnerBanner from "@/components/Innerpagedesign/InnerBanner";
import CaseStudies from "../../components/Common/Case-Studies";
export default function AboutUs ({referrer }){
console.log(referrer)
const PageMeta = 
        {
        title: "Computyne",
        description:"New Webiste"
    }

return(
<>
<PageHead PageMeta={PageMeta} />
<Layout>
<InnerBanner
                pagetitle="Computyne"
                title="Client's Stories"
                subtitle="Data Support & Property Matching"
                description="Streamline your operations with our expert data entry and management services!"
                bgimage="/images/innerbanner/baner-8.webp"
                caseLink="#"
                linkText="Succes Stories"
                breadcrumbtitle2="Case Studies"
                breadcrumb1="/"
                breadcrumb2="/case-studies"
                />
        <CaseStudies/>
    
</Layout>
</>
)
}