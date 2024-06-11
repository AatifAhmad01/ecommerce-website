import React, { useEffect, useLayoutEffect, useState } from "react";
import './home.css'
import ProductSection from "../../components/productSection/productSection";
import Footer from "../../components/footer/footer";
import CategoriesCollection from "../../components/categoryCollection/categoriesCollection";
import { fetchAllProducts } from "../../http/products.http";
import LoadingPage from "../../components/LoadingPage/loadingPage";
import Banner from "../../components/banner/banner";

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
                <Banner imageUrl={"images/premiumBanners/Huda.webp"}/>
                <Banner imageUrl={"images/premiumBanners/Lake_Facepowders.webp"}/>
                <ProductSection category="Laik Me" products={allProducts}/>
                <Banner imageUrl={"images/premiumBanners/Lakme_Foundation.webp"}/>
                <Banner imageUrl={"images/premiumBanners/Anjilian.webp"}/>
                <ProductSection category="Makup" products={allProducts}/>

            </div>
            <Footer/>
            { fetchingData ? <LoadingPage>Loading</LoadingPage> : null }
        </>
    )
}