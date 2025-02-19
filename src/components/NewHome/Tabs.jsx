import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Container from "../Layout/Container";
import Cards from '../../components/NewHome/Cards';
import Service from '../../components/NewHome/Service';
import Servicecard from './Servicecard';

export default function Tabs() {
    const [activeTab, setActiveTab] = useState(1);
    const { locale } = useRouter();

    const tabs = [
        { id: 1, label: 'Data Entry', image: '/images/icons/data.svg', activeImage: '/images/icons/data.svg' },
        { id: 2, label: 'Accounting Services', image: '/images/icons/data.svg', activeImage: '/images/icons/data.svg' },
        { id: 3, label: 'Data Management', image: '/images/icons/data.svg', activeImage: '/images/icons/data.svg' },
    ];

    return (
        <section className="section bg-[#f1f7ff]">
            <div className="flex items-center gap-3 w-full">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        className={`px-4 py-3 md:py-4 w-full  font-semibold ${activeTab === tab.id
                            ? ' bg-[#022c60] text-white rajeev relative tab-div'
                            : ' bg-white text-black tab-div-normal'
                        }`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        <Image 
                            src={activeTab === tab.id ? tab.activeImage : tab.image} 
                            alt="icon" 
                            width="50" 
                            height="50" 
                            className={`w-[50px] h-[50px] ${activeTab !== tab.id ? 'filter grayscale' : ''}`}
                        />
                        <p className={`text-[20px] font-bold ${activeTab === tab.id ? 'text-white' : 'text-black'}`}>
                            {tab.label}
                        </p>
                    </button>
                ))}
            </div>
            <Container>
                <div className="pt-[50px]">
                    <div className="w-full">
                        {activeTab === 1 && (
                            <div>
                            <Servicecard/>
                              
                            </div>
                        )}
                        {activeTab === 2 && (
                            <div>
                            <Service/>
                            </div>
                        )}
                        {activeTab === 3 && (
                            <div>
                            <Cards/>
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </section>
    );
}
