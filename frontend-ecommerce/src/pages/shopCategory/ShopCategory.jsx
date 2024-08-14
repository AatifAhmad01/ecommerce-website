import React, {useState, useLayoutEffect} from "react";
import { useLocation } from "react-router-dom";
import ProductSection from "../../components/productSection/productSection";
import { fetchProductsByCategory } from "../../http/products.http";
import LoadingPage from "../../components/LoadingPage/loadingPage";
import Banner from "../../components/banner/banner";

export default function ShopCategory({category, heading}) {

    const loaction = useLocation();

    const [allProducts, setProducts] = useState([])
    const [fetchingData, setFitchingData] = useState(true)

    const fetchProducts = async () => 
    {
        const res = await fetchProductsByCategory(category)
        setProducts(res.data.data)
        setFitchingData(false)
    }

    useLayoutEffect(() => {
        fetchProducts();
    }, [loaction])

    return<>
        <div className="wrapper">
            <Banner imageUrl={`images/banners/${category}.webp`}/>
            <ProductSection category={heading} products={allProducts}/>
        </div>
        { fetchingData ? <LoadingPage>Loading</LoadingPage> : null }
    </>
}