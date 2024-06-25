import React from "react";
import './loadingPage.css'

export default function LoadingPage({children})
{
    return <div className="loading-page-container" style={{backgroundColor: "white"}}>
        <img src="images/Seen_Beauty.png" alt="" className="spinning-logo"/>
    </div>
}