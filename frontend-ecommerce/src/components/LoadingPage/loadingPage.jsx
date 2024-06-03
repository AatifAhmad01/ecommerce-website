import React from "react";
import './loadingPage.css'

export default function LoadingPage({children})
{
    return <div className="loading-page-container" style={{backgroundColor: "white"}}>
        <img src="images/spinninglogo.avif" alt="" className="spinning-logo"/>
    </div>
}