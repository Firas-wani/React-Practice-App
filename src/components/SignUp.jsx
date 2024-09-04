import React, { useState } from "react";
import "../styles/SignUp.css";
import axios from "axios";

const SignUp = ()=>{

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

const url="http://localhost:4000/user/signup";
    const handleSignUp=async()=>{
        try {
            const res=await axios.post(url,{username,email,password});
            console.log(res.data.msg);
            
        } catch (error) {
            console.log(error)
        }
    }

    const handleClick=()=>{
        handleSignUp()
    }

return(
    <div className="register">
          <form className="log">
        <h1>Register</h1>

        
            <input className="inputbox"  type="text"   placeholder="UserName" value={username} onChange={(e)=>setUsername(e.target.value)} />
            <input className="inputbox" type="text"    placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input className="inputbox" type="Password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button  className="appbtn" type="button" onClick={handleClick}>Signu Up</button>
            </form>
    </div>
)
}
export default SignUp;