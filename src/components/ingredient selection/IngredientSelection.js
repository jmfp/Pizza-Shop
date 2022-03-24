import React from "react";
import { useState } from "react"
import './IngredientSelection.css'

const SelectionBox = props =>
    <div className={props.style}/>;

const SelectionText = props =>
    <p className="ingredient-selection-text">{props.text}</p>;




function IngredientSelection (props){
    const [selectedColor, setSelectedColor] = useState('ingredient-selection-box-unchecked');
    const [isClicked, setIsClicked] = useState(false);
    function handleClick(){
        //add or remove ingredient to custom pizza order object
        setIsClicked(!isClicked)
        //change selection box color
        if(!isClicked){
            setSelectedColor('ingredient-selection-box-checked')
        }else{
            setSelectedColor('ingredient-selection-box-unchecked')
        }
        
    }
    return(
        <div className="ingredient-selection" onClick={ handleClick }>
            <SelectionText text={props.ingredientName}/>
            <SelectionBox style={selectedColor}/>
        </div>
    )
}

export default IngredientSelection;