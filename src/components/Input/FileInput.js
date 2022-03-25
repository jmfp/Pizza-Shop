import React from "react";
import './TextInput.css'
import { useState } from "react";

export default function FileInput(props){
    const [newFile, setNewFile] = useState();
    <div className="text-input">
        <input type='file' ref={newFile}/>
    </div>
}