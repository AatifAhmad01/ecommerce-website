import React, { useContext, useEffect, useState } from "react";
import TextInput from '../../components/textInput/textInput';
import TextAreaInput from '../../components/textAreaInput/textAreaInput';
import NumberInput from '../../components/numberInput/numberInput';
import CategorySelect from '../../components/categorySelect/categorySelect';
import PrimaryButton from '../../components/primaryButton/primaryButton';
import DangerButton from "../dangerButton/dangerButton";
import { postProduct, deleteProduct, updateProduct } from "../../https/product.http";
import { UserContext } from "../../contexts/UserContext";
import ResponseText from "../responesText/responseText";
import SecondaryButton from "../secondaryButton/secondaryButton";

export default function ProductForm({ isEditing, product, onClose })
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

            const res = await postProduct(formData, userContext.user?.accessToken)

            setProductDetails({
                name: "",
                description: "",
                category: "Skin Primer",
                price: 0
            })
            setResponseError("Product Posted!")
        }
        catch(error)
        {
            let errorMessage = ""

            if(error.response.status == 400)
            {
                errorMessage = "All field are required."
            }
            else if(error.response.status == 401)
            {
                errorMessage = "Not login"
            }

            setResponseError(errorMessage)
        }

    }

    const deleteProductHanlder = async () => {

        try
        {
            await deleteProduct(product?.id, userContext.user?.accessToken)
            onClose();
        }
        catch(error)
        {
            let errorMessage = ""

            if(error.response.status == 400)
            {
                errorMessage = "All field are required."
            }
            else if(error.response.status == 401)
            {
                errorMessage = "Not login"
            }

            setResponseError(errorMessage)
        }
    }

    const updateProductHanlder = async () => {

        try
        {
            // const imagesInput = document.getElementById("imageInput")

            const formData = new FormData()

            formData.append('name', productDetails.name)
            formData.append('description', productDetails.description)
            formData.append('category', productDetails.category)
            formData.append('price', productDetails.price)

            // for(var key in imagesInput.files)
            // {
            //     formData.append('images', imagesInput.files[key])
            // }

            await updateProduct(product.id, productDetails, userContext.user?.accessToken)

            setResponseError("Product Updated!")
        }
        catch(error)
        {
            console.log(error)
            let errorMessage = ""

            if(error.response.status == 400)
            {
                errorMessage = "All field are required."
            }
            else if(error.response.status == 401)
            {
                errorMessage = "Not login"
            }

            setResponseError(errorMessage)
        }
    }

    useEffect(() => {
        if(isEditing) setProductDetails(product)
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
            <ResponseText text={responseError}/>
        </div>
        <div className="actions-area">
            { isEditing ? null : <PrimaryButton onClick={addProductHanlder}>Add Product</PrimaryButton>}
            { isEditing ? <PrimaryButton onClick={updateProductHanlder}>Update Product</PrimaryButton> : null }
            { isEditing ? <DangerButton onClick={deleteProductHanlder}>Delete Product</DangerButton> : null }
            { isEditing ? <SecondaryButton onClick={onClose}>Close</SecondaryButton> : null }
        </div>
    </div>
</>
}
