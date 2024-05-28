import React, { useContext, useState } from 'react';
import TextInput from '../../components/textInput/textInput';
import PrimaryButton from '../../components/primaryButton/primaryButton';
import PageWrapper from '../../components/pageWrapper/pageWrapper';
import ProductForm from '../../components/productForm/productForm';
import { getProductByName } from '../../https/product.http';
import { UserContext } from '../../contexts/UserContext';

export default function UpdateProductPage()
{
    const userContext = useContext(UserContext);
    const [productName, setProductName] = useState("")
    const [product, setProduct] = useState('')

    const onProductNameHanlder = (e) => {
        setProductName(e.target.value)
    }

    const onclickFindProduct = async () => {

        try
        {
            const res = await getProductByName(productName, userContext.user?.accessToken)
            setProduct(res.data.data);
        }
        catch(error)
        {
            console.log(error)
        }
    }



    return <PageWrapper>

        {
            product ? null : <div>

            <TextInput onUpdate={onProductNameHanlder}>Enter Product Name</TextInput>
            <br/>
            <PrimaryButton onClick={onclickFindProduct}>Find Product</PrimaryButton>
            </div>
        }

        { product ? <ProductForm isEditing={true} product={product}/> : null}
    
    </PageWrapper>
}