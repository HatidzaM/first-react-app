import React from "react";
import "./Form.css";

function Form(props){
    const [userInput, setUserInput] = useState({
        name:"",
        lastName:"",
        email:"",
        phone:"",
        hobi:"",
      });
    return(
        <div className="formContainer">
          <form onSubmit= { (event)=> {
            // event.preventDefault();
            // console.log({name});
            // console.log("lastName", lastName)
          }} 
            >
            <label htmlFor="firstName">Unesite vase ime</label>
            <input  type="text"  id="firstName"  name="firstName"  required  value={userInput.name}  // /innerText = {"ime"}
            onchange={(event)=>{
              // console.log(event);
              // setName(event.target.value);
              setUserInput((prev)=>({
                // lastName: prev.lastName,
                ...prev,
                name: event.target.value,
              }))
            }}/>
            <br/>
            <br/>
            <label htmlFor="lastName">Unesite vase prezime</label>
            <input  type="text"  id="lastName"  name="lastName"  required  value={userInput.lastName}  
            // onchange={(event)=>{setLastname(event.target.value)}}
            onchange={
              (event)=>{
                setUserInput((prev)=>({
                  ...prev,
                  lastName: event.target.value,
                }))
              }}
            />
            <br/>
            <br/>
            <label htmlFor="email">Unesite vas email</label>
            <input  type="text"  id="email"  name="email"  required  value={userInput.email}  
            onchange={(event)=>{setUserInput((prev)=>({
                  ...prev,
                  email: event.target.value,
                }))}}/>
            <br/>
            <br/>
            <label htmlFor="phone">Unesite vas broj telefona</label>
            <input  type="text"  id="phone"  name="phone"  value={userInput.phone}  
            onchange={(event)=>{setUserInput((prev)=>({
              ...prev,
              phone: event.target.value,
            }))}}/>
            <br/>
            <br/>
            <label htmlFor="hobi">Unesite vas hobi</label>
            <input  type="text"  id="hobi"  name="hobi"  value={userInput.hobi}
            onchange={(event)=>{setUserInput((prev)=>({
              ...prev,
              hobi: event.target.value,
            }))}}/>
            <br/>
            <br/>
            <button type="submit">Potvrdi</button>
          </form>
        </div>
    )
}
export default Form;