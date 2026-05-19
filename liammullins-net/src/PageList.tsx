

import './Header.css';
import {useState, useEffect} from "react";
import {motion} from "motion/react";

export default function PageList() {

    const PAGES = [
    {key: 1, name: "work", description: "design,   prints,   games"},
    {key: 2, name: "about", description: "bio, artist statement"},
    {key:3, name: "contact", description: "email, socials, cv"},
    {key: 4, name: "blog", description: ""}
  ];

  const [selectedPage, setSelectedPage] = useState(PAGES[0]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const selectedHeight = isMobile ? '12vw' : '5vw';
  const defaultHeight = isMobile ? '7vw' : '3.2vw';

  return (
    <div className='pageList' id='pageList'>
      {PAGES.map((page) => {
        const isSelected = page.key === selectedPage.key;

        return (
          <motion.button
            key={page.key}
            whileHover={{ x: '2.7vw', transition: { duration: 0.2 } }}
            whileTap={{ scaleX: 1.1, scaleY: 0.9, x: '4vw', rotateZ: -1, transition: { type: 'spring', stiffness: 1000, damping: 35, mass: 2 } }}
            onClick={() => setSelectedPage(page)}
            className='pageButton'
            initial=
            {{backgroundColor: isSelected ? 'black' : 'var(--dot-default-color)',
              height: isSelected ? selectedHeight : defaultHeight,}}
            animate={{
              backgroundColor: isSelected ? 'black' : 'var(--dot-default-color)',
              height: isSelected ? selectedHeight : defaultHeight,
            }}
            transition={{ type: 'spring', stiffness: 1000, damping: 50, mass: 2 }}
          >
            {page.name}
            
            <motion.p 
              className='pageButtonDescription'
              animate={{ 
                color: isSelected ? 'var(--dot-default-color)' : 'transparent',
                x: isSelected ? 0 : -100,
                opacity: isSelected ? 1 : 0
              }}
              transition={{ type: 'spring', stiffness: 1000, damping: 100, mass: 2 }}
            >
              {page.description}
            </motion.p>
          </motion.button>
        );
      })}
    </div>
  );
}