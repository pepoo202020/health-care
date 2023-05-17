import React from "react";
import '../styles/styles.css'
import Action from "./Action";
import heroImg from '../assets/heroImg.png'
import element from '../assets/element.png'
const Hero = () => {
    return <div className="w-screen relative overflow-hidden ">
        <div className="flex lg:flex-row flex-col items-center lg:px-36 lg:gap-2 gap-5 px-10 py-48">
            <div className="flex  flex-col lg:items-start items-center lg:max-w-lg ">
                <h1 className="heroHead lg:text-start text-center font-bold lg:text-5xl text-2xl mb-6 text-black">Virtual healthcare for you</h1>
                <p className="heroParagraph lg:text-start text-center font-light lg:text-xl text-base lg:max-w-md text-[#7D7987] mb-11">Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
                <Action bgColor={'bg-[#458FF6]'} hoveredBg={'bg-transparent'} link={'/'} text={'Consult today'} textColor={'text-white'} hoveredTextColor={'text-[#458FF6]'} borderColor={'border-[#458FF6]'} hoveredBorderColor={'border-[#458FF6]'} />
            </div>
            <div>
                <img src={heroImg} alt="hero" />
            </div>

        </div>
        <div className="absolute top-40">
            <img src={element} alt="element" />
        </div>
    </div>;
};

export default Hero;
