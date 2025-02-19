import PageHead from "@/components/Layout/PageHead";
import Layout from "@/components/Layout/Layout";
import About from "@/components/Homepage/About";
import InnerBanner from "@/components/Innerpagedesign/InnerBanner";
import OurVision from "@/components/ComponentsSection/OurVision";
import Backbone from "@/components/ComponentsSection/Backbone";
import Testimonials from "@/components/Homepage/Testimonials";

export default function AboutUs({ referrer }) {
  console.log(referrer);
  const PageMeta = {
    title: "Computyne",
    description: "New Webiste",
  };

  return (
    <>
      <PageHead PageMeta={PageMeta} />
      <Layout>
      <InnerBanner
                pagetitle="Computyne"
                title="About Us"
                subtitle="Data Support & Property Matching"
                description="Streamline your operations with our expert data entry and management services!"
                bgimage="/images/innerbanner/abt.webp"
                breadcrumbtitle2="Company"
                breadcrumbtitle3="About Us"
                breadcrumb1="/"
                breadcrumb2="#"
                breadcrumb3="/about-us"
                />
        
        <Backbone />
        <About />
        <OurVision />
        <Testimonials />
      </Layout>
    </>
  );
}
