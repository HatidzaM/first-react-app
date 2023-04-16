import React, { useState } from "react";
import './App.css';
import Greeting from "./components/Greeting/Greeting";
import { Navbar } from "./components/Navbar/Navbar";
import PersonCard from "./components/cards/PersonCard/PersonCard";
import persons from "./common/persons.json";
import Hotels from "./components/cards/Hotels/Hotels";
import hotels from "./common/hotels.json";
import Form from "./components/Form/Form";
import teams from "./common/teams.json";
import TeamCard from "./components/cards/TeamCards/TeamCards";



const poruke = [
  "Danas je subota",
  "U subotu je lepo vreme",
  "Subota je dan za odmor",
  "Subota je dan za kupovinu",
  "Subota je dan za druzenje",
  "Subota je dan za kafu",
];


function App() {
  /// const [count, setCount] = React.useState(0);
  // const [count, setCount] = useState(0);
  /// setCount je metoda pomocu koje menjamo vrednost count state_a:
  // const increaseCount = () => {
  //   setCount(count + 1);
  // };
  // const decreaseCount = () => {
  //   setCount(count - 1);
  // };

  // const [name, setName] = useState("");
  /// console.log(name);

   //1. nacin za svaku input polje poseban state
  // const [name,setName] = useState("");
  // const [lastname,setLastname] = useState("");
  // const [email,setEmail] = useState("");
  // const [phone,setPhone] = useState("");
  // const [hobi,setHobi] = useState("+381");

  //2. nacin jedan state za sva input polja
  // const [userInput, setUserInput] = useState({
  //   name:"",
  //   lastName:"",
  //   email:"",
  //   phone:"",
  //   hobi:"",
  // });

  const [arr, setArr] = useState(poruke);
  const reverseArr = () => {
    const _arr = [...arr];
    const reversed = _arr.reverse();
    setArr(reversed);
  };

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
          key={person.id}
          imageURL={person.imageURL}
          fullName = {person.fullName}
          location = {person.location}
          description = {person.description}
          goToRep = {person.goToRep}
          />)}          
        </div>

        <div 
        style={{
          marginTop:"100px",
          display:"grid",
          gridTemplateColumns:"repeat(3, 430px)",
          justifyContent:"center",
          gridAutoRows:"minmax(280px, auto)",
          gridGap:"45px"
        }}>
          {hotels.map((hotel)=>
           <Hotels
          key={hotel.id}
          imageURL={hotel.imageURL}
          name={hotel.name}
          location={hotel.location}
          stars={hotel.stars}
          description={hotel.description}
          rating={hotel.rating}
          reviews={hotel.reviews}
          />)}
        </div>

         <Form/>

        <div
          style={{
            height: "200px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <button
            onClick={() => {
              reverseArr();
              console.log("okrenuo se niz");
            }}>
            Promeni raspored poruka </button>
            {arr.map((poruka) => (
            <p>{poruka}</p>
          ))}
        </div>
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
    </>
  );
}

export default App;
