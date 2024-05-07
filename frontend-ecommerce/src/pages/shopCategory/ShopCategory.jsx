import React from "react";
import ProductSection from "../../components/productSection/productSection";

export default function ShopCategory({category}) {
    return<>
        <div className="wrapper">
            <ProductSection category={category}/>
        </div>
    </>
}