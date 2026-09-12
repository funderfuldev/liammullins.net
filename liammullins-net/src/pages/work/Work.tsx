
import { motion } from "motion/react"

import DesignGallery from './DesignGallery.tsx';
import PrintsGallery from "./PrintsGallery.tsx";
import GamesGallery from './GamesGallery.tsx';

import './Work.css'

export default function Work() {

    return (
        <motion.div
        initial={{opacity: 0, y: 25}}
        animate={{opacity: 1, y: 0}}
        transition={{ type: 'spring', stiffness: 500, damping: 50, mass: 1 }}
        >
            <div className='pageHeaderContainer'>
                <p className='pageHeaderText'><b>design</b>
                <p className='pageHeaderDash'>---------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                <p className='pageHeaderSubtext'>selected posters, book covers, advertisements</p>
                </p>
                <div style={{height: '8vw'}}></div>
            </div>

            <DesignGallery/>

            <div className='pageHeaderContainer'>
                <p className='pageHeaderText'><b>prints</b>
                <p className='pageHeaderDash'>---------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                <p className='pageHeaderSubtext'>linocut, woodcut, lithography, etching</p>
                </p>
                <div style={{height: '8vw'}}></div>
            </div>

            <PrintsGallery/>

            <div className='pageHeaderContainer'>
                <p className='pageHeaderText'><b>games</b>
                <p className='pageHeaderDash'>---------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                <p className='pageHeaderSubtext'>platformers, first-person shooters, game jams</p>
                </p>
                <div style={{height: '8vw'}}></div>
            </div>

            <GamesGallery/>

            <div className='pageHeaderContainer'>
                <p className='pageHeaderText'><b>digital</b>
                <p className='pageHeaderDash'>---------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                <p className='pageHeaderSubtext'>miscellaneous personal work</p>
                </p>
                <div style={{height: '8vw'}}></div>
            </div>
        </motion.div>
    )
}