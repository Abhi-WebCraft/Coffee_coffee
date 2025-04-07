import Container from "@/components/Layout/Container";
import styles from './Footer.module.css';
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const icons = [
    {
      imageIcon : "/images/icons/whatsapp.svg",
      slug:"https://api.whatsapp.com/send?phone=971524495817",
    },
    {
      imageIcon : "/images/icons/facebook.svg",
      slug:"https://www.facebook.com/daraluloomfz",
    },
    {
      imageIcon : "/images/icons/social.svg",
      slug:"https://www.instagram.com/daraluloom.fz",
    },
    {
      imageIcon : "/images/icons/linkedin.svg",
      slug:"https://www.linkedin.com/company/daraluloom",
    },
    {
      imageIcon : "/images/icons/youtube-1.svg",
      slug:"https://www.youtube.com/channel/UC4wT93nyhPui13rXWMJD4wA",
    },
    {
      imageIcon : "/images/icons/tik-tok-1.svg",
      slug:"https://www.tiktok.com/@dar.aluloom.inter0?_t=8kqIoQOg8dG&_r=1",
    },
    {
      imageIcon : "/images/icons/twitter1.svg",
      slug:"https://x.com/AluloomDar44887",
    },
  ];

  const contacts = [
    { href: "tel:+971524495817", icon: "/images/icons/telephone-call-1.svg", text: "+971524495817" },
    { href: "mailto:info@daraluloom.com", icon: "/images/icons/email-11.svg", text: "info@daraluloom.com" }, 
    { href: "#", icon: "/images/icons/location-11.svg", text: " 6th floor, Elite Business Center, Al Barsha 1 opp Lulu hypermarket Dubai, UAE" }, 
    { href: "#", icon: "/images/icons/location-11.svg", text: "Block B - B33 - 176, SRTIP Sharjah, UAE" }, 
    { href: "#", icon: "/images/icons/location-11.svg", text: "Compass Building, Al Shohada Road, AL Hamra Industrial Zone,  Ras Al Khaimah, UAE" }, 
  ];


  return (
    <>
    <div className={styles.footerTop}>
      <Container>
        <div className="flex items-center justify-center gap-4">
        {icons.map ((item, index)=>(
        <Link href={item.slug} key={index}>
          <Image src={item.imageIcon} alt="vector" width="40" height="40" className={`w-[40px] h-[40px] ${styles.footerIcon}`}/>
          </Link>
        ))}
        </div>
      </Container>
    </div>
      <footer className={styles.footer}>
        <Container>
          <div className={styles.footerGrid}>
            <div className={styles.footerItems}>
              <div className={styles.footerLogo}>
              <Link href="/" title="Bhutan holiday tours">
                <Image src="/images/logo/main-logo.png" alt="Bhutan Best Inbound Tour" width="100" height="100" className='w-[100%]' priority />
              </Link>
              </div>
              <p className="leading-[26px] text-[#000]">Look no further than the Educational consultants at Dar Aluloom International, your premier destination for top-tier guidance and support.</p>
                <div className="flex items-center gap-4 pt-6">
                <Image src="/images/icons/time.svg" alt="" width="50" height="50" className="w-[50px] h-[50px] "/>
                <div className="">
                <h3 className="text-[#000]">Business Hours</h3>
                <p className="text-[#000] mt-[-20px]">Monday – Friday 10 am to 7 pm</p>
                </div>
                </div>
            </div>
            <div className={`${styles.footerItems} text-[#bf9e60]`}>
              <h4 className="text-[#28aa4a]">Quick Links</h4>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/privacy-policy">Privacy Policy </Link></li>
                <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
              </ul>
            </div>
            <div className={`${styles.footerItems} text-[#bf9e60]`}>
              <h4 className="text-[#28aa4a]">Test Prep</h4>
              <ul>
                <li><Link href="/test-preparation-in-uae">Test Preparation in UAE</Link></li>
                <li><Link href="/ielts-test-prep-in-uae">IELTS Test Prep</Link></li>
                <li><Link href="/sat-preparation-in-uae">SAT Preparation</Link></li>
                <li><Link href="/ucat-preparation-in-uae">UCAT Preparation</Link></li>
              </ul>
            </div>
            <div className={`${styles.footerItems} text-[#bf9e60]`}>
              <h4 className="text-[#28aa4a]">Contact Us</h4>
                <ul className="flex flex-col gap-3">
                  {contacts.map((contact, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Link href={contact.href} className="flex items-center gap-4">
                      <Image
                      src={contact.icon}
                      alt="icon-vector"
                      width={30}
                      height={30}
                      className="w-[30px] h-[30px]"
                      />
                      <p className="leading-[28px]">{contact.text}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
            </div>
          </div>
        </Container>
      </footer>
      <div className={`${styles.footerbottom}  text-[#000] bg-[#e7f2e2]`}>
        <Container>
          <div className="flex flex-wrap justify-between gap-5">
            <div>&copy; {currentYear} Dar Aluloom International. All Rights Reserved.</div>
          </div>
        </Container>
      </div>
    </>
  );
}
