import React, { useState , useEffect} from "react "
import "./Accueil.css"
import data from "../Data/data"
import {motion} from "framer-motion"
import "swiper/css/thumbs"
import { Swiper, SwiperSlide } from "swiper/react";
import { CursorContext } from "../CurserContext";
import {Navigation, Thumbs } from "swiper"
import 'swiper/swiper.min.css'
import { useHistory } from "react-router-dom";
import Présentation from "./Présenatation";
import Service from "./Service"
import Contact from "./Contact"
    const Accueil=()=>{
      let history=useHistory ();
      const [index, setIndex] =useState(0);
     useEffect(()=>{
      const timer=setTimeout(()=>{
      if(index===2){
        setIndex(0)
      }else{
        setIndex(index+1)
      }
    },3000)
     return()=>clearTimeout(timer)
  })
    return(
        <div  className="About"> 
         <div className="first-a">
            <h1>ETB SAKHRI <span>AZEDDINE</span></h1>
            <p>L'entreprise ETB Sakhri Azeddine
depuis sa création en mars 2005, fondée par Mr. SAKHRI AZEDDINE.expérimenté depuis 1998, fournie des services d’installation de chauffage central de bonne qualité.</p>
<button 
onClick={()=>{
  history.push("/Contact");
          }} 
className="btn-1">Contactez Nous </button>
  </div>
         <div className="acc-galery">
         <div className="aboutAll" >
         <Swiper
         loop={true}
         navigation={true}
        spaceBetween={1}
        modules={[Navigation , Thumbs]}
        grabCursor={true} 
        
      
        className="swiperCard"
      > {
                data.about.map((item,index)=>{
                  return(
                    <SwiperSlide>
                     
                    <div  className="abimg"  key={index}>
                        <div className="swiperCard">
                        <img src={item.Image}  className="galler-image" alt=""/>
                      </div>
                      </div>                   
                      </SwiperSlide>

                      )
                })
            } 
          
    
          </Swiper>
    
          </div>
           
            </div>
            <Présentation/>
            <Service/>
            <Contact/>
        </div>

    )
}
export default Accueil;