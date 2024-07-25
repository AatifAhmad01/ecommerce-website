import React from "react";
import './primaryButton.css'
import 'ldrs/ring'

import { ring2 } from 'ldrs'
import ButtonText from "../buttonText/buttonText";
ring2.register()


export default function PrimaryButton({children, onClick, loading = false, isDisbled})
{
    return <button className="primary-button" onClick={onClick} disabled={loading} >
            { 
                loading ? <l-ring-2
                size="30"
                stroke="5"
                stroke-length="0.25"
                bg-opacity="0.1"
                speed="0.8" 
                color="white" 
                ></l-ring-2> : <ButtonText>{children}</ButtonText>
            }
        </button>
}