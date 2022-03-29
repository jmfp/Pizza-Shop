import './App.css';
import Button from './components/Button/Button'
import IngredientSelection from './components/ingredient selection/IngredientSelection';
import ScrollView from './components/ScrollView/ScrollView';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CustomPizza from './screens/CustomPizza';
import Home from './screens/Home';
import ItemTemplate from './screens/ItemTemplate';
import LoginPage from './screens/LoginPage';
import CartPage from './screens/CartPage'

function App() {
  //test data for items in a cart in JSON format
  const itemsInCart = [
    {"itemName": "Pizza", "itemPrice": "5.99", "quantity": "2"},
    {"itemName": "Large Soda", "itemPrice": "2.99", "quantity": '1'}
  ]
  //test data for available ingredients as an array of string
  const ingredients = ['Pepperoni', 'Sausage', 'Bacon', 'Chicken', 'Beef', 'Jalapenos', 'Onions', 'Banana Peppers', 
    'Spinach', 'Olives', 'Mushrooms', 'Tomatoes'
  ]

  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/custom" element={<CustomPizza itemsInCart={itemsInCart} allIngredients={ingredients}/>}/>
        <Route path="/item-template" element={<ItemTemplate />}/>   
        <Route path="/login" element={<LoginPage />}/>   
        <Route path="/cart" element={<CartPage itemsInCart = {itemsInCart} />}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
