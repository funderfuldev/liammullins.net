import type { ReactNode } from 'react';

interface AboutContent {
  biography: { subtitle: string; paragraphs: ReactNode[] };
  artistStatement: { subtitle: string; paragraphs: ReactNode[] };
  thisWebsite: { subtitle: string; paragraphs: ReactNode[], mobileBlurb: ReactNode[], desktopBlurb: ReactNode[]};
}

export const aboutContent: AboutContent = {
  biography: {
    subtitle: 'printer, baker, videogame maker',
    paragraphs: [
      'Liam Mullins is a printmaker, digital artist, programmer, game designer, and musician. He was born in 2004 and grew up in the quiet suburbs of Richmond, Virginia. He currently attends the University of Virginia, pursuing a BA in Computer Science and Studio Art with a concentration in printmaking.',
    ],
  },
  artistStatement: {
    subtitle: 'typography, typography, typography',
    paragraphs: [
      'I have spent the majority of my time creating visual art through the use of line and typography. I am interested in the use of typography not as a means of communication, but rather as a graphic element that can convey texture and mood. In today\'s perpetual age of information and regurgitation I find it thematic to explore the sheer volume of words and text that surround us, and to question how much of it is truly necessary. A great deal of my work is lonely; nothing is more isolating than words without meaning.',
      'I am also driven to explore common graphic design principles and to push them to their limit. Excessive layering of symbols and iconography tend to find their way into my work. I feel they illustrate a sense of excess, of plans carried out without first considering the consequences.',
      'Most of my printed work is made through multi-block linocut printing, although some pieces are created through steel plate etching. All of my digital work is creating using Adobe\'s Creative Suite.',
    ],
  },
  thisWebsite: {
    subtitle: 'personal website or portfolio?',
    paragraphs: [
      <>This is my very first website, ever. I created it from scratch in React, a framework I had never touched prior to this project. None of the code for this project was written by AI, although I had to consult the internet for bug fixes very frequently. While making it, I had a dual purpose: I wanted to simulatenously house my work for professional purposes <i>and</i> keep it stylized in a way that reflects my personal aesthetic. To that end, I chose to keep the color and design minimalist. To offset that, I also made everything a little off-kilter (metaphorically and literally) to help illustrate a bit of my personal style. My hope is for people to enjoy exploring the website à la Web 2.0 while keeping it meaningfully professional.</>,
    ],
  mobileBlurb: [
    <>Right now you're viewing the <b>mobile version</b> of the website, by the way. A lot of the design-heavier pages (like the <i>work</i> page) look completely different on desktop. I also had to limit a lot of the React Motion animations on the mobile version to avoid a lot of bugs I was running into. The content of the two versions are identical, but the desktop version is my ideal presentation.</>
  ],
  desktopBlurb: [
    <>Right now you're viewing the <b>desktop version</b> of the website, by the way. A lot of the design-heavier pages (like the <i>work</i> page) simply didn't translate to mobile directly, so the layout of all the pages on the website have a separate mobile layout. I also had to limit a lot of the React Motion animations on the mobile version to avoid a lot of bugs I was running into. The content of the two versions are identical, but the desktop version is my ideal presentation.</>
  ]
  },
};