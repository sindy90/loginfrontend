import React,{useState} from "react";
import axios from 'axios'

const Login =()=>{
    const[username,setuserName]=useState('');
    const[password,setpassword]=useState('');

    const[message,setmessage]=useState('');

    const handleLogin = async () =>{
        try{
           const response = await axios.post('http://localhost:3001/login',{username,password});
           setmessage(`login is successful ${response.data.token}`)
        }catch(error){
          setmessage(error.response.data.error)
        }
    };
return(
<div>
    <h2>Login</h2>
    <input type="text" placeholder="username" value={username} onChange={(e)=>setuserName(e.target.value)}/>
    <input type="password" placeholder="password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
    <button onClick={handleLogin}>Login</button>
    <p>{message}</p>
</div>
);
};

export default Login