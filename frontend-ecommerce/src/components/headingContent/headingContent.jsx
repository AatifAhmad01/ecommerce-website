import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../navbar/navbar";
import Hero from "../hero/hero";
import AnnouncementBar from "../announcementBar/announcementBar";
import LoadingPage from "../transparentLoading/transparentLoading";
import { SocialMediaLinks } from "../socialMediaLinks/socialMediaLinks";

export function HeadingContent (){

    const location = useLocation();

    //Disable hero in some routes
    const hideHero = location.pathname == "/"

    return <>
    <div className="heading-content-container">
        <AnnouncementBar>{"Free delivery all over Pakistan."}</AnnouncementBar>
        <Navbar/>
        <SocialMediaLinks/>
    </div>
        { hideHero ?  <Hero/> : null}
    </>
    
}