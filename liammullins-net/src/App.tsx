
import Header from './Header.tsx';
import Footer from './Footer.tsx';
import React from 'react'

import { useLocation, useOutlet } from 'react-router';
import { AnimatePresence } from 'motion/react';

export default function App() 
{
  const location = useLocation();
  const element = useOutlet();

  return (
    <>
      <div className='wrapper'>

        <Header/>

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
