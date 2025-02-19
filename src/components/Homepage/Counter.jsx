import React from 'react'
import Image from 'next/image'
import SectionTitle from '../Layout/SectionTitle'
import Container from '../Layout/Container'
const Counter = () => {
  return (
    <section className="section home-four-column">
    <Container>
    <div className="max-w-[1000px] mx-auto text-center mb-[50px]">
                    <SectionTitle
                        title="Streamlining Your Business Processes"
                        content="Reliable Business Process Outsourcing Partner"
                    />
                </div>
      <div className="relative z-[110] overflow-hidden ">
        
        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-5 gap-[1px] bg-[#e5e5e5] banner-col relative z-40">
          {[
            {
              title: "10+ Years",
              description: "Outsourcing Expertise"
            },
            {
              title: "550+",
              description: "Satisfied Clients Worldwide"
            },
            {
              title: "1,200+",
              description: "Projects Completed"
            },
            {
              title: "240+",
              description: "Empowered Employees"
            },
            {
              title: "200+",
              description: "Ongoing Customerss"
            }
          ].map((item, index) => (
            <div key={index} className="grid gap-2 px-4 md:px-10 py-4 bg-white">
              <h3 className="text-[18px] md:text-[26px] text-[#032b5f] font-bold">{item.title}</h3>
              <p className="text-[14px] md:text-[16px] font-semibold text-[#909090]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      </Container>
  </section>
  )
}

export default Counter
