import React from 'react';
import { useState, useEffect } from 'react';
import Grid from '../components/Grid/Grid';
import SingleItem from '../components/SingleItem/SingleItem';
import '../screens/css/Products.css';

export default function Menu(props){
    let data = require('../json/food.json');
    let dir = ('../screens/images');

    return(
        <div className='product-grid'>
            {props.children}
            <Grid width="90" height="90" gap="10" rowDimensions="2fr 2fr 2fr 2fr" columnDimensions="7fr 7fr 7fr">
                {data.Pizza.map((item) => 
                    <SingleItem key={item.itemId} style='product-container' name={item.itemName} img={item.itemImg} imgClass="product-image" description={item.itemDescription}/>
                )}
            </Grid>
        </div>
    )
}