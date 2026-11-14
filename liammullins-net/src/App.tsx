

import Header from './Header.tsx';
import Footer from './Footer.tsx';
import React from 'react'

import { useLocation, useOutlet } from 'react-router';
import { AnimatePresence } from 'motion/react';
import MobileHeader from './MobileHeader.tsx';
import useIsMobile from './hooks/useIsMobile.ts';

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
