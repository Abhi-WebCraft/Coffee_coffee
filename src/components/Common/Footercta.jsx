import Image from "next/image";
import Container from "../Layout/Container";

export default function Footercta() {
  return (
    <section
      className="section"
      style={{
        backgroundImage: 'url("/images/bg/brand-shape.png")',
        backgroundPosition: "top left",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <Container>
        <div className="lg:grid lg:grid-cols-3 lg:gap-5 md:grid  md:grid-cols-3 sm:grid sm:grid-cols-1">
          <div className="single-feature-items mb-4">
            <div className="content">
              <span>Monday to Sunday: 24X7 Hours</span>
              <h3>Opening hours</h3>
            </div>
            <div className="icon  flex items-center justify-center">
              <Image
                src="/images/icons/delivery.svg"
                width="50"
                height="50"
                alt=""
                className="w-[50px] h-[50px]"
              />
            </div>
          </div>

          <div className="single-feature-items active">
            <div className="content">
              <span>3/2, Alpha Arcade, Infocity <br></br>Circle
              Gandhinagar 382010, India</span>
              <h3>Our address</h3>
            </div>
            <div className="icon  flex items-center justify-center">
              <Image
                src="/images/icons/loctor.svg"
                width="50"
                height="50"
                alt=""
                className="w-[50px] h-[50px]"
              />
            </div>
          </div>

          <div className="single-feature-items mb-4">
            <div className="content">
              <span>info@computyne.com</span>
              <h3>Email us at </h3>
            </div>
            <div className="icon  flex items-center justify-center">
              <Image
                src="/images/icons/email.svg"
                width="50"
                height="50"
                alt=""
                className="w-[50px] h-[50px]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
