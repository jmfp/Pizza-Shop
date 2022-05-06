import React from 'react';

export default function SingleItem(props){
    return(
        <div className={props.style}>
            <img src={props.img} className={props.imgClass}/>
            <p>{props.name}</p>
            <p>{props.price}</p>
            <p>{props.description}</p>
        </div>
    )
}