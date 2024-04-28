import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../navbar/navbar";
import Hero from "../hero/hero";

export function HeadingContent (){

    const location = useLocation();

    //Disable hero in some routes

    return <div>
        <Navbar/>
        {location.pathname == "/productdetail" ?  null : <Hero/>}
    </div>
}