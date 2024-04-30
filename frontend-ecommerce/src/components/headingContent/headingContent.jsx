import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../navbar/navbar";
import Hero from "../hero/hero";

export function HeadingContent (){

    const location = useLocation();

    //Disable hero in some routes
    const hideHero = 
        location.pathname == "/productdetail" || 
        location.pathname == "/cart" 

    return <div>
        <Navbar/>
        { hideHero ?  null : <Hero/>}
    </div>
}