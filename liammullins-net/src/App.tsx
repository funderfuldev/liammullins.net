

import Header from './Header.tsx';
import Footer from './Footer.tsx';
import React from 'react'

import { useState, useEffect } from 'react';
import { useLocation, useOutlet } from 'react-router';
import { AnimatePresence } from 'motion/react';
import MobileHeader from './MobileHeader.tsx';

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
}

export default function App() 
{
  const location = useLocation();
  const element = useOutlet();

  const isMobile = useIsMobile();

  return (

    
    <>
      <div className='wrapper'>

        {isMobile ? <MobileHeader/> : <Header/>}

        <div className='pageContent'>
          <div className='spacer'/>
          <div className='pageContainer'>
            <AnimatePresence mode='wait'>
              {element && React.cloneElement(element, { key: location.pathname})}
            </AnimatePresence>
          </div>
          <div className='bottomSpacer'/>
        </div>

        <Footer/>
      </div>
    </>
  )
}
