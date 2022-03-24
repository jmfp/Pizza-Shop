import React from "react";
import ScrollView from "../components/ScrollView/ScrollView";
import Button from "../components/Button/BigButton";
import IngredientSelection from "../components/ingredient selection/IngredientSelection";
import '../App.css'

export default function Home(){
    return(
        <div className="App-header">
            
            <Button text= "Submit" destination= "/custom"/>
        </div>
    )
}