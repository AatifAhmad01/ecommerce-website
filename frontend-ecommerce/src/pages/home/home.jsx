import React, { useLayoutEffect, useState } from "react";
import './home.css';
import ProductSection from "../../components/productSection/productSection";
import CategoriesCollection from "../../components/categoryCollection/categoriesCollection";
import { fetchAllProducts, fetchNewArialProducts } from "../../http/products.http";
import LoadingPage from "../../components/LoadingPage/loadingPage";
import Banner from "../../components/banner/banner";
import { Link } from "react-router-dom";
import PrimaryButton from "../../components/primaryButton/primaryButton";

export default function Home()
{
    const [allProducts, setProducts] = useState([])
    const [newArival, setNewArival] = useState([])
    const [fetchingData, setFitchingData] = useState(true)
    const [fetchingMoreProducts, setFitchingMoreProducts] = useState(false)
    const [showMoreButton, setMoreButton] = useState(true)
    const [page, setPage] = useState(1)

    const pageSize = 10;

    const fetchProducts = async () => {
        try
        {
            const allProductsRes = await fetchAllProducts(page, pageSize);
            if (allProductsRes.data.data.length <= pageSize) setMoreButton(false);
            const newArivalRes = await fetchNewArialProducts(1);

            console.log(newArivalRes)

            setProducts(allProductsRes.data.data)
            setNewArival(newArivalRes.data.data)
        }
        catch(error)
        {
            console.log(error)
        }
        
        setFitchingData(false)
    }

    const fetchMoreProducts = async () => {

        setPage(state => state + 1)

        setFitchingMoreProducts(true)

        try
        {
            const res = await fetchAllProducts(page, pageSize);
            setProducts(state => ([...state, ...res.data.data]))
            if (res.data.data.length <= pageSize) setMoreButton(false);
        }
        catch(err)
        {
            console.log(err)
        }

        setFitchingMoreProducts(false)
    }

    useLayoutEffect(() => {
        fetchProducts()
    }, [])

    return(
        <>
            <div className="wrapper">
                <CategoriesCollection/>
                <ProductSection category="New Arival" products={newArival}/>

                <Link to="/lakemefoundation">
                    <Banner imageUrl={"images/brandBanners/Lakme Foundation.webp"}/></Link>
                <Link to="/lakemefacepowder">
                    <Banner imageUrl={"images/brandBanners/Lakeme Facepowders.webp"}/></Link>
                <Link to="/hudabeauty">
                    <Banner imageUrl={"images/brandBanners/Huda Beauty.webp"}/></Link>
                <Link to="/anjilian">
                    <Banner imageUrl={"images/brandBanners/Anjilian.webp"}/></Link>

                <ProductSection category="Top Selling Products" products={allProducts}/>

                <div className="show-more-button-conatiner">
                    { showMoreButton && <PrimaryButton onClick={fetchMoreProducts} loading={fetchingMoreProducts}>More Products</PrimaryButton> }
                </div>
            </div>
            { fetchingData ? <LoadingPage>Loading</LoadingPage> : null }
        </>
    )
}