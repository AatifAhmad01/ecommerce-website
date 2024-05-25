import React, { useEffect, useLayoutEffect, useState } from "react";
import './home.css'
import ProductSection from "../../components/productSection/productSection";
import Footer from "../../components/footer/footer";
import CategoriesCollection from "../../components/categoryCollection/categoriesCollection";
import { fetchAllProducts } from "../../http/products.http";

export default function Home()
{
    const [allProducts, setProducts] = useState([])

    const fetchProducts = async () => {
        const res = await fetchAllProducts();
        setProducts(res.data.data)
    }

    useLayoutEffect(() => {
        fetchProducts()
    }, [])

    return(
        <>
            <div className="wrapper">
            <CategoriesCollection/>
            <ProductSection category="New Arival" products={allProducts}/>
            </div>
            <Footer/>
        </>
    )
}