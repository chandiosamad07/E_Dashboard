import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [email, setEmail]=useState("");
    const [password ,setPassword] = useState("");
    const CollectData= async ()=>{
        console.log(email,password)}

  return (
    <div className='login'>
    <input className="input"  type='text'value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder='Enter email'></input>
    <input className="input"  type='password'value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder='Enter Password '></input>
    <button  onClick={CollectData}className='button' type='button'>Sign Up</button>
</div>
  )
}

export default Login