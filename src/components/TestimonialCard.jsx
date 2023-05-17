import React from "react";
import '../styles/styles.css'
const TestimonialCard = ({ personImg, personName, personRole, personDesc }) => {
    return (
        <div className="bg-gradient-to-tr from-[#5A98F2] to-[#67C3F3] lg:max-w-6xl  flex flex-col items-center justify-center lg:py-16 py-8 lg:px-28 px-14 lg:mx-0 mx-10 rounded-xl">
            <h1 className="testimonialCardHead font-bold text-white lg:text-3xl text-xl mb-6 text-center">What our customer are saying</h1>
            <span className="h-1 w-14 bg-white rounded-full mb-16"></span>
            <div className="flex lg:flex-row flex-col w-full lg:gap-0 gap-5 items-center">
                <div className="flex lg:w-1/2 lg:gap-4 items-center gap-9">
                    <img src={personImg} alt="person01" className="rounded-full lg:w-28 lg:h-28 w-14 h-14 border-4 border-white" />
                    <div className="flex flex-col items-start justify-center gap-1">
                        <h1 className="personName font-bold text-white lg:text-2xl text-base">{personName}</h1>
                        <p className="roleParagraph lg:text-base text-xs text-white">{personRole}</p>
                    </div>
                </div>
                <p className="lg:w-1/2 lg:max-w-md lg:text-start text-center personParagraph text-white lg:text-lg text-sm">{personDesc}</p>
            </div>
        </div>
    );
};

export default TestimonialCard;
