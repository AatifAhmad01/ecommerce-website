import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../navbar/navbar";
import Hero from "../hero/hero";
import AnnouncementBar from "../announcementBar/announcementBar";
import LoadingPage from "../transparentLoading/transparentLoading";

export function HeadingContent (){

    const location = useLocation();

    //Disable hero in some routes
    const hideHero = 
        location.pathname == "/productdetail" || 
        location.pathname == "/cart" || 
        location.pathname == "/checkout" || 
        location.pathname == "/orderPage" 

    return <>
    <div className="heading-content-container">

        <AnnouncementBar>{"Free delivery all over Pakistan."}</AnnouncementBar>
        <Navbar/>
    </div>
        { hideHero ?  null : <Hero/>}
    </>
    
}