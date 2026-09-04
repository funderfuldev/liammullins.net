
import './Pages.css'
import {motion} from 'motion/react'

export default function Contact() {

    return (
        <motion.div
        initial={{opacity: 0, y: 25}}
        animate={{opacity: 1, y: 0}}
        transition={{ type: 'spring', stiffness: 500, damping: 50, mass: 1 }}
        >
            <div className='pageHeaderContainer'>
                <p className='pageHeaderText'><b>professional</b>
                <p className='pageHeaderDash'>---------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                <p className='pageHeaderSubtext'>serious things</p>
                </p>
                <div style={{height: '8vw'}}></div>
                <div style={{rotate: '-0deg'}}>
                    <p className='pageBody'>For professional inquiries, please contact me via <u>email</u> at <u>0liammullins0@gmail.com</u>. I am currently available for freelance work and commissions.</p>
                </div>
                <div className='biographyPhotos'>
                <div style={{height: '0vw'}}></div> 
                </div>

                <p className='pageHeaderText'><b>socials</b>
                <p className='pageHeaderDash'>---------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                <p className='pageHeaderSubtext'>the less serious things</p>
                </p>
                <div style={{height: '8vw'}}></div>
                <div style={{rotate: '-0deg'}}>
                    <p className='pageBody'>For updates on my printed work, digital projects, and miscellaneous sketches/artwork, follow me on my art <u>instagram</u>. I try to post updates semi-frequently.</p>
                    <div style={{height: '0vw'}}></div>
                    <p className='pageBody'>If you would like to play some of my games or follow my development progress, feel free to check out my <u>itch.io</u> page.</p>
                    <div style={{height: '0vw'}}></div>
                    <p className='pageBody'>For non-serious, infrequent updates, artwork, and strange thoughts, follow my <u>twitter</u> account.</p>
                </div>

                <p className='pageHeaderText'><b>curriculum vitae</b>
                <p className='pageHeaderDash'>---------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                <p className='pageHeaderSubtext'></p>
                </p>
                <div style={{height: '9vw'}}></div>
                <a href='https://www.google.com' target='_blank' rel='noopener noreferrer'>
                <motion.button 
                whileHover={{scaleX: 1.01, scaleY: 0.99, backgroundColor: '(0.1,0.1,0.1)'}}
                whileTap={{ scaleX: 1.1, scaleY: 0.9, transition: { type: 'spring', stiffness: 1000, damping: 35, mass: 2 } }}
                transition={{ type: 'spring', stiffness: 500, damping: 50, mass: 1 }}
                className='cvButton'>Open CV in new tab</motion.button></a>
            </div>
        </motion.div>
    )
}