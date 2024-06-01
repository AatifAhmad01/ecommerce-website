import React from 'react';
import './secondaryButton.css'
import CircularProgress from '@mui/material/CircularProgress';

export default function SecondaryButton({onClick, children, isLoading})
{
    return <button className='secondary-button' onClick={onClick}>{
        isLoading ? <CircularProgress color='inherit' size={20}/> : children
    }</button>
}