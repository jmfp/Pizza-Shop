import React from "react";
import CartItem from "../components/CartItem/CartItem";
import '../components/CartItem/CartItem.css'
import App from '../App'

export default function CartPage(props){
    let itemsInCart = props.itemsInCart;
    const itemsList = itemsInCart.map((val) => 
        <CartItem itemName = {val.itemName} itemPrice={val.itemPrice} imgSource={val.imgSource} quantity={val.quantity}/>
    );
    let cartTotal = 0;
    const sumTotal = itemsInCart.map((val) => 
        cartTotal += (Number(val.itemPrice) * Number(val.quantity))
    );
    return(
        <div className='cart-page-container'>
            {itemsList}
            <p>Total: ${cartTotal}</p>
        </div>
    )
}