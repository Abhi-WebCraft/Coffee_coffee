import Image from "next/image";
import Container from "../Layout/Container";

export default function Servicecard (){
    return (
        <section className="">
            <Container>
                <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-center justify-around py-8 border-t border-b border-[#eacadf]" data-aos="fade-up" data-aos-duration="500">
                        <Image src="/images/data1.png" alt="girl image" width="340" height="164" className="w-[340px] h-[164px] servicecard-img"/>
                        <span className="number-text">01</span>
                        <div className="flex flex-col gap-3">
                            <h3>Document Data Entry</h3>
                            <p className="w-[600px]">Over a decade of experience in all aspects of data processing gave Computyne the concrete base to create itself from a single team to a growing company. </p>
                        </div>
                        <div>
                        <Image src="/images/icons/right-down.svg" alt="arrow vector" width="25" height="25" className="arrow-vector w-[60px] h-[60px] relative"/>
                        </div>

                    </div>

                    <div className="flex items-center justify-around py-8  border-b border-[#eacadf]" data-aos="fade-up" data-aos-duration="1000">
                        <Image src="/images/data1.png" alt="girl image" width="340" height="164" className="w-[340px] h-[164px] servicecard-img"/>
                        <span className="number-text">02</span>
                        <div className="flex flex-col gap-3">
                            <h3>Mortgage Data Entry</h3>
                            <p className="w-[600px]">Over a decade of experience in all aspects of data processing gave Computyne the concrete base to create itself from a single team to a growing company. </p>
                        </div>
                        <div>
                        <Image src="/images/icons/right-down.svg" alt="arrow vector" width="25" height="25" className="arrow-vector w-[60px] h-[60px] relative"/>
                        </div>

                    </div>
                    <div className="flex items-center justify-around py-8 border-b border-[#eacadf]" data-aos="fade-up" data-aos-duration="1500">
                        <Image src="/images/data1.png" alt="girl image" width="340" height="164" className="w-[340px] h-[164px] servicecard-img"/>
                        <span className="number-text">03</span>
                        <div className="flex flex-col gap-3">
                            <h3>Real Estate Data Collection</h3>
                            <p className="w-[600px]">Over a decade of experience in all aspects of data processing gave Computyne the concrete base to create itself from a single team to a growing company. </p>
                        </div>
                        <div>
                        <Image src="/images/icons/right-down.svg" alt="arrow vector" width="25" height="25" className="arrow-vector w-[60px] h-[60px] relative"/>
                        </div>

                    </div>
                </div>
            </Container>
        </section>
    )
}