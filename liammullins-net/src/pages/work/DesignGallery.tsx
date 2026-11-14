import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Transition } from 'motion/react';
import '../Pages.css';
import './Work.css';
import { designItems, type DesignItem } from '../content/designItems';


const thumbnailTransition: Transition = {
  type: 'spring',
  stiffness: 900,
  damping: 40,
};

const fullscreenTransition: Transition = { type: 'spring', stiffness: 500, damping: 50, mass: 1 }

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