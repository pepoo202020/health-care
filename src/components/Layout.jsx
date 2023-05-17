import React from "react";
import Header from './Header'
import Footer from './Footer'
import Routers from "../routes/Router";
const Layout = () => {
    return <div className="overflow-x-hidden">
        <Header />
        <Routers />
        <Footer />
    </div>;
};

export default Layout;
