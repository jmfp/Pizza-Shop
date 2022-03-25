import React from "react";
import '../App.css'
import Button from "../components/Button/Button";
import FileInput from "../components/Input/FileInput";
import TextInput from "../components/Input/TextInput";

export default function ItemTemplate(){
    return(
        <div className="App-header">
            <p>food stuff</p>
                <TextInput initialValue="Item Name" type='text'/>
                <TextInput initialValue="Item Price" type = 'number'/>
            <Button text="Add Food Item" destination='/'/>
        </div>
    )
}