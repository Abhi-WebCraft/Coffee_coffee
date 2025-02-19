import { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Container from "../Layout/Container";
import Image from 'next/image';

export default function TabSection({ tabData ,title }) {
    const [activeTab, setActiveTab] = useState(0); // Start with the first tab
    const { locale } = useRouter();
    const accordionsRef = useRef([]);

    const handleAccordionClick = (index) => {
        const content = accordionsRef.current[index];
        const isExpanded = content.style.maxHeight;  // Check if it's expanded
        content.style.maxHeight = isExpanded ? null : `${content.scrollHeight}px`; // Toggle maxHeight
    };

    return (
        <section className="innersection">
            <Container>
                <div className="flex flex-col md:flex-row justify-between gap-8 case-temp-main">
                    {/* Tab Buttons */}
                    <div className="w-full md:w-1/4 tab-mobile">
                        {tabData.map((tab, index) => (
                            <button
                                key={index}
                                className={`px-4 py-3 md:py-[12px] mt-[10px] w-full border-2 font-semibold ${activeTab === index ? 'border-white text-[#fff] text-[22px] font-bold bg-[#15153e]' : 'border-black bg-transparent text-black hover:text-[#ff3221]'}`}
                                onClick={() => setActiveTab(index)}
                            >
                                {tab.title}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="w-full md:w-3/4">
                        {tabData[activeTab].title === "Why Choose Us?" && (
                            <div className="space-y-4">
                                <h2 className='text-[25px]'>{title}</h2>
                                <div className='flex flex-col gap-6'>
                                    {tabData[activeTab].content.map((item, index) => (
                                        <div key={index}>
                                            <div className='flex items-center gap-3'>
                                                <h3 className='text-[16px]'>{item.heading}</h3>
                                            </div>
                                            <div className='flex flex-col gap-[5px] pt-3 pl-5'>
                                                {item.details.map((detail, idx) => (
                                                    <div key={idx} className='flex items-center gap-2'>
                                                        <Image src="/images/sub-menu-icon/bullet.svg" alt="bullet-icon" width="12" height="12" className="w-[12px] h-[12px]" />
                                                        <p className="text-sm md:text-base">{detail}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {tabData[activeTab].title === "FAQs" && (
                            <div className="space-y-4">
                                <div className="process__accordions">
                                    <ul className="accordions__list space-y-2">
                                        {tabData[activeTab].content.map((item, index) => (
                                            <li key={index} className="accordions__item border-b border-gray-200">
                                                <button
                                                    className="accordions__control flex justify-between w-full text-left font-semibold text-gray-800"
                                                    onClick={() => handleAccordionClick(index)}
                                                    aria-expanded={accordionsRef.current[index]?.style.maxHeight ? 'true' : 'false'}
                                                >
                                                    <span className='text-[18px]'>{item.question}</span>
                                                    <span className="accordions__icon"></span>
                                                </button>
                                                <div
                                                    ref={(el) => (accordionsRef.current[index] = el)}
                                                    className="accordions__content overflow-hidden text-gray-600 transition-all duration-300 ease-in-out"
                                                    style={{ maxHeight: '0px' }}  // Start collapsed
                                                >
                                                    <p className="text-sm md:text-base">{item.answer}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </section>
    );
}
