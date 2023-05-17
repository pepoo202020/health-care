import React from "react";
import '../styles/styles.css'
import articleBg from '../assets/articlesBg.png'
import articleImg01 from '../assets/articleImg01.png'
import articleImg02 from '../assets/articleImg02.png'
import articleImg03 from '../assets/articleImg03.png'
import ArticleCard from "./ArticleCard";
import Action from './Action'

const Articles = () => {
  const data = [
    { img: articleImg01, title: 'Disease detection, check up in the laboratory', desc: 'In this case, the role of the health laboratory is very important to do a disease detection...' },
    { img: articleImg02, title: 'Herbal medicines that are safe for consumption', desc: 'Herbal medicine is very widely used at this time because of its very good for your health...' },
    { img: articleImg03, title: 'Natural care for healthy facial skin', desc: 'A healthy lifestyle should start from now and also for your skin health.There are some...' },
  ]
  return (
    <div className="w-screen flex flex-col items-center relative overflow-hidden py-5 my-10">
      <div className="absolute -z-10 top-11 right-0">
        <img src={articleBg} alt="article_image" />
      </div>
      <h1 className="articlesHead font-bold lg:text-3xl text-xl text-center mb-7">Check out our latest article</h1>
      <span className="h-1 w-14 bg-black rounded-full mb-20"></span>
      <div className="w-full flex flex-wrap items-center justify-center gap-10">
        {
          data.map((ele, i) => (
            <ArticleCard desc={ele.desc} image={ele.img} key={i} title={ele.title} />
          ))
        }
      </div>

      <Action bgColor={'bg-white'} borderColor={'border-[#458FF6]'} hoveredBg={'bg-[#458FF6]'} hoveredBorderColor={'border-[#458FF6]'} hoveredTextColor={'text-white'}
        link={'/'} text={'View all'} textColor={'text-[#458FF6]'} />

    </div>
  );
};

export default Articles;
