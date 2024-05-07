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
            <h1 className="products-heading">All Categories</h1>
        </div>

        <div className="categoryCollection">
            <div className="categoryCollectionInner">
                <CategoryItem  imageUrl={"/images/categoryItemImage.png"} 
                    onClick={() => onCategoryClickHandler("/bestcollections")} text={"Best Collection"}/>

                <CategoryItem  imageUrl={"/images/categoryItemImage.png"} 
                    onClick={() => onCategoryClickHandler("/foundations")} text={"Foundations"}/>

                <CategoryItem  imageUrl={"/images/categoryItemImage.png"} 
                    onClick={() => onCategoryClickHandler("/facepowder")} text={"Face Powder"}/>

                <CategoryItem  imageUrl={"/images/categoryItemImage.png"} 
                    onClick={() => onCategoryClickHandler("/eyemascara")} text={"Eye Mascara"}/>

                <CategoryItem  imageUrl={"/images/categoryItemImage.png"} 
                    onClick={() => onCategoryClickHandler("/eyeliner")} text={"Eye Liner"}/>

                <CategoryItem  imageUrl={"/images/categoryItemImage.png"} 
                    onClick={() => onCategoryClickHandler("/blushan")} text={"Blushan"}/>

                <CategoryItem  imageUrl={"/images/categoryItemImage.png"} 
                    onClick={() => onCategoryClickHandler("/highlighters")} text={"Highlighter"}/>

                <CategoryItem  imageUrl={"/images/categoryItemImage.png"} 
                    onClick={() => onCategoryClickHandler("/lipsticks")} text={"Lipsticks"}/>

                <CategoryItem  imageUrl={"/images/categoryItemImage.png"} 
                    onClick={() => onCategoryClickHandler("/lipgloss")} text={"Lipgloss"}/>

                <CategoryItem  imageUrl={"/images/categoryItemImage.png"} 
                    onClick={() => onCategoryClickHandler("/hairproducts")} text={"Hair Products"}/>                    

            </div>
        </div>
    </ProductWraper>
}