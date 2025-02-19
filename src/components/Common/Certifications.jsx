import Image from "next/image";
import Container from "../Layout/Container";

export default function Certifications (){
    return (
        <section className="section bg-[#022c60] relative">
            <Container>
            {/* <Image src="/images/bg/circle-bg.svg" alt="certification" width="300" height="300" className="absolute right-0 bottom-0 w-auto opacity-5"/> */}
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 md:grid md:grid-cols-2 md:gap-6 sm:grid sm:grid-cols-1 items-center">
                    <div className="text-white certificate-content">
                        <h2 className="text-[80px] font-bold certificate-head">Recognitions & Certifications</h2>
                        {/* <p>Trusted Partner for Reliable Data Outsourcing Solutions</p> */}
                    </div>
                    <div className="certificate-image flex gap-5">
                        <Image src="/images/certificate/clutch.png" alt="certification" width="310" height="258" className="w-[310px] h-[258px] object-contain"/>
                        <Image src="/images/certificate/goodfirm.png" alt="certification" width="310" height="258" className="w-[310px] h-[258px] object-contain"/>
                    </div>
                </div>
            </Container>
        </section>
    )
}