import Btn from "../Layout/Btns/Btn";
import Container from "../Layout/Container";
import SectionTitle from "../Layout/SectionTitle";
import Faq from "./Faq";

export default function DynamicPage({ sections, solutions, faq,faqSecond,faqcontent,faqtitle, btnText = "Contact Us", btnLink = "#" }) {
    return (
        <>
            {sections.map((section, index) => (
                <section
                    key={index}
                    className={` ${index !== 0 && ""}`}>
                    <Container>
                        <div className="flex flex-col gap-3 ">
                            <div className="mt-[30px]">
                            <p className="font-bold">{section.subtitle}</p>
                            <SectionTitle
                               
                                title={section.title}
                                content={section.content || ""}
                            />
                            </div>
                            {/* Render specific content based on section type */}
                            {section.type === "intro" && (
                             <>
                             <p>{section.content}</p>
                             {solutions && (
                                <div className="flex flex-col gap-2"> 
                                {solutions.map((solution, index) => (
                                  <div key={index} className="flex flex-col gap-2">
                                    <div>
                                      <h3>{solution.title}</h3>
                                      <p>{solution.description}</p>
                                    </div>
                              
                                   
                                    {solution.lidd && (
                                      <ul className="pl-5 flex">
                                        <li className="listIcon">{solution.lidd}</li>
                                      </ul>
                                    )}
                                    {solution.btn && (
                                      <span><Btn title={btnText} link={btnLink} /></span>
                                    )}
                                  </div>
                                ))}
                              </div>
                              
                             )}
                         </>
                         
                         
                            )}
                            {section.type === "faq"  && (
                                <>
                                    <div className="">
                                      <div className="">
                                      <Faq faqData={faq} />
                                      </div>
                                    
                                    <div className="">
                                        <div className="mt-[30px]">
                                        <SectionTitle title={faqtitle} content={faqcontent}/>
                                        </div>
                                        <div className="my-[30px]">
                                        <Faq faqData={faqSecond} />
                                        </div>
                                        <Btn title={btnText} link={btnLink} />
                                    </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </Container>
                </section>
            ))}
        </>
    );
}
