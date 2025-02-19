import { useState } from "react";
import Image from "next/image";
import Container from "../Layout/Container";
import Btn from "../Layout/Btns/Btn";

const Banner = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const videoUrl = "https://www.youtube.com/embed/QyrxlpyUg3E?si=4xvApXDuMabzOxwl"; // URL for embedded video

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <section
            className="mt-[50px] home-main-banner section bg-cover bg-no-repeat relative bg-center h-[800px]"
            style={{ backgroundImage: "url('/images/bg/homenew-banner.png')" }}
        >
            <Container>
                <div
                    className="banner-content absolute top-1/2 flex flex-col gap-6"
                    style={{ transform: "translate(0%, -50%)" }}
                >
                    <div className="flex items-center gap-2">
                        <span className="small-line w-[30px] h-[3px] bg-[#ff3221] inline-block"></span>
                        <span className="text-[15px] font-bold">WE ARE THE MARKET EXPERTS</span>
                    </div>
                    <div className="banner-head">
                        <h1 className="leading-[70px] uppercase max-w-[750px] banner-heading">
                            strengthening your <span className="text-gradient">business</span> verticals
                        </h1>
                    </div>
                    <p className="text-[19px] leading-[30px] max-w-[750px]">
                    Empower your business with our comprehensive data entry outsourcing solutions that drive efficiency and ensure seamless operations.
                    </p>
                    <div className="flex items-center gap-5 banner-button">
                        <Btn title="Get A Free Estimate" link="/contact-us" />
                        <div>
                            <button
                                onClick={openModal}
                                className="video-button flex items-center gap-2 cursor-pointer"
                            >
                                <Image src="/images/icons/play-1.svg" alt="video-icon" width={30} height={30} className="video-icon" />
                                <p className="text-[18px] font-bold text-black">Watch Demo</p>
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="banner-icons">
                <Image src="/images/bg/banner-vector.png" alt="banner-icon" width={159} height={159} className="banner-icon" />
                <Image src="/images/bg/banner-vector-2.png" alt="banner-icon" width={94} height={98} className="banner-icon-rotate" />
            </div>

            {/* Video Modal */}
            {/* <VideoModal isOpen={isModalOpen} onClose={closeModal} videoUrl={videoUrl} /> */}
        </section>
    );
};

export default Banner;
