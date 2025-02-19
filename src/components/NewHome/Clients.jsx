import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules"; // Only if you need autoplay

const clients = [
  { image: "/images/brands/brand1.png" },
  { image: "/images/brands/brand5.png" },
  { image: "/images/brands/brand3.png" },
  { image: "/images/brands/brand1.png" },
  { image: "/images/brands/brand5.png" },
  { image: "/images/brands/brand1.png" },
  { image: "/images/brands/brand5.png" },
  { image: "/images/brands/brand3.png" },
  { image: "/images/brands/brand1.png" },
  { image: "/images/brands/brand5.png" },
];

export default function Clients() {
  return (
    <section className="bg-[#0a0624] py-[10px]">
      {/* Test without Autoplay or loop initially */}
      <Swiper
        className="workgallery-slider"
        modules={[Autoplay]}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
        slidesPerView={3} // Just set to 2 for all screen sizes first
        breakpoints={{
          450: { slidesPerView: 3 },
          768: { slidesPerView: 3 }, // Increase on tablets
          1024: { slidesPerView: 8 },
        }}
      >
        {clients.map((item, index) => (
          <SwiperSlide key={index}>
            <div>
              <Image
                src={item.image}
                alt="clients"
                width={180}
                height={85}
                className="w-[180px] h-[85px] object-contain client-logoimg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
