import Image from "next/image";
import Container from "../Layout/Container";
import SectionTitle from "../Layout/SectionTitle";
export default function StatsSection() {
    const stats = [
        { icon: '/images/icons/trophy.svg', value: '10+ Years', description: 'Outsourcing Expertise' },
        { icon: '/images/icons/clerk-with-tie.svg', value: '550+', description: 'Satisfied Clients Worldwide' },
        { icon: '/images/icons/briefcase.svg', value: '1,200+', description: 'Projects Completed' },
        { icon: '/images/icons/empowering.svg', value: '240+', description: 'Empowered Employees' },
        { icon: '/images/icons/best-employee.svg', value: 'Certified', description: 'Certified Global Leader' },
        { icon: '/images/icons/protection.svg', value: '360°', description: 'Information Security & Confidentiality' },
    ];

    return (
        <section className="section bg-white ">
            <Container>
                <div className="max-w-[900px] mx-auto text-center mb-[30px]">
                    <SectionTitle 
                        title="Computyne:Delivering Excellence in Data Processing for Over a Decade" 
                        content="Computyne is a trusted data entry outsourcing company, providing high-end solutions globally. With 550+ satisfied clients across 20+ countries and over 11 years of expertise, we are committed to helping businesses achieve operational efficiency and success."
                    />
                </div>
                <div className=" ">
                    <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3   p-6">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={`flex flex-col items-center justify-center text-center border-gray-200 px-6 p-8 ${
                                    index < 3 ? 'border-b' : ''
                                } ${index % 3 !== 2 ? 'border-r' : ''}`}
                            >
                            <div className="w-[80px] h-[80px] flex items-center justify-center mb-4 "> 
                            <Image src={stat.icon} alt={stat.description} width={500} height={500}  className="w-12 h-12 " />
                            </div>
                                <h3 className="text-[34px] font-bold text-[#000]">{stat.value}</h3>
                                <p className="text-[18px] text-gray-600">{stat.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
