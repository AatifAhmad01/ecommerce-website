import React, {useState, useLayoutEffect} from "react";
import ProductSection from "../../components/productSection/productSection";
import { fetchProductsByCategory } from "../../http/products.http";

export default function ShopCategory({category}) {
    const [allProducts, setProducts] = useState([])

    const fetchProducts = async () => 
    {
        const res = await fetchProductsByCategory(category)
        setProducts(res.data.data)
    }

    useLayoutEffect(() => {
        fetchProducts();
    }, [])


    return<>
        <div className="wrapper">
            <ProductSection category={category} products={allProducts}/>
        </div>
    </>
}