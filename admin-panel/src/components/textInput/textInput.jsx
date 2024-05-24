import './textInput.css'

import React from 'react';


export default function TextInput({ children })
{
    return <div className="text-input-container">
        <div className="text-input-label-container">
            <label htmlFor="text-input" className='text-input-label'>{children}</label>
        </div>
        <input type="text" name="" id="text-input"/>
    </div>
}