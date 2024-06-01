import React from 'react';
import './primaryButton.css'
import CircularProgress from '@mui/material/CircularProgress';

export default function PrimaryButton({onClick, children, isLoading})
{
    return <button className='primary-button' onClick={onClick}>{
        isLoading ? <CircularProgress color='inherit' size={20}/> : children
    }</button>
}