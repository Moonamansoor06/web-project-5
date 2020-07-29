import React from 'react'
import Desi1 from "./desifood.jpg"

import Desi2 from "./desifood2.jpeg"
import useWebAnimations, { flipInX } from "@wellyshen/use-web-animations";
import "./desi.css"
import Image from 'react-image-resizer';



export default function Desifood() {
    
    
        const { keyframes, timing } = flipInX;
     
        const { ref } = useWebAnimations({keyframes,
            timing: {
              ...timing,
              delay: 5000, // Delay 1s
                      
            
            } });
    return (
        <span 
        className="img-div">
             <span id="img-desi1" >  <Image  src ={Desi1} alt="" height={ 150}
          width={ 150} / >  </span> 
            <span> <p  ref={ref} style={{color:"white"}}><h1>Desi Food</h1>Authentic taste of south Asiain food can be experienced with  us </p></span>
               <span id="img-desi2">  <Image  src ={Desi2} alt="" height={ 150}
          width={ 150}  />  </span>
        
        </span>
    )
}
