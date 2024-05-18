import React from "react";
import './addToCartBtn.css'
import 'ldrs/ring'

import { ring2 } from 'ldrs'
ring2.register()


export default function ButtonFill({children, onClick, loading = false})
{
    return  <div className="buttons-container">
            <button className="add-cart-button" onClick={onClick}>{ loading ? <l-ring-2
                size="30"
                stroke="5"
                stroke-length="0.25"
                bg-opacity="0.1"
                speed="0.8" 
                color="white" 
                ></l-ring-2> : children
            }</button>
            {/* <button className="favorite-button"> </button> */}
            {/* <span class="material-symbols-rounded add-icon">favorite</span> */}


        </div>
}