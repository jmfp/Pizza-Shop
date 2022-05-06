import React from "react";
import { useState } from 'react';
import Button from "../Button/Button";
import '../ingredient selection/IngredientSelection.css'
import './CartItem.css'

export default function CartItem(props){
    const [itemQuantity, setItemQuantity] = useState(Number(props.quantity))
    const handleNumberChange = function(event){
        setItemQuantity(event.target.value);
    }
    return(
        <div className="cart-item-container">
            {props.children}
            <div className="cart-item-thumb">
                <img src={props.imgSource} style={{borderWidth: '3px', borderColor: '#D22E19', borderTopLeftRadius: '50px', borderBottomLeftRadius: '50px'}}/>
            </div>
            <div className='cart-item-box-right'>
                <div className="cart-item-box">
                    <p>{props.itemName}</p>
                    <p>${props.itemPrice}</p>
                </div>
                <div className='cart-item-box'>
                    <input type="number" placeholder={props.quantity} style={{maxHeight: '10px', maxWidth: '40px'}} 
                        onChange={handleNumberChange}
                    />
                    <Button text='X' onClick={handleNumberChange}/>
                </div>
                
            </div>
        </div>
    )
}