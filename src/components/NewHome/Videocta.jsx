import { useState } from "react";
import Image from "next/image";
import Container from "../Layout/Container";
import VideoModal from "../Common/VideoModal";

export default function Videocta() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const videoUrl = "https://www.youtube.com/embed/E6GazMa5TXA?autoplay=1"; // URL for embedded video

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <section className="section">
            <Container>
                <div className="relative">
                    <Image 
                        src="/images/bg/videobg.png" 
                        width={1320} 
                        height={490} 
                        className="w-[100%] h-[100%] video-image" 
                        alt="Video background"
                    />
                    <div className="video-text absolute top-1/2 left-0">
                        <h2>Explore <span className="pl-[100px]">Computyne</span></h2>
                    </div>
                    <div onClick={openModal} className="cursor-pointer">
                        <Image 
                            src="/images/bg/triangle.png" 
                            alt="video vector" 
                            width={354} 
                            height={398} 
                            className="video-vector"
                        />
                        <Image 
                            src="/images/icons/white-play.svg" 
                            alt="play icon" 
                            width={50} 
                            height={50} 
                            className="video-vector-icon absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        />
                    </div>
                </div> 

                {/* Video Modal */}
                <VideoModal isOpen={isModalOpen} onClose={closeModal} videoUrl={videoUrl} />
            </Container>
        </section>
    );
}
