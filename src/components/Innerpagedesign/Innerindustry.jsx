import Link from "next/link";
import Container from "../Layout/Container";
import SectionTitle from "../Layout/SectionTitle";

export default function IndustryServe({ services }) {
    return (
        <section className="pb-[60px]">
            <Container>
                <div className="mb-12 text-center">
                    <SectionTitle title="Industries We Serve" />
                </div>
                <div className="grid gap-y-8">
                    {Array.from({ length: Math.ceil(services.length / 4) }).map((_, rowIndex) => (
                        <div
                            key={rowIndex}
                            className="grid grid-cols-1 gap-4 sm:flex sm:flex-wrap sm:justify-start"
                        >
                            {services.slice(rowIndex * 4, rowIndex * 4 + 4).map((service, index) => (
                                <Link key={index} href={service.links || "#"}>
                                    <span className="block text-center border-2 border-[#041830] py-4 px-6 hover:bg-[#041830] hover:text-white transition duration-300 rounded-md">
                                        {service.name}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
