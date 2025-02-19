import Btn from "../Layout/Btns/Btn";
import Container from "../Layout/Container";
import SectionTitle from "../Layout/SectionTitle";

export default function OurVision({}) {
    return (
        <>
            <section>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Left Section */}
                    <div
                        className="flex items-center justify-center text-white px-5 lg:px-20"
                        style={{
                            backgroundImage: `linear-gradient(rgb(255 50 33), rgb(214 67 55 / 61%)), url('/images/bg/banner-img.png')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            padding:"50px"
                        }}
                    >
                        <Container>
                        <div className="space-y-3 lg:space-y-5 text-center lg:text-left">
                            <h2 className="text-3xl lg:text-4xl">Our Mission</h2>
                            <p className="text-base lg:text-lg text-[#fff]">
                            At Computyne, our mission is to lead the industry by delivering exceptional outsource data entry services that add value and create consistent competitive advantages for our clients. By building innovative and ethical solutions, we aim to foster customer satisfaction and loyalty across the globe.
                            </p>
                            <div className="space-y-2 lg:space-y-3">
                                <strong className="text-lg lg:text-xl">Our Values:</strong>
                                <ul className="list-none space-y-1">
                                    <li>01. Adaptable and Scalable Outsourcing Process</li>
                                    <li>02. Initiative & Creativity</li>
                                    <li>03. High Ethical Standards & Integrity</li>
                                    <li>04. Customer Satisfaction and Loyalty</li>
                                    <li>05. Flexibility and Speed</li>
                                </ul>
                            </div>
                            <Btn title="Get In Touch" link="/contact-us"/>
                        </div>
                        </Container>
                    </div>

                    {/* Right Section */}
                    <div
                        className="flex items-center justify-center text-white px-5 lg:px-20"
                        style={{
                            backgroundImage: `linear-gradient(rgb(0 0 0 / 97%), rgb(0 0 0 / 86%)), url('/images/bg/banner-img.png')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                             padding:"50px"
                        }}
                    >
                        <Container>
                        <div className="space-y-3 lg:space-y-5 text-center lg:text-left">
                            <h2 className="text-3xl lg:text-4xl">Our Vision</h2>
                            <p className="text-base lg:text-lg text-[#fff]">
                            We aim to become a globally recognized data processing company and the ideal partner for businesses seeking unmatched outsourcing typing services. We strive to deliver an exceptional customer experience while being the global benchmark for reliability and trust in data processing outsourcing services.
                            </p>
                            <div className="space-y-2 lg:space-y-3">
                                <strong className="text-lg lg:text-xl">Goals:</strong>
                                <ul className="list-none space-y-1">
                                    <li>01. To be the global leader</li>
                                    <li>02. To establish unmatched trust</li>
                                    <li>03. Continuous customer satisfaction</li>
                                    <li>04. Delivering exceptional services</li>
                                </ul>
                            </div>
                            <Btn title="Tap & Go To Enquire" link="/contact-us"/>
                        </div>
                        </Container>
                    </div>
                </div>
            </section>
        </>
    );
}
