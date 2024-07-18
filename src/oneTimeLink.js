import React,{useState} from "react";
import axios from 'axios'

const CreateOneTimeLink =()=>{
    const[username,setuserName]=useState('');
    const[message,setmessage]=useState('');
    const[isVisible,setVisible]=useState(false);


    const handleCreateLink = async () =>{
        try{
           const response = await axios.post('http://localhost:3001/oneTimeLink',{username});
           setmessage(`one time link generated ${response.data.link}`)
           setVisible(true)
        }catch(error){
          setmessage(error.response.data.error)
        }
    };
return(
<div>
    <h2>Create one time link</h2>
    <input type="text" placeholder="username" value={username} onChange={(e)=>setuserName(e.target.value)}/>
    <button onClick={handleCreateLink}>createLink</button>
    {isVisible && <a href={message} download="link" onClick={()=>{setVisible(false)}}>Download link</a>}
</div>
);
};

export default CreateOneTimeLink