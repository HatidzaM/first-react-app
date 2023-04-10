import React from "react";
import './App.css';
import Greeting from "./components/Greeting";
import { Navbar } from "./components/Navbar/Navbar";
import PersonCard from "./components/cards/PersonCard/PersonCard";
import persons from "./common/persons.json";
import Hotels from "./components/cards/Hotels/Hotels";
import hotels from "./common/hotels.json";


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
          marginTop:"100px",
          display:"grid",
          gridTemplateColumns:"repeat(3, 430px)",
          justifyContent:"center",
          gridAutoRows:"minmax(280px, auto)",
          gridGap:"45px"
        }}>
          {hotels.map((hotel)=>
          <Hotels
          imageURL={hotel.imageURL}
          name={hotel.name}
          location={hotel.location}
          stars={hotel.stars}
          description={hotel.description}
          rating={hotel.rating}
          reviews={hotel.reviews}
          />)}
        </div>

        <div className="formContainer">
          {/* <form onSubmit= { (event)=> { event.preventDefault }} > */}
            <label htmlFor="firstName">Unesite vase ime</label>
            <input  type="text"  id="firstName"  name="firstName"  required  value={"ime"}  // /innerText = {"ime"}
            onchange={(event)=>{
              console.log(event);
              // setName(event.target.value);
            }}/>
            <label htmlFor="lastName">Unesite vase prezime</label>
            <input  type="text"  id="lastName"  name="lastName"  required  value={"ime"}  onchange={()=>{}}/>
            <br/>
            <br/>
            <label htmlFor="email">Unesite vas email</label>
            <input  type="text"  id="email"  name="email"  required  value={"ime"}  onchange={()=>{}}/>
            <br/>
            <br/>
            <label htmlFor="phone">Unesite vas broj telefona</label>
            <input  type="text"  id="phone"  name="phone"  value={"ime"}  onchange={()=>{}}/>
            <br/>
            <br/>
            <label htmlFor="hobi">Unesite vas hobi</label>
            <input  type="text"  id="hobi"  name="hobi"  value={"ime"}  onchange={()=>{}}/>
            <br/>
            <br/>
            <button type="submit">Potvrdi</button>
          {/* </form> */}
        </div>
      </div>
    </>
  );
}

export default App;
