import React from "react";
import Square from "../components/Button/Square";
import '../App.css'

export default function Home(){
    return(
        <div className="App-header">           
            <Square text= "Create Order" destination= "/custom"/>
        </div>
    )
}