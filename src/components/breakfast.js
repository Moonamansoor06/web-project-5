import React from 'react'
import Bfast from "./breakfast1.jpg"
import Bfast1 from "./breakfast2.jpeg"
import useWebAnimations, { rotateIn } from "@wellyshen/use-web-animations";
import "./breakfast.css"
import Image from 'react-image-resizer';


export default function Breakfast() {
    const { keyframes, timing } = rotateIn;
 
    const { ref } = useWebAnimations({keyframes,
        timing: {
          ...timing,
          delay: 3000, // Delay 1s
                  
        
        } });

    return (
        <span 
        className="img-div">
             <span id="img-bfast1" >  <Image  src ={Bfast} alt="" height={ 150}
          width={ 150} / >  </span> 
            <span> <p  ref={ref} style={{color:"white"}}><h1>Breakfast</h1>We Provide wide range of both desi and continental item in breakfast range </p></span>
               <span id="img-bfast2">  <Image  src ={Bfast1} alt="" height={ 150}
          width={ 150}  />  </span>
        
        </span>
    )
}
