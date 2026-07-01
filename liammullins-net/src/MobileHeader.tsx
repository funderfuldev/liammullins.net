
import './MobileHeader.css'
import {useState, useEffect} from "react";
import { useNavigate, useLocation} from 'react-router';

import MobileHeaderImage from './assets/mobile_header.svg';



export default function MobileHeader()
{
    const PAGES = [
    {key: 1, name: "work", description: "design,   prints,   games", link: "/"},
    {key: 2, name: "about", description: "bio, artist statement", link: "/about"},
    {key:3, name: "contact", description: "email, socials, cv", link: "/contact"}
    ];

    let navigate = useNavigate();
    let location = useLocation();

    const getCurrentPage = () => {
        return PAGES.find(p => p.link === location.pathname) || PAGES[0];
    }

    const [selectedPage, setSelectedPage] = useState(PAGES[0]);

    useEffect(() => {
        setSelectedPage(getCurrentPage());
    }, [location.pathname]);

    const handlePageClick = (page : any) => {
        setSelectedPage(page);
        navigate(page.link);
    }

    return(
        <div className='holder'>
            <img src={MobileHeaderImage} className='headerImage'/>
            <div className='pageButtonsHolderMobile'>
                {PAGES.map((page) => 
                {
                    const isSelected = page.key == selectedPage.key;

                    return(
                        <span 
                        key={page.key}
                        className='pageButtonMobile' 
                        onClick={() => handlePageClick(page)}>
                            {isSelected ? <u>{page.name}</u> : page.name}
                        </span>
                    );
                })}
            </div>
        </div>
    )
}