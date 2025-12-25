import React from 'react'
import Card from '../Card/Card'
import './Project.css';
import mini from '../../assets/mini.png';
import food from '../../assets/food.png';
import ai from '../../assets/ai.png';
import spotify from '../../assets/spot.png';
import cal from '../../assets/ass.png';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ExperienceSection from '../ExperienceSection/ExperienceSection';



function Project({title,image}) {
   useGSAP(()=>{
    gsap.from("#pera ",{
      y: 100,
      opacity: 0,
      duration: 1,
      sragger:1,
      scrollTrigger:{
        trigger: "#pera",
        scroll: "body",
        scrub: 2,
        
        start: "top 80%",
        end: "top 30%",
        
      }
    })
    gsap.from(".slider ",{
      y: 100,
      opacity: 0,
      duration: 1,
      sragger:1,
      scrollTrigger:{
        trigger: ".slider",
        scroll: "body",
        scrub: 2,
        
        start: "top 80%",
        end: "top 30%",
        
      }
    })
    


  })
  return (
    <div id='projects'>
       
       
  
    </div>
  )
}

export default Project