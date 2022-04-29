import React from "react";
import '../Admin Menu/SideMenu.css'

export default function SideMenu(props){
    return(
        <div className="menu-box">
            {props.children}
        </div>
    )
}