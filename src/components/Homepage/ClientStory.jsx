import Image from "next/image";
import Link from "next/link";
import Container from "../Layout/Container";
import SectionTitle from "../Layout/SectionTitle";
export default function ClientStory (){
return (
<section className="section bg-cover bg-center bg-no-repeat" style={{backgroundImage:"url('/images/bg/service-bg.png')"}}>
    <Container>
        <div className="max-w-[1000px]"></div>
        <div className="lg:rid lg:grid-cols-2 lg:gap-8 md:grid md:grid-cols-2 md:gap-6 sm:grid sm:grid-cols-2 ">
            <article className="card group mb-6">
                {/* Add the group class here */}
                <div className="temporary_text">
                    <Image
                        src="/images/client-story.jpg"
                        alt="client-story-image"
                        width={1536}
                        height={1024}
                        className="w-full object-cover"
                        loading="lazy"
                        quality={100}
                        />
                </div>
                <div className="card_content flex flex-col gap-2">
                <div className="flex justify-between items-center relative card-texts">
                <div>
                    <span className="card_subtitle text-[16px] text-[#ff3221] font-bold"> CLIENT STORY</span>
                    <h4 className="card_title text-[20px] font-bold text-black"> Client’s Satisfaction Is Our Elevation</h4>
                    </div>
                    <Link href="/case-studies">
                        <div className="flex gap-4">
                            <p className="uppercase text-[14px]">read more</p>
                            <Image src="/images/icons/checked.svg" alt="icons" width="20" height="20" className="w-[20px] h-[20px]"/>
                        </div>
                        </Link>
                    </div>
                    <p className="card_description">
                        We have been effectively empowering our clients around the world with relevant, cutting-edge, and precise data to accomplish better organizational execution.
                    </p>
                    
                </div>
            </article>
            <article className="card group mb-6">
                {/* Add the group class here */}
                <div className="temporary_text">
                    <Image
                        src="/images/process.jpg"
                        alt="process-image"
                        width={1536}
                        height={1024}
                        className="w-full object-cover"
                        loading="lazy"
                        quality={100}
                        />
                </div>
                <div className="card_content flex flex-col gap-2">
                <div className="flex justify-between items-center relative card-texts">
                <div>
                    <span className="card_subtitle text-[16px] text-[#ff3221] font-bold">OUR PROCESS</span>
                    <h4 className="card_title text-[20px] font-bold text-black">Trust Our Process To Mark Footprints</h4>
                    </div>
                    <Link href="#">
                        <div className="flex gap-4">
                            <p className="uppercase text-[14px]">read more</p>
                            <Image src="/images/icons/checked.svg" alt="icons" width="20" height="20" className="w-[20px] h-[20px]"/>
                        </div>
                        </Link>
                    </div>
                    <p className="card_description">
                    We provide tailor-made solutions for your business needs. Our firm grip over all the outsourcing processes is sure to help you build a successful business.
                    </p>
                    
                </div>
            </article>
        </div>
    </Container>
</section>
)
}