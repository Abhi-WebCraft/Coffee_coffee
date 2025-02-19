import { useState } from 'react';
import Container from "../Layout/Container";
import Image from 'next/image';
import SectionTitle from '../Layout/SectionTitle';
import Link from 'next/link';

export default function Comprehensive({ services }) {
    const [expandedIndex, setExpandedIndex] = useState(null);

    // Toggle function for expanding and collapsing the service descriptions
    const handleToggle = (index) => {
        setExpandedIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <section className="section bg-service-bg">
            <Container>
                <div className="flex gap-8 section-direction">
                    <div className="w-[30%] full-section">
                        <SectionTitle
                            subtitle="Our Services"
                            title="Inclusive Solutions Tailored to Your Needs"
                            content=""
                        />
                        <p className='py-[20px] text-[18px] leading-[28px]'>Wide range of Data Processing & Data Management Services.</p>
                        <mark className='service-mark-text text-[16px] font-semibold text-white bg-[#ff3221] py-[5px] px-[10px] rounded-md'>Your trusted team extension</mark>
                    </div>
                    <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-6 w-[70%] full-section">
                        {services.map((item, index) => (
                            <div className="relative group" key={index}>
                                <div className="newservice-box bg-white shadow-lg rounded-[10px] border p-6 min-h-[200px] flex flex-col " data-aos="fade-up" data-aos-duration={item.time}>
                                    <Link href={item.link}>
                                        <Image
                                            src={item.iconimg}
                                            width={35}
                                            height={35}
                                            alt={`${item.title} icon`}
                                            className="w-[35px] service-new-icons"
                                        />
                                    </Link>
                                    <Link href={item.link}>
                                        <div className="flex items-center justify-between pt-[5px]">
                                            <h4 className="text-[22px] font-bold">{item.title}</h4>
                                        </div>
                                    </Link>

                                    <div className="flex items-start gap-4">
                                        <div className="relative">
                                            <div
                                                className={`transition-all duration-500 ease-in-out overflow-hidden ${expandedIndex === index ? 'max-h-[500px]' : 'max-h-[80px]'}`}
                                            >
                                                <p
                                                    className='mt-[15px] service-droptext'
                                                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                                                >
                                                    {expandedIndex === index ? item.fullText : item.shortText}
                                                </p>
                                            </div>
                                            <div
                                                className="cursor-pointer absolute top-[-8px] right-0"
                                                onClick={() => handleToggle(index)}
                                                aria-label={expandedIndex === index ? "Collapse" : "Expand"}
                                            >
                                                <div className="relative w-[27px] h-[27px]">
                                                    <Image
                                                        src={expandedIndex === index ? "/images/icons/arrowhead-up.svg" : "/images/icons/down.svg"}
                                                        alt={expandedIndex === index ? "Collapse" : "Expand"}
                                                        layout="intrinsic"
                                                        width={35}
                                                        height={35}
                                                        className="w-full h-full transform transition-transform duration-300"
                                                        style={{
                                                            transform: expandedIndex === index ? 'rotate(0deg)' : 'rotate(0deg)',
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
