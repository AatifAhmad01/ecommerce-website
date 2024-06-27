import React, {useState, useEffect } from "react";
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
import { fetchProductsByCategory } from "../../http/products.http.js";
import PrimaryOutline from "../../components/primaryButtonOutline/primaryOutline.jsx";
import VariantColor from "../../components/colorVariant/variantColor.jsx";
import ReactImageMagnify from 'react-image-magnify';

export default function ProductDetail() {

    const [quantity, setQuantity] = useState(1)
    const [allProducts, setProducts] = useState([])
    const [selectedImageIndex, setImageIndex] = useState(0);
    const [open, setOpen] = useState(false);
    const [colors, setColors] = useState([])
    const [selectedColor, setSelectedColor] = useState(null)

    const dispatch = useDispatch();
    const location = useLocation();
    const navigation = useNavigate();


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

        if(e.target.value.includes(".")) return;

        const enteredQuantity = e.target.value;
        setQuantity(enteredQuantity)
    }
    const enterQuantityEnd = (e) => {

        let enteredQuantity = parseInt(e.target.value);
        
        if(!enteredQuantity) return setQuantity(1);

        enteredQuantity = Math.round(enteredQuantity);

        if(enteredQuantity < 1) enteredQuantity = 1;
        setQuantity(enteredQuantity);
    }
    const addCartHandler = () => {

        dispatch(addItem({
            id: productDetails.id,
            name: productDetails.name,
            image_url: productDetails.image_url[0],
            quantity: quantity,
            price: productDetails.price,
            color: selectedColor
        }))

        // navigation("/cart");
        setOpen(true);
    }

    const buyNowHandler = () => {

        localStorage.setItem("isBuying", true)
        localStorage.setItem("buyingItem", JSON.stringify({
            id: productDetails.id,
            name: productDetails.name,
            image_url: productDetails.image_url[0],
            quantity: 1,
            price: productDetails.price,
            color: selectedColor
        }))

        navigation("/checkout")
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

    const onClicVariant = (color) => {
        setSelectedColor(color)
    }

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
    
    const fetchProducts = async () => 
    {
        const res = await fetchProductsByCategory(productDetails.category)
        setProducts(res.data.data)
    }

    useEffect(()=> {
        fetchProducts();
    }, [])

    useEffect(() => {
        window.scrollTo(0,0)
        if(productDetails.colors)
        {
            const colors = productDetails.colors.split(",");
            setColors(colors)
            setSelectedColor(colors[0])
        }
    }, [productDetails])

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
                {/* <img src={`https://seenbeauty.pk/${productDetails.image_url[selectedImageIndex]}`} className="productImage"></img> */}
                <div className="productImage">
                <ReactImageMagnify {...{
                    smallImage: {
                        alt: 'Wristwatch by Ted Baker London',
                        src: `https://seenbeauty.pk/${productDetails.image_url[selectedImageIndex]}`,
                        height: 400,
                        width: 300,
                    },
                    largeImage: {
                        src: `https://seenbeauty.pk/${productDetails.image_url[selectedImageIndex]}`,
                        width: 1200,
                        height: 1800,
                    }}} />
                </div>
            </div>
            <div className="moreImagesContainer">
                {
                    productDetails.image_url.map((item, index) => {
                        return <MoreImageItem 
                            imageIndex={index}
                            imageName={"image1"} 
                            imageUrl={`https://seenbeauty.pk/${item}`} 
                            selectedIndex={selectedImageIndex} 
                            onClick={onImageChangeHandler}
                            key={index}
                            />
                    })
                }
                
            </div>
            <div className="productDetailsSection">
                
                <div className="detailContainer">
                    <div className="detailContainerParent">
                        <p className="m-3" style={{fontSize: "15px"}}>Product ID {productDetails.id}</p>
                        <p className="productTitle m-3">{productDetails.name}</p>
                        <p className="productDescription m-3" >{productDetails.description}</p>
                        <div className="variants-container">
                        {
                            colors.map((item, index) => <VariantColor color={item} onClick={onClicVariant} selectedColor={selectedColor}/>)
                        }
                        </div>
                        <p className="price m-3">Price: {productDetails.price}</p>
                    </div>

                    <div className="priceContainer">
                        <p className="price">Subtotal: {productDetails.price * quantity}</p>
                        <div className="quantityContainer">
                            <button className="quantityBtn" onClick={substractQuantityHandler}>-</button>
                            <input  name="" id="" className="quantityInput" value={quantity} type="number"
                                onChange={enterQuantityAmount}
                                onBlur={enterQuantityEnd}/>

                            <button className="quantityBtn" onClick={addQuantityHandler}>+</button>
                        </div>
                    </div>
                </div>


                <PrimaryOutline onClick={addCartHandler} isDisabled={!productDetails.instock}>{"Add To Cart"}</PrimaryOutline>
                <ButtonFill onClick={buyNowHandler} isDisbled={!productDetails.instock}>{"Buy Now"}</ButtonFill>
            </div>
        </div>
        <ProductSection category={productDetails.category} products={allProducts}/>
    </ProductWraper>
}



