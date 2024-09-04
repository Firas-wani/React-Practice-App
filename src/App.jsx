
import Nav from "./components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Profile from "./components/Profile";
function App (){
  return(
    <div>
      <BrowserRouter>
      < Nav/>
      
      <Routes>
      
     <Route path="/" element= {<h1>Product Component</h1>} />
     <Route path="/add" element= {<h1> Add Product </h1>} />
     <Route path="/update" element= {<h1> Update Product </h1>} />
     <Route path="/signup" element= {<SignUp/>} />
     <Route path="/login" element= {<Login/>} />
      <Route path="/profile" element= {<Profile/>} />
      </Routes>
      </BrowserRouter>
      <h1>My react Website. This Website is under Development.</h1>
    </div>
  )
}

export default App;