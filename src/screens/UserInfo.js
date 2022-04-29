import React from "react";
import './css/UserInfo.css'

export default function UserInfo(props){
    let userData = props.data;
    const data = userData.map((val) => 
        <div>
            <p>{val.firstName} {val.lastName}</p>
            <p>{val.email}</p>
            <p>{val.phoneNumb}</p>
            <p>{val.address}</p>
            <p>{val.city}</p>
            <p>{val.state}</p>
            <p>{val.zip}</p>
        </div>
    );
    return(
        <div className= 'info-container'>
            <div className='info-box'>
                {data}
            </div>
            <div className='info-box'>
                {data}
            </div>
        </div>
    )
}