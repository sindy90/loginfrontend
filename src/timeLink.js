import React,{useState} from "react";
import axios from 'axios'

const CreateOneTimeLink =()=>{
    const[token,setuserName]=useState('');
    const[message,setmessage]=useState('');


    const handleTimeLink = async () =>{
        try{
           const response = await axios.post('http://localhost:3001/time',{token});
           setmessage(`token validated ${response.data.currentTime}`)
        }catch(error){
          setmessage(error.response.data.error)
        }
    };
return(
<div>
    <h2>Show time api</h2>
    <input type="text" placeholder="token" value={token} onChange={(e)=>setuserName(e.target.value)}/>
    <button onClick={handleTimeLink}>timeLink</button>
    <p>{message}</p>
</div>
);
};

export default CreateOneTimeLink