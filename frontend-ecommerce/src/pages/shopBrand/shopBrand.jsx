import React, {useState, useLayoutEffect} from "react";
import { useLocation } from "react-router-dom";
import ProductSection from "../../components/productSection/productSection";
import { fetchProductsBrand } from "../../http/products.http";
import LoadingPage from "../../components/LoadingPage/loadingPage";
import Banner from "../../components/banner/banner";

export default function ShopBrand({brand}) {

    const loaction = useLocation();

    const [allProducts, setProducts] = useState([])
    const [fetchingData, setFitchingData] = useState(true)

    const fetchProducts = async () => 
    {
        const res = await fetchProductsBrand(brand)
        setProducts(res.data.data)
        setFitchingData(false)
    }

    useLayoutEffect(() => {
        fetchProducts();
    }, [loaction])

    return<>
        <div className="wrapper">
            <Banner imageUrl={`images/brandBanners/${brand}.webp`}/>
            <ProductSection category={brand} products={allProducts}/>
        </div>
        { fetchingData ? <LoadingPage>Loading</LoadingPage> : null }
    </>
}