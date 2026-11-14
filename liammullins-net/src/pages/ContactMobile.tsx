import './PagesMobile.css'
import { contactContent } from './content/contactContent';
import {motion} from 'motion/react'

export default function ContactMobile() {

    return (
        <motion.div
        initial={{opacity: 0, y: 25}}
        animate={{opacity: 1, y: 0}}
        transition={{ type: 'spring', stiffness: 500, damping: 50, mass: 1 }}
        >
            <div style={{height: '3rem'}}></div>

            <div className='pageHeaderContainer'>
                <div className='pageHeaderText'><b>professional</b>
                <p className='pageHeaderDash'>---------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                <p className='pageHeaderSubtext'>{contactContent.professional.subtitle}</p>
                </div>
                <div style={{height: '8vw'}}></div>
                <div style={{rotate: '-0deg'}}>
                    <p className='pageBody'>{contactContent.professional.paragraphs[0]}</p>
                <div style={{height: '0vw'}}></div> 
                </div>
            </div>

            <div style={{height: '3rem'}}></div>

            <div className='pageHeaderContainer'>
                <div className='pageHeaderText'><b>socials</b>
                    <p className='pageHeaderDash'>---------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                    <p className='pageHeaderSubtext'>{contactContent.socials.subtitle}</p>
                </div>
                <div style={{height: '8vw'}}></div>
                <div style={{rotate: '-0deg'}}>
                    <p className='pageBody'>{contactContent.socials.paragraphs[0]}</p>
                    <div style={{height: '0vw'}}></div>
                    <p className='pageBody'>{contactContent.socials.paragraphs[1]}</p>
                    <div style={{height: '0vw'}}></div>
                    <p className='pageBody'>{contactContent.socials.paragraphs[2]}</p>
                </div>
            </div>

            <div style={{height: '3rem'}}></div>

            <div className='pageHeaderContainer'>
                <div className='pageHeaderText'><b>resume</b>
                    <p className='pageHeaderDash'>---------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                    <p className='pageHeaderSubtext'>the one-pager</p>
                </div>
                <div style={{height: '10vw'}}></div>
                <a href='https://www.google.com' target='_blank' rel='noopener noreferrer'>
                <motion.button 
                whileHover={{scaleX: 1.01, scaleY: 0.99, backgroundColor: '(0.1,0.1,0.1)'}}
                whileTap={{ scaleX: 1.1, scaleY: 0.9, transition: { type: 'spring', stiffness: 1000, damping: 35, mass: 2 } }}
                transition={{ type: 'spring', stiffness: 500, damping: 50, mass: 1 }}
                className='cvButton'><u>tap here to open resume in a new tab</u></motion.button></a>
            </div>
        </motion.div>
    )
}