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
import PaymentMethod from './screens/PaymentMethod';
import UserInfo from './screens/UserInfo';
import Admin from './screens/Admin';
import Header from './components/Header/Header'
import Menu from './screens/Menu';
import Login from './screens/Login';
import Beverages from './screens/Beverages';
import Sides from './screens/Sides';
import Salads from './screens/Salads';
import Desserts from './screens/Desserts';
import Deals from './screens/Deals'
import Contact from './screens/Contact';

function App() {
  //test data for items in a cart in JSON format
  //const itemsInCart = [
  //  {"itemName": "Pizza", "itemPrice": "5.99", "quantity": "2"},
  //  {"itemName": "Large Soda", "itemPrice": "2.99", "quantity": '1'}
  //]
  //test data for available ingredients as an array of string
  //const ingredients = ['Pepperoni', 'Sausage', 'Bacon', 'Chicken', 'Beef', 'Jalapenos', 'Onions', 'Banana Peppers', 
  //  'Spinach', 'Olives', 'Mushrooms', 'Tomatoes'
  //]

  //test data for users
  //const userInfo = [
  //  {"firstName": "Jessie", "lastName": "Price", "email": "awesome@mail.com", "phoneNumber": "555-5555", "address": "1 one rd", "city": "Townsville", "state": "Ohio", "zip": "44444"}
  //]

  return (
    <div className="App">
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/custom" element={<CustomPizza />}/>
        <Route path="/item-template" element={<ItemTemplate />}/>   
        <Route path="/login" element={<Login />}/>   
        <Route path="/cart" element={<CartPage  />}/>
        <Route path="/add-payment-method" element={<PaymentMethod />}/>
        <Route path="/user-info" element={<UserInfo />} />
        <Route path="/employee" element={<Admin />}/>
        <Route path="/menu" element={<Menu />}/>
        <Route path="/beverages" element={<Beverages />}/>
        <Route path="/sides" element={<Sides />} />
        <Route path="/salads" element={<Salads />} />
        <Route path="/desserts" element={<Desserts />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
