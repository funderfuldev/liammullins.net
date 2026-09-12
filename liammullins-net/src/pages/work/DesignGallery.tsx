import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Transition } from 'motion/react';
import '../Pages.css';
import './Work.css';

import urec_1 from '../../assets/images/work/urec_1.jpg';
import urec_2 from '../../assets/images/work/urec_2.png';
import urec_3 from '../../assets/images/work/urec_3.jpg';
import urec_7 from '../../assets/images/work/urec_7.png';
import book_cover from '../../assets/images/work/book_cover.jpg';
import urec_5 from '../../assets/images/work/urec_5.jpg';
import urec_6 from '../../assets/images/work/urec_6.png';
import nocomp_2 from '../../assets/images/work/nocomp_2.jpg';
import nocomp_1 from '../../assets/images/work/nocomp_1.jpg';
import urec_8 from '../../assets/images/work/urec_8.jpg';
import urec_4 from '../../assets/images/work/urec_4.jpg';
import single_cover from '../../assets/images/work/single_cover.jpg';
import ep_cover from '../../assets/images/work/ep_cover.jpg';

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
    description: 'This poster was for a joint effort between the three big music clubs at UVA to put together an acoustic jam for the new Contemplative Commons building that had recently been opened to the students. The building itself is very open-air, so I decided to reflect that in the poster.',
    initialRotate: -5 
  },
  { 
    id: 'des2', 
    className: 'des2', 
    src: urec_2, 
    alt: 'acoustic show poster', 
    title: 'Acoustic Show',
    subtitle: 'Photoshop • 2024',
    description: 'This was one of the first posters I created for the UVA music club University Records. I wanted to have graphics that alluded to the comfy, intimate, and relaxed nature of the event somewhere within the poster. Unfortunately the show didn\'t end up taking place outside. \n\nI actually played this show too! My name is on the poster, first in the lineup.',
    initialRotate: 5 
  },
  { 
    id: 'des3', 
    className: 'des3', 
    src: urec_3, 
    alt: 'acoustic show poster', 
    title: 'Acoustic Show at 1515',
    subtitle: 'Photoshop • 2025',
    description: 'A lot of my previous posters for acoustic shows up until this point had been very abstract or used photography for the main graphic. So for a change, I decided to feature an illustrated figure playing the guitar, which is what the majority of performers at these events play. My sister was learning how to play the guitar at the time, so I drew the figure in her likeness.',
    initialRotate: -2 
  },
  { 
    id: 'des4', 
    className: 'des4', 
    src: urec_7, 
    alt: 'halloween house show poster', 
    title: 'Halloween House Show',
    subtitle: 'Photoshop • 2024',
    description: 'This poster was created for a joint house show between the UVA music clubs Indieheads and University Records. Since it was a halloween show, I wanted something striking and terrifying - the hero graphic here was cut out of an old wood engraving I sourced from archive.org. I cannot remember what the woodcut was depicting initially.',
    initialRotate: -2 
  },
  { 
    id: 'des5', 
    className: 'des5', 
    src: book_cover, 
    alt: 'book cover commission', 
    title: 'Book Cover Commission',
    subtitle: 'Illustrator, Photoshop, InDesign • 2024',
    description: 'A colleague of my father commissioned me to create a cover for his historical fiction novel about the Coastal Picket Force along the east coast during WWII. \n\nThe photos I used for this project are real and sourced from that time period, but the sailor\'s hat was edited in to make the imagery more clear at a glance.',
    initialRotate: -5 
  },
  { 
    id: 'des6', 
    className: 'des6', 
    src: urec_5, 
    alt: 'house show poster', 
    title: 'House Show',
    subtitle: 'Photoshop • 2026',
    description: 'This poster was created for a house show put on by the UVA music club University Records. Two of my good friends\' bands were playing this show, so I wanted the poster to be memorable. It was with this poster that I started to latch onto using low-resolution graphics as a means of generating contrast.',
    initialRotate: -5 
  },
  { 
    id: 'des7', 
    className: 'des7', 
    src: nocomp_2, 
    alt: 'band poster', 
    title: 'No Composure No. 1',
    subtitle: 'Photoshop • 2025',
    description: 'This is one of many posters I have created for my band No Composure. We rarely get good photography of our drummer since she\'s typically behind the rest of the band. That being said, this poster stands out among the rest of the band\'s advertisements.',
    initialRotate: 2 
  },
  { 
    id: 'des8', 
    className: 'des8', 
    src: urec_6, 
    alt: 'house show poster', 
    title: 'Evil House Show',
    subtitle: 'Photoshop • 2024',
    description: 'This poster was made for a house show put on by the UVA music club University Records. I wanted to create something grimy and gritty, but not outwardly unsettling. To that effect, I chose the unconventional color scheme of yellow and pink.\n\n This poster was heavily, heavily inspired by the amazing graphic design found in the tabletop role-playing game MÖRK BORG.',
    initialRotate: -4 
  },
  { 
    id: 'des9', 
    className: 'des9', 
    src: nocomp_1, 
    alt: 'band poster', 
    title: 'No Composure No. 2',
    subtitle: 'Photoshop • 2025',
    description: 'This is one of many posters I have created for my band No Composure. This poster in particular is distinct because we needed to advertise two separate gigs with one poster. To that end, I chose to split the composition evenly down the middle and stick to black and white for contrast between the two halves.',
    initialRotate: -3 
  },
  { 
    id: 'des10', 
    className: 'des10', 
    src: single_cover, 
    alt: 'single cover', 
    title: 'Cups and Plates',
    subtitle: 'Photoshop, Illustrator • 2026',
    description: 'The single cover for my band\'s debut track on streaming services. This design went through many, many revisions, but throughout them all the motifs of travel, distance, and household appliances remained.',
    initialRotate: 3 
  },
  { 
    id: 'des11', 
    className: 'des11', 
    src: urec_4, 
    alt: 'acoustic show poster', 
    title: 'Acoustic Show',
    subtitle: 'Illustrator, Photoshop • 2026',
    description: 'This poster was made for an acoustic show put on by the UVA music club University Records. At the time, I was really interested with how much I could use a vibrant color palette without making the composition truly eye-straining. In hindsight, the figure looks a litle bit like a Lego figure.',
    initialRotate: 3 
  },
  {
    id: 'des12',
    className: 'des12',
    src: ep_cover,
    alt: 'ep cover', 
    title: 'Everything Happens',
    subtitle: 'Photoshop • 2026',
    description: 'The cover for my band\'s debut EP. This interstate bypass is off of I-64 on the way to Richmond, Virginia where the EP was recorded.',
    initialRotate: 3 
  }
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