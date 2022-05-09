import React from 'react';
import { useState, useEffect } from 'react';
import Grid from '../components/Grid/Grid';
import ItemTemplate from './ItemTemplate';
import SingleItem from '../components/SingleItem/SingleItem';
import '../screens/css/Products.css'

export default function Desserts(props){
    const[dealList, setDealList] = useState();

    return(
        <div className='product-grid'>
            {props.children}
            <Grid width="90" height="90" gap="10" rowDimensions="2fr 2fr 2fr 2fr" columnDimensions="7fr 7fr 7fr">
                {dealList.map((item) => 
                    <SingleItem style='product-container' name={item.itemName} price={item.itemPrice} img={item.img} imgClass="product-image"/>
                )}
            </Grid>
        </div>
    )
}