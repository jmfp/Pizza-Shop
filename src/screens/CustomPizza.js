import React from "react";
import ScrollView from "../components/ScrollView/ScrollView";
import Button from "../components/Button/Button";
import IngredientSelection from "../components/ingredient selection/IngredientSelection";
import '../App.css'

export default function CustomPizza(){
    return(
        <div className="App-header">
            <ScrollView>
              <IngredientSelection ingredientName="Pepperoni"/>
              <IngredientSelection ingredientName="Sausage"/>
              <IngredientSelection ingredientName="Chicken"/>
              <IngredientSelection ingredientName="Bacon"/>
              <IngredientSelection ingredientName="Beef"/>
              <IngredientSelection ingredientName="Jalapenos"/>
              <IngredientSelection ingredientName="Onions"/>
              <IngredientSelection ingredientName="Banana Peppers"/>
              <IngredientSelection ingredientName="Spinach"/>
              <IngredientSelection ingredientName="Black Olives"/>
              <IngredientSelection ingredientName="Mushrooms"/>
              <IngredientSelection ingredientName="Tomatoes"/>
            </ScrollView>
        <Button text= "Submit" destination= "./screens/CustomPizza.js"/>
        </div>
    )
}