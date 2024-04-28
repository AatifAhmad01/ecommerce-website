import React from "react";
import './pagewraper.css'

export default function ProductWraper({children}){
    return <div className="wrapper-outer">
            <div className="wrapper-inner">
                {children}
            </div>
    </div>
}