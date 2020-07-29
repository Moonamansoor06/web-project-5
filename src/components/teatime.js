import React from 'react'
import Tea1 from "./teatimesnack1.jpg"

import Tea2 from "./teatimesnack2.jpg"
import useWebAnimations, { backInLeft } from "@wellyshen/use-web-animations";
import "./teatime.css"
import Image from 'react-image-resizer';



export default function Teatime() {
    const { keyframes, timing } = backInLeft;
 
    const { ref } = useWebAnimations({keyframes,
        timing: {
          ...timing,
          delay: 4000, // Delay 1s
                  
        
        } });

    return (
        <span 
        className="img-div">
             <span id="img-tea1" >  <Image  src ={Tea1} alt="" height={ 150}
          width={ 150} / >  </span> 
            <span> <p  ref={ref} style={{color:"white"}}><h1>Tea Time Snacks</h1>Delicious snacks both desi and continental available in economic prices, we serve fresh and hot products. </p></span>
               <span id="img-tea2">  <Image  src ={Tea2} alt="" height={ 150}
          width={ 150}  />  </span>
        
        </span>
    )
}
