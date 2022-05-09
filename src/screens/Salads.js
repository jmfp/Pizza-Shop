import React from 'react';
import { useState, useEffect } from 'react';
import Grid from '../components/Grid/Grid';
import ItemTemplate from './ItemTemplate';
import SingleItem from '../components/SingleItem/SingleItem';
import '../screens/css/Products.css'

export default function Salads(props){
    let data = require('../json/food.json');
    const[saladList, setSaladList] = useState(props.list);

    return(
        <div className='product-grid'>
            {props.children}
            <Grid width="90" height="90" gap="10" rowDimensions="700px 700px" columnDimensions="5fr 5fr 5fr">
                {data.Salad.map((item) => 
                    <SingleItem style='product-container' name={item.itemName} description={item.itemDescription} price={item.itemPrice} img={item.itemImg} imgClass="product-image"/>
                )}
            </Grid>
        </div>
    )
}