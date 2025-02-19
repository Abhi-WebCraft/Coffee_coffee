import Image from "next/image";
import Link from "next/link";
import Container from "../Layout/Container";
import SectionTitle from "../Layout/SectionTitle";
const service = [
    {
        image:"/images/icons/checked.svg",
        title:"Data Entry",
        description:"Computyne, a trusted data entry outsourcing company since 2009, offers efficient data management with a 99% accuracy rate. Our expert team delivers precise, timely results to clients worldwide, including the USA, UK, and Australia.",
        link:"/data-entry-services",
    },
    {
        image:"/images/icons/checked.svg",
        title:"Data Processing",
        description:"Computyne offers precise and efficient data processing services, converting your crucial data into digital formats. Trusted globally, we ensure accuracy, fast turnaround, and 24/7 support to manage your data seamlessly.",
        link:"/data-processing-services",
    },
    {
        image:"/images/icons/checked.svg",
        title:"Data management",
        description:"Since 2009, Computyne has delivered expert data management outsourcing, helping businesses enhance efficiency. We offer tailored solutions like data cleansing, enrichment, and web research to drive informed decisions and success.",
        link:"/data-management-services",
    }
];

export default function Service (){
    return (
        <section className="section service bg-cover bg-center bg-no-repeat" style={{backgroundImage:"url('/images/bg/service-bg.png')"}}>
            <Container>
                <div className="max-w-[1000px] mx-auto text-center mb-[50px]">
                    <SectionTitle
                        title="Our Services"
                    />
                </div>
                <div className="lg:grid lg:grid-cols-3 lg:gap-6 md:grid md:grid-cols-3 md:gap-6 sm:grid sm:grid-cols-1">
                {service.map((service, index) =>(
                    <div key={index} className="service-box flex flex-col gap-4 mb-4" >
                    <div className="service-shape">
                        <Image src ="/images/bg/service-item-shape.png" alt="service-shape" width="193" height="142" className="w-[193px] h-[112px] object-cover"/>
                    </div>
                        <Image src={service.image} alt={`${service.title} Image`} width="30" height="30" className="w-[30px] h-[30px] service-icon"/>
                        <h4 className="text-[20px] uppercase">{service.title}</h4>
                        <p>{service.description}</p>
                        <Link href={service.link}>
                        <div className="flex gap-4">
                            <p className="uppercase text-[14px]">read more</p>
                            <Image src="/images/icons/checked.svg" alt="icons" width="20" height="20" className="w-[20px] h-[20px]"/>
                        </div>
                        </Link>
                    </div>
                ))}
                </div>
            </Container>
        </section>
    )
}