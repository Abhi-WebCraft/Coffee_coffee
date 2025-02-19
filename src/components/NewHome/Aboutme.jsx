import { useState } from "react"; // Correct import for useState
import Link from "next/link";
import Image from "next/image";
import Container from "../Layout/Container";
const Banner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoUrl = "https://www.youtube.com/embed/QyrxlpyUg3E?si=4xvApXDuMabzOxwl"; // URL for embedded video

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section
      className="about-section-new section bg-[#15153e] bg-contain bg-no-repeat bg-right"
      style={{ backgroundImage: "url('/images/bg/globe.webp')" }}
    >
      <Container>
        <div className="lg:grid lg:grid-cols-2 lg:gap-10 md:grid md:grid-cols-2 md:gap-8 sm:grid sm:grid-cols-1">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="small-line w-[20px] h-[3px] bg-[#fff] inline-block"></span>
              <span className="text-[15px] font-bold text-white">
              About Computyne
              </span>
            </div>
            <div>
              <h2 className="text-[45px] font-bold text-white">Who We Are</h2>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-white">
              Established in 2009, Computyne has evolved from a single team to a leading data entry outsourcing company. With over a decade of experience, we have grown into a full-fledged outsourcing data processing services provider, offering tailored solutions to businesses worldwide. Our journey reflects dedication, innovation, and a passion for delivering real solutions to real businesses.
              </p>
              <p className="text-white">
              At Computyne, we prioritize customer satisfaction and operational excellence, ensuring every project we handle contributes to your business growth and efficiency. Our experts ensure secure and accurate data processing, contributing to smoother business operations.
              </p>
            </div>
            <div className="flex gap-5 pt-4">
              <div className="text-center about-year-box">
                <h3 className="text-[50px] font-bold text-[#fff] about-count">
                  10+
                </h3>
                <span className="font-normal text-[14px] text-white">
                  Years of Experience
                </span>
              </div>
              <div className="text-center about-year-box">
                <h3 className="text-[50px] font-bold text-[#fff] about-count">
                  1200+
                </h3>
                <span className="font-normal text-[14px] text-white">
                  Projects Completed
                </span>
              </div>
              <div className="text-center about-year-box">
                <h3 className="text-[50px] font-bold text-[#fff] about-count">
                  550+
                </h3>
                <span className="font-normal text-[14px] text-white">
                  Satisfied Clients Worldwide
                </span>
              </div>
            </div>
            {/* Uncomment if needed
            <div className="pt-8">
              <GradientBtn title="Get a free estimate " link="#" />
            </div>
            */}
          </div>
          <div className="relative">
            <div className="video-btn">
              <button
                onClick={openModal}
                className="video-button flex items-center gap-2 cursor-pointer "
              >
                <Image
                  src="/images/icons/play-2.svg"
                  alt="video-icon"
                  width={80}
                  height={80}
                  className="about-video-btn"
                />
              </button>
            </div>
            <div className="about-dark-big-title">
              <h2>About Us</h2>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
