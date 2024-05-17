import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../navbar/navbar";
import Hero from "../hero/hero";
import AnnouncementBar from "../announcementBar/announcementBar";

export function HeadingContent (){

    const location = useLocation();

    //Disable hero in some routes
    const hideHero = 
        location.pathname == "/productdetail" || 
        location.pathname == "/cart" || 
        location.pathname == "/checkout" || 
        location.pathname == "/orderPage" 

    return <div>
        <AnnouncementBar>{"Free delivery all over Pakistan."}</AnnouncementBar>
        <Navbar/>
        { hideHero ?  null : <Hero/>}
    </div>
}