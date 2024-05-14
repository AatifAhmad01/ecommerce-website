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
                <CategoryItem  imageUrl={"/images/categoryItemImage.png"} 
                    onClick={() => onCategoryClickHandler("/skinprimer")} text={"Skin Primer"}/>

                <CategoryItem  imageUrl={"/images/categoryItemImage.png"} 
                    onClick={() => onCategoryClickHandler("/foundations")} text={"Foundations"}/>

                <CategoryItem  imageUrl={"/images/categoryItemImage.png"} 
                    onClick={() => onCategoryClickHandler("/facepowder")} text={"Face Powder"}/>

                <CategoryItem  imageUrl={"/images/categoryItemImage.png"} 
                    onClick={() => onCategoryClickHandler("/mascara&eyeliner")} text={"Mascara & Eye Liner"}/>

                <CategoryItem  imageUrl={"/images/categoryItemImage.png"} 
                    onClick={() => onCategoryClickHandler("/blushan&highlighters")} text={"Blushan & Highlighter"}/>

                <CategoryItem  imageUrl={"/images/categoryItemImage.png"} 
                    onClick={() => onCategoryClickHandler("/lipsticks&lipgloss")} text={"Lipsticks & Lipsgloss"}/>

                <CategoryItem  imageUrl={"/images/categoryItemImage.png"} 
                    onClick={() => onCategoryClickHandler("/makupfixer")} text={"Makup Fixer"}/>

                <CategoryItem  imageUrl={"/images/categoryItemImage.png"} 
                    onClick={() => onCategoryClickHandler("/hairproducts")} text={"Hair Products"}/>  

                <CategoryItem  imageUrl={"/images/categoryItemImage.png"} 
                    onClick={() => onCategoryClickHandler("/makupalltools")} text={"Makup All Tools"}/>    

                <CategoryItem  imageUrl={"/images/categoryItemImage.png"} 
                    onClick={() => onCategoryClickHandler("/perfums")} text={"Perfums"}/>                  

            </div>
        </div>
    </ProductWraper>
}