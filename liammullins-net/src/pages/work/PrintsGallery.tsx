import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Transition } from 'motion/react';
import '../Pages.css';
import './Work.css';

import print1 from '../../assets/images/work/print1.jpg';
import print2 from '../../assets/images/work/print2.jpg';
import print3 from '../../assets/images/work/print3.jpg';
import print4 from '../../assets/images/work/print4.jpg';
import print5 from '../../assets/images/work/print5.jpg';
import print6 from '../../assets/images/work/print6.jpg';
import print7 from '../../assets/images/work/print7.jpg';
import print8 from '../../assets/images/work/print8.jpg';

interface PrintItem {
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

const designItems: PrintItem[] = [
  { 
    id: 'pri1', 
    className: 'pri1', 
    src: print1, 
    alt: 'print 1', 
    title: '',
    subtitle: 'Brazier Melts, Overflows and Throws a Tantrum',
    description: '2026 • Linocut • 12" x 24"',
    initialRotate: -5 
  },
  { 
    id: 'pri2', 
    className: 'pri2', 
    src: print2, 
    alt: 'print 2', 
    title: '',
    subtitle: '9:30pm Perpetual Motion Machine Schematic',
    description: '2026 • Steel Plate Etching • 8" x 10"',
    initialRotate: -5 
  },
  { 
    id: 'pri3', 
    className: 'pri3', 
    src: print3, 
    alt: 'print 3', 
    title: '',
    subtitle: 'Chartreuse, TN 122224',
    description: '2026 • Linocut • 10" x 8"',
    initialRotate: 5 
  },
  { 
    id: 'pri4', 
    className: 'pri4', 
    src: print4, 
    alt: 'print 4', 
    title: '',
    subtitle: 'I Will Lay Myself Down in a Blue and White Striped Hoodie',
    description: '2026 • Steel Plate Aquatint • 10" x 8"',
    initialRotate: 5 
  },
  { 
    id: 'pri5', 
    className: 'pri5', 
    src: print5, 
    alt: 'print 5', 
    title: '',
    subtitle: 'Naïve Adolescent Yearns for the Powerful Something',
    description: '2025 • Steel Plate Etching • 10" x 8"',
    initialRotate: 5 
  },
  { 
    id: 'pri6', 
    className: 'pri6', 
    src: print6, 
    alt: 'print 6', 
    title: '',
    subtitle: 'Kayfabe/Option Select',
    description: '2024 • Woodcut • 13" x 18"',
    initialRotate: 5 
  },
  { 
    id: 'pri7', 
    className: 'pri7', 
    src: print7, 
    alt: 'print 7', 
    title: '',
    subtitle: 'Conformité Européenne',
    description: '2024 • Lithography • 8" x 10"',
    initialRotate: 5 
  },
  { 
    id: 'pri8', 
    className: 'pri8', 
    src: print8, 
    alt: 'print 8', 
    title: '',
    subtitle: 'The User\'s Guide',
    description: '2024 • Lithography • 13" x 18"',
    initialRotate: 5 
  }
];

export default function PrintsGallery(): React.JSX.Element {
  const [selectedItem, setSelectedItem] = useState<PrintItem | null>(null);

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
      <div className="printsGallery" style={{ rotate: '-5deg' }}>
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