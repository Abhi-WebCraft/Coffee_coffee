import { useEffect, useState } from "react";
import Image from "next/image";
import Container from "../Layout/Container";

export default function Innerbannerstats() {
    const [yearsExperience, setYearsExperience] = useState(0);
    const [employees, setEmployees] = useState(0);
    const [projectsCompleted, setProjectsCompleted] = useState(0);
    const [clientsWorldwide, setClientsWorldwide] = useState(0);

    useEffect(() => {
        const incrementCounter = (setter, target) => {
            let count = 0;
            const interval = setInterval(() => {
                if (count < target) {
                    count += Math.ceil(target / 100); // Increment step based on target
                    setter(count > target ? target : count); // Prevent overshooting target
                } else {
                    clearInterval(interval);
                }
            }, 20); // Speed of increment
        };

        incrementCounter(setYearsExperience, 10); // Years of Experience
        incrementCounter(setEmployees, 240); // Employees
        incrementCounter(setProjectsCompleted, 1200); // Projects Completed
        incrementCounter(setClientsWorldwide, 550); // Clients Worldwide
    }, []);

    return (
        <section className="py-[20px] innerbannerstats">
            <Container>
                <div className="lg:grid-cols-5 lg:grid lg:gap-4 md:grid md:grid-cols-3 md:gap-3 grid grid-cols-2 gap-5">
                    <div>
                        <div className="flex items-center gap-3">
                            <Image src="/images/icons/quality.svg" alt="vector" width="50" height="50" className="w-[50px] h-[50px] stats-img"/>
                            <div className="flex flex-col">
                                <span className="text-[28px] font-semibold text-black stats-head">{yearsExperience}+</span>
                                <span className="text-[#404040] text-[13px]">Years Of Experience</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center gap-3">
                            <Image src="/images/icons/team-1.svg" alt="vector" width="50" height="50" className="w-[50px] h-[50px] stats-img"/>
                            <div className="flex flex-col">
                                <span className="text-[28px] font-semibold text-black stats-head">{employees}+</span>
                                <span className="text-[#404040] text-[13px]">Employees</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center gap-3">
                            <Image src="/images/icons/briefing.svg" alt="vector" width="50" height="50" className="w-[50px] h-[50px] stats-img"/>
                            <div className="flex flex-col">
                                <span className="text-[28px] font-semibold text-black stats-head">{projectsCompleted}+</span>
                                <span className="text-[#404040] text-[13px]">Projects Completed</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center gap-3">
                            <Image src="/images/icons/public-relation.svg" alt="vector" width="50" height="50" className="w-[50px] h-[50px] stats-img"/>
                            <div className="flex flex-col">
                                <span className="text-[28px] font-semibold text-black stats-head">{clientsWorldwide}+</span>
                                <span className="text-[#404040] text-[13px]">Clients Worldwide</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center gap-3">
                            <Image src="/images/icons/contract-1.svg" alt="vector" width="50" height="50" className="w-[50px] h-[50px] stats-img"/>
                            <div className="flex flex-col">
                                <span className="text-[28px] font-semibold text-black stats-head">Certified</span>
                                <span className="text-[#404040] text-[13px]">Certified Global Leader</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
