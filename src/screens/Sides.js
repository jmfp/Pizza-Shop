import React from 'react';
import { useState, useEffect } from 'react';
import Grid from '../components/Grid/Grid';
import ItemTemplate from './ItemTemplate';
import SingleItem from '../components/SingleItem/SingleItem';
import '../screens/css/Products.css'

export default function Sides(props){
    //const[sideList, setSideList] = useState(props.list);
    let data = require('../json/food.json');

    let x = 3;
    //for (let i= 0; i < x;i++){
    //    if(i===x){
    //        yield(
    //            <div className='product-grid'>
    //                {props.children}
    //    
    //                <Grid width="90" height="100" gap="10" rowDimensions="2fr 2fr 2fr 2fr" columnDimensions="5fr 5fr 5fr">
    //                    {data.Sides.map((item) => 
    //                    //every three singlitems
    //                        <SingleItem key={item.itemId} style='product-container' name={item.itemName} description={item.itemDescription} price={item.itemPrice} img={item.itemImg} imgClass="product-image"/>
    //                    )}
    //                    
    //                </Grid>
    //            </div>
    //        )
    //    }
    //}

    return(
        <div className='product-grid'>
            {props.children}

            <Grid width="90" height="90" gap="10" rowDimensions="700px 700px" columnDimensions="5fr 5fr 5fr">
                {data.Sides.map((item) => 
                //every three singlitems
                    <SingleItem key={item.itemId} style='product-container' name={item.itemName} description={item.itemDescription} price={item.itemPrice} img={item.itemImg} imgClass="product-image"/>
                )}
                
            </Grid>
        </div>
    )
}