import React from "react"
import './Button.css'
import { Link } from "react-router-dom"

export default function Button(props){
    return(
        <div onClick ={props.onClick} className='button'>

            <p className="button-text">{props.text}</p>
        </div>
    )
}