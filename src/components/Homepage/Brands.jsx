import Image from "next/image";
import Container from "../Layout/Container";
import SectionTitle from "../Layout/SectionTitle";

export default function Brands() {
  return (
    <section className="section relative"  style={{
       backgroundImage: 'url("/images/bg/brand-right-bg.png")',
       backgroundPosition: "bottom right",
       backgroundRepeat: "no-repeat",
       backgroundSize: "contain",
     }} >
      <Container>
      <div className="contact-bg-image"></div>
        <div className="mb-[50px]">
          <SectionTitle
            subtitle="Driving technology for leading brands"
            title="Our Clients"
          />
        </div>
        <div className="lg:grid lg:grid-cols-5 lg:gap-10 md:grid md:grid-cols-3 md:gap-7 grid grid-cols-2 gap-4">
            <Image src ="/images/brands/brand1.png" alt="clients" width="233" height="90" className="w-[100%] h-[90px] object-contain mb-4 client-logo" data-aos="fade-up"
     data-aos-duration="1000"/>
            <Image src ="/images/brands/fbrand2.png" alt="clients" width="233" height="90" className="w-[100%] h-[90px] object-contain mb-4 client-logo" data-aos="fade-up"
     data-aos-duration="1300"/>
            <Image src ="/images/brands/brand3.png" alt="clients" width="233" height="90" className="w-[100%] h-[90px] object-contain mb-4 client-logo" data-aos="fade-up"
     data-aos-duration="1600"/>
            <Image src ="/images/brands/brand4.png" alt="clients" width="233" height="90" className="w-[100%] h-[90px] object-contain mb-4 client-logo" data-aos="fade-up"
     data-aos-duration="2000"/>
            <Image src ="/images/brands/brand5.png" alt="clients" width="233" height="90" className="w-[100%] h-[90px] object-contain mb-4 client-logo" data-aos="fade-up"
     data-aos-duration="2300"/>
            <Image src ="/images/brands/brand6.png" alt="clients" width="233" height="90" className="w-[100%] h-[90px] object-contain mb-4 client-logo" data-aos="fade-up"
     data-aos-duration="2000"/>
            <Image src ="/images/brands/brand7.png" alt="clients" width="233" height="90" className="w-[100%] h-[90px] object-contain mb-4 client-logo" data-aos="fade-up"
     data-aos-duration="2500"/>
            
        </div>
      </Container>
    </section>
  );
}
