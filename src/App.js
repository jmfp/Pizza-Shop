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

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/custom" element={<CustomPizza />}/>
        <Route path="/item-template" element={<ItemTemplate />}/>   
        <Route path="/login" element={<LoginPage />}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
