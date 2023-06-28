import React ,{ useState } from "react "
import {GiFirewall , GiFireExtinguisher , GiPeriscope} from "react-icons/gi"
import {RiFireFill} from "react-icons/ri"
import {MdPlumbing ,MdSettingsInputComposite,MdMiscellaneousServices} from "react-icons/md"
import "./Service.css"
import img5 from "/src/images/NAFTAL .jpg"
import {Link} from "react-router-dom"
import { motion } from "framer-motion"
import ProgressiveImage from "react-progressive-graceful-image"
const transition ={duration:0.6, ease:[0.6, 0.01 ,-0.05, 0.9]}
const Service=({imagede, image})=>{
    
    return(
        <div className="service">
           <div className="serviceFir">
                <h2>Nos <span>Service</span> </h2> 
                <h3>Nous intervenons sur plusieurs
types de chantiers  et <span>plusieurs années d’expérience dans nos domaines d’installation de</span> </h3>
            </div> 
            <h4>Chauffage Central / <span>Plomberie Sanitair</span></h4> 
            <div className="serviceSec">

                <div className="column">
                <div className="card">
                    <div className="icons">
                    <GiFirewall size={40}/>
                    </div>
                <h3 id="minicard">Installation de chauffage central
Chaudières, pompes, radiateurs
</h3>
             
                </div>
            </div>
            <div className="column">
                <div className="card">
                    <div className="icons">
                    <RiFireFill size={40}/>
                    </div>
                <h3> Installation des chauffages à Gaz</h3>
                </div>
            </div>
          

            <div className="column">
                <div className="card-" >
                    <div className="icons-" >
                    <MdPlumbing size={40}/>
                    </div>
                    <h3> Plomberie sanitaire</h3>

                </div>
            </div>
            <div className="column">
                <div className="card-" >
                    <div className="icons-" >
                    <GiFireExtinguisher size={40}/>
                    </div>
                <h3> Réseaux de protection contre l’incendie</h3>
                </div>
            </div>
            <div className="column">
                <div className="card-" >
                    <div className="icons-">
                    <MdSettingsInputComposite size={40}/>
                    </div>
                <h3>Installation de ceterne d'eau
et ballons d'eau chaude</h3>
                </div>
            </div>
            <div className="column">
                <div className="card-" >
                    <div className="icons-" >
                    <GiPeriscope size={40}/>
                    </div>
                <h3> installation de gaz</h3>
                </div>
            </div>
            <div className="column">
                <div className="card-"  id="last" >
                    <div className="icons-">
                    <MdMiscellaneousServices size={40}/>
                    </div>
                <h3> Tous type de tuyauterie:PPRC
Cuivre , Acier noir, acier galvanisé.PVC.multicouche....ext</h3>
                </div>
            </div>
            </div>
            <div className="projts" ref={image} style={{
            
        }} >
            <div className="frame">
                <Link to={"Projet"}>
                    <ProgressiveImage
                   src={img5}
                 >
                       {(src)=>(
                           <motion.img whileHover={{scale:1.1}}
                           transition={transition}
                           src={src} alt='photos'/>
                       )}
                    </ProgressiveImage>
                    <div className="overly">
                    <h2>Nos Projets</h2></div>
                </Link>
            </div>
            
            </div>
        </div>
    )
}
export default Service;