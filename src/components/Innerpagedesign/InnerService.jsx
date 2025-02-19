import Image from "next/image";
import Container from "../Layout/Container";
import SectionTitle from "../Layout/SectionTitle";

export default function InnerService ({solutions , title, description, services ,subtitle}){
    return  (
        <section className="innersection">
            <Container>
            <div className="flex flex-col gap-3 case-temp-main">
                <SectionTitle title={title} subtitle={subtitle} />
                <p>{description}</p>
                {services && services.length > 0 && (
                    <ul>
                    {services.map((service, index) => (
                        <li key={index}>{service}</li>
                    ))}
                    </ul>
                )}
                </div>
                <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 pt-[50px] case-temp-main">
                    {solutions.map((solution, index) => (
                        <div 
                            key={index} 
                            className="solution-box flex flex-col gap-4" 
                            style={{ backgroundColor: solution.bg }} 
                            data-aos="fade-up" 
                            data-aos-duration={solution.time}
                        >
                        <div className="flex items-center justify-between">
                        <h4 className="text-[20px] text-black">{solution.title}</h4>
                            <Image
                                src={solution.image}
                                alt={solution.title}
                                width={45}
                                height={45}
                                className="w-[45px] h-[45px] "
                            />
                            
                            </div>
                            <p>{solution.description}</p>
                        </div>
                    ))}
             
                </div>
            </Container>
        </section>
    )
}