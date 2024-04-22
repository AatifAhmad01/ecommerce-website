import React from "react";
import './searchbar.css'

export default function SearchBar()
{
    return(

        <div className="searchbar-container">
            <input type="text" className="searchbar-input" placeholder="Search Item"/>
            <button className="searchbar-buttom"><span class="material-symbols-rounded search-icon">search</span></button>
        </div>
    )
}