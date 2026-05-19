

import './MainPage.css';
import {useState} from "react";
import {motion} from "motion/react";

export default function PageList() {

    const PAGES = [
    {key: 1, name: "work", description: "design,   prints,   games"},
    {key: 2, name: "about", description: "bio, artist statement"},
    {key:3, name: "contact", description: "email, socials, cv"}
  ];

  const [selectedPage, setSelectedPage] = useState(PAGES[0]);

  return (
    <div className='pageList' id='pageList'>
      {PAGES.map((page) => {
        const isSelected = page.key === selectedPage.key;

        return (
          <motion.button
            key={page.key}
            whileHover={{ x: '2.7vw', transition: { duration: 0.2 } }}
            whileTap={{ scaleX: 1.1, scaleY: 0.9, x: 25, rotateZ: -1, transition: { type: 'spring', stiffness: 1000, damping: 35, mass: 2 } }}
            onClick={() => setSelectedPage(page)}
            className='pageButtonSelected'
            initial=
            {{backgroundColor: isSelected ? 'black' : 'var(--dot-default-color)',
              height: isSelected ? '5vw' : '3.2vw',}}
            animate={{
              backgroundColor: isSelected ? 'black' : 'var(--dot-default-color)',
              height: isSelected ? '5vw' : '3.2vw',
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