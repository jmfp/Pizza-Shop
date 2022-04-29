import React from "react";

export default function ViewArea(props){
    return(
        <div className={props.style}>
            {props.children}
        </div>
    )
}