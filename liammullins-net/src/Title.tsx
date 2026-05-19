
import './MainPage.css';
import {motion} from 'motion/react';


export default function Title() {

    const RANDOMTEXTCHOICES = [
    "More is actually more.............",
    "Contrast is everything.............",
    "Words words, words...............",
    "Game feel is an illusion...........",
    "The end is never the end is ne"
    ];

    const randomTextChoice = RANDOMTEXTCHOICES[Math.floor(Math.random() * RANDOMTEXTCHOICES.length)];

    const letterHoverAnimation = {
        color: 'var(--dot-default-color)',
        y: '-1vw',
        zIndex: 15,
        transition: { type: 'spring', stiffness: 1000, damping: 50, mass: 2 }
    };
    const letterDefaultAnimation = {
        y: 0,
        transition: { type: 'spring', stiffness: 1000, damping: 50, mass: 2 }
    }

    return (
        <>
            
            <span className='nameText'>liammullins</span>

            <motion.span 
            whileHover={{scale: 2, rotateZ: -4, transition: {type: "spring", duration: 0.2}}}
            whileTap={{scale: 1.8, rotateZ: 0, transition: {type: "spring", duration: 0.2}}}
            className='dot'>
            </motion.span>
            

            {"net".split("").map((char, index) => (
                <motion.span
                    key={index}
                    whileHover={ letterHoverAnimation }
                    animate={letterDefaultAnimation}
                    className='net'
                >
                    {char}
                </motion.span>
            ))}
            

            <div className='randomText'>
            {randomTextChoice}
            </div>
        </>
    );
}