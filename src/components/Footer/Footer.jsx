import React, { useState } from 'react'
import { NAV_ITEMS } from '../../constants/navigation'
import NavLink from '../Navbar/NavLink'
import FooterNavLink from './FooterNavLink';

const Footer = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('#home'); // Track active link

    const handleLinkClick = (href) => {
        setActiveLink(href); // Set the active link
        setIsMenuOpen(false); // Close menu on click (for mobile)
    };

    return (
        <div className='w-full flex flex-col lg:flex-row justify-between items-center bg-[#252C3A] text-white lg:px-[185px] gap-2 sm:px-4 px-3 lg:py-3 py-2'>
            <p className='lg:text-sm text-xs'>
                © DIGIWHIZ 2019
            </p>

            <div className="flex space-x-7 items-center justify-center text-white">
                {NAV_ITEMS.map((item) => (
                    <FooterNavLink
                        key={item.label}
                        href={item.href}
                        label={item.label}
                        onClick={() => handleLinkClick(item.href)}
                    />
                ))}
            </div>
        </div>
    )
}

export default Footer