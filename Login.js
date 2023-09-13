// import Login from './components/Login';
import React, {useState} from "react";
import './Login.css';

const Login=()=>{
    const [action,setAction] = useState("Sign Up");
    return (
        <div className="container">
            <div className="header">
               <div className="text"> {action} </div>
               <div className="underline"></div> 
            </div> 
            <div className="inputs">
            <div class="section1">
               Name
            <div className="input">
                <input type="text" placeholder="Name" />
            </div> 
               Last Name
                 <div className="input">
                <input type="text" placeholder="Last Name" />
            </div> 
                 Email
            <div className="input">
                <input type="email" placeholder="Email Id" />
            </div> 
                Password
            <div className="input">
                <input type="password" placeholder="Password" />
            </div>  
            </div>
            <div class="section2 ">
                Retype Password
            <div className="input">
                <input type="password" placeholder="Retype password" />
            </div>  
                Contact Number
            <div className="input">
                <input type="tel"  placeholder="Contact Number" required />
            </div> 
                 Address
            <div className="input">
                <input type="text" placeholder="Address" />
            </div> 
                Id proof
            <div className="input">

                <input type="file" id="file" />   
            </div>
            </div>
            </div>
            <div className="forgot-password">Lost Password ? <span>Click Here!</span></div>
            <div className="submit-container">
              <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}} >Sign Up</div>
             
            </div>
        </div>
    )
    
}

export default Login 