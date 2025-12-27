import React from 'react'
import './About.css'
import Card from '../Card/Card'
import python from "../../assets/pay.png"
import react from "../../assets/multi.png"
import mysql from "../../assets/hrpolo.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'




gsap.registerPlugin(ScrollTrigger)
function About() {
  useGSAP(() => {
    gsap.from(".circle ", {
      x: -100,
      opacity: 0,
      duration: 1,
      sragger: 1,
      scrollTrigger: {
        trigger: ".circle",
        scroll: "body",
        scrub: 2,

        start: "top 60%",
        end: "top 30%",

      }
    })
    gsap.from(".circle ", {
      x: -100,
      opacity: 0,
      duration: 1,
      sragger: 1,
      scrollTrigger: {
        trigger: ".circle",
        scroll: "body",
        scrub: 2,

        start: "top 60%",
        end: "top 30%",

      }
    })
    gsap.from(".line ", {
      x: -100,
      opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: ".line",
        scroll: "body",
        scrub: 2,

        start: "top 60%",
        end: "top 30%",

      }
    })

    gsap.from(".aboutdetails h1 ", {
      x: -100,
      opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: ".aboutdetails h1",
        scroll: "body",
        scrub: 2,

        start: "top 60%",
        end: "top 30%",

      }
    })
    gsap.from(".aboutdetails ul", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: ".aboutdetails ul",
        scroll: "body",
        scrub: 2,

        start: "top 60%",
        end: "top 30%",

      }
    })
    gsap.from(".rightabout ", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: ".rightabout",
        scroll: "body",
        scrub: 2,

        start: "top 60%",
        end: "top 30%",

      }
    })


  })
  useGSAP(() => {
    gsap.from(".card", {
      x: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".card",
        scroll: "body",
        scrub: 2,

      }

    })


  })

  return (
    <>
      <div className='ppp'>

        <div className='AZU'>
          <h1>Professional Summary </h1>
          <h3>Human Resources Professional with 3+ years of experience in recruitment, employee engagement, HR operations,
            and compliance. Skilled in end-to-end hiring, onboarding, payroll coordination, performance management, and
            handling employee relations. Adept at implementing HR policies, maintaining employee records, and supporting
            organizational goals through effective people management. Strong communication, problem-solving, and
            organizational skills with a people-centric approach.</h3>
        </div>
        <div id='about'>

          <div className="leftabout">
            <div className="circle-line">
              <div className="circle"></div>
              <div className="line"></div>
              <div className="circle"></div>
              <div className="line"></div>
              <div className="circle"></div>
              <div className="line"></div>
              <div className="circle"></div>
            </div>
            <div className="aboutdetails">

              <div className="Education">
                <h1>Education</h1>
                <ul>
                  <li><span>Masters</span>: Master's of Business Administration (2023)</li>
                  <li>Dev Bhoomi Uttarakhand University  </li>
                  <li><span>Graduation</span>: Bachelor's In Business Administration  (2021) </li>
                  <li>CCS University  </li>

                </ul>
              </div>
              {/* <div className="Certification">
                <h1>Certification</h1>
                <ul>
                  <li> <span>Ducat Sector 63 Noida</span></li>
                  <li>AR/VR Development By IIT Mundi <span>Ducat Sector 63 Noida</span></li>
                  <li>Solid Work <span> Cadd Center Ghaziabad</span></li>

                </ul>
              </div> */}
              <div className="Skills">
                <h1>Skills</h1>
                <ul>
                  <li>Administration </li>
                  <li>Recruitment </li>
                  <li>Scanning and Sourcing</li>
                  <li>Maintaining KPIs </li>
                  <li>Staffing and Performance Management  </li>
                  <li>Salary Negotiation </li>
                  <li>Time management  </li>

                </ul>
              </div>
              <div className="personalinfo">
                <h1>Personal Information</h1>
                <ul>
                  <li><span>Name</span>: Azuka Gazi</li>
                  <li><span>D.O.B</span>: 14-Dec-2000</li>
                  <li><span>Gender</span>: Female</li>
                  <li><span>Language Known</span>: English, Hindi,Urdu</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="rightabout">
            <Card title="Payroll Management" image={python} />
            <Card title="Multitasking" image={react} />
            <Card title="Multitasking" image={react} />
            <Card title="HR Policies" image={mysql} />
          </div>


        </div>
      </div>
    </>
  )
}

export default About