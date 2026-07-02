
import './Pages.css'

import {motion} from 'motion/react';

export default function About() {

    return (
        <motion.div
        initial={{opacity: 0, y: 25}}
        animate={{opacity: 1, y: 0}}
        transition={{ type: 'spring', stiffness: 500, damping: 50, mass: 1 }}
        >
            <div className='pageHeaderContainer'>
                <p className='pageHeaderText'><b>biography</b>
                <p className='pageHeaderDash'>---------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                <p className='pageHeaderSubtext'>printer, baker, candlestick maker</p>
                </p>
            </div>

            <div style={{height: '8vw'}}></div>
            <div style={{rotate: '-5deg'}}>
                <p className='pageBody'>Liam Mullins is a printmaker, digital artist, programmer, game designer, and musician. He grew up in the quiet suburbs of Richmond, Virginia. He currently attends the University of Virginia, pursuing a BA in Computer Science and Studio Art with a concentration in printmaking.</p>
            </div>
            
            
        </motion.div>
    )
}