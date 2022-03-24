import React from "react";
import ScrollView from "../components/ScrollView/ScrollView";
import Square from "../components/Button/Square";
import IngredientSelection from "../components/ingredient selection/IngredientSelection";
import '../App.css'

export default function Home(){
    return(
        <div className="App-header">
            
            <Square text= "Create Order" destination= "/custom"/>
        </div>
    )
}