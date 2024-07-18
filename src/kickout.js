import React,{useState} from "react";
import axios from 'axios'

const CreateKickout =()=>{
    const[username,setuserName]=useState('');
    const[message,setmessage]=useState('');


    const handleKickout = async () =>{
        try{
           const response = await axios.post('http://localhost:3001/kickout',{username});
           setmessage(`User ${username} has been kicked out`)
        }catch(error){
          setmessage(error.response.data.error)
        }
    };
return(
<div>
    <h2>Kickout user</h2>
    <input type="text" placeholder="username" value={username} onChange={(e)=>setuserName(e.target.value)}/>
    <button onClick={handleKickout}>kickout</button>
    <p>{message}</p>
</div>
);
};

export default CreateKickout