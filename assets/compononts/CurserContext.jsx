import React,{useState , useEffect,createContext} from "react";

export const CursorContext=createContext();
const CursorProvider=({children})=>{
    const [curseurPos,setCurseurPos]=useState({
        x:0,
        y:0,
    })
    const[curseurBG , setCurseurBG]=useState("default")
    useEffect(()=>{
        const move=(e)=>{
            setCurseurPos({
                x:e.clientX,
                y:e.clientY,
            })
        }
        window.addEventListener('mousemove', move );
        return()=>{
            window.removeEventListener('mousemove', move)
        }
    });
    const curseurVariants ={
        default:{
            x:curseurPos.x -16,
           y:curseurPos.y -16,
        backgroundColor:"0e1112"
     },
     Text:{
        width:"150px",
        height:"150px",
        x:curseurPos.x -72,
        y:curseurPos.y -72,
        backgroundColor:"#fff",
        mixBlendMode:'diffrence'
     }
    }
    const mouseEnterHandle=()=>{
        setCurseurBG('text')
    }
    const mouseLeaveHandle=()=>{
        setCurseurBG('default')
    }
    return(
        <CursorContext.Provider value={{curseurVariants ,curseurBG , mouseEnterHandle ,mouseLeaveHandle}}>
        {children}
        </CursorContext.Provider>
                )
}
export default CursorProvider