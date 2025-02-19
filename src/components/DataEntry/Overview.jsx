import Image from "next/image";
import Container from "../Layout/Container";
import SectionTitle from "../Layout/SectionTitle";
import Btn from "../Layout/Btns/Btn";

export default function Overview({
  backgroundImage,
  subtitle,
  title,
  descriptions,
  buttonText,
  buttonLink,
}) {
  return (
    <section id="overview" className="section bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${backgroundImage})` }} >
      <Container>
        <div className="flex flex-col gap-3 text-center">
          <SectionTitle subtitle={subtitle} title={title} />
          {descriptions.map((desc, index) => (
            <p key={index} className="text-[20px] leading-[32px] mt-[20px]">
              {desc}
            </p>
          ))}
          <div className="mt-[30px]">
            <Btn title={buttonText} link={buttonLink} />
          </div>
        </div>
      </Container>
    </section>
  );
}
