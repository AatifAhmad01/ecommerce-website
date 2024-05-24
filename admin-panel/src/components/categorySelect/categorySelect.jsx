import React from "react";
import './categorySelect.css'

export default function CategorySelect({ children })
{
    return<>
    <div className="text-input-container">
        <div className="text-input-label-container">
            <label htmlFor="text-input" className='text-input-label'>{children}</label>
        </div>

        <select name="" id="category-select">
            <option value="Lip Gloss">Lip Gloss</option>
            <option value="Eye Mascara">Eye Mascara</option>
        </select>
    </div>
    </>
}