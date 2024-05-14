import React, { useContext } from "react";
import './navbar.css'
import SearchBar from "../other/searchbar";
import cartIcon from '../../assets/icons/cart-Icon.svg'
import { CartContext } from "../../context/CartContext";

function Navbar ()
{
    const cartContext = useContext(CartContext);

    return(
        // <div className="navbar-container-outer">
        //     <div className="navbar-continer">
        //         {/* <h1 className="title"></h1> */}
        //         <ul className="left-navlink">
        //             {/* <li><a href="">Sign In</a></li> */}
        //             <li><a href="">Home</a></li>
        //             <li><a href="">Shop</a></li>
        //         </ul>
        //         <h1 className="logo">Seen Beauty</h1>
        //         {/* <SearchBar/> */}
        //         <ul className="right-navlink">
        //             {/* <li><a href="">Sign In</a></li> */}
        //             <li><a href=""><span className="material-symbols-rounded cart-icon">local_mall</span></a></li>
        //         </ul>
        //     </div>
        // </div>

    //     <nav class="navbar navbar-expand-lg bg-body-tertiary">
    //     <div class="container-fluid">
    //         <a class="navbar-brand" href="#">Navbar</a>
    //         <h1 className="logo">Seen Beauty</h1>
    //         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    //         <span class="navbar-toggler-icon"></span>
    //         </button>
    //         <div class="collapse navbar-collapse" id="navbarNavDropdown">
    //         <ul class="navbar-nav">
    //             {/* <li class="nav-item">
    //             <a class="nav-link active" aria-current="page" href="#">Home</a>
    //             </li> */}

                // <li class="nav-item dropdown">
                // <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                //     Dropdown link
                // </a>
                // <ul class="dropdown-menu">
                //         <li><a class="dropdown-item" href="#">Best Collection</a></li>
                //         <li><a class="dropdown-item" href="#">Foundation</a></li>
                //         <li><a class="dropdown-item" href="#">Face Powder</a></li>
                //         <li><a class="dropdown-item" href="#">Eye Mascara</a></li>
                //         <li><a class="dropdown-item" href="#">Eye Liner</a></li>
                //         <li><a class="dropdown-item" href="#">Blushan</a></li>
                //         <li><a class="dropdown-item" href="#">Highlighters</a></li>
                //         <li><a class="dropdown-item" href="#">Lipsticks</a></li>
                //         <li><a class="dropdown-item" href="#">Lipgloss</a></li>
                //         <li><a class="dropdown-item" href="#">Hair Products</a></li>
                //     </ul>
                // </li>
    //         </ul>
    //         <form class="d-flex" role="search">
    //     <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
    //     <button class="btn btn-outline-success" type="submit">Search</button>
    //   </form>
    //         </div>
    //     </div>
    //     </nav>

        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            {/* <a class="navbar-brand" href="#">Navbar</a> */}
            <h1 className="logo">Seen Beauty</h1>
            {/* <a href="/cart"><span className="material-symbols-rounded cart-icon cart-desktop">local_mall</span></a> */}
            <a href="/cart" className="cart-desktop"><img src={cartIcon} alt="Cart" className="cartIcon"/></a>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">{cartContext.items.length}</a>
                </li>

                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categories
                </a>
                <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="/skinprimer">Skin Primer</a></li>
                        <li><a class="dropdown-item" href="/foundation">Foundation</a></li>
                        <li><a class="dropdown-item" href="/facepowder">Face Powder</a></li>
                        <li><a class="dropdown-item" href="/mascara&eyeliner">Mascara & Eye Liner</a></li>
                        <li><a class="dropdown-item" href="/blushan&highlighters">Blushan & Highlighter</a></li>
                        <li><a class="dropdown-item" href="/lipsticks&lipgloss">Lipsticks & Lipgloss</a></li>
                        <li><a class="dropdown-item" href="/makupfixer">Makup Fixer</a></li>
                        <li><a class="dropdown-item" href="/hairproducts">Hair Products</a></li>
                        <li><a class="dropdown-item" href="/makupalltools">Makup All Tools</a></li>
                        <li><a class="dropdown-item" href="/perfums">Perfums</a></li>
                    </ul>
                </li>
            </ul>
            <a href="/cart" className="cart-mobile"><img src={cartIcon} alt="Cart"  className="cartIcon"/></a>
            </div>
        </div>

        </nav>

    )
}

export default Navbar