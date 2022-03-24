import React from "react"
import './Square.css'
import { Link } from "react-router-dom"

export default function Square(props){
    return(
    <Link to={props.destination} className="square">
        <p className="square-text">{props.text}</p>
    </Link>
    )
}