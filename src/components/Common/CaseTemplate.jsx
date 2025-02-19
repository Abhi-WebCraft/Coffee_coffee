import Image from "next/image";
import Container from "../Layout/Container";
import SectionTitle from "../Layout/SectionTitle";

export default function CaseTemplate({ sections }) {
  return (
    <>
      {sections && sections.map((section, sectionIndex) => (
        <section
          key={sectionIndex}
          className={`section ${section.backgroundColor || ""}`}
        >
          <Container>
            <div
              className={`flex items-center justify-between gap-8 ${
                section.type === "standard" ? "case-study-template" : ""
              }`}
            >
              <div className="w-[30%]">
                <SectionTitle subtitle={section.subtitle} title={section.title} />
              </div>

              <div className="w-[70%]">
                {section.contentType === "text" ? (
                  <p>{section.content}</p>
                ) : (
                  <div className="flex flex-col gap-3">
                    {Array.isArray(section.content) &&
                      section.content.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex gap-3 items-start">
                          {item.icon && (
                            <Image
                              src={item.icon}
                              alt="icon"
                              width={13}
                              height={20}
                              className="w-[13px] h-[20px]"
                            />
                          )}
                          <p>{item.text}</p>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            </div>

            {section && section.extraContent && (
              <div className="flex gap-5 items-center pt-[40px]">
                {section.extraContent.map((icon, iconIndex) => (
                  <Image
                    key={iconIndex}
                    src={icon.src}
                    alt={icon.alt}
                    width={70}
                    height={70}
                    className="w-[70px] h-[70px]"
                  />
                ))}
              </div>
            )}
          </Container>
        </section>
      ))}
    </>
  );
}
