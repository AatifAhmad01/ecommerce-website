import React, { useEffect, useLayoutEffect, useState } from "react";
import './home.css'
import ProductSection from "../../components/productSection/productSection";
import Footer from "../../components/footer/footer";
import CategoriesCollection from "../../components/categoryCollection/categoriesCollection";
import { fetchAllProducts } from "../../http/products.http";
import LoadingPage from "../../components/LoadingPage/loadingPage";
import Banner from "../../components/banner/banner";
import { Link } from "react-router-dom";

export default function Home()
{
    const [allProducts, setProducts] = useState([])
    const [fetchingData, setFitchingData] = useState(true)

    const fetchProducts = async () => {
        try
        {
            const res = await fetchAllProducts();
            setProducts(res.data.data)
            setFitchingData(false)
        }
        catch(error)
        {
            setFitchingData(false)
        }

    }

    useLayoutEffect(() => {
        fetchProducts()
    }, [])

    return(
        <>
            <div className="wrapper">
                <CategoriesCollection/>
                <ProductSection category="New Arival" products={allProducts}/>
                <Link to="/hudabeauty">
                    <Banner imageUrl={"images/premiumBanners/Huda Beauty.webp"}/></Link>

                <Link to="/lakemefacepowder">
                <Banner imageUrl={"images/premiumBanners/Lake Facepowders.webp"}/></Link>
                <ProductSection category="Laik Me" products={allProducts}/>
                <Link to="/lakemefoundation">
                <Banner imageUrl={"images/premiumBanners/Lakme Foundation.webp"}/></Link>
                <Link to="/anjilian">
                <Banner imageUrl={"images/premiumBanners/Anjilian.webp"}/></Link>
                <ProductSection category="Makup" products={allProducts}/>

            </div>
            <Footer/>
            { fetchingData ? <LoadingPage>Loading</LoadingPage> : null }
        </>
    )
}