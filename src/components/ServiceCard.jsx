import React from "react";
import '../styles/styles.css'
const ServiceCard = ({ image, title, description }) => {
    return <div className="flex flex-col max-w-xs bg-white mb-9 px-9 py-14 items-start drop-shadow-xl rounded-xl">
        <img src={image} alt='card_image' className="mb-5" />
        <h1 className="serviceCardHead font-bold text-xl mb-2">{title}</h1>
        <p className="serviceCardDesc font-light text-base text-[#7D7987]">{description}</p>
    </div>;

};
export default ServiceCard;
