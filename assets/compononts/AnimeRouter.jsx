import React from "react "
import './AnimationRouter.css'
import Accueil from "./pages/Accueil"
import Présenatation from "./pages/Présenatation"
import Service  from "./pages/Service"
import Contact from "./pages/Contact"
import { BrowserRouter as Routes,Switch,Route } from "react-router-dom";
import Projet from "./pages/projects/Projet"
import Header from "./Header"
const AnimeRouter=()=>{
    const imagede={
        width:500,
        height:50,
    }
    return(
        <div className="home">
             <Routes>
             <Header/>
            <Route path="/" exact component={ Accueil }/>
            <Route path="/Présenatation"component={Présenatation}/>
            <Route render={({location})=>(<Switch location={location} key={location.pathname}>
                <Route exact   path="/Service" render={()=><Service imagede={imagede}/>}/>
                <Route exact path="/Projet" render={( )=><Projet imagede={imagede}/>}/>
            </Switch>)}/>
            <Route path="/Contact" component={Contact}/>
            </Routes>
        </div>
    )
}
export default AnimeRouter;