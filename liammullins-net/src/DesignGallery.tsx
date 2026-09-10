
import './pages/Pages.css';

import './pages/Work.css';

const imageModules = import.meta.glob('./assets/images/work/*.{png,jpg,jpeg,svg}', {eager: true});

const images = Object.values(imageModules).map((module) => (module as {default: string}).default);

import urec_1  from './assets/images/work/urec_1.jpg';
import urec_2  from './assets/images/work/urec_2.png';
import urec_3  from './assets/images/work/urec_3.jpg';
import urec_7 from './assets/images/work/urec_7.png';
import book_cover from './assets/images/work/book_cover.jpg';
import { motion } from 'motion/react';

export default function DesignGallery() {
    return (

        <div className="designGallery" style={{rotate: '-5deg'}}>
            <div className="urec1"><motion.img 
                        animate={{opacity: 1, y: 0}}
                        initial={{opacity: 0, y: 25, rotate: -2}}
                        whileHover={{scale: 1.01, rotate: -3}}
                        whileTap={{scale: 1.1, rotate: -5}}
                        transition={{ type: 'spring', stiffness: 500, damping: 50, mass: 1 }} 
                        src={urec_1} className="image"alt="urec_1" /></div>
            <div className="urec2"><motion.img 
                        animate={{opacity: 1, y: 0}}
                        initial={{opacity: 0, y: 25, rotate: 5}}
                        whileHover={{scale: 1.01, rotate: 6}}
                        whileTap={{scale: 1.1, rotate: 8}}
                        transition={{ type: 'spring', stiffness: 500, damping: 50, mass: 1 }} 
                        src={urec_2} className="image"alt="urec_2" /></div>
            <div className="urec3"><motion.img 
                        animate={{opacity: 1, y: 0}}
                        initial={{opacity: 0, y: 25, rotate: -2}}
                        whileHover={{scale: 1.01, rotate: -3}}
                        whileTap={{scale: 1.1, rotate: -5}}
                        transition={{ type: 'spring', stiffness: 500, damping: 50, mass: 1 }} 
                        src={urec_3} className="image"alt="urec_3" /></div>
            <div className="urec7"><motion.img 
                        animate={{opacity: 1, y: 0}}
                        initial={{opacity: 0, y: 25, rotate: -2}}
                        whileHover={{scale: 1.01, rotate: -3}}
                        whileTap={{scale: 1.1, rotate: -5}}
                        transition={{ type: 'spring', stiffness: 500, damping: 50, mass: 1 }} 
                        src={urec_7} className="image"alt="urec_7" /></div>
            <div className="bookCover"><motion.img 
                        animate={{opacity: 1, y: 0}}
                        initial={{opacity: 0, y: 25, rotate: -2}}
                        whileHover={{scale: 1.01, rotate: -3}}
                        whileTap={{scale: 1.1, rotate: -5}}
                        transition={{ type: 'spring', stiffness: 500, damping: 50, mass: 1 }} 
                        src={book_cover} className="image"alt="book_cover" /></div>
        </div>

        /*<div className="imageGallery" style={{rotate: '-5deg'}}>
            {images.map((src, index) => (
                <img key={index} src={src}/>
            ))}
        </div> */
    );
}