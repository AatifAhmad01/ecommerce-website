import React, { useState } from 'react';
import TextInput from '../../components/textInput/textInput';
import PrimaryButton from '../../components/primaryButton/primaryButton';
import PageWrapper from '../../components/pageWrapper/pageWrapper';
import ProductForm from '../../components/productForm/productForm';

export default function UpdateProductPage()
{
    const [product, setProduct] = useState('')

    const onclickFindProduct = () => {
        setProduct("k");
    }

    return <PageWrapper>

        {
            product ? null : <div>

            <TextInput>Enter Product Name</TextInput>
            <br/>
            <PrimaryButton onClick={onclickFindProduct}>Find Product</PrimaryButton>
            </div>
        }

        { product ? <ProductForm isEditing={product}/> : null}
    
    </PageWrapper>
}