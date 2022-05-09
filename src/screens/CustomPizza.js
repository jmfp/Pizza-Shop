import React from "react";
import { useState } from "react";
import ScrollView from "../components/ScrollView/ScrollView";
import Button from "../components/Button/Button";
import IngredientSelection from "../components/ingredient selection/IngredientSelection";
import '../App.css'

export default function CustomPizza(props){
    const [ingredientsOnPizza, setIngredientsOnPizza] = useState();
    const allIngredients = props.allIngredients;
    const ingredientElements = allIngredients.map((val) => 
        <IngredientSelection ingredientName={val} />
    )
    const [itemsInCart, setIemsInCart] = useState(props.itemsInCart);
    const addItemToCart = function(props){
        //add a new pizza to the cart with a price of all of the ingredients together + 4.99, this is just test data, we can set this later
        //for now, all ingredients are 99 cents for testing
        setIemsInCart([...itemsInCart, `${props.cartItem}`]);
        console.log(itemsInCart);
    }
    return(
        <div className="App-header">
            <div className="App-box">

                <ScrollView>
                {ingredientElements}
                </ScrollView>
                <img src="https://images.pexels.com/photos/2969706/pexels-photo-2969706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" height={600} width={800} style={{borderRadius: '50px'}}></img>
            </div>
        <Button text= "Submit" destination= " " onClick={addItemToCart}/>
        </div>
    )
}