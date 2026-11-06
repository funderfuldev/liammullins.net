
import './Pages.css'
import headShotImage from '../assets/images/about/headshot.webp';
import guitarImage from '../assets/images/about/guitar.webp';

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
                <p className='pageHeaderSubtext'>printer, baker, videogame maker</p>
                </p>
                <div style={{height: '8vw'}}></div>
                <div style={{rotate: '-0deg'}}>
                    <p className='pageBody'>Liam Mullins is a printmaker, digital artist, programmer, game designer, and musician. He was born in 2004 and grew up in the quiet suburbs of Richmond, Virginia. He currently attends the University of Virginia, pursuing a BA in Computer Science and Studio Art with a concentration in printmaking.</p>
                </div>

                <div className='biographyPhotos'>
                    <div className='headShotImageHolder'>
                        <motion.img 
                        animate={{opacity: 1, y: 0}}
                        initial={{opacity: 0, y: 25, rotate: -5}}
                        whileHover={{scale: 1.01, rotate: -6}}
                        whileTap={{scale: 1.1, rotate: -7}}
                        transition={{ type: 'spring', stiffness: 500, damping: 50, mass: 1 }}
                        src={headShotImage} alt='headshot' className='headShotImage'></motion.img>
                    </div>
                    

                    <div style={{height: '10vw'}}></div>

                    <div className='guitarImageHolder'>
                        <motion.img 
                        animate={{opacity: 1, y: 0}}
                        initial={{opacity: 0, y: 25, rotate: 5}}
                        whileHover={{scale: 1.01, rotate: 6}}
                        whileTap={{scale: 1.1, rotate: 7}}
                        transition={{ type: 'spring', stiffness: 500, damping: 50, mass: 1 }}
                        src={guitarImage} alt='guitar' className='guitarImage'></motion.img>
                    </div>
                    
                    <div style={{height: '10vw'}}></div> 
                </div>

                <p className='pageHeaderText'><b>artist statement</b>
                <p className='pageHeaderDash'>---------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                <p className='pageHeaderSubtext'>typography, typography, typography</p>
                </p>
                <div style={{height: '8vw'}}></div>
                <div style={{rotate: '-0deg'}}>
                    <p className='pageBody'>I have spent the majority of my time creating visual art through the use of line and typography. I am interested in the use of typography not as a means of communication, but rather as a graphic element that can convey texture and mood. In today's perpetual age of information and regurgitation I find it thematic to explore the sheer volume of words and text that surround us, and to question how much of it is truly necessary. A great deal of my work is lonely; nothing is more isolating than words without meaning.</p>
                    <div style={{height: '0vw'}}></div>
                    <p className='pageBody'>I am also driven to explore common graphic design principles and to push them to their limit. Excessive layering of symbols and iconography tend to find their way into my work. I feel they illustrate a sense of excess, of plans carried out without first considering the consequences.</p>
                    <div style={{height: '0vw'}}></div>
                    <p className='pageBody'>Most of my printed work is made through multi-block linocut printing, although some pieces are created through steel plate etching. All of my digital work is creating using Adobe's Creative Suite.</p>
                </div>

                <div style={{height: '10vw'}}></div>

                <p className='pageHeaderText'><b>this website</b>
                <p className='pageHeaderDash'>---------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                <p className='pageHeaderSubtext'>personal website or portfolio?</p>
                </p>
                <div style={{height: '8vw'}}></div>
                <div style={{rotate: '-0deg'}}>
                    <p className='pageBody'>This is my very first website that I have created from scratch. While making it, I had a dual purpose: I wanted to simulatenously house my work for professional purposes <i>and</i> keep it stylized in a way that reflects my personal aesthetic. To that end, I chose to keep the color and design minimalist. To offset that, I also made everything a little off-kilter (metaphorically and literally) to help illustrate a bit of my personal style. My hope is for people to enjoy exploring the website à la Web 2.0 while keeping it meaningfully professional.</p>
                </div>
            </div>
        </motion.div>
    )
}