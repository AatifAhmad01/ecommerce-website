import React from "react";
import './transparentLoading.css'

export default function TransparentLoading({children})
{
    return <div className="loading-page-container">
        <div style={{backgroundColor: 'white', borderRadius: '50%'}}>
            <img src="images/Seen_Beauty.png" alt="" className="spinning-logo"/>
        </div>
    </div>
}