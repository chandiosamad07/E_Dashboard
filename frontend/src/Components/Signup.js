import {useEffect,useState } from "react"
import React from 'react'
import {useNavigate} from 'react-router-dom'

const Signup = () => {
    const [name,setName]=useState("");
    const [email, setEmail]=useState("");
    const [password ,setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
      const auth =localStorage.getItem('user');
      if(auth){
        navigate('/')
      }
    })

    const CollectData= async ()=>{
        console.log(name,email,password)

        let result = await fetch('http://localhost:5000/register',{
          method:'post',
          body:JSON.stringify({name,email,password}),
          headers:{
            'Content-Type':'application/json'
          }
        });
        result = await result.json();
        console.log(result);
     localStorage.setItem('user',JSON.stringify(result));
          navigate('/')
        
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