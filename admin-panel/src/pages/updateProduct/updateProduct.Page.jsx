import React, { useContext, useState } from 'react';
import TextInput from '../../components/textInput/textInput';
import PrimaryButton from '../../components/primaryButton/primaryButton';
import PageWrapper from '../../components/pageWrapper/pageWrapper';
import ProductForm from '../../components/productForm/productForm';
import { getProductByName } from '../../https/product.http';
import { UserContext } from '../../contexts/UserContext';
import ResponseText from '../../components/responesText/responseText';

export default function UpdateProductPage()
{
    const userContext = useContext(UserContext);
    const [responseText, setResponseText] = useState("")
    const [productName, setProductName] = useState("")
    const [product, setProduct] = useState()

    const onProductNameHanlder = (e) => {
        setProductName(e.target.value)
    }

    const onclickFindProduct = async () => {

        if(!productName){
            setResponseText("Invalid Product Name");
            return;
        }

        try
        {
            const res = await getProductByName(productName, userContext.user?.accessToken)
            setProduct(res.data.data);
        }
        catch(error)
        {
            console.log(error)
            setResponseText("Invalid Product Name");
        }
    }

    const onFormCloseHanlder = () => {
        setProduct(null);
        setProductName(null)
        setResponseText(null)
    }


    return <PageWrapper>

        {
            product ? null : <div>

            <TextInput onUpdate={onProductNameHanlder}>Enter Product Name</TextInput>
            <br/>
            <PrimaryButton onClick={onclickFindProduct}>Find Product</PrimaryButton>
            <ResponseText text={responseText}/>
            </div>
        }

        { product ? <ProductForm isEditing={true} product={product} onClose={onFormCloseHanlder}/> : null}
    
    </PageWrapper>
}