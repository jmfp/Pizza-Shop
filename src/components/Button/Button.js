import React from "react"
import './Button.css'
import { Link } from "react-router-dom"

export default function Button(props){
    return(
    <Link to={props.destination} className="button">
        <p className="button-text">{props.text}</p>
    </Link>
    )
}