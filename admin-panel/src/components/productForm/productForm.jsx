import React, { useContext, useState } from "react";
import TextInput from '../../components/textInput/textInput';
import TextAreaInput from '../../components/textAreaInput/textAreaInput';
import NumberInput from '../../components/numberInput/numberInput';
import CategorySelect from '../../components/categorySelect/categorySelect';
import PrimaryButton from '../../components/primaryButton/primaryButton';
import DangerButton from "../dangerButton/dangerButton";
import { postProduct } from "../../https/product.http";
import { UserContext } from "../../contexts/UserContext";

export default function ProductForm({ isEditing })
{
    const userContext = useContext(UserContext)

    console.log(userContext.user)

    const [productDetails, setProductDetails] = useState({
    })

    const onTextUpdateHandler = (e) => {
        setProductDetails({...productDetails, [e.target.name]: e.target.value})
    }

    const fileSelectionHandler = (e) => {
        
    }

    const addProductHanlder = async () => {
        const res = await postProduct({
            "name": "sd",
            "description": "sd",
            "category": "sd",
            "price": "sd",
            "images": [],
        }, null)

        console.log(res);
    }


    return <>
    <div className="details-page">
        <div className="item-details-area">
            <TextInput name={"name"} onUpdate={onTextUpdateHandler} >Product Name</TextInput>
            <TextAreaInput name={"description"} onUpdate={onTextUpdateHandler}>Description</TextAreaInput>
            <CategorySelect name={"category"} onUpdate={onTextUpdateHandler}>Category</CategorySelect>
            <NumberInput name={"price"} onUpdate={onTextUpdateHandler}>Price</NumberInput>
            <input type="file" src="" alt="" name="images" multiple onBlur={onTextUpdateHandler}/>
        </div>
        <div className="actions-area">
            { isEditing ? null : <PrimaryButton onClick={addProductHanlder}>Add Product</PrimaryButton>}
            { isEditing ? <PrimaryButton>Update Product</PrimaryButton> : null }
            { isEditing ? <DangerButton>Delete Product</DangerButton> : null }
        </div>
    </div>
</>
}
