import { useState } from 'react';
import Container from "../Layout/Container";
import Image from 'next/image';
import SectionTitle from '../Layout/SectionTitle';
import Link from 'next/link';

export default function InnerBanner({ pagetitle, title, description, bgimage,breadcrumb1,breadcrumb2,breadcrumb3, breadcrumbtitle2, breadcrumbtitle3 }) {
    return (
        <section className="relative bg-cover bg-no-repeat py-[100px]" style={{ backgroundImage: `url('${bgimage}')` }}>
            <div className="absolute inset-0 bg-gradient-to-r from-[#041830] to-[#0418309f] opacity-150"></div>
            <Container>
                <div className="relative items-center z-20 grid lg:w-[800px] md:w-full w-full justify-between h-full text-white">
                    <div className='text-[#000]'>
                    <div className='bg-[#FFFFFF1A] inline-flex gap-1 p-2 border-[#2222] border text-[#fff] rounded-[6px]'>
                            <span className='text-[14px]'><Link href={breadcrumb1}>Home</Link> </span>
                            <Image src="/images/icons/double-chevron.svg" alt="" height={12} width={12} className='w-[10px]  fill-white' />
                            <span className='text-[14px]'><Link href={breadcrumb2}>{breadcrumbtitle2}</Link> </span>
                            {breadcrumb3 ?
                                <>
                            <Image src="/images/icons/double-chevron.svg" alt="" height={12} width={12} className='w-[10px]  fill-white' />
                            <span className='text-[14px]'><Link href={breadcrumb3}>{breadcrumbtitle3}</Link> </span>
                            </>
                            :''}
                        </div>
                        <div className='pt-[30px] space-y-3 lg:space-y-6 text-[#fff]'>
                            <span className='text-[18px] font-[600] text-[#9ba3ac]'>{pagetitle}</span>
                            <h1 className='text-[28px] lg:text-[58px] leading-[36px] lg:leading-[60px] text-[#fff]'>{title}</h1>
                            {/* <p className='text-[16px] md:text-[18px] text-[#9ba3ac]'>{description}</p> */}
                        </div>
                    </div>
                    
                </div>
            </Container>
        </section>
    );
}
