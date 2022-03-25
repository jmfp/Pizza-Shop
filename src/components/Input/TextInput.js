import React from "react";
import './TextInput.css'

export default function TextInput(props){
    return(
        <div className="text-input">
            <input type={props.type} placeholder={props.initialValue}/>
        </div>
    )
}