import React from 'react';
import { useState, useEffect } from 'react';
import Grid from '../components/Grid/Grid';
import ItemTemplate from './ItemTemplate';
import SingleItem from '../components/SingleItem/SingleItem';
import '../screens/css/Products.css'

export default function Salads(props){
    const[saladList, setSaladList] = useState(props.list);
    
    let salads = [
        {"itemName": "Chicken Salad", "itemPrice": "5.99", "img": 'https://www.eatwell101.com/wp-content/uploads/2019/04/Blackened-Chicken-and-Avocado-Salad-recipe-1.jpg'},
        {"itemName": "Dr Pepper", "itemPrice": "2.99", "img": 'https://pizzashopco.com:2083/cpsess1890657713/viewer/home/teambrown/img/Beverages/Dr_Pepper_modern.svg.png?login=1&post_login=87761323367619'},
        {"itemName": "7up", "itemPrice": "2.99", "img": 'https://pizzashopco.com:2083/cpsess1890657713/viewer/home/teambrown/img/Beverages/Dr_Pepper_modern.svg.png?login=1&post_login=87761323367619'},
        {"itemName": "Coke", "itemPrice": "2.99", "img": 'https://pizzashopco.com:2083/cpsess1890657713/viewer/home/teambrown/img/Beverages/Dr_Pepper_modern.svg.png?login=1&post_login=87761323367619'},
        {"itemName": "Pepsi", "itemPrice": "2.99", "img": 'https://m.media-amazon.com/images/I/71iPemjZX1L._SX425_PIbundle-6,TopRight,0,0_AA425SH20_.jpg'},
        {"itemName": "Large Soda", "itemPrice": "2.99", "img": 'https://pizzashopco.com:2083/cpsess1890657713/viewer/home/teambrown/img/Beverages/Dr_Pepper_modern.svg.png?login=1&post_login=87761323367619'},
      ]

    return(
        <div className='product-grid'>
            {props.children}
            <Grid width="90" height="90" gap="10" rowDimensions="2fr 2fr 2fr 2fr" columnDimensions="7fr 7fr 7fr">
                {salads.map((item) => 
                    <SingleItem style='product-container' name={item.itemName} price={item.itemPrice} img={item.img} imgClass="product-image"/>
                )}
            </Grid>
        </div>
    )
}