import React from "react";
import servicesImg from '../assets/servicesBg.png'
import '../styles/styles.css'
import cardImg01 from '../assets/cardImg01.png'
import cardImg02 from '../assets/cardImg02.png'
import cardImg03 from '../assets/cardImg03.png'
import cardImg04 from '../assets/cardImg04.png'
import cardImg05 from '../assets/cardImg05.png'
import cardImg06 from '../assets/cardImg06.png'
import ServiceCard from "./ServiceCard";
import Action from './Action'
const Services = () => {
    const data = [
        { image: cardImg01, title: 'Search doctor', desc: 'Choose your doctor from thousands of specialist, general, and trusted hospitals' },
        { image: cardImg02, title: 'Online pharmacy', desc: 'Buy  your medicines with our mobile application with a simple delivery system' },
        { image: cardImg03, title: 'Consultation', desc: 'Free consultation with our trusted doctors and get the best recommendations' },
        { image: cardImg04, title: 'Details info', desc: 'Free consultation with our trusted doctors and get the best recommendations' },
        { image: cardImg05, title: 'Emergency care', desc: 'You can get 24/7 urgent care for yourself or your children and your lovely family' },
        { image: cardImg06, title: 'Tracking', desc: 'Track and save your medical history and health data ' }
    ]
    return <div className="w-screen overflow-hidden my-2 relative">
        <div className="absolute -z-20 top-44">
            <img src={servicesImg} alt="services" />
        </div>
        <div className="flex flex-col mb-2 items-center">
            <div className="flex flex-col items-center max-w-4xl">
                <h1 className="servicesHead font-bold lg:text-4xl text-xl mb-6 text-black">Our services</h1>
                <span className="h-1 rounded-full w-14 bg-black mb-8"></span>
                <p className="servicesParagraph lg:px-0 px-10  mb-20 text-center font-light text-base">We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
            </div>
            <div className="lg:max-w-6xl lg:mx-5 mx-10 flex justify-between flex-wrap">
                {
                    data.map((element, i) => (
                        <ServiceCard key={i} description={element.desc} image={element.image} title={element.title} />
                    ))
                }
            </div>

            <Action bgColor={'bg-white'} borderColor={'border-[#458FF6]'} hoveredBg={'bg-[#458FF6]'} hoveredBorderColor={'border-[#458FF6]'} hoveredTextColor={'text-white'} link={'/'} text={'Learn more'} textColor={'text-[#458FF6]'} />
        </div>
    </div>;
};

export default Services;
