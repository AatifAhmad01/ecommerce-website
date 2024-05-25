import React, { useState } from "react";
import './productSection.css'
import ProductItem from "../productItem/productItem";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";

import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';  
import CloseIcon from '@mui/icons-material/Close';

export default function ProductSection({category, products})
{
    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();


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

    const addCartHandler = (product) => {
        dispatch(addItem({
            id: product.id,
            name: product.name,
            image_url: product.image_url[0],
            quantity: 1,
            price: product.price,
        }))

        setOpen(true)
    }


    return(<>
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

        <div className="products-container">
            <h1 className="products-heading">{category}</h1>
            <div className="product-list">
                {
                    products.map(item => <ProductItem product={item} key={item.id} onClickAddCart={addCartHandler}/> )
                }

            </div>
            {/* <button className="more-button">Expore More</button> */}
        </div>

    </>
    )
}