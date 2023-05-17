import React from "react";
import TestimonialCard from "./TestimonialCard";
import Carousel from "react-multi-carousel";
import person01 from '../assets/person01.png'
import person02 from '../assets/person02.jpg'
import person03 from '../assets/person03.jpg'
import person04 from '../assets/person04.jpg'
import person05 from '../assets/person05.jpg'
import 'react-multi-carousel/lib/styles.css'
const Testimonials = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1, // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1 // optional, default to 1.
        }
    };
    const data = [
        { personImg: person01, name: 'Edward Newgate', role: 'Founder Circle', desc: `“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”` },
        { personImg: person02, name: 'Abanob Shenoda', role: 'Founder Circle', desc: `“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”` },
        { personImg: person03, name: 'Mena Sobhy', role: 'Founder Circle', desc: `“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”` },
        { personImg: person04, name: 'Marena Shenoda', role: 'Founder Circle', desc: `“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”` },
        { personImg: person05, name: 'Tina Monsif', role: 'Founder Circle', desc: `“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”` }
    ]


    return (
        <div className="w-screen overflow-hidden  py-10 lg:px-0  flex items-center justify-center">
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="container"
                dotListClass="custom-dot-list-style"
                itemClass=""

            >
                {
                    data.map((element, index) => (
                        <div key={index} className="flex items-center justify-center">
                            <TestimonialCard

                                personName={element.name}
                                personImg={element.personImg}
                                personRole={element.role}
                                personDesc={element.desc} />
                        </div>
                    ))
                }
            </Carousel>
        </div>

    );
};

export default Testimonials;
