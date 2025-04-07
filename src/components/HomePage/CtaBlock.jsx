import Image from "next/image";
import Link from "next/link";
import Container from "../Layout/Container";
import Btn from "../Layout/Btns/Btn";


const CtaBlock = () => {
  return (
    <section className="cta-block py-[50px] bg-[#d62828] bg-cover bg-no-repeat bg-center" style={{backgroundImage:"url('/images/bg/cta-bg.webp')"}}>
      <Container>
        <div className="flex flex-col items-center justify-between h-full gap-6 lg:flex-row">
          <div>
            <p className="text-[18px] font-bold text-[#fff]">
            Book a Free Test Prep Demo 
            </p>
            <div className=" text-[55px] font-extrabold capitalize text-[#fff] cta-head">
            Looking to Excel in Your Exams ! 
            </div>
            <p className="text-[20px] text-[#fff] max-w-[800px]">
            Experience our expert-led test prep sessions with a free demo! Discover how we can help you achieve your academic goals with personalized guidance and proven strategies.
            </p>
          </div>
          <Btn title="Let’s Get Started!" link="tel:+971524495817"/>
        </div>
      </Container>
    </section>
  );
};

export default CtaBlock;
