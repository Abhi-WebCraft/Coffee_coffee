import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";
import Container from "../Container";
import Btn from "@/components/Layout/Btns/Btn";
const contactDetails = [
{
icon: "/images/icons/placeholder.svg",
text: "3/2, Alpha Arcade, Infocity Circle Gandhinagar 382010, India",
link: "#",
},
{
icon: "/images/icons/email-11.svg",
text: "info@computyne.com",
link: "mailto:info@computyne.com",
},
];
const socialLinks = [
{
icon: "/images/icons/facebook-white.svg",
href: "https://www.facebook.com/people/Computyne-Business-Process-Services/100075815080008/", 
alt: "Facebook Icon",
},
{
icon: "/images/icons/youtube-white.svg",
href: "https://www.youtube.com/watch?v=E6GazMa5TXA", 
alt: "Instagram Icon",
},
{
icon: "/images/icons/linkedin-white.svg",
href: " https://www.linkedin.com/company/13197469/admin/",
alt: "LinkedIn Icon",
},
{
icon: "/images/icons/twitter-black-shape.svg",
href: "https://twitter.com/computyne", 
alt: "Twitter Icon",
},
];
export default function Footer() {
const currentYear = new Date().getFullYear();
return (
<>
<section className="py-[70px] footer-main relative bg-no-repeat bg-top-right bg-[#15153e]" style={{backgroundImage:"url('/images/bg/footer-bg.png')"}}>
    <div className="footer-left-shape z-10" style={{backgroundImage:"url('/images/bg/left-shape.png')"}}></div>
    <div className="footer-right-shape z-10" style={{backgroundImage:"url('/images/bg/right-shape.png')"}}></div>
    <Container>
        <div className="flex justify-between items-center pb-[30px] border-b border-white footer-text relative z-50">
            <p className="text-white text-[30px] leading-[40px] footer-text-para">It's Time. Start Transforming Your Business Processes Now.</p>
            <div>
            <Btn title="Contact Us" link="/contact-us"/>
            </div>
            
        </div>
        <div className="flex flex-col lg:flex-row items-start gap-8 footer-down text-white relative z-50 pt-[50px]">
            <div className="w-full lg:w-[30%] footer-width">
                <Image src="/images/logo/white-computyne.svg" alt="computyne-logo" width="150" height="60" className="footer-logo w-[190px] h-[60px]"/>
                <p className=" text-white  my-4 font-normal text-[15px]">
                    Computyne is a pioneer at providing outsourcing data entry services from India.
                </p>
                <div>
                    <div className="support-text mt-3">
                        <ul className="flex flex-col gap-4">
                            {contactDetails.map((detail, index) => (
                            <li key={index} className="flex items-center gap-4">
                                <Image
                                    src={detail.icon}
                                    width={40}
                                    height={40}
                                    alt={detail.text}
                                    className="w-[40px] h-[40px] object-cover p-2 rounded-full border-[#777] border hover:bg-[#ff3221]"
                                    />
                                <Link href={detail.link} target="_blank" rel="noopener noreferrer">
                                <p className="text-white ">{detail.text}</p>
                                </Link>
                            </li>
                            ))}
                        </ul>
                    </div>
                    <div className="pt-[30px]">
                        <ul className="footer-social flex gap-4">
                            {socialLinks.map((social, index) => (
                            <li key={index}>
                                <Link
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="items-center font-normal text-[15px] gap-3"
                                    >
                                <div className="p-2 rounded-full border-[#777] border hover:bg-[#ff3221]">
                                    <Image
                                        src={social.icon}
                                        width={25}
                                        height={25}
                                        alt={social.alt}
                                        className="w-[25px] h-[25px] object-cover"
                                        />
                                </div>
                                </Link>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row w-full lg:w-[70%] justify-between gap-5 footer-width">
                <div className="text-white w-full lg:w-1/2">
                    <h3 className="text-[22px] font-semibold mb-4">Quick Link</h3>
                    <ul className="flex flex-col gap-4">
                        <li>
                            <Link
                                href="/"
                                className="footer-items hover: font-normal text-[16px]"
                                >
                            Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about-us"
                                className="footer-items hover: font-normal text-[16px]"
                                >
                            About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/case-studies"
                                className="footer-items hover: font-normal text-[16px]"
                                >
                            Case Studies
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/blog"
                                className="footer-items hover: font-normal text-[16px]"
                                >
                            Blogs
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact-us"
                                className="footer-items hover: font-normal text-[16px]"
                                >
                            Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="text-white w-full lg:w-1/2">
                    <h3 className="text-[22px] font-semibold mb-4">
                        Industries
                    </h3>
                    <ul className="flex flex-col gap-4">
                        <li>
                            <Link
                                href="/accounting-and-finance-back-office-solutions"
                                className="footer-items hover: font-normal text-[16px]"
                                >
                            Accounting & Finance
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/educational-institutions-back-office-solutions"
                                className="footer-items hover: font-normal text-[16px]"
                                >
                            Educational Institutions
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/logistics-and-shipping-back-office-solutions"
                                className="footer-items hover: font-normal text-[16px]"
                                >
                            Logistics & Shipping
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/real-estate-and-mortgage-back-office-solutions"
                                className="footer-items hover: font-normal text-[16px]"
                                >
                            Real Estate & Mortgage
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/retail-and-ecommerce-back-office-solutions"
                                className="footer-items hover: font-normal text-[16px]"
                                >
                            Retail & E-Commerce
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/restaurant-and-hospitality-back-office-solutions"
                                className="footer-items hover: font-normal text-[16px]"
                                >
                            Restaurant & Hospitality
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="text-white w-full lg:w-1/2">
                    <h3 className="text-[22px] font-semibold mb-4">
                        Our Services
                    </h3>
                    <ul className="flex flex-col gap-4">
                        <li>
                            <Link
                                href="/data-entry-services"
                                className="footer-items hover: font-normal text-[16px]"
                                >
                            Data Entry
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/data-processing-services"
                                className="footer-items hover: font-normal text-[16px]"
                                >
                            Data Processing
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/data-management-services"
                                className="footer-items hover: font-normal text-[16px]"
                                >
                            Data Management
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </Container>
</section>
<div className={styles.footerbottom}>
    <Container>
        <div className="flex justify-between gap-5 flex-wrap text-white">
            <div>&copy; {currentYear} New Website. All Rights Reserved.</div>
        </div>
    </Container>
</div>
</>
);
}