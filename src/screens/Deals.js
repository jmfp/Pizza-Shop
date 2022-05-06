import React from 'react';
import { useState, useEffect } from 'react';
import Grid from '../components/Grid/Grid';
import ItemTemplate from './ItemTemplate';
import SingleItem from '../components/SingleItem/SingleItem';
import '../screens/css/Products.css'

export default function Desserts(props){
    const[dealList, setDealList] = useState();
    let deals = [
        {"itemName": "Cookie", "itemPrice": "5.99", "img": 'https://handletheheat.com/wp-content/uploads/2020/10/BAKERY-STYLE-CHOCOLATE-CHIP-COOKIES-9-637x637-1-550x550.jpg'},
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
                {deals.map((item) => 
                    <SingleItem style='product-container' name={item.itemName} price={item.itemPrice} img={item.img} imgClass="product-image"/>
                )}
            </Grid>
        </div>
    )
}