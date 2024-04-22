import React from "react";
import './navbar.css'
import SearchBar from "../other/searchbar";

function Navbar ()
{
    return(
        <div className="navbar-container-outer">
            <div className="navbar-continer">
                <h1 className="title">Seen Beauty</h1>
                <SearchBar/>
                <ul>
                    {/* <li><a href="">Sign In</a></li> */}
                    <li><a href="">Cart</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar