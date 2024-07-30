import React from "react";
import './productVarietyText.css'

export default function ProductVarietyText({text, selectedVariant, onClick})
{
    return <div onClick={() => onClick(text)}
            className={text == selectedVariant ? "text-variant-item text-variant-item-selected" : "text-variant-item"}>
        <p>{text}</p>
    </div>
}