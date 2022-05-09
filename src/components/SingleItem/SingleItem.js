import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
export default function SingleItem(props){
 
    return(
        <div className={props.style}>
            <div style={{height: "60%", overflow:"hidden", minWidth: "100%"}}>

                <img src={props.img} className={props.imgClass}/>
            </div>
            <h3>{props.name}</h3>
            <h3>{props.price}</h3>
            <p>{props.description}</p>
            <button>
                <p>
                Add To Cart
                </p>
            </button>
        </div>
    )
}