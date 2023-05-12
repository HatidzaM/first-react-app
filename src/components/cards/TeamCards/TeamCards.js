import React, { useEffect, useState } from "react";
import "./TeamCards.css";
import { BASE_URL } from "../../../App";

function TeamCard({name, matches, points, deleteTeam, information, id, extended, setExtended}){
    const [closed, setClosed] = useState(true)
    // console.log({BASE_URL})
     useEffect(()=>{
        if(extended !== null && extended !== id){
            setClosed(true)
        }
    }, [extended])

     useEffect(()=> {
        if(!closed){
            setExtended(id)
        }
        else{
            setExtended(null)
        }
    },[closed])


    return (<div className="cardContainer2">
        <div className="card2">
        <p>{name}</p>
        <p>Broj odigranih meceva: {matches}</p>
        <p>Broj poena: {points}</p>
        <button onClick={deleteTeam}>Izbrisi tim</button>
        <button onClick={()=>{
            setClosed(!closed)
        }}>
            {closed ? <span>Prokazi vise</span> : <span>Prikazi manje</span>}
        </button>
            {!closed &&(
            <div className="info">
                <p>{information}</p>
            </div>)}
        </div>
    </div>
    );
}

export default TeamCard;