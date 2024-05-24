import React from 'react';
import './addProduct.Page.css'
import PageWrapper from '../../components/pageWrapper/pageWrapper';
import ProductForm from '../../components/productForm/productForm';


export default function AddProductPage()
{
    return <PageWrapper>
        <ProductForm isEditing={false}/>
    </PageWrapper>
}