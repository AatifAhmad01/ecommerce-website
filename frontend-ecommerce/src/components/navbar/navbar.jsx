import React, { useContext } from "react";
import './navbar.css'
import cartIcon from '../../assets/icons/cart-Icon.svg'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar ()
{

    const cartSelector = useSelector(state => state.cart)

    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <Link to="/">
                <img src="images/Seen_Beauty.png" className="nav-logo" alt="" />
            </Link>

            <div className="cartIconConatiner cart-desktop">
                <Link to="cart"><img src={cartIcon} alt="Cart"  className="cartIcon"/></Link>
                <div className="cartBadgeContainer cart-desktop">
                    <p>{cartSelector.items.length}</p>
                </div>
            </div>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                <li class="nav-item active"><Link class="nav-link" to={"/"}>Home</Link></li>

                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categories
                </a>

                <ul class="dropdown-menu ">
                        <li><Link class="dropdown-item" to="/skinprimer">Skin Primer</Link></li>
                        <li><Link class="dropdown-item" to="/foundations">Foundations</Link></li>
                        <li><Link class="dropdown-item" to="/facepowder">Face Powders</Link></li>
                        <li><Link class="dropdown-item" to="/eyeshadow">Eyeshadow</Link></li>
                        <li><Link class="dropdown-item" to="/mascara&eyeliner">Mascara & Eye Liner</Link></li>
                        <li><Link class="dropdown-item" to="/blushan&highlighters">Blushan & Highlighter</Link></li>
                        <li><Link class="dropdown-item" to="/lipsticks&lipgloss">Lipstick & Lipgloss</Link></li>
                        <li><Link class="dropdown-item" to="/makupfixer">Makup Fixer</Link></li>
                        <li><Link class="dropdown-item" to="/hairproducts">Hair Products</Link></li>
                        <li><Link class="dropdown-item" to="/makupalltools">Makup All Tools</Link></li>
                        <li><Link class="dropdown-item" to="/nailpolish">Nail Polish</Link></li>
                    </ul>
                </li>
                <li class="nav-item active"><Link class="nav-link" to={"/hudabeauty"}>Huda Beauty</Link></li>
                <li class="nav-item active"><Link class="nav-link" to={"/lakemefacepowder"}>BB Lakme Facepowder</Link></li>
                <li class="nav-item active"><Link class="nav-link" to={"/lakemefoundation"}>BB Lakme Foundation</Link></li>
                <li class="nav-item active"><Link class="nav-link" to={"/anjilian"}>Anjilian</Link></li>
            </ul>
            <div className="cartIconConatiner cart-mobile">
                <Link to="cart" ><img src={cartIcon} alt="Cart"  className="cartIcon"/></Link>
                <div className="cartBadgeContainer">
                <p>{cartSelector.items.length}</p>
                </div>
            </div>
            </div>
        </div>

        </nav>

    )
}

export default Navbar