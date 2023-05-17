import React from "react";
import { Link } from "react-router-dom";
import '../styles/styles.css'
const Action = ({ link, bgColor, textColor, hoveredBg, text, hoveredTextColor, hoveredBorderColor, borderColor }) => {
    return <Link to={link} className={`px-7 py-3 hover:scale-110 transition-all ${bgColor} hover:${hoveredBg} ${textColor} hover:${hoveredTextColor} lg:text-lg text-sm font-bold actionText rounded-full hover:${hoveredBorderColor} border ${borderColor} hover:border w-fit`}>
        {text}
    </Link>;
};

export default Action;
