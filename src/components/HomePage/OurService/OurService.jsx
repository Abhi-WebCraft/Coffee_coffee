
import Image from "next/image";
import Link from "next/link";
import styles from "@/components/HomePage/OurService/OurService.module.css"; 
import Container from "@/components/Layout/Container";
import SectionTitle from "@/components/Layout/SectionTitle";

const ourservices = [
    {   
        number: "1",
        image: "/images/abhi/3.jpg",
        title: "Custom Software Development",
        description:
            "We build scalable, secure, and high-performance software tailored to your unique needs — from simple tools to complex platforms.",
        link: "/education-consultants-in-dubai",
    },
    {
        number: "2",
       image: "/images/abhi/4.jpg",
        title: "Web Application Development",
        description:
            "Using modern frameworks like Next.js and React, we create responsive, fast, and user-friendly web apps optimized for performance and SEO.",
        link: "/subject-tutoring-in-uae-dubai",
    },
    { 
        number: "3",
         image: "/images/abhi/5.jpg",
        title: "Mobile App Development",
        description:
            "We develop cross-platform mobile apps for iOS and Android that deliver great user experiences and business value.",
        link: "/test-preparation-in-uae",
    },
        { 
        number: "4",
         image: "/images/abhi/6.jpg",
        title: "Artificial Intelligence",
        description:
            "AI enables businesses to lean into the power of data and insights to enable better responsiveness and decision-making to reimagine operations, experiences, and products.",
        link: "/test-preparation-in-uae",
    },
        { 
        number: "5",
         image: "/images/abhi/7.jpg",
        title: "Process Automation",
        description:
            "Process Automation is the use of technology to perform repetitive, rule-based tasks and workflows without human intervention. It helps businesses improve efficiency, reduce errors, cut costs, and increase productivity.",
        link: "/test-preparation-in-uae",
    },
        { 
        number: "6",
         image: "/images/abhi/8.jpg",
        title: "IT Consulting & Strategy",
        description:
            "Not sure where to start? Our tech experts help you choose the right tools and architecture to future-proof your product.",
        link: "/test-preparation-in-uae",
    },
   
];

export default function CaseStudies() {
    return (
        <section className={styles.servicesection}>
            <Container>
                <div className="max-w-[1000px] mx-auto text-center ">
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
                                        className="object-cover w-ful xl:h-[300px]"
                                        loading="lazy"
                                        quality={100}
                                    />
                                </div>
                                <div className="flex flex-col gap-2 px-4 py-8 h-[180px]">
                                    <h4 className="text-[25px] font-semibold text-[#000]">{ourservice.title}</h4> 
                                    <p className="">{ourservice.description}</p>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-4 border-t">
                                    <p className="uppercase text-[15px] font-semibold text-[#000]">Read More</p>
                                    <Image 
                                        src="/images/abhi/fast-forward.svg" 
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
