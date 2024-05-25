import React from "react";
import './categorySelect.css'

export default function CategorySelect({ name, value, onUpdate, children })
{
    return<>
    <div className="text-input-container">
        <div className="text-input-label-container">
            <label htmlFor="text-input" className='text-input-label'>{children}</label>
        </div>

        <select name={name} id="category-select" onBlur={onUpdate}>
            <option value="Lip Gloss">Lip Gloss</option>
            <option value="Eye Mascara">Eye Mascara</option>
        </select>
    </div>
    </>
}