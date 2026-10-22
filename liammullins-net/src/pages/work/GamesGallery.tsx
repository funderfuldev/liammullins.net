import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Transition } from 'motion/react';
import '../Pages.css';
import './Work.css';

import game1 from '../../assets/images/work/games/metanoia.png';
import game2 from '../../assets/images/work/games/littleman.png';
import game3 from '../../assets/images/work/games/spectrum.jpg';
import game4 from '../../assets/images/work/games/postman.png'; 
import game5 from '../../assets/images/work/games/cheese_touch.jpg'; 

interface GameItem {
  id: string;
  className: string;
  src: string;
  alt: string;
  initialRotate: number;
  title: string;
  subtitle: string;
  description: React.ReactNode;
}

const thumbnailTransition: Transition = {
  type: 'spring',
  stiffness: 900,
  damping: 40,
};

const fullscreenTransition: Transition = { type: 'spring', stiffness: 500, damping: 50, mass: 1 }

const gameItems: GameItem[] = [
  { 
    id: 'gam1', 
    className: 'gam1', 
    src: game1, 
    alt: 'metanoia', 
    title: 'Metanoia',
    subtitle: 'Multiplayer FPS, Unity • 2023',
    description: (
      <>
        {' '}
        <a href="https://funderful.itch.io/metanoia" target="_blank" rel="noopener noreferrer" className="lightboxLink">
          Play on itch.io
        </a>
        <br/><br/>
        This was a 4-month long endeavor to make a multiplayer FPS. To that end I actually did succeed, although the multiplayer was strictly peer-to-peer. The development process was lightly documented through{' '}
        <a href="https://youtu.be/5wRILGSFICU" target="_blank" rel="noopener noreferrer" className="lightboxLink">
          this video
        </a>, {' '}
        <a href="https://youtu.be/6v3_gsZqMPI" target="_blank" rel="noopener noreferrer" className="lightboxLink">
          this video
        </a>, and {' '}
        <a href="https://youtu.be/I3pRA4Y-S3s" target="_blank" rel="noopener noreferrer" className="lightboxLink">
          this video
        </a>. To see the extent of the multiplayer functionality, check out {' '}
        <a href="https://x.com/_Funderful/status/1703531950403903824?s=20" target="_blank" rel="noopener noreferrer" className="lightboxLink">
          this twitter post
        </a>.
        <br/>
        <br/>
        I learned a lot about networking with this project, but I also learned a ton about 3D modeling. This was my first time creating my own models from scratch using blender. Only the hands and trees were pre-made models; all of the weapon models were created and textured by me.
      </>
    ),
    initialRotate: -5 
  },
  {
    id: 'gam2', 
    className: 'gam2', 
    src: game2, 
    alt: 'little man\'s big day', 
    title: 'little man\'s big day',
    subtitle: 'RPG, Unity • 2021-2025',
    description: (
      <>
        {' '}
        <a href="https://funderful.itch.io/littleman" target="_blank" rel="noopener noreferrer" className="lightboxLink">
          Play on itch.io
        </a>
        <br/><br/>
        <i>On a completely normal day, in the middle of nowhere, little man goes to work his job at the gas station.</i>
        <br/><br/>
        This game is my own imagined cult-classic RPG. It started off as a testing grounds for a larger and more serious RPG that never got made. Instead, this game inadvertently became a practice bed for me to learn and adhere to quality game development principles over the years. That is, I made rock-solid foundations for all game systems larger RPGS would implement: save files, multiple rooms and room transitions, items, quests, and equipment.
        <br/><br/>
        There are a few rough edges. Yes, there are many inside jokes. Yes, it is a very self indulgent work. But, it is a mostly complete and concise game. I love little man.
      </>
    ),
    initialRotate: -5
  },
  {
    id: 'gam3', 
    className: 'gam3', 
    src: game3, 
    alt: 'spectrum', 
    title: 'spectrum',
    subtitle: 'Platformer, Unity • 2019-2021',
    description: (
      <>
        {' '}
        <a href="https://store.steampowered.com/app/1247870/Spectrum/" target="_blank" rel="noopener noreferrer" className="lightboxLink">
          Purchase on Steam
        </a>
        <br/><br/>
        <i>Spectrum</i> is a puzzle platformer that I naively extended from a small tutorial project into a full-fledged game. The main mechanic was directly inspired by Flip-Swap Galaxy in <i>Super Mario Galaxy 2</i>, where red and blue platforms switch collision to a musical beat. In this game I extended this concept to entities instead of just the environment. 
        <br></br><br></br>
        Although I wish I hadn't spent as much time on it as I did, it taught me about scope creep the hard way. I might revisit the main mechanic at some point in the future now that I have the proper skills and vision to do the concept justice. There are plenty of design and mechanical issues in this game. It's been rewarding to revisit it myself and properly identify where the game could've been improved.
      </>
    ),
    initialRotate: -5
  },
  {
    id: 'gam4', 
    className: 'gam4', 
    src: game4, 
    alt: 'the postman', 
    title: 'the postman',
    subtitle: 'Visual Novel, Godot • 2025',
    description: (
      <>
        {' '}
        <a href="https://funderful.itch.io/postman" target="_blank" rel="noopener noreferrer" className="lightboxLink">
          Play on itch.io
        </a>
        <br/><br/>
        <i>Pilot an emergency spaceship to a dying colony. You are not alone.</i>
        <br/><br/>
        This game is an interactive re-telling of Tom Godwin's 1954 short story "The Cold Equations." Although Godwin's short story is controversial among science fiction fans, the dilemma (or lack thereof) of the narrative greatly interested me when I first read it many years ago. So, I thought it would be some fun to adapt it into visual novel form as a part of my game-making practice. This is a very personal project of mine. It's one of the few times I have tried to solely focus on the emotional impact and narrative elements of a game. My hope was to make players feel something similar to what I felt when I read the short story for the first time.
      </>
    ),
    initialRotate: -5
  },
  {
    id: 'gam5', 
    className: 'gam5', 
    src: game5, 
    alt: 'cheese touch super battle to the death', 
    title: 'cheese touch',
    subtitle: 'Multiplayer Action, Godot • 2026',
    description: (
      <>
        {' '}
        <a href="https://funderful.itch.io/postman" target="_blank" rel="noopener noreferrer" className="lightboxLink">
          Play on itch.io
        </a>
        <br/><br/>
        <i>Pilot an emergency spaceship to a dying colony. You are not alone.</i>
        <br/><br/>
        This game is an interactive re-telling of Tom Godwin's 1954 short story "The Cold Equations." Although Godwin's short story is controversial among science fiction fans, the dilemma (or lack thereof) of the narrative greatly interested me when I first read it many years ago. So, I thought it would be some fun to adapt it into visual novel form as a part of my game-making practice. This is a very personal project of mine. It's one of the few times I have tried to solely focus on the emotional impact and narrative elements of a game. My hope was to make players feel something similar to what I felt when I read the short story for the first time.
      </>
    ),
    initialRotate: -5
  }
];

export default function PrintsGallery(): React.JSX.Element {
  const [selectedItem, setSelectedItem] = useState<GameItem | null>(null);

    useEffect(() => {
        if (selectedItem) {
            document.body.style.overflow = 'hidden';
        }
        else
        {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [selectedItem]);

  return (
    <>
      <div className="gamesGallery" style={{ rotate: '-5deg' }}>
        {gameItems.map((item) => (
          <div key={item.id} className={item.className}>
            <motion.img
              layoutId={`img-${item.id}`}
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 25, rotate: item.initialRotate }}
              whileHover={{ scale: 1.03, rotate: item.initialRotate - 1, cursor: 'pointer' }}
              transition={thumbnailTransition}
              src={item.src}
              className="image"
              alt={item.alt}
              onClick={() => setSelectedItem(item)}
            />
          </div>
        ))}
      </div>

        {/* fullscreen on image click */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="lightboxBackdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="lightboxContentContainer">
              <div className="lightboxImageHolder">
                <motion.img
                  layoutId={`img-${selectedItem.id}`}
                  transition={fullscreenTransition}
                  src={selectedItem.src}
                  alt={selectedItem.alt}
                  className="lightboxImage"
                  onClick={() => setSelectedItem(null)}
                />
              </div>

              <motion.div 
                className="lightboxTextContainer"
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ type: 'spring', stiffness: 200, damping: 50, mass: 1 }}
              >
                <h2 className="lightboxTitle">{selectedItem.title}</h2>
                <p className="lightboxSubtitle">{selectedItem.subtitle}</p>
                <p className="lightboxDescription">{selectedItem.description}</p>
                
                <button 
                  className="lightboxCloseButton"
                  onClick={() => setSelectedItem(null)}
                >
                  return
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}