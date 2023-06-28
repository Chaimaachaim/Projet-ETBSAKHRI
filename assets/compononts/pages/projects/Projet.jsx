import "./projet.css"
import {motion} from "framer-motion";
import data from "../../Data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import img11 from  "/src/images/NAFTAL .jpg"
import img22 from "/src/images/Installation chaufferie banque el baraka alger/Installation chaufferie banque el baraka alger.jpg"
import {Navigation, Thumbs } from "swiper"
import { useState , useEffect } from "react";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';  
const transition ={duration:1.4, ease:[0.6, 0.01 ,-0.05, 0.9]}
const title={
    initial:{
        y:0
    },
    animate:{
        y:0,
        transition:{
            delayChildren:.6,
            staggerChildren:.04,
            staggerDirection:-1,
        }}}
const Projet=({imagede})=>{
    return(
      <motion.div  initial="initial" animate="animate" exit="exit"className="projet">
     
   <div className="projetdiv">
        <motion.div variants={title} className="text-p">
            <h2>Nos Projets</h2>
            <p>Nous intervenons sur plusieurs
types de chantiers et nos servicess’adressent à la fois aux particuliers, aux professionnels mais également aux collectivités</p>
        </motion.div> 
        </div>
        <div className="projects">
             <div className="bntn">
                <div className="image">
                    <motion.div initial={{
                        y:"-50%",
                        width:imagede.width, 
                        height:imagede.height,
                    }}
                    animate={{
                        y:0,
                        width:"100%",
                        transition:{delay: .2, ...transition}
                    }}
                    className="thumbil">
                        <div className="frae">
                            <motion.img initial={{scale:1}}
                            src={img11}
                            alt="an image"/>
                         <h1>Installation chaudiere a vapeur NAFTAL</h1>
                        </div>

                       

 <div className="itemsimg">
        <div className="itms">
        <Swiper  loop={true}
        spaceBetween={1}
        navigation 
        pagination={{ clickable: true}}
        scrollbar={{ draggable: true }}
        modules={[Navigation , Thumbs]}
        grabCursor={true}
        className="meswiper"
      >
   {
        data.projt.map((item,indexProjt)=>{
      
            return(
                <SwiperSlide>
           
              <div  className="items" key={indexProjt}>
            
              <div className="swiper-card">
                  <img src={item.Image} className="projectImg"  alt=""/>
                  </div></div>                  
                  </SwiperSlide>

                )
          })
      } 
 </Swiper>
 <h2>Installation machine industriel  usine pprc mefteh</h2>

</div>
 
<div className="itms">
        <Swiper  loop={true}
        spaceBetween={1}
        navigation 
        pagination={{ clickable: true}}
        scrollbar={{ draggable: true }}
        modules={[Navigation , Thumbs]}
        grabCursor={true}
        className="meswiper"
      >
   {
        data.projt2.map((item,indexProjt)=>{
      
            return(
                <SwiperSlide>
           
              <div  className="items" key={indexProjt}>
            
              <div className="swiper-card">
                  <img src={item.Image} className="projectImg"  alt=""/>
                  </div></div>  
                  <div className="btn-slid">
   
            </div>                 
                  </SwiperSlide>

                )
          })
      } 
 </Swiper>
 <h2>Installation chauffage central bibiotheque ain naaja </h2>

</div>
<div className="itms">
        <Swiper  loop={true}
        spaceBetween={1}
        navigation 
        pagination={{ clickable: true}}
        scrollbar={{ draggable: true }}
        modules={[Navigation , Thumbs]}
        grabCursor={true}
        className="meswiper"
      >
   {
        data.projt3.map((item,indexProjt)=>{
      
            return(
                <SwiperSlide>
           
              <div  className="items" key={indexProjt}>
            
              <div className="swiper-card">
                  <img src={item.Image} className="projectImg"  alt=""/>
                
                  </div></div>                  
                  </SwiperSlide>
                )
          })
      } 
 </Swiper>
 <h2>Installation eau chaude sanitaire  paneau solaire</h2>

</div>
<div className="itms">
        <Swiper  loop={true}
        spaceBetween={1}
        navigation 
        pagination={{ clickable: true}}
        scrollbar={{ draggable: true }}
        modules={[Navigation , Thumbs]}
        grabCursor={true}
        className="meswiper"
      >
   {
        data.projt4.map((item,indexProjt)=>{
      
            return(
                <SwiperSlide>
           
              <div className="items" key={indexProjt}>
            
              <div className="swiper-card">
                  <img src={item.Image} className="projectImg"  alt=""/>
                  </div></div>                  
                  </SwiperSlide>

                )
          })
      } 
 </Swiper>
 <h2>Installation station pompage bache a eau  groupe pharmaceautique abdi brahim</h2>

</div>
<div className="itms">
        <Swiper  loop={true}
        spaceBetween={1}
        navigation 
        pagination={{ clickable: true}}
        scrollbar={{ draggable: true }}
        modules={[Navigation , Thumbs]}
        grabCursor={true}
        className="meswiper"
      >
   {
        data.projt5.map((item,indexProjt)=>{
      
            return(
                <SwiperSlide>
           
              <div  className="items" key={indexProjt}>
            
              <div className="swiper-card">
                  <img src={item.Image} className="projectImg"  alt=""/>
                  </div></div>                  
                  </SwiperSlide>

                )
          })
      } 
 </Swiper>
 <h2>installation de gaz hopital douera</h2>

</div>  <div className="itms">
        <Swiper  loop={true}
        spaceBetween={1}
        navigation 
        pagination={{ clickable: true}}
        scrollbar={{ draggable: true }}
        modules={[Navigation , Thumbs]}
        grabCursor={true}
        className="meswiper"
      >
   {
        data.projet6.map((item,indexProjt)=>{
      
            return(
                <SwiperSlide>
           
              <div  className="items" key={indexProjt}>
              <div className="swiper-card">
                  <img src={item.Image} className="projectImg"  alt=""/>
                  </div></div>                  
                  </SwiperSlide>

                )
          })
      } 
 </Swiper>
</div>
</div>  
<div className="second-pp">
<h1>Installation chaufferie banque el baraka alger</h1>

    <img src={img22} alt="" />
</div>

           
 </motion.div>
 </div>
 </div>

 </div>
 </motion.div>   )     
}
export default Projet