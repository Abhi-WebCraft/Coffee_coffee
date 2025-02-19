import styles from '@/components/Layout/Header/Styles/SidebarCTA.module.css';
import Btn from '../Btns/Btn';
import Image from 'next/image';
import Link from 'next/link';

export default function SidebarCTA({ CallActive, setCallActive }) {
  return (
    <>
      <div className={`${styles.SidebarCTA} ${CallActive ? styles.opened : ""}`}>
        <div className={styles.SidebarCTAWrapper}>
          <div className={styles.SidebarCTAClose} onClick={() => setCallActive(false)}>
            <span>X</span>
          </div>
          <div className={styles.CTABlock}>
            <div>
                <h4>Get in touch</h4>
                <p>Feel free to connect with us</p>
            </div>
            <div className={styles.CTACol}>
                <div className={styles.CTAicon}><Image src="images/icons/call.svg" width={50} height={50} alt="icon"/></div>
                <div className={styles.CTAinfo}>
                <Link href="tel:+91-9924556577">+91-9924556577 <span>Helpline Number</span></Link>
                </div>
            </div>
            <div className={styles.CTACol}>
                <div className={styles.CTAicon}><Image src="images/icons/whatsapp.svg" width={50} height={50} alt="icon"/></div>
                <div className={styles.CTAinfo}>
                <Link href="https://wa.me/919924556577">+91-9924556577 <span>Whatsapp Number</span></Link>
                </div>
            </div>
            <div className={styles.CTACol}>
                <div className={styles.CTAicon}><Image src="images/icons/mail.svg" width={50} height={50} alt="icon"/></div>
                <div className={styles.CTAinfo}>
                <Link href="mailto:info@computyne.com">info@computyne.com <span>Online Support</span></Link>
                </div>
            </div>
            <div className={styles.CTACol}>
                <div className={styles.CTAicon}><Image src="images/icons/map.svg" width={50} height={50} alt="icon"/></div>
                <div className={styles.CTAinfo}>
                <Link href="https://maps.app.goo.gl/wQviLnQTsUFfoTVd8" target='_blank'>3/2, Alpha Arcade, Infocity Circle Gandhinagar 382010, India<span>Mail Address</span></Link>
                </div>
            </div>
            </div>
          <div className={styles.SidebarCTABottom}>
            <div className={styles.SidebarCTABottomText}>Need help? Let our team solve it..</div>
            <Btn title="Gett A free Estimate" link="/contact-us" />
          </div>
        </div>
      </div>
      <div className={`${styles.bodyOverlay} ${CallActive ? styles.opened : ""}`} onClick={() => setCallActive(false)}></div>
    </>
  );
}
