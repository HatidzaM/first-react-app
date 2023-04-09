import React from "react";
import "./Hotels.css";

export default function Hotels(props){
    return(
        <div className="hotel">
            <img src={props.imageURL} alt={"hotel_img"} className="img2"/>
            <div className="second">
            <h1>{props.name}</h1>
            <h3>{props.location}</h3>
            <p>{props.grade}</p>
            </div>
        </div>
    )
}