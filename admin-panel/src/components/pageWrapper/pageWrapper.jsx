import React from 'react';
import './pageWrapper.css'

export default function PageWrapper({children})
{
    return <div className="pageWrapper">
        {children}
    </div>
}