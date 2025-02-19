import Image from "next/image";
import Container from "../Layout/Container";
import SectionTitle from "../Layout/SectionTitle";

export default function WorkService() {
    const workService = [
        {
            image: "/images/data-entry-services.jpg",
            title: "Data Entry Services",
            link: "/data-entry-services",
        },
        {
            image: "/images/data-processing.jpg",
            title: "Data Processing",
            link: "/data-processing-services",
        },
        {
            image: "/images/data-management.jpg",
            title: "Data Management",
            link: "/data-management-services",
        },
        {
            image: "/images/resume.jpg",
            title: "Resume Processing",
            link: "/resume-formatting-and-processing-services",
        },
        {
            image: "/images/data-collection.jpg",
            title: "Data Collection",
            link: "/data-collection-services",
        },
        {
            image: "/images/invoice.jpg",
            title: "Invoice Processing",
            link: "/invoice-processing-services",
        },
    ];

    return (
        <section>
            <Container>
                <div>
                    <SectionTitle title="Our Services" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 mt-[30px]">
                    {workService.map((service, index) => (
                        <a
                            key={index}
                            href={service.link}
                            className="relative work-service"
                        >
                            <Image
                                src={service.image}
                                alt={service.title}
                                width="400"
                                height="300"
                                className="w-[100%] h-[100%]"
                            />
                            <div className="work-service-overlay"></div>
                            <div className="work-service-content">
                                <h2 className="text-[22px]">{service.title}</h2>
                            </div>
                        </a>
                    ))}
                </div>
            </Container>
        </section>
    );
}
