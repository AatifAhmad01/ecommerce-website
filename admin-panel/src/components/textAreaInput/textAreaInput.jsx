import './textAreaInput.css'

import React from 'react';


export default function TextAreaInput({name, value, onUpdate, children})
{
    return <div className="text-input-container">
        <div className="text-input-label-container">
            <label htmlFor="text-input" className='text-input-label'>{children}</label>
        </div>
        <textarea name={name} defaultValue={value} id="text-area-input" onBlur={onUpdate}/>
    </div>
}