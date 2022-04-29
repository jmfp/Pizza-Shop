import React from "react";
import "../Order Info/OrderInfo.css"

export default function OrderInfo(props){
    return(
        <div className="order-box">
            {props.children}
            <p>{props.item}</p>
            <p>{props.amount}</p>
        </div>
    )
}