import Image   from "next/image";
import Container from "../Layout/Container";
import SectionTitle from "../Layout/SectionTitle";

export default function WhyChoose (){
    return (
        <section className="section">
            <Container>
                <div className="max-w-[1000px] mx-auto text-center mb-[50px]">
                    <SectionTitle
                    subtitle="Committed to Your Data Success"
                        title="Why choose us"
                    />
                </div>
                <div className="lg:grid lg:grid-cols-3 lg:gap-8 md:grid md:grid-cols-2 md:gap-6 sm:grid sm:grid-cols-1">
                <div className="mb-[-15px]">
                    <div className="whychoose-box flex gap-4">
                        <Image src="/images/icons/24-hours.svg" alt="whychoose-icon" width="60" height="60" className="w-[60px] h-[60px] icon"/>
                            <div className="why-choose-content">
                            <h3 className="text-[20px] mb-[12px]">24/7 Support</h3>
                            <p>Provides round-the-clock customer support, ensuring prompt assistance for any data-related inquiries or issues.</p>
                            </div>
                    </div>
                    </div>
                    
                    <div className="pt-[15px]">
                    <div className="whychoose-box-next flex gap-4">
                        <Image src="/images/icons/profit.svg" alt="whychoose-icon" width="60" height="60" className="w-[60px] h-[60px] icon"/>
                            <div className="why-choose-content">
                            <h3 className="text-[20px] mb-[12px]">Cost-Effective Solutions</h3>
                            <p>Offers competitive pricing, helping businesses manage data efficiently while reducing operational costs.</p>
                            </div>
                    </div>
                    </div>

                    <div className="mb-[-15px]">
                    <div className="whychoose-box flex gap-4">
                        <Image src="/images/icons/accuracy.svg" alt="whychoose-icon" width="60" height="60" className="w-[60px] h-[60px] icon"/>
                            <div className="why-choose-content">
                            <h3 className="text-[20px] mb-[12px]">Accuracy and Precision</h3>
                            <p>Ensures high accuracy with double verification, minimizing errors in all data entry processes.</p>
                            </div>
                    </div>
                    </div>

                    <div className="mb-[-15px]">
                    <div className="whychoose-box-next flex gap-4">
                        <Image src="/images/icons/technology.svg" alt="whychoose-icon" width="60" height="60" className="w-[60px] h-[60px] icon"/>
                            <div className="why-choose-content">
                            <h3 className="text-[20px] mb-[12px]">Advanced Technology</h3>
                            <p>Utilizes modern tools for efficient, secure data processing and management, enhancing overall productivity.</p>
                            </div>
                    </div>
                    </div>

                    <div className=" pt-[15px]">
                    <div className="whychoose-box flex gap-4">
                        <Image src="/images/icons/confidential-folder.svg" alt="whychoose-icon" width="60" height="60" className="w-[60px] h-[60px] icon"/>
                            <div className="why-choose-content">
                            <h3 className="text-[20px] mb-[12px]">Data Security and Confidentiality</h3>
                            <p>Employs strict security measures, including encryption, to protect sensitive business data.</p>
                            </div>
                    </div>
                    </div>

                    <div className="mb-[-15px]">
                    <div className="whychoose-box-next flex gap-4">
                        <Image src="/images/icons/internet.svg" alt="whychoose-icon" width="60" height="60" className="w-[60px] h-[60px] icon"/>
                            <div className="why-choose-content">
                            <h3 className="text-[20px] mb-[12px]">Global Reach</h3>
                            <p>Serves clients worldwide, offering multilingual data entry and management services to support international business operations.</p>
                            </div>
                    </div>
                    </div>

                    

                </div>
            </Container>
        </section>
    )
}