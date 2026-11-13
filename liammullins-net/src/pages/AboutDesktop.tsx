import { aboutContent } from './content/aboutContent';
import './Pages.css'
import headShotImage from '../assets/images/about/headshot.webp';
import guitarImage from '../assets/images/about/guitar.webp';

import {motion} from 'motion/react';

export default function AboutDesktop() {

    return (
        <motion.div
        initial={{opacity: 0, y: 25}}
        animate={{opacity: 1, y: 0}}
        transition={{ type: 'spring', stiffness: 500, damping: 50, mass: 1 }}
        >
            <div className='pageHeaderContainer'>
                <div className='pageHeaderText'><b>biography</b>
                <p className='pageHeaderDash'>---------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                <p className='pageHeaderSubtext'>{aboutContent.biography.subtitle}</p>
                </div>
                <div style={{height: '8vw'}}></div>
                <div style={{rotate: '-0deg'}}>
                    <p className='pageBody'>{aboutContent.biography.paragraphs[0]}</p>
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
                </div>

                <div style={{height: '8vw'}}></div>

                <div className='pageHeaderText'><b>artist statement</b>
                <p className='pageHeaderDash'>---------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                <p className='pageHeaderSubtext'>{aboutContent.artistStatement.subtitle}</p>
                </div>
                <div style={{height: '8vw'}}></div>
                <div style={{rotate: '-0deg'}}>
                    <p className='pageBody'>{aboutContent.artistStatement.paragraphs[0]}</p>
                    <div style={{height: '0vw'}}></div>
                    <p className='pageBody'>{aboutContent.artistStatement.paragraphs[1]}</p>
                    <div style={{height: '0vw'}}></div>
                    <p className='pageBody'>{aboutContent.artistStatement.paragraphs[2]}</p>
                </div>

                <div style={{height: '10vw'}}></div>

                <div className='pageHeaderText'><b>this website</b>
                <p className='pageHeaderDash'>---------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                <p className='pageHeaderSubtext'>{aboutContent.thisWebsite.subtitle}</p>
                </div>
                <div style={{height: '8vw'}}></div>
                <div style={{rotate: '-0deg'}}>
                    <p className='pageBody'>{aboutContent.thisWebsite.paragraphs[0]}</p>
                    <p className='pageBody'>{aboutContent.thisWebsite.desktopBlurb[0]}</p>
                </div>
            </div>
        </motion.div>
    )
}