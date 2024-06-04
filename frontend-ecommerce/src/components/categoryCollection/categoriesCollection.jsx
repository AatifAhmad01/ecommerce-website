import React from "react";
import ProductWraper from "../pageWraper/pagewraper";
import './categoriesCollection.css'
import CategoryItem from "../categoryItem/categoryItem";
import { useNavigate } from "react-router-dom";

export default function CategoriesCollection()
{
    const navigate = useNavigate()
    
    const onCategoryClickHandler = (url) => {
        navigate(url)
    }

    return <ProductWraper>
        <div className="products-container">
            <h1 className="products-heading">Seen Beauty Mall</h1>
        </div>

        <div className="categoryCollection">
            <div className="categoryCollectionInner">
                <CategoryItem  imageUrl={"/images/categories/SkinPrimer.png"} 
                    onClick={() => onCategoryClickHandler("/skinprimer")} text={"Skin Primer"}/>

                <CategoryItem  imageUrl={"/images/categories/Foundation.png"} 
                    onClick={() => onCategoryClickHandler("/foundations")} text={"Foundations"}/>

                <CategoryItem  imageUrl={"/images/categories/FacePowder.png"} 
                    onClick={() => onCategoryClickHandler("/facepowder")} text={"Face Powder"}/>

                <CategoryItem  imageUrl={"/images/categories/Mascara.jpeg"} 
                    onClick={() => onCategoryClickHandler("/mascara&eyeliner")} text={"Mascara & Eye Liner"}/>

                <CategoryItem  imageUrl={"/images/categories/Blushan.png"} 
                    onClick={() => onCategoryClickHandler("/blushan&highlighters")} text={"Blushan & Highlighter"}/>

                <CategoryItem  imageUrl={"/images/categories/Lipstick.png"} 
                    onClick={() => onCategoryClickHandler("/lipsticks&lipgloss")} text={"Lipsticks & Lipsgloss"}/>

                <CategoryItem  imageUrl={"/images/categories/Fixer.png"} 
                    onClick={() => onCategoryClickHandler("/makupfixer")} text={"Makup Fixer"}/>

                <CategoryItem  imageUrl={"/images/categories/HairProducts.png"} 
                    onClick={() => onCategoryClickHandler("/hairproducts")} text={"Hair Products"}/>  

                <CategoryItem  imageUrl={"/images/categories/MakupTools.png"} 
                    onClick={() => onCategoryClickHandler("/makupalltools")} text={"Makup All Tools"}/>    

                <CategoryItem  imageUrl={"/images/categories/Eyeshad.png"} 
                    onClick={() => onCategoryClickHandler("/eyeshad")} text={"Eyeshad"}/>                  

            </div>
        </div>
    </ProductWraper>
}