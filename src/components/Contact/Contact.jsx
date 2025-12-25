import React from 'react'
import './Contact.css';
import con from '../../assets/contact.png';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import SocialLinks from '../SocialLinks/SocialLinks';




gsap.registerPlugin(ScrollTrigger)

function Contact() {
  useGSAP(() => {
    gsap.from(".leftcontact img ", {
      x: -100,
      opacity: 0,
      duration: 1,
      sragger: 1,
      scrollTrigger: {
        trigger: ".leftcontact img ",
        scroll: "body",
        scrub: 2,

        start: "top 80%",
        end: "top 30%",

      }
    })
    gsap.from("form", {
      x: 100,
      opacity: 0,
      duration: 1,
      sragger: 1,
      scrollTrigger: {
        trigger: "form ",
        scroll: "body",
        scrub: 2,

        start: "top 80%",
        end: "top 30%",

      }
    })
  })
  return (
    <>
       <div className="cv-section">
              <a
                href="/Azuka_gazi.pdf"  // ← public folder mein resume.pdf daal dena
                target="_blank"     // ← New tab mein open hoga
                rel="noopener noreferrer"  // Security ke liye
                className="cv-button"
              >
                <span>View My CV</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="15" y1="9" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
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

            {/* 👇 Yeh naya CV button add kar diya */}
           
            {/* 👆 Upar tak */}
          </div>
        </div>

        <SocialLinks />
      </>
  
      )
  
}

export default Contact