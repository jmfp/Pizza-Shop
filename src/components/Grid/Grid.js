import React from 'react';

export default function Grid(props){
    return(
        <div className="grid-container" style={{width: `${props.width}vw`, height: `${props.height}vh`, display: "grid", gridTemplate: `${props.rowDimensions} / ${props.columnDimensions}`  ,
        gap: `${props.gap}px`}}>
            {props.children}
        </div>
    )
}