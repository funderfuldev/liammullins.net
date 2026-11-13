import { aboutContent } from './content/aboutContent';
import './PagesMobile.css'

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
                </div>
            </div>
            
            <div style={{height: '20rem'}}></div>

            <div className='pageHeaderContainer'>
                <div className='pageHeaderText'><b>artist statement</b>
                <p className='pageHeaderDash'>---------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                <p className='pageHeaderSubtext'>{aboutContent.artistStatement.subtitle}</p>
                </div>
                <div style={{height: '2rem'}}></div>
                <div style={{rotate: '-0deg'}}>
                    <p className='pageBody'>{aboutContent.artistStatement.paragraphs[0]}</p>
                    <div style={{height: '0vw'}}></div>
                </div>
            </div>

            <div className='bodyWrapper'>
                <p className='pageBody'>{aboutContent.artistStatement.paragraphs[1]}</p>
                <div style={{height: '0vw'}}></div>
                <p className='pageBody'>{aboutContent.artistStatement.paragraphs[2]}</p>
            </div>

            <div style={{height: '3rem'}}></div>

            <div className='pageHeaderContainer'>
                <div className='pageHeaderText'><b>this website</b>
                <p className='pageHeaderDash'>---------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                <p className='pageHeaderSubtext'>{aboutContent.thisWebsite.subtitle}</p>
                </div>
                <div style={{height: '2rem'}}></div>
                <div style={{rotate: '-0deg'}}>
                    <p className='pageBody'>{aboutContent.thisWebsite.paragraphs[0]}</p>
                </div>
            </div>
        </motion.div>
    )
}