import React from "react";
import './categorySelect.css'

export default function CategorySelect({ name, value, onUpdate, children })
{
    return<>
    <div className="text-input-container">
        <div className="text-input-label-container">
            <label htmlFor="text-input" className='text-input-label'>{children}</label>
        </div>

        <select name={name} id="category-select" defaultValue={value} onBlur={onUpdate}>
            <option value="Skin Primer">Skin Primer</option>
            <option value="Foundation">Foundation</option>
            <option value="Face Powder">Face Powder</option>
            <option value="Mascara & Eye Liner">Mascara & Eye Liner</option>
            <option value="Blushan & Highlighter">Blushan & Highlighter</option>
            <option value="Lipsticks & Lipgloss">Lipsticks & Lipgloss</option>
            <option value="Makup Fixer">Makup Fixer</option>
            <option value="Makup All Tools">Makup All Tools</option>
            <option value="Hair Products">Hair Products</option>
            <option value="Perfums">Perfums</option>
        </select>
    </div>
    </>
}