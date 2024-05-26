import React, { useContext, useEffect, useState } from "react";
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

    const [productDetails, setProductDetails] = useState({
        name: "",
        description: "",
        category: "Skin Primer",
        price: 0
    })

    const [responseError, setResponseError] = useState("")

    const onTextUpdateHandler = (e) => {
        setProductDetails({...productDetails, [e.target.name]: e.target.value})
    }

    const addProductHanlder = async () => {
        try
        {
            const imagesInput = document.getElementById("imageInput")

            const formData = new FormData()

            formData.append('name', productDetails.name)
            formData.append('description', productDetails.description)
            formData.append('category', productDetails.category)
            formData.append('price', productDetails.price)

            for(var key in imagesInput.files)
            {
                formData.append('images', imagesInput.files[key])
            }

            const res = await postProduct(formData, userContext.user.accessToken)

            console.log(res);
        }
        catch(error)
        {
            console.log(error.response.status);

            let errorMessage = ""

            if(error.response.status == 400)
            {
                errorMessage = "All field are required."
            }

            setResponseError(errorMessage)
        }

    }

    useEffect(() => {
        // setProductDetails({
        //     name: "Atif",
        //     description: "des",
        //     category: "",
        //     price: 40
        // })
    }, [])


    return <>
    <div className="details-page">
        <div className="item-details-area">
            <TextInput name={"name"} onUpdate={onTextUpdateHandler} value={productDetails.name}>Product Name</TextInput>
            <TextAreaInput name={"description"} onUpdate={onTextUpdateHandler} value={productDetails.description}>Description</TextAreaInput>
            <CategorySelect name={"category"} onUpdate={onTextUpdateHandler} value={productDetails.category}>Category</CategorySelect>
            <NumberInput name={"price"} onUpdate={onTextUpdateHandler} value={productDetails.price}>Price</NumberInput>
            <input type="file" src="" alt="" name="images" multiple id="imageInput"/>
            <br/>
            <br/>
            <p className="response-text">{responseError}</p>
        </div>
        <div className="actions-area">
            { isEditing ? null : <PrimaryButton onClick={addProductHanlder}>Add Product</PrimaryButton>}
            { isEditing ? <PrimaryButton>Update Product</PrimaryButton> : null }
            { isEditing ? <DangerButton>Delete Product</DangerButton> : null }
        </div>
    </div>
</>
}
