import React from "react";
import './home.css'
import ProductSection from "../../components/productSection/productSection";
import Footer from "../../components/footer/footer";
import CategoriesCollection from "../../components/categoryCollection/categoriesCollection";


export default function Home()
{
    return(
        <>
            <div className="wrapper">
            <CategoriesCollection/>
            <ProductSection category="New Arival"/>
            </div>
            <Footer/>
        </>
    )
}