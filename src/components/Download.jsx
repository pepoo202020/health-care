import React from "react";
import '../styles/styles.css'
import downloadImg from '../assets/downloadImg.png'
import Action from './Action'
const Download = () => {
    return (
        <div className="w-screen lg:gap-0 gap-6 my-5 flex lg:flex-row flex-col items-center justify-between overflow-hidden lg:px-32 px-10 py-2">
            <div className="lg:w-1/2 lg:px-28 px-10 flex flex-col lg:items-start items-center justify-center">
                <h1 className="downloadHead lg:text-start text-center font-bold lg:text-3xl text-xl mb-7">Download our
                    mobile apps</h1>
                <span className="h-1 w-14 bg-black rounded-full mb-8"></span>
                <p className="downloadParagraph lg:text-start text-center font-light text-base lg:max-w-md mb-9">Our dedicated patient engagement app andweb portal allow you to access information instantaneously (no tedeous form, long calls,or administrative hassle) and securely</p>
                <Action bgColor={'bg-white'} borderColor={'border-[#458FF6]'} hoveredBg={'bg-[#458FF6]'} hoveredBorderColor={'border-[#458FF6]'} hoveredTextColor={'text-white'} link={'/'} text={'Download'} textColor={'text-[#458FF6]'} />
            </div>
            <div className="w-1/2">
                <img src={downloadImg} alt="download_image" className="w-full" />
            </div>
        </div>

    );
};

export default Download;
