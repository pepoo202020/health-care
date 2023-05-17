import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Providers from "../components/Providers";
import Download from "../components/Download";
import Testimonials from "../components/Testimonials";
import Articles from "../components/Articles";

const Home = () => {
    return <div className="overflow-x-hidden">
        <Hero />
        <Services />
        <Providers />
        <Download />
        <Testimonials />
        <Articles />
    </div>;
};

export default Home;
