//this component is not mine, really. It was grabbed / copied and then modified from React Motion's website (https://motion.dev/)
//for my first website, a component like this is just a little outside my abilities lol

import { useEffect, useRef, useState, type ReactNode } from 'react';
import {
    motion,
    AnimatePresence,
    animate,
    useMotionValue,
    useTransform,
    type MotionValue,
    type PanInfo,
} from 'motion/react';

import './Carousel.css';

export interface CarouselItem {
    id: string;
    src: string;
    alt: string;
    title: string;
    subtitle: string;
    description: ReactNode;
}

interface CarouselProps {
    items: CarouselItem[];
}

const CARD_WIDTH_RATIO = 0.78;
const GAP = 4;
const cardTransition = {duration: 0.5, ease: [0,.95,0,.95]} as const;
const textTransition = {duration: 2, ease: [0,.9,0,.9]} as const;

interface CardProps {
    item: CarouselItem;
    index: number;
    x: MotionValue<number>;
    step: number;
    width: number;
    onSelect: () => void;
}

function Card({ item, index, x, step, width, onSelect }: CardProps) {
    const offset = useTransform(x, (v) => (v + index * step) / (step || 1));

    const rotateY = useTransform(offset, [-1, 0, 1], [35, 0, -35]);
    const scale = useTransform(offset, [-1, 0, 1], [0.86, 1, 0.86]);
    const opacity = useTransform(offset, [-1, 0, 1], [0.55, 1, 0.55]);

    return (
        <motion.div
        className="carouselCard"
        style={{ width, rotateY, scale, opacity, transformPerspective: 900 }}
        onTap={onSelect}
        >
        <img src={item.src} alt={item.alt} className="carouselImage" draggable={false} />
        </motion.div>
    );
}

export default function Carousel({ items }: CarouselProps) {
    const [index, setIndex] = useState(0);
    const [viewW, setViewW] = useState(0);
    const viewportRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);

    const cardWidth = viewW * CARD_WIDTH_RATIO;
    const step = cardWidth + GAP;

    useEffect(() => {
        const el = viewportRef.current;
        if (!el) return;
        const measure = () => setViewW(el.clientWidth);
        measure();
        const ro = new ResizeObserver(measure);
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    useEffect(() => {
        x.set(-index * step);
    }, [step]);

    const goTo = (next: number) => {
        const clamped = Math.max(0, Math.min(items.length - 1, next));
        setIndex(clamped);
        animate(x, -clamped * step, cardTransition);
    };

    const handleDragEnd = (_: PointerEvent, info: PanInfo) => {
        const projected = info.offset.x + info.velocity.x * 0.2;
        const threshold = step * 0.2;

        if (projected < -threshold) goTo(index + 1);
        else if (projected > threshold) goTo(index - 1);
        else goTo(index); // snap back
    };

    const active = items[index];

    return (
        <div className="carousel">
        <div className="carouselViewport" ref={viewportRef}>
            <motion.div
            className="carouselTrack"
            style={{ x, paddingLeft: (viewW - cardWidth) / 2, gap: GAP }}
            drag="x"
            dragMomentum={false}
            dragElastic={0.15}
            dragConstraints={{ left: -(items.length - 1) * step, right: 0 }}
            onDragEnd={handleDragEnd}
            >
            {items.map((item, i) => (
                <Card
                key={item.id}
                item={item}
                index={i}
                x={x}
                step={step}
                width={cardWidth}
                onSelect={() => i !== index && goTo(i)}
                />
            ))}
            </motion.div>
        </div>

        <div className="carouselDots">
            {items.map((item, i) => (
            <span key={item.id} className={`carouselDot ${i === index ? 'active' : ''}`} />
            ))}
        </div>

        <AnimatePresence mode="wait">
            <motion.div
            key={active.id}
            className="carouselText"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{opacity: 0, transition: {duration: 0.1}}}
            transition={textTransition}
            >
            <h2 className="carouselTitle">{active.title}</h2>
            <p className="carouselSubtitle">{active.subtitle}</p>
            <div className="carouselDescription">{active.description}</div>
            </motion.div>
        </AnimatePresence>
        </div>
    );
}