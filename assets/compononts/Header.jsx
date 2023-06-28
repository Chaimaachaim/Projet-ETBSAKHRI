import React from "react "
import "./Header.css"
import logo from "/src/images/logo.jpg"
import Mobnav from "../compononts/Mobnav"
import { Link } from "react-router-dom";

const Header=()=>{
    return(
        <nav>
        <div className="logo">
         <img src={logo} />
         </div>
        <div 
        className='links'>
        <Link  to="/" className="link" >Accueil</Link> 
        <Link className="link" to={'/Présenatation'}>Présenatation</Link> 
        <Link className="link" to="/Service">Service</Link> 
        <Link className="link" to="/Contact">Contact</Link> 
        </div>
       <div className="humb">
       <Mobnav /> 
       </div>
       
        </nav>
         
    )
}
export default Header;