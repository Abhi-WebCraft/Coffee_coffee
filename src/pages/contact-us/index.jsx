import PageHead from "@/components/Layout/PageHead";
import Layout from "@/components/Layout/Layout";
import Form from '@/components/NewHome/Form';
import InnerBanner from "@/components/Innerpagedesign/InnerBanner";

export default function ContactUs ({referrer }){
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
    {/* <BannerSection
                pagetitle="Contact Us"
                title="Let's Connect"
                subtitle="Data Support & Property Matching"
                description="If you're interested in learning more about our services, requesting a free trial, or discussing your project needs, we’re here and eager to connect with you!"
                bgimage="/images/innerbanner/baner-10.webp"
                cardimg="/images/innerbanner/baner-10.webp"
                caseLink="#"
                linkText="Succes Stories"
                breadcrumbtitle="Contact Us"
                breadcrumb1="/"
                breadcrumb2="/accounting-and-finance-back-office-solutions"
                /> */}
           <InnerBanner
                pagetitle="Computyne"
                title="Contact Us"
                subtitle="Contact Us"
                description="Streamline your operations with our expert data entry and management services!"
                bgimage="/images/innerbanner/about.webp"
                breadcrumbtitle2="Contact Us"
                breadcrumb1="/"
                breadcrumb2="/contact-us"
                />
                   
            <div className="pb-[100px]">
            <Form/>
            </div>
          </Layout>
    </>
    )
}