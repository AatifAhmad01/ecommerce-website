import './numberInput.css'

import React from 'react';


export default function NumberInput({ children })
{
    return <div className="text-input-container">
        <div className="text-input-label-container">
            <label htmlFor="text-input" className='text-input-label'>{children}</label>
        </div>
        <input type="number" name="" id="text-input" placeholder='0'/>
    </div>
}