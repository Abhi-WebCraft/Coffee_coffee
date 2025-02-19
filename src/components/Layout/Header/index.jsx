import styles from '@/components/Layout/Header/Styles/Header.module.css';
import { useState } from "react";
import Link from "next/link";
import Sidebar from "@/components/Layout/Header/Sidebar";
import useSticky from '@/components/Hooks/use-sticky';
import Btn from "@/components/Layout/Btns/Btn";
import MenuData from "./menu-data";
import Container from "@/components/Layout/Container";
import Image from "next/image";
import SidebarCTA from '../Header/SidebarCTA';

export default function Header() {
  const { sticky } = useSticky();
  const [CallActive, setCallActive] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <header className={`${styles.headerContainer} ${sticky ? styles.headerSticky : ""}`}>
        <Container>
          <div>
            <div className={styles.navbar}>
              <div className={styles.navbarLogo}>
                <Link href="/" title="Computyne">
                  <Image src="/images/logo/svg7.svg" alt="Bhutan Best Inbound Tour" width={100} height={100} priority />
                </Link>
              </div>
              <div className={styles.navigation}>
                <div className={styles.mainmenu}>
                  <nav className={styles.nav}>
                    <ul className={styles.menu}>
                      {MenuData.map((item, i) => (
                        <li key={i} className={`${styles.liItem} ${item.has_dropdown ? styles.hasDropdown : ''}`}>
                          <Link href={item.link} passHref>
                            <span className={styles.menuLink}>{item.title}</span>
                          </Link>
                          {item.sub_menus && (
                            <ul className={`${styles.subMenu} ${styles.menu}`}>
                              {item.dropdownDetails && (
                                <div className='w-[200px] space-y-2 pr-3 border-r border-[#e0dfe5]'>
                                  <h4 className='font-[700] text-[26px] text-[#212529]'>{item.dropdownDetails.title}</h4>
                                  <p className='text-[16px] text-[#262626]'>{item.dropdownDetails.description}</p>
                                  <div>
                                    <Link href={item.dropdownDetails.readMoreLink} className="relative text-[#000] font-semibold group">
                                      <span className='text-[#262626]'>Read more</span>
                                      <span className="absolute left-0 bottom-[-6px] h-[3px] w-5 bg-[#ff3221] transition-all duration-300 ease-in-out group-hover:w-full" />
                                    </Link>
                                  </div>
                                </div>
                              )}
                              <div className={styles.menu_grid}>
                                {item.sub_menus.map((sub_item, sub_i) => (
                                  <li key={sub_i} className={styles.subMenuLi}>
                                    {sub_item.icon && (
                                      <Image
                                        src={sub_item.icon}
                                        alt={`${sub_item.title} icon`}
                                        width={35}
                                        height={35}
                                        className={styles.icon}
                                      />
                                    )}
                                    <Link href={sub_item.link} passHref>
                                      <span className={styles.subMenuLink}>{sub_item.title}</span>
                                    </Link>
                                  </li>
                                ))}
                              </div>
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
              <div className={styles.headerCtaBtn}>
                <div className={styles.ContactBtn}>
                  <Btn link="/contact-us" title="Contact Us" />
                </div>
                <div className={styles.mobileNavBtn} onClick={() => setIsActive(true)}>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </header>
      <SidebarCTA className="" CallActive={CallActive} setCallActive={setCallActive} />
      <Sidebar isActive={isActive} setIsActive={setIsActive} />
    </>
  );
}
