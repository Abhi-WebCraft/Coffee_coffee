
import Image from "next/image";
import Link from "next/link";
import styles from "@/components/HomePage/OurService/OurService.module.css"; 
import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";

const ourservices = [
    {   
        number: "1",
        image: "/images/service/educate.jpg",
        title: "Educational Consultancy",
        description:
            "Dar Aluloom Educational Consultancy takes pride in providing top services to students from the UAE who aspire to study in the best Colleges and Universities in the UK, USA, Canada, Singapore, Europe, Australia and New Zealand.",
        link: "/education-consultants-in-dubai",
    },
    {
        number: "2",
        image: "/images/service/subject.jpg",
        title: "Subject Tutoring",
        description:
            "We are dedicated to providing you with the best subject tutorials to help you excel in your academic journey. Whether you're a student looking for additional resources to supplement your learning or a parent seeking guidance to support your child's education.",
        link: "/subject-tutoring-in-uae-dubai",
    },
    { 
        number: "3",
        image: "/images/service/test-prep.jpg",
        title: "Test Prep",
        description:
            "At Dar Aluloom International, we believe in empowering students to reach their highest academic potential. Our specialised test preparation in UAE are designed to equip you with the skills, strategies, and confidence needed to excel in your exams.",
        link: "/test-preparation-in-uae",
    },
   
];

export default function CaseStudies() {
    return (
        <section className={styles.servicesection}>
            <Container>
                <div className="max-w-[1000px] mx-auto text-center mb-[50px]">
                    <SectionTitle
                        subtitle="What We Offer" 
                        title="Our Remarkable Services" 
                    />
                </div>
                <div className="lg:grid lg:grid-cols-3 lg:gap-10 md:grid md:grid-cols-2 md:gap-6 sm:grid sm:grid-cols-1">
                    {ourservices.map((ourservice, index) => (
                        <Link key={index} href={ourservice.link}>
                            <div className={`relative mb-6 overflow-hidden group ${styles.serviceCard}`}>
                                <div className={`relative overflow-hidden case-study-image ${styles.serviceImage}`}>
                                    <Image
                                        src={ourservice.image}
                                        alt={`${ourservice.title} image`}
                                        width={1536}
                                        height={1024}
                                        className="object-cover w-full"
                                        loading="lazy"
                                        quality={100}
                                    />
                                </div>
                                <div className="flex flex-col gap-2 px-4 py-8 h-[240px]">
                                    <h4 className="text-[25px] font-semibold text-[#bf9e60]">{ourservice.title}</h4> 
                                    <p className="">{ourservice.description}</p>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-4 border-t">
                                    <p className="uppercase text-[15px] font-semibold text-[#bf9e60]">Read More</p>
                                    <Image 
                                        src="/images/icons/fast-forward-green.svg" 
                                        alt="Fast forward icon" 
                                        width={13} 
                                        height={13} 
                                        className="w-[13px] h-[13px]"
                                    />
                                </div>        
                            </div>
                        </Link>
                    ))}
                </div>
            </Container>
        </section>
    );
}
