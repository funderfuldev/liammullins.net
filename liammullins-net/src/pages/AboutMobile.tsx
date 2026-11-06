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
            <div className='pageHeaderContainer'>
                <p className='pageHeaderText'><b>biography</b>
                <p className='pageHeaderDash'>---------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                <p className='pageHeaderSubtext'>{aboutContent.biography.subtitle}</p>
                </p>
                <div style={{height: '8vw'}}></div>
                <div style={{rotate: '-0deg'}}>
                    <p className='pageBody'>{aboutContent.biography.paragraphs[0]}</p>
                </div>


                <p className='pageHeaderText'><b>artist statement</b>
                <p className='pageHeaderDash'>---------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                <p className='pageHeaderSubtext'>{aboutContent.artistStatement.subtitle}</p>
                </p>
                <div style={{height: '8vw'}}></div>
                <div style={{rotate: '-0deg'}}>
                    <p className='pageBody'>{aboutContent.artistStatement.paragraphs[0]}</p>
                    <div style={{height: '0vw'}}></div>
                    <p className='pageBody'>{aboutContent.artistStatement.paragraphs[1]}</p>
                    <div style={{height: '0vw'}}></div>
                    <p className='pageBody'>{aboutContent.artistStatement.paragraphs[2]}</p>
                </div>

                <div style={{height: '10vw'}}></div>

                <p className='pageHeaderText'><b>this website</b>
                <p className='pageHeaderDash'>---------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                <p className='pageHeaderSubtext'>{aboutContent.thisWebsite.subtitle}</p>
                </p>
                <div style={{height: '8vw'}}></div>
                <div style={{rotate: '-0deg'}}>
                    <p className='pageBody'>{aboutContent.thisWebsite.paragraphs[0]}</p>
                </div>
            </div>
        </motion.div>
    )
}