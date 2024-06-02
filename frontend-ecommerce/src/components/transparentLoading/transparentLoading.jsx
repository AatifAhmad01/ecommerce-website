import React from "react";
import './transparentLoading.css'

export default function TransparentLoading({children})
{
    return <div className="loading-page-container">
        <p>{children}</p>
    </div>
}