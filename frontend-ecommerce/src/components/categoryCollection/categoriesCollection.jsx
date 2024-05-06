import React from "react";
import ProductWraper from "../pageWraper/pagewraper";
import './categoriesCollection.css'
import CategoryItem from "../categoryItem/categoryItem";

export default function CategoriesCollection()
{
    return <ProductWraper>
        <div className="categoryCollection">
            <div className="categoryCollectionInner">
                <CategoryItem/>
                <CategoryItem/>
                <CategoryItem/>
                <CategoryItem/>
                <CategoryItem/>
                <CategoryItem/>
                <CategoryItem/>
                <CategoryItem/>
                <CategoryItem/>
                <CategoryItem/>
            </div>
        </div>
    </ProductWraper>
}