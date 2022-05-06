import React from "react";
import { Link } from "react-router-dom";
import SideMenu from "../components/Admin Menu/SideMenu";
import ScrollView from "../components/ScrollView/ScrollView";
import ViewArea from "../components/View Area/ViewArea";
import '../screens/css/AdminPage.css'
import OrderInfo from "../components/Order Info/OrderInfo";
import Button from "../components/Button/Button"
import Dropdown from "../components/Dropdown/Dropdown";

export default function Admin(){
    return(
        <div className="admin-page">
            <div className="view-area">
                <ViewArea style="view-container">
                    <Dropdown />
                    <Button text="Food Items"/>
                    <Button text="Employee Management"/>
                </ViewArea>
            </div>
        </div>
    )
}