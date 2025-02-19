import Image from "next/image";
import Link from "next/link";
import Container from "../Layout/Container";

const foodItems = [
    { id: 1, image: "/images/data.jpg", title: "Data Entry", duration: 500, link: "#" },
    { id: 2, image: "/images/data.jpg", title: "Data Entry", duration: 1000, link: "#" },
    { id: 3, image: "/images/data.jpg", title: "Data Entry", duration: 1500, link: "#" },
    { id: 4, image: "/images/data.jpg", title: "Data Entry", duration: 2000, link: "#" },
    { id: 5, image: "/images/data.jpg", title: "Data Entry", duration: 2000, link: "#" },
    { id: 6, image: "/images/data.jpg", title: "Data Entry", duration: 2000, link: "#" },
];

export default function Cards() {
    return (
        <section>
            <Container>
                <div className="lg:grid lg:grid-cols-4 lg:gap-8 md:grid md:grid-cols-2 md:gap-6 sm:grid sm:grid-cols-1">
                    {foodItems.map(({ id, image, title, duration, link }) => (
                        <div key={id} className="food-main" data-aos="fade-up" data-aos-duration={duration}>
                            <Image
                                src={image}
                                alt={title}
                                width="424"
                                height="410"
                                className="w-[100%] h-[410px] object-cover"
                            />
                            <div className="food-content bg-white text-center">
                                <div className="flex flex-col gap-2">
                                    <h5 className="food-head uppercase">{title}</h5>
                                    <Link href={link}>
                                        <div className="flex items-center gap-3 justify-center">
                                            <p className="font-medium text-[12px]">EXPLORE MORE</p>
                                            <Image
                                                src="/images/icons/right-arrow-1.svg"
                                                alt="right-arrow"
                                                width={25}
                                                height={25}
                                                className="w-[25px] h-[25px]"
                                            />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
