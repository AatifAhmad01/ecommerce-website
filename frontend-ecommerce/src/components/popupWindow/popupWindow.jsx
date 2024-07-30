import React from "react";
import './popupWindow.css'
import ButtonFill from "../buttonFill/addToCartBtn";
import ButtonText from "../buttonText/buttonText";

export default function PopupWindow({heading, text, onClose})
{
    return <div className="popup-window-outer-container">
        <div className="popup-window-container">
            <div className="popup-window-header">
                <ButtonText>{heading}</ButtonText>
            </div>
            <div className="popup-window-inner">
                <p>{text}</p>
            </div>
            <div className="popup-window-footer">
                <ButtonFill onClick={onClose}>Close</ButtonFill>
            </div>
        </div>
    </div>
}