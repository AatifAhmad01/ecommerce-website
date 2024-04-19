import React from "react";
import './navbar.css'
import SearchBar from "../other/searchbar";

function Navbar ()
{
    return(
        <div className="navbar-container-outer">
            <div className="naavbar-continer">
                <h1>Seen Beauty</h1>
                <SearchBar/>
                <ul>
                    <li><a href="">Cart</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar