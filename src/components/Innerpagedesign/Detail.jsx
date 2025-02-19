import Container from "../Layout/Container";
import SectionTitle from "../Layout/SectionTitle";

export default function Detail({ details }) {
    return (
        <section className="innersection">
            <Container>
                <div className="flex flex-col gap-3 case-temp-main">
                    {details.map((section, index) => (
                        <div key={index} className="flex flex-col gap-3">
                            <SectionTitle title={section.title} />
                            {section.paragraphs.map((paragraph, idx) => (
                                <div key={idx}>
                                    {section.heading && (
                                        <h2 className="text-2xl text-gray-600">{section.heading}</h2>
                                    )}
                                    <p className="text-base text-gray-800">{paragraph}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
