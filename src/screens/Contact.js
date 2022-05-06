import React from 'react';
import { useState, useEffect } from 'react';
import Grid from '../components/Grid/Grid';
import ItemTemplate from './ItemTemplate';
import SingleItem from '../components/SingleItem/SingleItem';
import '../screens/css/Contact.css'

export default function Contact(props){
    return(
        <div className="contact-page">
            <p>Phone Number: 555-5555</p>
            <p>Adress: 1 one rd onesville</p>
            <input placeholder="let us know what you need" className="contact-input"/>
            {props.children}
        </div>
    )
}
