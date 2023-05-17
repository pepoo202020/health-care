import React from "react";
import logo from '../assets/logo.png'
import '../styles/styles.css'
import { NavLink } from "react-router-dom";
const Header = () => {
    const links = [
        { name: 'Home', link: '/home' },
        { name: 'find a doctor', link: '/find' },
        { name: 'apps', link: '/apps' },
        { name: 'testimonials', link: '/testimonials' },
        { name: 'about us', link: '/about' },
    ]
    return <header className="w-screen fixed z-50 top-0 bg-white flex lg:gap-0 gap-2 lg:flex-row flex-col items-center lg:justify-around py-12">
        <div className="flex items-center ">
            <img className="mr-2" src={logo} alt="logo" />
            <h1 className="logoHead font-bold text-2xl text-[#233348]">Trafalgar</h1>
        </div>
        <div className="flex items-center lg:gap-5 gap-2">
            {
                links.map((link, index) => (
                    <NavLink to={link.link} key={index} className={active => active.isActive ? 'font-bold' : 'font-normal'}>
                        <span className="navLinks lg:text-lg text-xs capitalize text-[#1F1534]">
                            {link.name}
                        </span>
                    </NavLink>
                ))
            }
        </div>
    </header>;
};

export default Header;
