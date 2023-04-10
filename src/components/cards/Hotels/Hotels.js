import React from "react";
import "./Hotels.css";
import { FaStarHalf } from "react-icons/fa";

export default function Hotels(props){
    const onestar = <span>⭐</span>;
    const halfstar = <span style={{ colour:"yellow", fontSize:"1rem" }}><FaStarHalf/></span>
    const stars = (num) =>{
        const arr = [];
        for(let i=1; i<= num; i++){
            arr.push(onestar)
        }
        if(props.stars % 1 !== 0){
            arr.push(halfstar)
        }
        return arr
    }
//5-6 decent
//6-7 ""
//7-8 good
//8-9 very good
//9-10 eonderfull
    const slashIndex = props.rating.indexOf("/");
    const rating = +props.rating.slice(0, slashIndex);
    let reaction;
    if(rating >= 5 && rating < 6){
        reaction = "Decent"
    }
    else if(rating >= 6 && rating < 7){
        reaction = ""
    }
    else if(rating >= 7 && rating < 8){
        reaction = "Good"
    }
    else if(rating >= 8 && rating < 9){
        reaction = "Very good"
    }
    else if(rating >= 9 && rating <= 10){
        reaction = "Wonderful"
    }

    const showRecomendation = rating >= 8 ? true : false;

    return(
        <div className="hotel">
            <img src={props.imageURL} alt={"hotel_img"} className="hotelimg"/>
            <div className="second">
            <h1 style={{marginTop:"10px"}}>{props.name}</h1>
            <p style = {{color: "grey" , fontWeight:700}}>{props.location}</p>
            <h3 style={{ background: rating < 7 ? "rgba(2, 245, 30, 0.268)" : rating < 9 ? "rgba(186, 186, 10, 0.268)" : "rgba(126, 8, 8, 0.352)" }}> {stars(props.stars)}</h3>
            <p className="hoteldesc">{props.description}</p>
            <p>
                <b><span className="hotelrat"> {props.rating} </span></b>
                {" "}
                <span style={{ color: "gray" }}> {reaction} </span>
                <span style={{ color: "gray" }}> ({props.reviews} </span>)
            </p>
            {/* 1. nacin uslovnog prikazivanja(conditional rendering) */}
            {/* { showRecomendation && <p>Recomendation</p> }  */}
            {/* 2. nacin */}
            { showRecomendation ? <p>Recomendation</p> : <></> }
            </div>
        </div>
    )
}