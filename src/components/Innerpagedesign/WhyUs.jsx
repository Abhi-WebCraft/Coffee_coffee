import Link from "next/link";
import Image from "next/image";
import Container from "../Layout/Container";
import SectionTitle from "../Layout/SectionTitle";

export default function WhyUs ({whyus}){
    return (
        <section className="py-[60px]">
            <Container>
                <div className="flex flex-col gap-3 case-temp-main">
                    <SectionTitle
                        title="Why Choose Us ?"
                    />
                    <p>Computyne has successfully delivered 2500+ projects worldwide with 99% accuracy rates. <span className="text-[#ff3221] font-bold"><Link href="/contact-us">Call us now and hire our professionals</Link></span> to handle your data entry service operations !</p>
                </div>
                <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 pt-[50px] case-temp-main">
                    {whyus.map((whyus, index) => (
                        <div 
                            key={index} 
                            className="solution-box flex flex-col gap-4" 
                            style={{ backgroundColor: whyus.bg }} 
                            data-aos="fade-up" 
                            data-aos-duration={whyus.time}
                        >
                        <div className="flex items-center justify-between">
                        <h4 className="text-[20px] text-black">{whyus.title}</h4>
                            <Image
                                src={whyus.image}
                                alt={whyus.title}
                                width={45}
                                height={45}
                                className="w-[45px] h-[45px] "
                            />
                            
                            </div>
                            <p>{whyus.description}</p>
                        </div>
                    ))}
             
                </div>
            </Container>
        </section>
    )
}