import react from "react";
import logo from "./images/logo1.png";
import './Header.css';

 

const Header = () => {
    return(
        <nav className='navbar' >
        <img src={logo}className='logocls' alt="logo"  />
       <ul className='nav-lists'>
            <li>
              <a href="/" className='search'>
                 <input type="text" placeholder="Search your items">
                 </input>
               </a>  
            </li>
            <li>
                <a href="/Home" className='home'> HOME </a>
            </li>
            <li>
                <a href="/Login" className='login'> LOGIN </a>
            </li>
        </ul>  
        </nav>
    );
};
export default Header;