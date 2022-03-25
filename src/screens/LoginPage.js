import React from "react";
import '../App.css'
import Button from "../components/Button/Button";

export default function LoginPage(){
    return(
        <div className="App-header">
            <Button text="Customer" destination="/custom"/>
            <Button text="Employee" destination="/item-template"/>
        </div>
    )
}