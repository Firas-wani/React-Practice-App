import React , {useState} from "react";
import "../styles/Login.css";
import axios from "axios";


const Login = ()=>{
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

const url="http://localhost:4000/user/login";

const handleLogin = async()=>{
try {
    const res = await axios.post(url,{email,password});
    console.log(res.data.message);
} catch (error) {
    console.log(error);
    
}
}
const handleClick = ()=>{
    handleLogin()
}



return(

<div>
    <form className="log">
    <h1>Login</h1>
    <input className="inputbox"  type="text"   placeholder="Email"  value={email}  onChange={(e)=>{(setEmail(e.target.value))}}/>
    <input className="inputbox" type="Password" placeholder="Password"   value={password}  onChange={(e)=>{(setPassword(e.target.value))}} />
    <button className="appbtn"  type="button"  onClick={handleClick}>Login</button>
    </form>
</div>

)



}

export default Login;