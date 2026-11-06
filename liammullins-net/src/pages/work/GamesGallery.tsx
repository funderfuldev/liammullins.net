import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Transition } from 'motion/react';
import '../Pages.css';
import './Work.css';

import game1 from '../../assets/images/work/games/metanoia.png';
import game2 from '../../assets/images/work/games/littleman.png';
import game3 from '../../assets/images/work/games/spectrum.jpg';
import game4 from '../../assets/images/work/games/postman.png'; 
import game5 from '../../assets/images/work/games/cheese_touch.jpg'; 
import game6 from '../../assets/images/work/games/bonanza.png'; 
import game7 from '../../assets/images/work/games/gravity.png'; 
import game8 from '../../assets/images/work/games/ttoih.png'; 
import game9 from '../../assets/images/work/games/blob.png'; 

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
        <a href="https://funderful.itch.io/cheesetouch" target="_blank" rel="noopener noreferrer" className="lightboxLink">
          Play on itch.io
        </a>
        <br/><br/>
        This game was developed in just under a week for a game jam for CS 4730 at the University of Virginia. The theme was "pass it on" - my first instinct was passing on the cheese touch to someone else by touching them. I wanted it to be a competitive party game, so in the game "touching" is actually punching. It was the only multiplayer game submitted for the jam - watching my peers and friends figure out the movement in the game and laugh over the winners and losers was extremely rewarding.
      </>
    ),
    initialRotate: -5
  }
  ,
  {
    id: 'gam6', 
    className: 'gam6', 
    src: game6, 
    alt: 'little man\'s beach bonanza', 
    title: 'little man\'s beach bonanza',
    subtitle: 'Platformer, Godot • 2025',
    description: (
      <>
        {' '}
        <a href="https://funderful.itch.io/little-mans-beach-bonanza" target="_blank" rel="noopener noreferrer" className="lightboxLink">
          Play on itch.io
        </a>
        <br/><br/>
        This game was developed as a personal introduction to Godot. At the time, I was extremely familiar with Unity, but its payment model had recently updated and I was no longer interesting in continuing to use it for my personal projects. This game is just a simple platformer, but I made sure to polish it reasonbly well and give it some character to get a better understanding of Godot's capabilities. Astute players may notice the main character is from another one of my games, <i>little man's big day.</i>
      </>
    ),
    initialRotate: -5
  }
  ,
  {
    id: 'gam7', 
    className: 'gam7', 
    src: game7, 
    alt: 'little man\'s gravity gymnasium', 
    title: 'little man\'s gravity gymnasium',
    subtitle: 'Platformer, PICO-8 • 2026',
    description: (
      <>
        {' '}
        <a href="https://funderful.itch.io/little-mans-gravity-gymnasium" target="_blank" rel="noopener noreferrer" className="lightboxLink">
          Play on itch.io
        </a>
        <br/><br/>
        This is a small PICO-8 game created in under a week for CS 4730 at the University of Virginia. The theme we were given for this game jam was "gravity is broken." I had never used PICO-8 for game development prior to the jam, so I'm relatively proud of what I was able to accomplish here. Astute players may notice the main character is from another one of my games, <i>little man's big day</i>. I like using little man as a recurring character for my demo/jam games, since he's so easy to design.
      </>
    ),
    initialRotate: -5
  }
  ,
  {
    id: 'gam8', 
    className: 'gam8', 
    src: game8, 
    alt: 'The Tomb of Incomphrehensible Horrors', 
    title: 'ttoih',
    subtitle: 'RPG, Roguelike, Godot • 2026',
    description: (
      <>
        {' '}
        <i>In development</i>
        <br/><br/>
        The working title for this game is <i>The Tomb of Incomphrehensible Horrors.</i> I'm planning on keeping it as a small, but polished roguelike RPG. To that effect, the gameplay loop doesn't involve any overworld; it's just one battle after another. I began work on it because I wanted to try creating my ideal turn-based combat system. The gameplay is very similar to the <i>Mario and Luigi</i> RPG series, where quick-time events are used to attack and defend throughout battles. The theming and art direction for the game is inspired by my childhood memories of playing Whitebox D&D with my father.
      </>
    ),
    initialRotate: -5
  },
  {
    id: 'gam9', 
    className: 'gam9', 
    src: game9, 
    alt: 'blob game', 
    title: 'blob game',
    subtitle: 'Arcade, Unity • 2022',
    description: (
      <>
        {' '}
        <a href="https://funderful.itch.io/blob-game" target="_blank" rel="noopener noreferrer" className="lightboxLink">
          Play on itch.io
        </a>
        <br/><br/>
        A super simple bullet-hell type arcade game made in under two days. I wanted to challenge myself to make something small and simple really quickly, especially since I was burnt out after completing my previous game, <i>Spectrum</i> (see above.)
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