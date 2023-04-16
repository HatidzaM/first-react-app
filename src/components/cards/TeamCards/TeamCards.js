import React from "react";
import "./TeamCards.css";

function TeamCard(props){
    return (<div className="cardContainer">
        <div className="card2">
        <p>{props.name}aaa</p>
        <p>{props.matches}lll</p>
        <p>{props.points}eee</p>
        <button onClick={props.deleteTeam}>Izbrisi tim</button>
        </div>
    </div>
    );
}

export default TeamCard;