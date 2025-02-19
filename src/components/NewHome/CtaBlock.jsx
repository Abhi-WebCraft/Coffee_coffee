import Image from "next/image";
import Link from "next/link";
import Container from "../Layout/Container";
import Btn from "../Layout/Btns/Btn";


const CtaBlock = () => {
  return (
    <section
      className="cta-block py-[50px] bg-[#e7f2ff]">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 h-full">
          <div>
            <p className="text-[18px] font-bold text-black">
              Computyne is
            </p>
            <div className="text-[#0a0624] text-[35px] font-bold capitalize cta-head">
            Built for Your Comfort
            </div>
            <p className="text-[20px] text-black">
            Why not consult with one of our expert technicians today?
            </p>
          </div>
          <Btn title="Get A Free Trial" link="/contact-us"/>
        </div>
      </Container>
    </section>
  );
};

export default CtaBlock;
