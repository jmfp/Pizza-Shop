import React from "react";
import "./ScrollView.css"

export default function ScrollView(props){
    return(
        <div className="scroll-view">
        <div className="scroll-view-area"/>
            {props.children}
        </div>
    )

}