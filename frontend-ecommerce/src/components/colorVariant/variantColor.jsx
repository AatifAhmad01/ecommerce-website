import React from "react";
import "./variantColor.css"

export default function VariantColor({color, onClick, selectedColor})
{
    return <div 
        style={{backgroundColor: color}} 
        className={color == selectedColor ? "variant-Color-Item variant-Color-active" : "variant-Color-Item"} 
        onClick={() => onClick(color)} ></div>
}