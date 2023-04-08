import React from "react";
// import "./components/personCard/cards";
import "./PersonCard.css";
import { FaGithub } from "react-icons/fa";

export default function PersonCard(props){
    return(
            <div className="kartica">
                <div className="firstpart">
                    <img src={props.imageURL} alt={"profile_img"} className="img"/>
                    <h1>{props.fullName}</h1>
                    <h3>{props.location}</h3>
                </div>
                <div className="secondpart">
                    <p>{props.description}</p>
                    <a href={props.goToRep}  target="blank"  style={{color:"navy"}}>
                        <FaGithub style={{ width: "60px", height: "60px" }} />
                    </a>
                </div>
            </div>    
    )
}

// export default card;