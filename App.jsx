import React, { useContext } from "react";
import Header from "./assets/compononts/Header";
import AnimeRouter from "./assets/compononts/AnimeRouter";
import { BrowserRouter as Router ,Switch} from "react-router-dom";
import {motion} from "framer-motion"
import'swiper/css'
import "swiper/css/thumbs"
import "./App.css"
import { CursorContext } from "./assets/compononts/CurserContext";
const App=()=>{
  const{curseurVariants , curseurBG }=useContext(CursorContext)
  return(
    < div className="app">
<Router> 
    <Switch>
     <AnimeRouter/>
     </Switch>  
    </Router>
    <motion.div
    variants={curseurVariants}
    animate={curseurBG}
     className="app2"></motion.div>
    </div>
  )
}
export default App