import type { ReactNode } from 'react';

interface ContactContent {
    professional: {subtitle: string, paragraphs: ReactNode[]};
    socials: {subtitle: string, paragraphs: ReactNode[]};
}

export const contactContent: ContactContent = {
    professional: {
        subtitle: "serious things",
        paragraphs: [
            <>For professional inquiries, please contact me via <u><a href='mailto:0liammullins0@gmail.com' target="_blank" rel="noopener noreferrer">email</a></u> at <a href='mailto:0liammullins0@gmail.com' target="_blank" rel="noopener noreferrer"><u>0liammullins0@gmail.com.</u></a> I am currently available for freelance work and commissions.</>
        ]
    },
    socials: {
        subtitle: "the less serious things",
        paragraphs: [
            <>For updates on my printed work, digital projects, and miscellaneous sketches/artwork, follow me on my art <a href='https://www.instagram.com/liammullins.psd/' target="_blank" rel="noopener noreferrer"><u>instagram.</u></a> I try to post updates semi-frequently.</>,
            <>If you would like to play some of my games or follow my development progress, feel free to check out my <a href='https://funderful.itch.io/' target="_blank" rel="noopener noreferrer"><u>itch.io</u></a> page.</>,
            <>For non-serious, infrequent updates, artwork, and strange thoughts, follow my <a href='https://x.com/_Funderful' target="_blank" rel="noopener noreferrer"><u>twitter</u></a> account.</>
        ]
    }
}