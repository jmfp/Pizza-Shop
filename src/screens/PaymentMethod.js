import React from "react";
import Button from "../components/Button/Button";   
import '../components/Input/TextInput.css'
import './css/PaymentMethod.css'


export default function PaymentMethod(props){
    const addCard = function(){
        //this is where we would add the card to the user object
    }
    return(
        <div className='payment-method-area'>
            <div className='input-section'>
                <input type="number" className='credit-card' placeholder='Credit Card Number'/>
            </div>
            <div className='input-section'>

                <input type="number" placeholder='EXP' className='input-medium' style={{marginRight: '10px'}}/>
                <input type="number" placeholder='CVV' className='input-short'/>
            </div>
            <div className='input-section'>

                <input type="number" placeholder='Area Code' className='input-medium'/> 
            </div>
            <Button text='Add Card' onClick={addCard}/>
        </div>
    )
}