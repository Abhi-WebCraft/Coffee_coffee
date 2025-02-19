import Btn from "../Layout/Btns/Btn";
import Container from "../Layout/Container";
import SectionTitle from "../Layout/SectionTitle";
import Faq from "./Faq";

export default function Work() {
    const faq = [
        {
            number: "1.",
            question: "Identification",
            answer: "This website is for educational purposes only",
        },
    ];

    const sections = [
        {
            subtitle:
                "Successful Data outsourcing depends on a continuous and smooth transition of business processes.",
            title: "We Recommend Two Solutions for Transferring the Data",
            content: "Our process renovation strategies are guided by experience gained from transitioning several complex data solutions and payroll processes over more than a decade. Our effective and comprehensive transition practice makes sure to have a seamless transfer of your in-house processes to our environment.",
        },
        {
            title: "Our Transition Management Solutions",
            content: "Our transition management solution is categorized into five sections, from the identification phase to the monitoring & review phase.",
        },
    ];

    const solutions = [
        {
            title: "1. Working in the Client’s Environment",
            description:
                "Computyne works on the client’s system in the client’s network environment by using remote desktop login with restricted access to the files and folders. This solution ensures that the data remains in one secure place throughout the process.",
        },
        {
            title: "2. Working in the Computyne Environment",
            description:
                "Computyne makes the necessary arrangements to create a secure network environment for our client at our Gandhinagar office. We set up secure servers on which the Computyne staff will remotely login to access necessary information.",
        },
    ];

    return (
        <>
            {sections.map((section, index) => (
                <section key={index} className={index === 0 ? "section" : "pb-[100px]"}>
                    <Container>
                        <div className="flex flex-col gap-3">
                            <SectionTitle
                                subtitle={section.subtitle || ""}
                                title={section.title}
                                content={section.content || ""}
                            />
                            {index === 0 && (
                                <>
                                    <p>{section.content}</p>
                                    <ul className="flex flex-col gap-2">
                                        {solutions.map((solution, i) => (
                                            <li
                                                key={i}
                                                className="flex flex-col gap-2"
                                            >
                                                <h3>{solution.title}</h3>
                                                <p>{solution.description}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                            {index === 1 && (
                                <>
                                    <Faq faqData={faq} />
                                    <div className="mt-[30px]">
                                        <Btn title="Contact Us" link="#" />
                                    </div>
                                </>
                            )}
                        </div>
                    </Container>
                </section>
            ))}
        </>
    );
}
