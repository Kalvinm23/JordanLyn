import React from "react";
import TopBanner from "./components/TopBanner/TopBanner";
import TopNavigation from "./components/TopNavigation/TopNavigation";
import AboutMe from "./components/AboutMe/AboutMe";
import Video from "./components/Video/Video";
import AboutUs from "./components/AboutUs/AboutUs";
import Service from "./components/Service/Service";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div>
            <TopNavigation/>
            <TopBanner/>
            <AboutMe/>
            <Video/>
            <AboutUs/>
            <Service/>
            <ContactUs/>
            <Footer/>
        </div>
    );
}

export default App;
