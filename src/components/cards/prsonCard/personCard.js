import React from "react";
// import "./components/personCard/cards";
import "personCard.js"

export default function card(){
    return(
        <div className="kartica">
            <div className="firstpart">
                <img src="" alt=""></img>
                <h1>Hatidza Mahmutovic</h1>
                <h3>NOVI PAZAR, SERBIJA</h3>
            </div>
            <div className="secondpart">
                <p>Hatidza is </p>
                <div className="icon"></div>
            </div>
        </div>
    )
}

// export default card;