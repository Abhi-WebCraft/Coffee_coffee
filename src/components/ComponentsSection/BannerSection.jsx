import { useState } from 'react';
import Container from "../Layout/Container";
import Image from 'next/image';
import SectionTitle from '../Layout/SectionTitle';
import Link from 'next/link';

export default function BannerSection({ pagetitle, title, subtitle, description, bgimage,cardimg, linkText,breadcrumb1,breadcrumb2,breadcrumb3, breadcrumbtitle2, breadcrumbtitle3,caseLink }) {
    return (
        <section className="relative bg-cover bg-no-repeat py-[100px]" style={{ backgroundImage: `url('${bgimage}')` }}>
            <div className="absolute inset-0 bg-gradient-to-r from-[#041830] to-[#0418309f] opacity-150"></div>
            <Container>
                <div className="relative items-center z-20 grid grid-cols-1 lg:grid-cols-2 justify-between h-full text-white">
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
                            <p className='text-[16px] md:text-[18px] text-[#9ba3ac]'>{description}</p>
                        </div>
                    </div>
                    <Link href={caseLink}>
                    <div className="mt-8 place-items-start lg:place-items-end">
                        <div className="bg-white relative rounded-lg shadow-2xl w-full sm:w-[400px]">
                            <div className='border-2 py-1 px-6 absolute text-[#000] top-[-15px] left-6 bg-[#fff]  rounded-[6px]'>{linkText}</div>
                            <Image src={cardimg} width={500} height={500} alt='' className="rounded-t-lg w-full h-40 object-cover" />
                            <div className="text-[#000] py-4 space-y-2 lg:space-y-4 px-4">
                                <h4 className='font-extrabold text-lg md:text-[18px]'>{subtitle}</h4>
                                <p className='text-[16px] md:text-[18px]'>{description}</p>
                            </div>
                        </div>
                    </div>
                    </Link>
                </div>
            </Container>
        </section>
    );
}
