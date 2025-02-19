import { useState } from 'react';
import Container from "../Layout/Container";
import Image from 'next/image';
import SectionTitle from '../Layout/SectionTitle';
import Btn from '../Layout/Btns/Btn';
import Link from 'next/link';

export default function HomeSectionBanner() {
    return (
    <>  <section className="relative bg-[url('/images/innerbanner/baner-2.webp')] bg-cover bg-no-repeat lg:h-[100vh] py-[100px] h-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a1727] to-[#04183054] opacity-300"></div> 
            <Container>
            <div className="flex flex-col gap-7 max-w-[900px] translate-y-20 home-banner-content">
                    <div  className="lg:w-[600px] w-auto">

                    <h1 className="text-[54px] leading-[64px] font-bold uppercase text-white banner-head">
                        strengthening your business verticals 
                    </h1>
                    <p className="max-w-[700px] text-white text-[18px] leading-[28px]">
                        We are #1 when it comes to providing comprehensive back-office solutions at cost-effective rates using both manual and automated process
                    </p>
                    <div className="relative inline-block mt-6">
                    <Link href="#" className="relative text-[#fff] font-semibold group">
                        <span>Read more</span>
                        <span className="absolute left-0 bottom-[-6px] h-[4px] w-5 bg-[#ff4a17] transition-all duration-300 ease-in-out group-hover:w-full" />
                    </Link>
                </div>
                    </div>
                    <div className="banner-list-icon flex gap-10">
                        <ul className="flex flex-col gap-4 text-white">
                            <li className="flex gap-4 items-center">
                                <Image src="/images/icons/checked.svg" alt="icon" width="30" height="30" className="w-[30px] h-[30px] icons-banner" />
                                <p className="text-[18px] banner-list-points">ISO Certified</p>
                            </li>
                            <li className="flex gap-4 items-center">
                                <Image src="/images/icons/checked.svg" alt="icon" width="30" height="30" className="w-[30px] h-[30px] icons-banner" />
                                <p className="text-[18px] banner-list-points"> 25+ years in the industry</p>
                            </li>
                            <li className="flex gap-4 items-center">
                                <Image src="/images/icons/checked.svg" alt="icon" width="30" height="30" className="w-[30px] h-[30px] icons-banner" />
                                <p className="text-[18px] banner-list-points">15+ industry verticals</p>
                            </li>
                        </ul>
                        <ul className="flex flex-col gap-4 text-white">
                            <li className="flex gap-4 items-center">
                                <Image src="/images/icons/checked.svg" alt="icon" width="30" height="30" className="w-[30px] h-[30px] icons-banner" />
                                <p className="text-[18px] banner-list-points">ISO Certified</p>
                            </li>
                            <li className="flex gap-4 items-center">
                                <Image src="/images/icons/checked.svg" alt="icon" width="30" height="30" className="w-[30px] h-[30px] icons-banner" />
                                <p className="text-[18px] banner-list-points"> 25+ years in the industry</p>
                            </li>
                            <li className="flex gap-4 items-center">
                                <Image src="/images/icons/checked.svg" alt="icon" width="30" height="30" className="w-[30px] h-[30px] icons-banner" />
                                <p className="text-[18px] banner-list-points">15+ industry verticals</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
            </>
    );
}
