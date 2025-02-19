import { useState, useEffect } from "react"; // Add necessary imports
import Link from "next/link";
import Image from "next/image";
import Container from "../Layout/Container";
import Btn from "../Layout/Btns/Btn";

export default function InnerBanner({
  image,  // image for the background
  title,
  description,
}) {
  // State for the counters
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    // Animation for experience
    const experienceTimer = setInterval(() => {
      setExperience((prev) => {
        if (prev < 10) return prev + 1;
        clearInterval(experienceTimer); // Clear when target is reached
        return prev;
      });
    }, 100);

    // Animation for projects
    const projectsTimer = setInterval(() => {
      setProjects((prev) => {
        if (prev < 1200) return prev + 1;
        clearInterval(projectsTimer);
        return prev;
      });
    }, 1); // Faster interval for projects

    // Animation for clients
    const clientsTimer = setInterval(() => {
      setClients((prev) => {
        if (prev < 550) return prev + 1;
        clearInterval(clientsTimer);
        return prev;
      });
    }, 10); // Slightly slower for clients

    // Cleanup function to clear intervals on component unmount
    return () => {
      clearInterval(experienceTimer);
      clearInterval(projectsTimer);
      clearInterval(clientsTimer);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <section className="home-banner relative bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
      <div className="relative w-full h-[650px]">
        <div className="overlay absolute top-0 left-0 w-full h-full"></div>
      </div>
      
      <Container>
        <div className="innerbanner-contents w-[50%] absolute top-1/2 left-[10%] transform -translate-x-[10%] -translate-y-1/2 flex flex-col gap-5">
          <h1 className="text-[60px] leading-[70px] capitalize text-white innerbanner-head">{title}</h1>
          <p className="text-white">{description}</p>

          <div>
            <Btn title="Get A Quote" link="#" />
          </div>

          <div className="flex gap-8 pt-4">
            <div className="">
              <h3 className="text-[40px] font-bold text-[#fff] about-count">{experience}+ </h3>
              <span className="font-normal text-[14px] text-white">Years of Experience</span>
            </div>
            <div className="">
              <h3 className="text-[40px] font-bold text-[#fff] about-count">{projects}+ </h3>
              <span className="font-normal text-[14px] text-white">Projects Completed</span>
            </div>
            <div className="">
              <h3 className="text-[40px] font-bold text-[#fff] about-count">{clients}+ </h3>
              <span className="font-normal text-[14px] text-white">Satisfied Clients Worldwide</span>
            </div>
          </div>
        </div>
      </Container>

      <div className="innerbanner-vector absolute right-0 bottom-0">
        <Image src="/images/bg/innerbanner-right-vector.png" alt="" width="150" height="350" className="w-[300px] h-[650px]" />
      </div>

      <style jsx>{`
        .overlay {
          background: linear-gradient(
            to right,
            rgba(5, 16, 54, 0.9) 20%,  /* Darker overlay on the left */
            rgba(5, 16, 54, 0.6) 50%, /* Fading effect */
            rgba(5, 16, 54, 0) 90%   /* Transparent right side */
          );
        }
      `}</style>
    </section>
  );
}
