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
import './productForm.css'

export default function ProductForm({ isEditing, product, onClose })
{
    const userContext = useContext(UserContext)

    const [productDetails, setProductDetails] = useState({
        name: "",
        description: "",
        category: "None",
        brand: "",
        colors: "",
        instock: true,
        price: 0
    })

    const [responseError, setResponseError] = useState("")
    const [loading, setLoading] = useState({})

    const onApiLoading = (name) => setLoading(state => ({...state, [name]: true}));
    const onEndLoading = (name) => setLoading(state => ({...state, [name]: false}));

    const onTextUpdateHandler = (e) => {
        const {name, value} = e.target;
        setProductDetails({...productDetails, [name]: value})
    }

    const onInstockChange = (e) =>
    {
        setProductDetails({...productDetails, [e.target.name]: e.target.checked})
    }

    const addProductHanlder = async () => {
        setResponseError("");
        onApiLoading("add")
        try
        {
            const imagesInput = document.getElementById("imageInput")

            const formData = new FormData()

            formData.append('name', productDetails.name)
            formData.append('description', productDetails.description)
            formData.append('category', productDetails.category)
            formData.append('brand', productDetails.brand)
            formData.append('colors', productDetails.colors)
            formData.append('price', productDetails.price)

            for(var key in imagesInput.files)
            {
                formData.append('images', imagesInput.files[key])
            }

            const res = await postProduct(formData, userContext.user?.accessToken)

            setProductDetails({
                name: "",
                description: "",
                category: "None",
                brand: "",
                colors: "",
                instock: true,
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

        onEndLoading("add")
    }

    const deleteProductHanlder = async () => {
        onApiLoading("delete")

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
            else
            {
                errorMessage = "Something went wronge."
            }

            setResponseError(errorMessage)
        }

        onEndLoading("delete")
    }

    const updateProductHanlder = async () => {
        setResponseError("");
        onApiLoading("update")
        try
        {
            // const imagesInput = document.getElementById("imageInput")

            const formData = new FormData()

            formData.append('name', productDetails.name)
            formData.append('description', productDetails.description)
            formData.append('category', productDetails.category)
            formData.append('brand', productDetails.brand)
            formData.append('colors', productDetails.colors)
            formData.append('instock', productDetails.instock)
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

        onEndLoading("update")
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
            <TextInput name={"brand"} onUpdate={onTextUpdateHandler} value={productDetails.brand}>Brand</TextInput>
            <TextInput name={"colors"} onUpdate={onTextUpdateHandler} value={productDetails.colors}>Colors</TextInput>
            <NumberInput name={"price"} onUpdate={onTextUpdateHandler} value={productDetails.price}>Price</NumberInput>
            <div className="instock-text">
                {
                 isEditing && <span>In Stock</span>
                }
                {
                 isEditing && <input type="checkbox" name="instock" id="instock-checkbox" onChange={onInstockChange} checked={productDetails.instock}/>
                }
            </div>
            <br/>
            <input type="file" src="" alt="" name="images" multiple id="imageInput"/>
            <br/>
            <br/>
            <ResponseText text={responseError}/>
        </div>
        <div className="actions-area">
            { isEditing ? null : <PrimaryButton onClick={addProductHanlder} isLoading={loading.add}>Add Product</PrimaryButton>}
            { isEditing ? <PrimaryButton onClick={updateProductHanlder} >Update Product</PrimaryButton> : null }
            { isEditing ? <DangerButton onClick={deleteProductHanlder} >Delete Product</DangerButton> : null }
            { isEditing ? <SecondaryButton onClick={onClose} >Close</SecondaryButton> : null }
        </div>
    </div>
</>
}
