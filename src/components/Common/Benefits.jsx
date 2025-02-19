import Image from "next/image";
import Container from "../Layout/Container";
import SectionTitle from "../Layout/SectionTitle";



export default function Benefits({benefitsData,title}) {
  return (
    <section className="section bg-cover bg-center bg-no-repeat" id="why-computyne" style={{backgroundImage:"url('/images/bg/bg-grad.jpg')"}}>
      <Container>
        <div className=" text-center mb-[50px]">
          <SectionTitle title={title}/>
          <p className="text-[20px]">Computyne has successfully delivered 2500+ projects worldwide with 99% accuracy rates. Call us now and hire our professionals to handle your data entry service operations!</p>
        </div>

        <div className="main-div">
          {benefitsData.map((benefit, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-[25px] border-b border-black"
              data-aos="fade-up"
              data-aos-duration={benefit.aosDuration}
            >
            <div className="flex gap-10 group benefit-main">
                <p className="text-[25px] font-semibold group-hover:text-[#ff3221] benefit-number">{benefit.number}</p>
                <div className="flex flex-col gap-4">
                <h3 className="font-bold text-black group-hover:text-[#ff3221]">{benefit.title}</h3>
                <p className="text-[18px] max-w-[1100px]">{benefit.desc}</p>
                </div>
            </div>

              <div className="benefit-image-div">
                <Image
                  src={benefit.icon}
                  alt="icon"
                  width={50}
                  height={50}
                  className="w-[100%] h-[45px] object-contain benefit-image"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
