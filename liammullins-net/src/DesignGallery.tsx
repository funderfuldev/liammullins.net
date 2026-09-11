
import './pages/Pages.css';

import './pages/Work.css';

const imageModules = import.meta.glob('./assets/images/work/*.{png,jpg,jpeg,svg}', {eager: true});

const images = Object.values(imageModules).map((module) => (module as {default: string}).default);

import urec_1  from './assets/images/work/urec_1.jpg';
import urec_2  from './assets/images/work/urec_2.png';
import urec_3  from './assets/images/work/urec_3.jpg';
import urec_7 from './assets/images/work/urec_7.png';
import book_cover from './assets/images/work/book_cover.jpg';
import urec_5 from './assets/images/work/urec_5.jpg';
import urec_6 from './assets/images/work/urec_6.png';
import nocomp_2 from './assets/images/work/nocomp_2.jpg';
import nocomp_1 from './assets/images/work/nocomp_1.jpg';
import urec_8 from './assets/images/work/urec_8.jpg';
import urec_4 from './assets/images/work/urec_4.jpg';

import { motion } from 'motion/react';

export default function DesignGallery() {
    return (

        <div className="designGallery" style={{rotate: '-5deg'}}>
            <div className="des1"><motion.img 
                        animate={{opacity: 1, y: 0}}
                        initial={{opacity: 0, y: 25, rotate: -5}}
                        whileHover={{scale: 1.01, rotate: -6}}
                        whileTap={{scale: 1.1, rotate: -7}}
                        transition={{ type: 'spring', stiffness: 500, damping: 50, mass: 1 }} 
                        src={urec_1} className="image"alt="acoustic jam poster" /></div>
            <div className="des2"><motion.img 
                        animate={{opacity: 1, y: 0}}
                        initial={{opacity: 0, y: 25, rotate: 5}}
                        whileHover={{scale: 1.01, rotate: 6}}
                        whileTap={{scale: 1.1, rotate: 8}}
                        transition={{ type: 'spring', stiffness: 500, damping: 50, mass: 1 }} 
                        src={urec_2} className="image"alt="acoustic show poster" /></div>
            <div className="des3"><motion.img 
                        animate={{opacity: 1, y: 0}}
                        initial={{opacity: 0, y: 25, rotate: -2}}
                        whileHover={{scale: 1.01, rotate: -3}}
                        whileTap={{scale: 1.1, rotate: -5}}
                        transition={{ type: 'spring', stiffness: 500, damping: 50, mass: 1 }} 
                        src={urec_3} className="image"alt="acoustic show poster" /></div>
            <div className="des4"><motion.img 
                        animate={{opacity: 1, y: 0}}
                        initial={{opacity: 0, y: 25, rotate: -2}}
                        whileHover={{scale: 1.01, rotate: -3}}
                        whileTap={{scale: 1.1, rotate: -5}}
                        transition={{ type: 'spring', stiffness: 500, damping: 50, mass: 1 }} 
                        src={urec_7} className="image"alt="house show poster" /></div>
            <div className="des5"><motion.img 
                        animate={{opacity: 1, y: 0}}
                        initial={{opacity: 0, y: 25, rotate: -5}}
                        whileHover={{scale: 1.01, rotate: -6}}
                        whileTap={{scale: 1.1, rotate: -7}}
                        transition={{ type: 'spring', stiffness: 500, damping: 50, mass: 1 }} 
                        src={book_cover} className="image"alt="book cover commission" /></div>
            <div className="des6"><motion.img
                        animate={{opacity: 1, y: 0}}
                        initial={{opacity: 0, y: 25, rotate: -5}}
                        whileHover={{scale: 1.01, rotate: -6}}
                        whileTap={{scale: 1.1, rotate: -7}}
                        transition={{ type: 'spring', stiffness: 500, damping: 50, mass: 1 }} 
                        src={urec_5} className="image"alt="house show poster" /></div>
            <div className="des7"><motion.img
                        animate={{opacity: 1, y: 0}}
                        initial={{opacity: 0, y: 25, rotate: 2}}
                        whileHover={{scale: 1.01, rotate: 3}}
                        whileTap={{scale: 1.1, rotate: 4}}
                        transition={{ type: 'spring', stiffness: 500, damping: 50, mass: 1 }}
                        src={nocomp_2} className="image"alt="band poster" /></div>
            <div className="des8"><motion.img
                        animate={{opacity: 1, y: 0}}
                        initial={{opacity: 0, y: 25, rotate: -4}}
                        whileHover={{scale: 1.01, rotate: -5}}
                        whileTap={{scale: 1.1, rotate: -6}}
                        transition={{ type: 'spring', stiffness: 500, damping: 50, mass: 1 }}
                        src={urec_6} className="image"alt="house show poster" /></div>
            <div className="des9"><motion.img
                        animate={{opacity: 1, y: 0}}
                        initial={{opacity: 0, y: 25, rotate: -3}}
                        whileHover={{scale: 1.01, rotate: -4}}
                        whileTap={{scale: 1.1, rotate: -5}}
                        transition={{ type: 'spring', stiffness: 500, damping: 50, mass: 1 }}
                        src={nocomp_1} className="image"alt="band poster" /></div>
            <div className="des10"><motion.img
                        animate={{opacity: 1, y: 0}}
                        initial={{opacity: 0, y: 25, rotate: 3}}
                        whileHover={{scale: 1.01, rotate: 4}}
                        whileTap={{scale: 1.1, rotate: 5}}
                        transition={{ type: 'spring', stiffness: 500, damping: 50, mass: 1 }}
                        src={urec_8} className="image"alt="house show poster" /></div>
            <div className="des11"><motion.img
                        animate={{opacity: 1, y: 0}}
                        initial={{opacity: 0, y: 25, rotate: 3}}
                        whileHover={{scale: 1.01, rotate: 4}}
                        whileTap={{scale: 1.1, rotate: 5}}
                        transition={{ type: 'spring', stiffness: 500, damping: 50, mass: 1 }}
                        src={urec_4} className="image"alt="acoustic show poster" /></div>
        </div>

        /*<div className="imageGallery" style={{rotate: '-5deg'}}>
            {images.map((src, index) => (
                <img key={index} src={src}/>
            ))}
        </div> */
    );
}