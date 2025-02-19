import Link from "next/link";

export default function BannerQuickLinks() {
    const handleScroll = (event, id) => {
        event.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="sticky top-[70px] z-10 quicklink">
            <div className="lg:grid lg:grid-cols-5 lg:gap-4 md:grid md:grid-cols-5 md:gap-4  bg-[#022c60] text-[17px] text-white border-b border-white cursor-pointer">
                <a href="#overview" onClick={(e) => handleScroll(e, "overview")}>
                    <h4 className="py-[15px] pl-[20px]">Overview</h4>
                </a>
                <a href="#solutions" onClick={(e) => handleScroll(e, "solutions")}>
                    <h4 className="border-l border-white py-[15px] pl-[20px]">Solutions</h4>
                </a>
                <a href="#why-computyne" onClick={(e) => handleScroll(e, "why-computyne")}>
                    <h4 className="border-l border-white py-[15px] pl-[20px]">Why Computyne?</h4>
                </a>
                <a href="#faq" onClick={(e) => handleScroll(e, "faq")}>
                    <h4 className="border-l border-white py-[15px] pl-[20px]">Faq's</h4>
                </a>
                <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
                    <h4 className="border-l border-r border-white py-[15px] pl-[20px]">Contact Us</h4>
                </a>
            </div>
        </section>
    );
}
