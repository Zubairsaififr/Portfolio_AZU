import React from 'react'
import './Contact.css';
import con from '../../assets/contact.png';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'




gsap.registerPlugin(ScrollTrigger)

function Contact() {
  useGSAP(()=>{
    gsap.from(".leftcontact img ",{
      x: -100,
      opacity: 0,
      duration: 1,
      sragger:1,
      scrollTrigger:{
        trigger: ".leftcontact img ",
        scroll: "body",
        scrub: 2,
        
        start: "top 80%",
        end: "top 30%",
        
      }
    })
    gsap.from("form",{
      x: 100,
      opacity: 0,
      duration: 1,
      sragger:1,
      scrollTrigger:{
        trigger: "form ",
        scroll: "body",
        scrub: 2,
       
        start: "top 80%",
        end: "top 30%",
        
      }
    })
  })
  return (
    <div id='contact'>
        <div className="leftcontact">
            <img src={con} alt="" />
        </div>
        <div className="rightcontact">
            <form action="https://formspree.io/f/mblydlje" method='POST'>
                <input name='Username' type="text" placeholder='Name' />
                <input name='Email' type="email" placeholder='Email' />
                <textarea name="message" id="textaera" placeholder='Message Me'></textarea>
                <input type="submit" id='btn' />
            </form>
        </div>

    </div>
  )
}

export default Contact