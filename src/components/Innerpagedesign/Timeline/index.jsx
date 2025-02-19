import { useState, useEffect, useRef } from 'react';
import styles from "@/components/Innerpagedesign/Timeline/Timeline.module.css";
import SectionTitle from '../../Layout/SectionTitle';
const Timeline = ({ content = [] ,title = "Default Title"}) => {
  const [lineHeight, setLineHeight] = useState(0);
  const timelineRef = useRef(null);
  const itemRefs = useRef([]);
  const calculateLineHeight = () => {
    if (timelineRef.current && itemRefs.current.length) {
      const { top: timelineTop } = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      let maxHeight = 0;
      itemRefs.current.forEach((item, index) => {
        if (item) {
          const { top: itemTop } = item.getBoundingClientRect();
          if (itemTop <= windowHeight / 1.2) {
            maxHeight = item.offsetTop;
          }
        }
      });
      setLineHeight(maxHeight);
    }
  };
  useEffect(() => {
    calculateLineHeight();
    window.addEventListener('scroll', calculateLineHeight);
    return () => window.removeEventListener('scroll', calculateLineHeight);
  }, []);

  return (
    <>
    <div className='pt-[60px]'>
        <SectionTitle title={title} />
      </div>
    <div className={styles.timelineContainer} ref={timelineRef}>
        <div className={styles.verticalLine} style={{ height: `${lineHeight}px` }} />
        {content.map((item, index) => (
            <div className={styles.timelineItem} key={index} ref={(el) => (itemRefs.current[index] = el)}>
                <div className={`${styles.checkIcon} ${lineHeight >= itemRefs.current[index]?.offsetTop ? styles.active : "" }`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24">
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                    </svg>
                </div>
                <div className={styles.timelineDetails}>
                    <h3 className={styles.timelineHeading}>{item.heading}</h3>
                    <p className={styles.timelineContent}>{item.details}</p>
                </div>
            </div>
        ))}
    </div>
    </>
  );
};
export default Timeline;
