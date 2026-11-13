import { aboutContent } from './content/aboutContent';
import './PagesMobile.css'
import headShotImage from '../assets/images/about/headshot.webp';

import {motion} from 'motion/react';

export default function AboutMobile() {

    return (
        <motion.div
        initial={{opacity: 0, y: 25}}
        animate={{opacity: 1, y: 0}}
        transition={{ type: 'spring', stiffness: 500, damping: 50, mass: 1 }}
        >
            <div style={{height: '10vw'}}></div>


            <div className='pageHeaderContainer'>
                <div className='pageHeaderText'><b>biography</b>
                    <p className='pageHeaderDash'>---------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                    <p className='pageHeaderSubtext'>{aboutContent.biography.subtitle}</p>
                    <p className='pageBody'>{aboutContent.biography.paragraphs[0]}</p>
                    <div className='headShotImageHolder'>
                            <motion.img 
                            animate={{opacity: 1, y: 0}}
                            initial={{opacity: 0, y: 25, rotate: -1}}
                            whileHover={{scale: 1.01, rotate: -2}}
                            whileTap={{scale: 1.1, rotate: -3}}
                            transition={{ type: 'spring', stiffness: 500, damping: 50, mass: 1 }}
                            src={headShotImage} alt='headshot' className='headShotImage'></motion.img>
                    </div>

                </div>
            </div>
            
            <div style={{height: '10rem'}}></div>

            <div className='pageHeaderContainer'>
                <div className='pageHeaderText'><b>artist statement</b>
                    <p className='pageHeaderDash'>---------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                    <p className='pageHeaderSubtext'>{aboutContent.artistStatement.subtitle}</p>
                    <p className='pageBody' >{aboutContent.artistStatement.paragraphs[0]}</p>
                    <p className='pageBody' style={{maxWidth: '80%'}}>{aboutContent.artistStatement.paragraphs[1]}</p>
                    <p className='pageBody' style={{maxWidth: '75%'}}>{aboutContent.artistStatement.paragraphs[2]}</p>
                </div>
            </div>

            <div style={{height: '10rem'}}></div>

            <div className='pageHeaderContainer'>
                <div className='pageHeaderText'><b>this website</b>
                    <p className='pageHeaderDash'>---------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                    <p className='pageHeaderSubtext'>{aboutContent.thisWebsite.subtitle}</p>
                    <p className='pageBody'>{aboutContent.thisWebsite.paragraphs[0]}</p>
                    <p className='pageBody' style={{maxWidth: '85%'}}>{aboutContent.thisWebsite.mobileBlurb[0]}</p>
                </div>
            </div>
        </motion.div>
    )
}