import styles from "@/components/HomePage/About/About.module.css"; 
import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";
import Image from "next/image";
const about =[
    {
        image:"/images/icons/check.svg",
        text:"Medicine College Admissions Consultant in Dubai",
    },
    {
        image:"/images/icons/check.svg",
        text:"Engineering College Admissions Consultant in Dubai",
    },
    {
        image:"/images/icons/check.svg",
        text:"US College Admissions Consultant in UAE",
    },
    {
        image:"/images/icons/check.svg",
        text:"UK College Admissions Consultant in UAE",
    },
    {
        image:"/images/icons/check.svg",
        text:"European College Admissions Consultant in Dubai",
    },
    {
        image:"/images/icons/check.svg",
        text:"Canadian college admissions consultant in Dubai",
    },
];
export default function About (){
    return (
        <section className={styles.section}>
            <Container>
                <div className="grid-cols-1 gap-8 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2">
                    <div>
                        <Image src="/images/service/education-1.png" alt="" width="934" height="824" className=" w-[100%] h-[100%]"/>
                    </div>
                    <div >
                       <div className={'flex flex-col gap-6 {styles.aboutContent}'}>
                       <SectionTitle
                            subtitle="About The Company"
                            title="Elevating Educational and Professional Development"
                        />
                        <div className="flex flex-col gap-4">
                            <p>At Dar Aluloom International, our mission is to deliver a comprehensive range of services, thoughtfully designed to meet your educational and professional goals. From expert educational consultants and targeted test preparation to personalized subject tutoring, we are committed to being your trusted partner in success. With our guidance, you can enhance your academic performance, unlock your full potential, and pursue new opportunities with confidence.</p>
                            <p className="text-[#28aa4a]">Here is the list of various college admissions consultation services we offer :</p>
                            <div className="flex flex-col gap-3">
                            {about.map((aboutus, index) => (
                              <div className="flex items-center gap-3">
                                <Image 
                                src={aboutus.image}
                                alt="vector" 
                                width="30" 
                                height="30" 
                                className={`w-[30px] h-[30px] ${styles.abouticon}`} 
                                />
                                <h4 className="font-medium text-[17px]">{aboutus.text}</h4>
                              </div>
                            ))}
                            </div>
                        </div>
                       </div>
                        
                    </div>
                </div>
            </Container>
        </section>
    )
}
