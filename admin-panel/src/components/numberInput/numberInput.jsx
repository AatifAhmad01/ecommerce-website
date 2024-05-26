import './numberInput.css'

import React from 'react';


export default function NumberInput({ name, value, onUpdate, children })
{
    return <div className="text-input-container">
        <div className="text-input-label-container">
            <label htmlFor="text-input" className='text-input-label'>{children}</label>
        </div>
        <input type="number" name={name} defaultValue={value} id="text-input" placeholder='0' onBlur={onUpdate}/>
    </div>
}