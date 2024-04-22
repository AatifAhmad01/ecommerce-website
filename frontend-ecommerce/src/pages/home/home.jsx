import React from "react";
import './home.css'
import Hero from "../../components/hero/hero";
import ProductSection from "../../components/productSection/productSection";
import Footer from "../../components/footer/footer";

export default function Home()
{
    return(
        <>
            <Hero/>
            <div className="wrapper">
            <ProductSection/>
            </div>
            <Footer/>
        </>

    )
}