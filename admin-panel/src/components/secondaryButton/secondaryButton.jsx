import React from 'react';
import './secondaryButton.css'

export default function SecondaryButton({onClick, children})
{
    return <button className='secondary-button' onClick={onClick}>{children}</button>
}