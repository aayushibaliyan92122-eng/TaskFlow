'use client'

import React from "react"
import { useState , useEffect } from "react"




const  SignUp=()=>{

  const [userData, setuserData] = useState({name: "" , password: "" , email: ""})

function handleChange(event) {
  setuserData({
    ...userData,
    [event.target.name]:
      event.target.value
  })
}

 async function handleRegister(){
 


  await fetch(
    "/api/auth/signUp",
    {
      method: "POST",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify({
        userData
      }),
    }
  );

}


//GETUSERDATA

 {async function getTodos() {

    const response =
      await fetch("/api/auth/signUp");
    

    const data =
      await response.json();

    console.log(data);


    setuserData(data);
    
  }
// getTodos()
}
  

    return(
      <>
        <p>Please Register Here!</p>
        <input
          name="name"
          type="text"
          placeholder="username"
          value={userData.name}
          onChange={handleChange
          }
        />
        <input
        name="email"
          type="text"
          placeholder="email"
          value={userData.email}
          onChange={handleChange
          }
        />
        <input
        name="password"
          type="password"
          placeholder=" enter your password"
          value={userData.password}
          onChange={handleChange}
          
          
        />
        
        
        <button onClick={handleRegister}>Register</button>

        
</>
       
        
    )
}

export default SignUp