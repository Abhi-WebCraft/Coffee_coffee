import { useState } from "react";
import Image from "next/image";
import Container from "../Layout/Container";
import SectionTitle from "../Layout/SectionTitle";
import Btn from "../Layout/Btns/Btn";

export default function About() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handlePlayClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section className="pb-[100px]">
            <Container>
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 md:grid md:grid-cols-2 md:gap-6 sm:grid sm:grid-cols-1 items-center">
                    <div className="relative">
                        <Image
                            src="/images/about.png"
                            alt="about-image"
                            width="828"
                            height="828"
                            className="w-[100%] h-[100%] object-cover"
                        />
                        <div
                            className="absolute top-[50%] left-[50%] flex items-center justify-center rounded-[50%] cursor-pointer"
                            onClick={handlePlayClick}
                        >
                            <Image
                                src="/images/icons/play-1.svg"
                                alt="play-icon"
                                width={500}
                                height={500}
                                className="w-[60px] h-[60px] object-cover video-icon"
                            />
                        </div>
                    </div>
                    <div className="about-content">
                        <div className="flex flex-col gap-4">
                            <SectionTitle title="Driving Business Growth Through Exceptional Outsourcing Services" subtitle="About Us" />
                            <p>
                            Established in 2009, Computyne has evolved from a modest team into a prominent leader in data entry and business outsourcing solutions. Our growth reflects a commitment to innovation, excellence, and a client-focused approach. As a certified data processing company, we empower businesses across the USA, Canada, UK, EU, Middle East, and Australia with exceptional services to stay ahead of the competition.
                            </p>
                            <p>
                            Recognized as a trusted name in data and business process outsourcing, Computyne has helped countless enterprises from various industries unlock the potential of their data assets for transformative outcomes. We pride ourselves on being a cost-effective and reliable partner, delivering seamless support for a wide range of data solutions.
                            </p>
                            <div>
                                <Btn title="GET IN TOUCH WITH US NOW" link="/contact-us" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            {/* Modal for Video */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="relative">
                        <button
                            className="absolute top-0 right-0 p-2 text-[30px] text-[#fff] font-[700] "
                            onClick={closeModal}
                        >
                            X
                        </button>
                        <iframe
                            width="800"
                            height="450"
                            src="https://www.youtube.com/embed/QyrxlpyUg3E?si=4xvApXDuMabzOxwl"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Video"
                        ></iframe>
                    </div>
                </div>
            )}
        </section>
    );
}
