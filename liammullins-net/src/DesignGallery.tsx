import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Transition } from 'motion/react';
import './pages/Pages.css';
import './pages/Work.css';

import urec_1 from './assets/images/work/urec_1.jpg';
import urec_2 from './assets/images/work/urec_2.png';
import urec_3 from './assets/images/work/urec_3.jpg';
import urec_7 from './assets/images/work/urec_7.png';
import book_cover from './assets/images/work/book_cover.jpg';
import urec_5 from './assets/images/work/urec_5.jpg';
import urec_6 from './assets/images/work/urec_6.png';
import nocomp_2 from './assets/images/work/nocomp_2.jpg';
import nocomp_1 from './assets/images/work/nocomp_1.jpg';
import urec_8 from './assets/images/work/urec_8.jpg';
import urec_4 from './assets/images/work/urec_4.jpg';

interface DesignItem {
  id: string;
  className: string;
  src: string;
  alt: string;
  initialRotate: number;
  title: string;
  subtitle: string;
  description: string;
}

const thumbnailTransition: Transition = {
  type: 'spring',
  stiffness: 900,
  damping: 40,
};

const fullscreenTransition: Transition = { type: 'spring', stiffness: 500, damping: 50, mass: 1 }

const designItems: DesignItem[] = [
  { 
    id: 'des1', 
    className: 'des1', 
    src: urec_1, 
    alt: 'acoustic jam poster', 
    title: 'Acoustic Jam',
    subtitle: 'Photoshop • 2025',
    description: 'This poster was for a joint effort between the three big music clubs at UVA to put together an acoustic jam for the new Contemplative Commons building that had recently been opened to the students. \n\nThe building itself is very open-air, so I decided to reflect that in the poster.',
    initialRotate: -5 
  },
  { 
    id: 'des2', 
    className: 'des2', 
    src: urec_2, 
    alt: 'acoustic show poster', 
    title: 'Acoustic Show',
    subtitle: 'Photoshop • 2024',
    description: 'Minimalist concert flyer emphasizing space and expressive text placement.',
    initialRotate: 5 
  },
  { 
    id: 'des3', 
    className: 'des3', 
    src: urec_3, 
    alt: 'acoustic show poster', 
    title: 'Acoustic Show',
    subtitle: 'Print Design • 2024',
    description: 'Experimental composition pushing print density and visual repetition.',
    initialRotate: -2 
  },
  { 
    id: 'des4', 
    className: 'des4', 
    src: urec_7, 
    alt: 'house show poster', 
    title: 'House Show Poster',
    subtitle: 'Graphic Design • 2024',
    description: 'Layered graphics created using high-contrast iconography and bold line work.',
    initialRotate: -2 
  },
  { 
    id: 'des5', 
    className: 'des5', 
    src: book_cover, 
    alt: 'book cover commission', 
    title: 'Book Cover Commission',
    subtitle: 'Illustration & Layout • 2023',
    description: 'Custom typography layout exploring texture, mood, and lonely repetitive language.',
    initialRotate: -5 
  },
  { 
    id: 'des6', 
    className: 'des6', 
    src: urec_5, 
    alt: 'house show poster', 
    title: 'House Show Series',
    subtitle: 'Poster Series • 2024',
    description: 'Part of an ongoing poster series created with digital vectors and distressed textures.',
    initialRotate: -5 
  },
  { 
    id: 'des7', 
    className: 'des7', 
    src: nocomp_2, 
    alt: 'band poster', 
    title: 'Band Poster No. 2',
    subtitle: 'Band Merch & Advertising • 2024',
    description: 'Event poster designed for live venue promotion featuring multi-layered visual motifs.',
    initialRotate: 2 
  },
  { 
    id: 'des8', 
    className: 'des8', 
    src: urec_6, 
    alt: 'house show poster', 
    title: 'House Show Variant',
    subtitle: 'Digital Media • 2024',
    description: 'Alternative colorway and typographic layout experiment.',
    initialRotate: -4 
  },
  { 
    id: 'des9', 
    className: 'des9', 
    src: nocomp_1, 
    alt: 'band poster', 
    title: 'Band Poster No. 1',
    subtitle: 'Band Merch • 2024',
    description: 'High-density typographic study exploring structural symmetry and visual weight.',
    initialRotate: -3 
  },
  { 
    id: 'des10', 
    className: 'des10', 
    src: urec_8, 
    alt: 'house show poster', 
    title: 'House Show Flyer',
    subtitle: 'Print Media • 2024',
    description: 'Limited run flyer design showcasing printmaking textures.',
    initialRotate: 3 
  },
  { 
    id: 'des11', 
    className: 'des11', 
    src: urec_4, 
    alt: 'acoustic show poster', 
    title: 'Acoustic Session',
    subtitle: 'Poster Design • 2024',
    description: 'Monochromatic poster design focusing on structural line quality and negative space.',
    initialRotate: 3 
  },
];

export default function DesignGallery(): React.JSX.Element {
  const [selectedItem, setSelectedItem] = useState<DesignItem | null>(null);

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
      <div className="designGallery" style={{ rotate: '-5deg' }}>
        {designItems.map((item) => (
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