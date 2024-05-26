import React from 'react';
import './dangerButton.css'

export default function DangerButton({onClick, children})
{
    return <button className='dangour-button' onClick={onClick}>{children}</button>
}