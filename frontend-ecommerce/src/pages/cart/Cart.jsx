import React from "react";
import './cart.css'
import ProductWraper from "../../components/pageWraper/pagewraper";
import ButtonFill from "../../components/addToCartBtn/addToCartBtn";
import CartItem from "../../components/cartItem/cartItem";
import { useLocalStorage } from "../../customHooks/useLocalStorage";

export default function Cart() {

    const [cart, setCart] = useLocalStorage("cartItems", { items: []});

    const checkOutHandler = () => {

    }

    const onRemoveItem = (itemId) => {

        console.log(itemId);

        const filteredItems = cart.items.filter(item => item.id != itemId)

        setCart({items: [...filteredItems]})
    }

    return<>
        <ProductWraper>
            <div className="detailsContainer">
                <div className="cartItemsContainer">
                {
                    cart.items.map((item) => <CartItem cartItem={item} onRemove={onRemoveItem}/>)
                }
                </div>
                <div className="productDetailsSection">
                    <div className="detailContainer">
                        <div className="detailContainerParent">

                        </div>
                        <div className="priceContainer">
                            <strong className="price">Price: </strong>
                            <div className="quantityContainer">
                                <button className="quantityBtn" >-</button>
                                <input  name="" id="" className="quantityInput" />
                                <button className="quantityBtn" >+</button>
                            </div>
                        </div>
                    </div>

                    {/* <AddToCartBtn onClick={addCartHandler}/> */}
                    <ButtonFill text="Check Out" onClick={checkOutHandler}/>
                </div>
            </div>
        </ProductWraper>
    </>
}