import React from "react";
import ProductWraper from "../pageWraper/pagewraper";
import './categoriesCollection.css'
import CategoryItem from "../categoryItem/categoryItem";
import { useNavigate } from "react-router-dom";

export default function CategoriesCollection()
{
    const navigate = useNavigate()
    const categoryScroller = document.getElementById("categoryScroller");
    
    const onCategoryClickHandler = (url) => {
        navigate(url)
    }

    let scrollVal = 0;

    const onScrollRight = () => {
        scrollVal += 750;
        if(scrollVal > 1265)scrollVal = 1265;
        categoryScroller.scrollLeft = scrollVal;
    }

    const onScrollLeft = () => {
        scrollVal -= 750;
        if(scrollVal < 0)scrollVal = 0;
        categoryScroller.scrollLeft = scrollVal;
    }

    return <ProductWraper>
        <div className="products-container">
            <h1 className="products-heading">Categories</h1>
        </div>

        <div className="categoryOuterContainer">

            <button className="categorySliderButton categorySliderButton-left"onClick={onScrollLeft}><span className="catergoryScrollIcon">{"<"}</span></button>

            <div className="categoryCollection" id="categoryScroller">
                <div className="categoryCollectionInner">
                    <CategoryItem  imageUrl={"/images/categories/SkinPrimer.webp"} 
                        onClick={() => onCategoryClickHandler("/skinprimer")} text={"Skin Primer"}/>

                    <CategoryItem  imageUrl={"/images/categories/Foundation.webp"} 
                        onClick={() => onCategoryClickHandler("/foundations")} text={"Foundations"}/>

                    <CategoryItem  imageUrl={"/images/categories/FacePowder.webp"} 
                        onClick={() => onCategoryClickHandler("/facepowder")} text={"Face Powder"}/>

                    <CategoryItem  imageUrl={"/images/categories/Eyeshad.webp"} 
                        onClick={() => onCategoryClickHandler("/eyeshadow")} text={"Eyeshadow"}/>  

                    <CategoryItem  imageUrl={"/images/categories/Mascara.webp"} 
                        onClick={() => onCategoryClickHandler("/mascara&eyeliner")} text={"Mascara & Eye Liner"}/>

                    <CategoryItem  imageUrl={"/images/categories/Blushan.webp"} 
                        onClick={() => onCategoryClickHandler("/blushan&highlighters")} text={"Blushan & Highlighter"}/>

                    <CategoryItem  imageUrl={"/images/categories/Lipstick.webp"} 
                        onClick={() => onCategoryClickHandler("/lipsticks&lipgloss")} text={"Lipsticks & Lipsgloss"}/>

                    <CategoryItem  imageUrl={"/images/categories/NailPolish.webp"} 
                        onClick={() => onCategoryClickHandler("/nailpolish")} text={"Nail Polish"}/>
   
                    <CategoryItem  imageUrl={"/images/categories/Fixer.webp"} 
                        onClick={() => onCategoryClickHandler("/makupfixer")} text={"Makup Fixer"}/>

                    <CategoryItem  imageUrl={"/images/categories/HairProducts.webp"} 
                        onClick={() => onCategoryClickHandler("/hairproducts")} text={"Hair Products"}/>  

                    <CategoryItem  imageUrl={"/images/categories/MakupTools.webp"} 
                        onClick={() => onCategoryClickHandler("/makupalltools")} text={"Makup All Tools"}/>                

                </div>
            </div>
            <button className="categorySliderButton categorySliderButton-right" onClick={onScrollRight}><span className="catergoryScrollIcon">{">"}</span></button>
        </div>

    </ProductWraper>
}