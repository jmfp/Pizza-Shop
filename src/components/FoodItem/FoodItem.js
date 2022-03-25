import React from "react";

export default function FoodItem(props){
    return(
        <div>
            <p>{props.foodItemName}</p>
            <p>{props.foodItemPrice}</p>
        </div>
    )
}