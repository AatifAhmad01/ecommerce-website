import React, { useContext, useState } from 'react';
import TextInput from '../../components/textInput/textInput';
import PrimaryButton from '../../components/primaryButton/primaryButton';
import PageWrapper from '../../components/pageWrapper/pageWrapper';
import ProductForm from '../../components/productForm/productForm';
import { getProductById } from '../../https/product.http';
import { UserContext } from '../../contexts/UserContext';
import ResponseText from '../../components/responesText/responseText';
import NumberInput from '../../components/numberInput/numberInput';

export default function UpdateProductPage()
{
    const userContext = useContext(UserContext);
    const [responseText, setResponseText] = useState("")
    const [productId, setProductId] = useState("")
    const [product, setProduct] = useState()

    const onProductNameHanlder = (e) => {
        setProductId(e.target.value)
    }

    const onclickFindProduct = async () => {

        if(!productId){
            setResponseText("Invalid Product ID");
            return;
        }

        try
        {
            const res = await getProductById(productId, userContext.user?.accessToken)
            setProduct(res.data.data);
        }
        catch(error)
        {
            setResponseText("Invalid Product ID");
        }
    }

    const onFormCloseHanlder = () => {
        setProduct(null);
        setProductId(null)
        setResponseText(null)
    }


    return <PageWrapper>

        {
            product ? null : <div>

            <NumberInput onUpdate={onProductNameHanlder}>Enter Product Name</NumberInput>
            <br/>
            <PrimaryButton onClick={onclickFindProduct}>Find Product</PrimaryButton>
            <ResponseText text={responseText}/>
            </div>
        }

        { product ? <ProductForm isEditing={true} product={product} onClose={onFormCloseHanlder}/> : null}
    
    </PageWrapper>
}