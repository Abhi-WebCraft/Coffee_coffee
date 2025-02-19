import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Container from "../Layout/Container";
import SectionTitle from "../Layout/SectionTitle";

export default function Industry({ industries }) {
  return (
    <section className="section">
      <Container>
        <div className="max-w-[1000px] mx-auto text-center justify-center mb-12 flex flex-col gap-4">
          <SectionTitle title="Industry We Serve" />
        </div>
        <Swiper
          className="workgallery-slider mt-[50px]"
          modules={[Autoplay]}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            450: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {industries.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="slider-image flex flex-col gap-2 justify-end p-[30px] mb-[10px] ml-[10px] w-[100%] h-[450px]"
                style={{ backgroundImage: `url(${item.bgimage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <div className="content">
                  <h4 className="text-[22px] leading-[32px] font-semibold text-white pt-[20px]">
                    {item.title}
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}
