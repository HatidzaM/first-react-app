import React from "react";
// import "./components/personCard/cards";
import "personCard.js";
import { FaGithub } from "react-icons/fa";

export default function PersonCard(){
    return(
        <div className="kartica">
            <div className="firstpart">
                <img src="C:\Users\Home\Pictures\Camera Roll\WIN_20230207_18_31_51_Pro.jpg" alt=""></img>
                <h1>Hatidza Mahmutovic</h1>
                <h3>NOVI PAZAR, SERBIJA</h3>
            </div>
            <div className="secondpart">
                <p>Hatidza is pupil and soon will be junior Web developer</p>
                <a href="https://github.com/HatidzaM?tab=repositories"  target="blank"  style={{color:"navy"}}>
                    <FaGithub style={{ width: "50px", height: "50px" }} />
                </a>
            </div>
        </div>
    )
}

// export default card;