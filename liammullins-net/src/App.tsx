
import './App.css'

import {motion} from "motion/react"

function App() 
{
  const randomTextChoices = [
    "More is actually more....?",
    "Contrast is everything......",
    "Words words, words........",
    "Game feel is an illusion...."
  ];

  const randomTextChoice = randomTextChoices[Math.floor(Math.random() * randomTextChoices.length)];


  return (
    <>
      <div className='rotation'>
        {/* main div for rotation */}

        <span className='titleLoremIpsum'>
          {/* banner background */}
            <i>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie faucibus metus, et sollicitudin risus volutpat eget. Maecenas dolor ligula, iaculis id elit id, rutrum posuere metus. Nullam commodo neque ac massa tristique, ut faucibus lacus vulputate. Praesent sed lacus lorem. Quisque rutrum, dolor non viverra pulvinar, nunc metus ultricies ligula, porttitor aliquet dui metus ac leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas eu eros quis elit rutrum ultricies in eu orci. Nunc sed mattis tellus. Sed tempus, enim ac volutpat pharetra, nibh velit sagittis massa, non mollis urna diam nec sem. Donec suscipit venenatis arcu. Maecenas gravida dignissim facilisis. Duis imperdiet, quam sit amet auctor tempus, nisl justo aliquet lacus, et cursus purus libero sed ante. Morbi quis elit consectetur, suscipit arcu et, fringilla diam. Suspendisse vel arcu neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie faucibus metus, et sollicitudin risus volutpat eget. Maecenas dolor ligula, iaculis id elit id, rutrum posuere metus. Nullam commodo neque ac massa tristique, ut faucibus lacus vulputate. Praesent sed lacus lorem. Quisque rutrum, dolor non viverra pulvinar, nunc metus ultricies ligula, porttitor aliquet dui metus ac leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas eu eros quis elit rutrum ultricies in eu orci. Nunc sed mattis tellus. Sed tempus, enim ac volutpat pharetra, nibh velit sagittis massa, non mollis urna diam nec sem. Donec suscipit venenatis arcu. Maecenas gravida dignissim facilisis. Duis imperdiet, quam sit amet auctor tempus, nisl justo aliquet lacus, et cursus purus libero sed ante. Morbi quis elit consectetur, suscipit arcu et, fringilla diam. Suspendisse vel arcu neque. Maecenas gravida dignissim facilisis. Duis imperdiet, quam sit amet auctor tempus, nisl justo aliquet lacus, et cursus purus libero sed ante. Morbi quis elit consectetur, suscipit arcu et, fringilla diam. Suspendisse vel arcu neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus molestie faucibus metus, et sollicitudin risus volutpat eget. Maecenas dolor ligula, iaculis id elit id, rutrum posuere metus. Nullam commodo neque ac massa tristique, ut faucibus lacus vulputate. Praesent sed lacus lorem. Quisque rutrum, dolor non viverra pulvinar, nunc metus ultricies ligula, porttitor aliquet dui metus ac leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas eu eros quis elit rutrum ultricies in eu orci. Nunc sed mattis tellus. Sed tempus, enim ac volutpat pharetra, nibh velit sagittis massa, non mollis urna diam nec sem. Donec suscipit venenatis arcu. Maecenas gravida dignissim facilisis. Duis imperdiet, quam sit amet auctor tempus, nisl justo aliquet lacus, et cursus purus libero sed ante. Morbi quis elit consectetur, suscipit arcu et, fringilla diam. Suspendisse vel arcu neque. 
            </i>
        </span>

        <div className='title'>

          <b>liammullins
          
          <motion.span 
          whileHover={{scale: 2, rotateZ: -4, transition: {type: "spring", duration: 0.2}}}
          whileTap={{scale: 1.8, rotateZ: 0, transition: {type: "spring", duration: 0.2}}}
          className='dot'
          onClick={() => alert("You found me!")}>
          </motion.span>
          
          net</b>

          <div className='randomText'>
            {randomTextChoice}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
