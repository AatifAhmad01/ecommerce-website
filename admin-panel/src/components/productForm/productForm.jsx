import React from "react";
import TextInput from '../../components/textInput/textInput';
import TextAreaInput from '../../components/textAreaInput/textAreaInput';
import NumberInput from '../../components/numberInput/numberInput';
import CategorySelect from '../../components/categorySelect/categorySelect';
import PrimaryButton from '../../components/primaryButton/primaryButton';
import DangerButton from "../dangerButton/dangerButton";

export default function ProductForm({ isEditing })
{
    return <>
    <div className="details-page">
        <div className="item-details-area">
            <TextInput>Product Name</TextInput>
            <TextAreaInput>Description</TextAreaInput>
            <CategorySelect>Category</CategorySelect>
            <NumberInput>Price</NumberInput>
        </div>
        <div className="actions-area">
            { isEditing ? null : <PrimaryButton>Add Product</PrimaryButton>}
            { isEditing ? <PrimaryButton>Update Product</PrimaryButton> : null }
            { isEditing ? <DangerButton>Delete Product</DangerButton> : null }
        </div>
    </div>
</>
}
