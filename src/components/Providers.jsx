import React from "react";
import '../styles/styles.css'
import providerImg from '../assets/providerImg.png'
import Action from './Action'
const Providers = () => {
    return <div className="w-screen my-5 lg:gap-0 gap-6  flex lg:flex-row flex-col items-center justify-between overflow-hidden lg:px-32 px-10 py-2">
        <div className="w-1/2">
            <img src={providerImg} alt="provider_image" className="w-full" />
        </div>
        <div className="lg:w-1/2 lg:px-28 px-10 flex flex-col lg:items-start items-center justify-center">
            <h1 className="providerHead lg:text-start text-center font-bold lg:text-3xl text-xl mb-7">Leading healthcare providers</h1>
            <span className="h-1 w-14 bg-black rounded-full mb-8"></span>
            <p className="providerParagraph lg:text-start text-center font-light text-base lg:max-w-md mb-9">Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride
                in the solutions we deliver</p>
            <Action bgColor={'bg-white'} borderColor={'border-[#458FF6]'} hoveredBg={'bg-[#458FF6]'} hoveredBorderColor={'border-[#458FF6]'} hoveredTextColor={'text-white'} link={'/'} text={'Learn more'} textColor={'text-[#458FF6]'} />
        </div>
    </div>;
};

export default Providers;
