import Link from "next/link";
import Container from "../Layout/Container";
import SectionTitle from "../Layout/SectionTitle";

export default function Serve({ services }) {
    // Helper function to group services into rows of 5
    const groupServices = (services, itemsPerRow) => {
        const grouped = [];
        for (let i = 0; i < services.length; i += itemsPerRow) {
            grouped.push(services.slice(i, i + itemsPerRow));
        }
        return grouped;
    };

    // Group the services into rows
    const serviceRows = groupServices(services, 5);

    return (
        <section className="section">
            <Container>
                <div className="mb-12 text-center">
                    <SectionTitle title="Industries We Serve" />
                </div>
                <div className="grid gap-y-8">
                    {serviceRows.map((row, rowIndex) => (
                        <div
                            key={rowIndex}
                            className="grid grid-cols-1 gap-4 sm:flex sm:flex-wrap sm:justify-start"
                        >
                            {row.map((service, index) => (
                                <Link key={index} href={service.links}>
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
