import { useEffect, useRef } from 'react';

export default function Faq({ faqData = [] }) {
  const faqRef = useRef(null); // Reference to the current FAQ section

  useEffect(() => {
    const faqElement = faqRef.current;
    const accordions = faqElement.querySelectorAll('.accordions__item');

    const handleAccordionClick = (e) => {
      const self = e.currentTarget;
      const control = self.querySelector('.accordions__control');
      const content = self.querySelector('.accordions__content');

      self.classList.toggle('open');

      if (self.classList.contains('open')) {
        control.setAttribute('aria-expanded', 'true');
        content.setAttribute('aria-hidden', 'false');
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        control.setAttribute('aria-expanded', 'false');
        content.setAttribute('aria-hidden', 'true');
        content.style.maxHeight = null;
      }
    };

    accordions.forEach(el => {
      el.addEventListener('click', handleAccordionClick);
    });

    // Cleanup the event listeners when component is unmounted
    return () => {
      accordions.forEach(el => {
        el.removeEventListener('click', handleAccordionClick);
      });
    };
  }, []);

  return (
    <section id="faq" className="relative bg-cover bg-no-repeat bg-fixed bg-right z-[1]" ref={faqRef}>
      {faqData && faqData.length > 0 && (  // Only render if faqData is available
        <div className="faq-section relative z-10">
          <div className="process__accordions">
            <ul className="accordions__list">
              {faqData.map((faq, index) => (
                <li key={index} className="accordions__item business-items">
                  <button className="accordions__control business-control" aria-expanded="false">
                    <span className="accordions__number">{faq.number}</span>
                    <span className="accordions__title business-faq-title">{faq.question}</span>
                    <span className="accordions__icon business-plus-icon"></span>
                  </button>
                  <div className="accordions__content text" aria-hidden="true">
                    <p>{faq.answer}</p>
                    <ul className="space-y-3">
                      {faq.li && <li className="listIcon">{faq.li}</li>}
                      {faq.li1 && <li className="listIcon">{faq.li1}</li>}
                      {faq.li2 && <li className="listIcon">{faq.li2}</li>}
                      {faq.li3 && <li className="listIcon">{faq.li3}</li>}
                      {faq.li4 && <li className="listIcon">{faq.li4}</li>}
                      {faq.li5 && <li className="listIcon">{faq.li5}</li>}
                      {faq.li6 && <li className="listIcon">{faq.li6}</li>}
                      {faq.li7 && <li className="listIcon">{faq.li7}</li>}
                      {faq.li8 && <li className="listIcon">{faq.li8}</li>}
                      {faq.li9 && <li className="listIcon">{faq.li9}</li>}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
