
import {motion} from 'motion/react';

import './Footer.css';

import TwitterLogo from './assets/twitter.svg';
import EmailLogo from './assets/email.svg';
import GithubLogo from './assets/github.svg';
import ItchLogo from './assets/itch.svg';

export default function Footer() {


    return (
        <div className='footer'>
          <div className='footerLinks'>
            <a href='https://github.com/funderfuldev'><motion.img 
            whileHover={{scale: 2, rotateZ: -4}}
            src={GithubLogo} alt='Github' className='githubIcon'/></a>
            
            <a href='https://x.com/_funderful'><motion.img 
            whileHover={{scale: 2, rotateZ: -2}}
            src={TwitterLogo} alt='Twitter (X The Everything App)' className='twitterIcon'/>
            </a>

            <a href='https://funderful.itch.io'><motion.img 
            whileHover={{scale: 2, rotateZ: 1}}
            src={ItchLogo} alt='Itch.io' className='itchIcon'/></a>

            <a href='mailto:0liammullins0@gmail.com'><motion.img 
            whileHover={{scale: 2, rotateZ: 4, x: -2}}
            src={EmailLogo} alt='Email' className='emailIcon'/></a>
          </div>
          <p><motion.a 
          whileHover={{scale: 1.05, y: -2}}
          animate={{scale: 1, rotateZ: 0}}
          href='https://liammullins.net'><u>liammullins.net</u></motion.a> was entirely designed and hand-coded by yours truly in <motion.a 
          whileHover={{scale: 1.05, y: -2}}
          animate={{scale: 1, rotateZ: 0}}
          href='https://react.dev'><u>React.</u></motion.a>
          </p>
          <p>&copy; Liam Mullins 2026-present. All rights reserved.</p>
          
        </div>
    )
}