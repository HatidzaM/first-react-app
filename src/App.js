import React, { useContext, useEffect, useState } from "react";
import './App.css';
import { Navbar } from "./components/Navbar/Navbar";
// import Greeting from "./components/Greeting/Greeting";
// import PersonCard from "./components/cards/PersonCard/PersonCard";
// import persons from "./common/persons.json";
// import HotelCard from "./components/cards/HotelCard/HotelCard";
// import hotels from "./common/hotels.json";
// import Form from "./components/Form/Form";
// import teamsJSON from "./common/teams.json";
// import TeamCard from "./components/cards/TeamCards/TeamCards";
// import { useEffect } from "react";
// import Form from "./components/Form/Form";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs";
import Hotels from "./pages/Hotels/Hotels";
import Teams from "./pages/Teams/Teams";
import Quotes from "./pages/Quotes/Quotes";
import Hotel from "./pages/hotel/Hotel";
import { Register } from "./pages/Register/Register";
import { Login } from "./pages/Login/Login";
import { AppContext } from "./context/AppContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Footer from "./components/Footer/Footer";



// const poruke = [
//   "Danas je subota",
//   "U subotu je lepo vreme",
//   "Subota je dan za odmor",
//   "Subota je dan za kupovinu",
//   "Subota je dan za druzenje",
//   "Subota je dan za kafu",
// ];

export const BASE_URL = "https://api.quotable.io";

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



  // const [arr, setArr] = useState(poruke);
  // const reverseArr = () => {
  //   const _arr = [...arr];
  //   const reversed = _arr.reverse();
  //   setArr(reversed);
  // };


  // const [quotes, setQuotes] = useState([]);
  // const [page, setPage] = useState(2);

  // const getQuotes = async()=>{
  //   // const quotes = await fetch( `${BASE_URL} /quotes?page=${page}&tags=love|technology` )
  //   const getQuotes = await fetch( `${BASE_URL} /quotes?page=2&tags=love|technology` )
  //   const data = await quotes.json();
  //   const results = data.results;
    
  //   setQuotes(results); //kao asinhrona
  //   console.log(data)
  //   //console.log(quotes); vraca prazan niz
  // }
  // // getQuotes();
  // console.log(quotes[0]?.content);
  

  // useEffect(()=>{
  //   getQuotes();
  // }, [page])


  const { token, setToken } = useContext(AppContext);
  useEffect(() => {
    const localToken = localStorage.getItem("token");
    setToken(localToken);
  }, []);


  return (
    <> {/* fragment - najcesce se koristi sa wrapovanje*/}
      {/* <div className="App">
        <Navbar></Navbar>
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
        </div> */}

        {/* <div 
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
        </div> */}
{/* 
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
        </div> */}
{/*         
        {
          teams.map((team)=>(
            <TeamCard 
            key={team.id}
            name={team.name}
            matches={team.matches}
            points={team.matches} 
            deleteTeam={()=> deleteTeam(team.id)}/>
          ))
        } 
      </div>  */}

      <Navbar />
      <main style={{minHeight:"75vh"}}>
        <Routes>
          <Route path="/" element={token ? <Hotels /> : <Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about-us" element={<ProtectedRoute><AboutUs /></ProtectedRoute>} />
          <Route path="/hotels" element={<ProtectedRoute><Hotels /></ProtectedRoute>} />
          <Route path="/teams" element={<ProtectedRoute><Teams /></ProtectedRoute>} />
          <Route path="/quotes" element={<ProtectedRoute><Quotes /></ProtectedRoute>} />
          <Route path="/hotels/:id" element={<ProtectedRoute><Hotel /></ProtectedRoute>} />
          <Route path="*" element={<p>Nepostojeca stranica</p>} />
        </Routes>
      </main>
      <Footer/>
    </>
  );
}

export default App;
