import React from "react";
import './primaryOutline.css'
import 'ldrs/ring'
import ButtonText from "../buttonText/buttonText";
import { ring2 } from 'ldrs'

ring2.register()


export default function PrimaryOutline({children, onClick, loading = false, isDisabled})
{
    return  <div className="buttons-container">
            <button className="primary-outline-button" onClick={onClick}
                disabled={isDisabled}
                >
                { loading ? <l-ring-2
                size="30"
                stroke="5"
                stroke-length="0.25"
                bg-opacity="0.1"
                speed="0.8" 
                color="white" 
                ></l-ring-2> : <ButtonText>{children}</ButtonText>
            }</button>
        </div>
}