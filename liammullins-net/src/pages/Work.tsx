
import { motion } from "motion/react"

export default function Work() {

    return (
        <motion.div
        initial={{opacity: 0, y: 25, scaleX: 0.9, scaleY: 1.1}}
        animate={{opacity: 1, y: 0, scaleX: 1, scaleY: 1}}
        transition={{ type: 'spring', stiffness: 500, damping: 20, mass: 1 }}
        >
            <p className="pageTitle"><b>work</b> is under construction.</p>
            <p className="pageTitle">check back later!</p>
        </motion.div>
    )
}