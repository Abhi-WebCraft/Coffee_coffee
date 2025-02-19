import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "../Layout/Container";
import SectionTitle from "../Layout/SectionTitle";
import Btn from "../Layout/Btns/Btn";

export default function Solutions({ solutions, title, content }) {
    return (
        <section id="solutions" className="section bg-[#f5fbfb]">
            <Container>
                <div className="max-w-[1100px] mx-auto text-center mb-[50px]">
                    <SectionTitle
                        title={title}
                        content={content}
                    />
                </div>
                <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
                    {solutions.map((solution, index) => (
                        <div 
                            key={index} 
                            className="solution-box flex flex-col gap-3" 
                            style={{ backgroundColor: solution.bg }} 
                            data-aos="fade-up" 
                            data-aos-duration={solution.time}
                        >
                            <Image
                                src={solution.image}
                                alt={solution.title}
                                width={60}
                                height={60}
                                className="w-[60px] h-[60px] p-[5px] bg-white border rounded-2xl"
                            />
                            <h4 className="text-[26px]">{solution.title}</h4>
                            <p>{solution.description}</p>
                        </div>
                    ))}
                    {/* <div className="relative">
                        <Image 
                            src="/images/client-story.jpg" 
                            alt="Client Story"
                            width={400} 
                            height={330} 
                            className="w-[400px] h-[330px] rounded-xl relative"
                        />
                        <div className="absolute rounded-xl inset-0 bg-gradient-to-t from-[#0a0624]/90 via-[#0a0624]/60 to-transparent"></div>

                        <div className="absolute flex flex-col gap-3 bottom-10 left-3 z-10">
                            <h3 className="text-white">Learn More About Our Services</h3>
                            <div>
                                <Btn title="Contact Us" link="#"/>
                            </div>
                        </div>
                    </div> */}
                </div>
            </Container>
        </section>
    );
}
