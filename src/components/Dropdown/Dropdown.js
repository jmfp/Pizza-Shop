import React from "react";

export default function Dropdown(props){
    /*here we need to load all of the food optiions from wherever
    they are stored and map them to the dropdown options, for now this
    is a test*/
    return(
        <select name="foodList" id="foodList">
            <option value="Pizza">Option 1</option>
            <option value="Pizza, but second">Option 2</option>
        </select>
    )
}