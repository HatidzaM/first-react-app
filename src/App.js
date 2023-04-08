import React from "react";
import './App.css';
import Greeting from "./components/Greeting";
import { Navbar } from "./components/Navbar/Navbar";
import PersonCard from "./components/cards/PersonCard/PersonCard";
import persons from "./common/persons.json";

// const persons = [

//   {"imageURL"={"https://i.pinimg.com/564x/1b/32/e6/1b32e6d21105eabd3155c9e7b1e1fd34.jpg"}
//   fullName = {"Hatidza Mahmutovic"}
//   location = {"NOVI PAZAR, SERBIJA"}
//   description = {"Hatidza is pupil and soon will be a junior Web developer"}
//   goToRep = {"https://github.com/HatidzaM?tab=repositories"}
//   }
//   {
//   "imageURL"={"https://s3.getstickerpack.com/storage/uploads/sticker-pack/milk-mocha-bear-ig-milkmochabear/sticker_19.png"}
//   fullName = {"Alen Muslic"}
//   location = {"NOVI PAZAR, SERBIJA"}
//   description = {"Alen is pupil and soon will be a junior Web developer"}
//   goToRep = {"https://github.com/HatidzaM?tab=repositories"}
//   }
//   {
//   "imageURL"={"https://i.pinimg.com/originals/38/a9/9b/38a99b3eff6571ca0c454db1b366498e.png"}
//   fullName = {"Hatidza Mahmutovic"}
//   location = {"NOVI PAZAR, SERBIJA"}
//   description = {"Hatidza is pupil and soon will be a junior Web developer"}
//   goToRep = {"https://github.com/HatidzaM?tab=repositories"}
//   }
//   <PersonCard />
//   <PersonCard />
//   <PersonCard />
//   <PersonCard />
//   <PersonCard />]

function App() {
  const x = 10;
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
      </div>
    </>
  );
}

export default App;
