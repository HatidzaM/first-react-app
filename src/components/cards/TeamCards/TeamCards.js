import React from "react";
import "./TeamCards.css";
// import {BASE_URL} from "./App.js";

function TeamCard({name, matches, points, deleteTeam}){
    // console.log({BASE_URL})
    return (<div className="cardContainer">
        <div className="card2">
        <p>{name}</p>
        <p>Broj odigranih meceva: {matches}</p>
        <p>Broj poena: {points}</p>
        <button onClick={deleteTeam}>Izbrisi tim</button>
        </div>
    </div>
    );
}

export default TeamCard;