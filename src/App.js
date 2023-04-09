import React from "react";
import './App.css';
import Greeting from "./components/Greeting";
import { Navbar } from "./components/Navbar/Navbar";
import PersonCard from "./components/cards/PersonCard/PersonCard";
import persons from "./common/persons.json";
import Hotels from "./components/Hotels/Hotels";
import hotels from "./common/hotels.json";


function App() {
  return (
    <> {/* fragment - najcesce se koristi sa wrapovanje*/}
      <div className="App">
        <Navbar> {/* <P>samo za primer</P> */} </Navbar>
        <Greeting appName={"my first app"} username={"Hatidza Mahmutovic"} />
        <div 
        style={{
          marginLeft:"",
          display:"grid",
          gridTemplateColumns:"repeat(4, 330px)",
          justifyContent:"center",
          gridAutoRows:"minmax(420px, auto)",
          gridGap:"40px"
        }}>
          {persons.map((person)=>
          <PersonCard
          imageURL={person.imageURL}
          fullName = {person.fullName}
          location = {person.location}
          description = {person.description}
          goToRep = {person.goToRep}
          />)}          
        </div>

        <div 
        style={{
          marginTop:"60px",
          display:"grid",
          gridTemplateColumns:"repeat(3, 430px)",
          justifyContent:"center",
          gridAutoRows:"minmax(280px, auto)",
          gridGap:"40px"
        }}>
          {hotels.map((hotel)=>
          <Hotels
          imageURL={hotel.imageURL}
          name = {hotel.name}
          location = {hotel.location}
          grade = {hotel.grade}
          />)}
        </div>
      </div>
    </>
  );
}

export default App;
