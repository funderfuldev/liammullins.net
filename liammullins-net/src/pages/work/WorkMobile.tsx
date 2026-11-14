
import { motion } from "motion/react"
import Carousel from "../../components/Carousel";
import { designItems } from '../content/designItems';
import { printItems } from '../content/printItems';
import { gameItems } from '../content/gameItems';

import './Work.css'

export default function WorkMobile() {

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

            <Carousel items={designItems}/>

            <div style={{height: '5rem'}}></div>

            <div className='pageHeaderContainer'>
                <p className='pageHeaderText'><b>prints</b>
                <p className='pageHeaderDash'>---------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                <p className='pageHeaderSubtext'>linocut, woodcut, lithography, etching</p>
                </p>
                <div style={{height: '8vw'}}></div>
            </div>

            <Carousel items={printItems}/>

            <div style={{height: '5rem'}}></div>

            <div className='pageHeaderContainer'>
                <p className='pageHeaderText'><b>games</b>
                <p className='pageHeaderDash'>---------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                <p className='pageHeaderSubtext'>platformers, first-person shooters, game jams</p>
                </p>
                <div style={{height: '8vw'}}></div>
            </div>

            <Carousel items={gameItems}/>

        </motion.div>
    )
}