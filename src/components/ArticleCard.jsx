import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from 'react-icons/ai'
import '../styles/styles.css'
const ArticleCard = ({ image, title, desc }) => {
    return (
        <div className="overflow-hidden flex flex-col h-full mb-10  rounded-r-lg w-80 bg-white drop-shadow-lg ">
            <img src={image} alt='article_image' className="w-full bg-cover" />
            <div className="w-full flex flex-col items-start px-8 py-7">
                <h1 className="articleHead font-bold text-lg mb-3">{title}</h1>
                <p className="articleDesc font-light text-base text-[#7D7987] mb-6">{desc}</p>
                <Link className="flex items-center gap-2 text-[#4089ED] font-semibold text-lg articleReadMore">
                    <span>Read more</span>
                    <span><AiOutlineArrowRight /></span>
                </Link>
            </div>
        </div>
    );
};

export default ArticleCard;
