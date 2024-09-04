import React from "react";
import {Link} from "react-router-dom";
import "../styles/Nav.css";


const Nav = ()=>{
return(
<div>
<ul className="nav-ul">
    <li><Link to = "/"> Products</Link> </li>
    <li><Link to ="/add"> Add Product</Link></li>
    <li><Link to ="/ update"> Update Product</Link></li>
    <li><Link to ="/signup"> SignUp</Link></li>
    <li><Link to = "/login">Login</Link></li>
    <li><Link to ="/profile"> Profile</Link></li>
</ul>

</div>

)
}

export default Nav;