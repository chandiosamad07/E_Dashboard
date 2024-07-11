import { useState } from "react"
import React from 'react'

const Signup = () => {
    const [name,setName]=useState("");
    const [email, setEmail]=useState("");
    const [password ,setPassword] = useState("");
    const CollectData=()=>{
        console.log(name,email,password)
        }
        
  return (
    <div className='signup'>
        <h1>Register your self</h1>
        <input className="input" type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter  Name'></input>
        <input className="input"  type='text'value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder='Enter email'></input>
        <input className="input"  type='password'value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder='Enter Password '></input>
        <button onClick={CollectData} className='button' type='button'>Sign Up</button>
    </div>
  )
}

export default Signup