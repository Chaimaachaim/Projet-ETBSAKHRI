import React , { useState } from "react "
import "./Mobnav.css"
import {IoMdClose} from "react-icons/io";
import {CgMenuRight}from "react-icons/cg"
import {Link} from "react-router-dom"
import { motion } from "framer-motion";
const menuVarient={
    hidden:{
        x:"100%"
    },
    show:{
        x:0,
        transition:{
            ease:[0.6,0.01,-0.05,0.9]
        },
    },
}
const Mobnav=()=>{
    const[openMenu , setOpenMenu]=useState(false);
    return(
       <div className="mob"> 
        <div onClick={()=>setOpenMenu(true)}  className="opHumb">
          <CgMenuRight size={35}/>
        </div>
        <motion.div variants={menuVarient}
        initial="hidden"
        animate={openMenu ? "show" : "  "}
        className="menu">
<div onClick={()=> setOpenMenu(false)} className="closehumb">
    <IoMdClose size={35}/>
</div>
<ul className="moblink">
<li>
        <Link className="loo"  to="/" >Accueil</Link>
        </li>
    <li>
        <Link className="loo" to="/Présenatation" >Présenatation</Link>
    </li>
    <li>
        <Link className="loo" to="/Service" >Service</Link>
    </li>
    <li>
        <Link className="loo" to="/Contact" >Contact</Link>
    </li>
</ul>
        </motion.div>  
        </div>
    )
}
export default Mobnav;
