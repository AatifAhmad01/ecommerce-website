import React from 'react';
import './dangerButton.css'
import CircularProgress from '@mui/material/CircularProgress';

export default function DangerButton({onClick, children, isLoading})
{
    return <button className='dangour-button' onClick={onClick}>{
        isLoading ? <CircularProgress color='inherit' size={20}/> : children
    }</button>
}