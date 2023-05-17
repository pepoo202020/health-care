import React from "react";
import '../styles/styles.css'
import footerElement from '../assets/footerElement.png'
import footerLogo from '../assets/footerLogo.png'
import { Link } from "react-router-dom";
import { BsFacebook, BsTelegram, BsGithub } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import { AiFillGooglePlusCircle } from 'react-icons/ai'
const Footer = () => {
    const data = [
        {
            name: 'Company', links: ['About', 'Testimonials', 'Find a doctor', 'Apps']
        },
        {
            name: 'Region', links: ['Indonesia', 'Singapore', 'Hongkong', 'Canada']
        },
        {
            name: 'Help', links: ['Help center', 'Contact support', 'Instructions', 'How it works']
        },
    ]
    return (
        <div className="w-screen relative overflow-hidden bg-gradient-to-tr from-[#5A98F2] to-[#67C3F3] flex lg:flex-row flex-col lg:items-start items-center lg:justify-between py-32 lg:px-48 px-10">
            <div className="absolute bottom-0 left-0">
                <img src={footerElement} alt="footer_element" />
            </div>

            <div className="flex flex-col lg:max-w-xs h-full lg:items-start mb-10 items-center justify-between">
                <div className="flex items-center gap-3 mb-4">
                    <img src={footerLogo} alt="footer_logo" />
                    <h1 className="footerHead font-bold text-white text-2xl">Trafalgar</h1>
                </div>

                <p className="footerP font-light text-lg mb-4 lg:text-start text-center text-white">
                    Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online
                    for everyone
                </p>

                <div className="flex items-center gap-4 flex-wrap mb-4 text-white">
                    <Link to='https://www.facebook.com/abanob.shosh/?locale=ar_AR' >
                        <BsFacebook className="text-4xl text-white hover:text-[#458FF6] hover:scale-x-110 transition-all" />
                    </Link>
                    <Link to='https://wa.me/01126884803'>
                        <IoLogoWhatsapp className="text-4xl text-white hover:text-[#458FF6] hover:scale-x-110 transition-all" />
                    </Link>
                    <Link to='https://t.me/popo01126'>
                        <BsTelegram className="text-4xl text-white hover:text-[#458FF6] hover:scale-x-110 transition-all" />
                    </Link>
                    <Link to='https://github.com/pepoo202020'>
                        <BsGithub className="text-4xl text-white hover:text-[#458FF6] hover:scale-x-110 transition-all" />
                    </Link>
                    <Link to='mailto:poposhosh23@gmail.com'>
                        <AiFillGooglePlusCircle className="text-4xl text-white hover:text-[#458FF6] hover:scale-x-110 transition-all" />
                    </Link>
                </div>

                <p className="footerP font-light text-lg lg:text-start text-center text-white">©Abanob Shenoda 2023. All rights reserved</p>
            </div>
            {
                data.map((el, i) => (
                    <div key={i} className="flex flex-col lg:items-start items-center mb-10 gap-2">
                        <h1 className="footerHead text-white text-lg mb-5 font-bold">{el.name}</h1>
                        {
                            el.links.map((e, i) => (
                                <Link key={i} className="footerP font-light text-base text-white hover:text-[#5A98F2]">{e}</Link>
                            ))
                        }
                    </div>

                ))
            }
        </div>
    );
};

export default Footer;
