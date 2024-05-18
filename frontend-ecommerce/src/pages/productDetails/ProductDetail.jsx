import React, {useState, useEffect, useContext} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProductWraper from "../../components/pageWraper/pagewraper";
import './productDetail.css'
import ProductSection from "../../components/productSection/productSection";
import ButtonFill from "../../components/buttonFill/addToCartBtn.jsx";
import MoreImageItem from "../../components/productMoreImageItem/moreImageItem.jsx";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice.js";

import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';  
import CloseIcon from '@mui/icons-material/Close';

export default function ProductDetail() {

    const [quantity, setQuantity] = useState(1)
    const [imageIndex, setImageIndex] = useState(0);
    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();

    const navigation = useNavigate();

    const location = useLocation();

    const productDetails = location.state.product;

    const addQuantityHandler = ()=> {

        if(!quantity) {
            setQuantity(1);
            return;
        }

        setQuantity(quantity + 1)
    }

    const substractQuantityHandler = () => {
        const newQuantity = quantity - 1;
        if(newQuantity < 1 )return;
        setQuantity(newQuantity)
    }

    const enterQuantityAmount = (e) => {
        if(isNaN(e.target.value) || e.target.value == "0") return;

        if(e.target.value.length < 1) {
            setQuantity("");
            return;
        }

        setQuantity(parseInt(e.target.value))
    }
    const addCartHandler = () => {

        dispatch(addItem({
            id: productDetails.id,
            name: productDetails.name,
            images: productDetails.images,
            quantity: quantity,
            price: productDetails.price,
        }))

        // navigation("/cart");
        setOpen(true);
    }

    const onImageChangeHandler = (imageIndex)=> {
        setImageIndex(imageIndex);
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const action = (
        <React.Fragment>
    
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      );
    

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return <ProductWraper>
            <Snackbar
                anchorOrigin={{ vertical: 'top',
                horizontal: 'center', }}
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
                message="Item added to Cart!"
                action={action}
                key={"top" + "center"}
            />
        <div className="detailsContainer">
            <div className="productImageSection">
                <img src={`/images/products/${productDetails.images[imageIndex]}.png`} className="productImage"></img>
            </div>
            <div className="moreImagesContainer">
                <MoreImageItem imageName={"image1"} imageIndex={0} selectedIndex={imageIndex} onClick={onImageChangeHandler}/>
                <MoreImageItem imageName={"image2"} imageIndex={1} selectedIndex={imageIndex} onClick={onImageChangeHandler}/>
                <MoreImageItem imageName={"image3"} imageIndex={2} selectedIndex={imageIndex} onClick={onImageChangeHandler}/>
            </div>
            <div className="productDetailsSection">
                
                <div className="detailContainer">
                    <div className="detailContainerParent">
                        <p className="productTitle m-3">{productDetails.name}</p>
                        <p className="productDescription m-3" >{productDetails.description}</p>
                        <p className="price m-3">Price: {productDetails.price}</p>
                    </div>
                    <div className="priceContainer">
                        <p className="price">Price: {productDetails.price}</p>
                        <div className="quantityContainer">
                            <button className="quantityBtn" onClick={substractQuantityHandler}>-</button>
                            <input  name="" id="" value={quantity} className="quantityInput" onChange={enterQuantityAmount}/>
                            <button className="quantityBtn" onClick={addQuantityHandler}>+</button>
                        </div>
                    </div>
                </div>

                <ButtonFill onClick={addCartHandler}>{"Add To Cart"}</ButtonFill>
            </div>
        </div>
        <ProductSection category="New Arival"/>
    </ProductWraper>
}



