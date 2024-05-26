import './textInput.css'

import React from 'react';


export default function TextInput({ name, value, onUpdate, children })
{
    const onUpdateHanlder = (e) => {
        onUpdate(e)
    } 

    return <div className="text-input-container">
        <div className="text-input-label-container">
            <label htmlFor="text-input" className='text-input-label'>{children}</label>
            <input type="text" name={name} defaultValue={value} id="text-input" onBlur={onUpdateHanlder}/>
        </div>
    </div>
}