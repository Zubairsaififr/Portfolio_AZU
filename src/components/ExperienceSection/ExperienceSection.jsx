import React, { useEffect, useRef } from 'react';
import './ExperienceSection.css';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap' // Yeh CSS file import karna mat bhoolna

const ExperienceSection = () => {
    const experiences = [
        {
            title: "Regional HR",
            company: "One Health Assist",
            duration: "Feb 2025 - Dec 2025",
            points: [
                "Oversaw end-to-end HR operations, including attendance management and administrative tasks",
                "Handled recruitment and talent acquisition for 15+ full-time hires",
                "Managed sourcing, screening, interviewing, reporting, and salary negotiations across junior to senior roles",
                "Implemented HR policies compliant with labor laws and aligned with company goals",
                "Proficient in Naukri, Indeed, LinkedIn, and social platforms for talent sourcing",
                "Improved employee satisfaction by 25% through enhanced benefits, communication, mentorship programs, and revised performance reviews",
                "Built HR dashboards and MIS reports for senior management",
                "Acted as liaison between employees and management to resolve conflicts"
            ]
        },
        {
            title: "HR Generalist",
            company: "Lamlord Ventures Pvt. Ltd",
            duration: "Feb 2023 - Jan 2025",
            points: [
                "Managed core HR operations including Administration and Recruitment",
                "Ensured smooth onboarding with completion of pre-employment forms within 48 hours",
                "Led talent acquisition and end-to-end recruitment for 35+ full-time hires",
                "Expertise in sourcing, screening, interviewing, reporting, and salary negotiation (junior to senior levels)",
                "Achieved 25% improvement in employee satisfaction by expanding benefits programs",
                "Organized and managed live events (dance, singing programs)",
                "Coordinated with vendors, clients, and participants; handled accommodation, food, and end-to-end event operations"
            ]
        },
        {
            title: "IT Recruiter",
            company: "Voyager Partners PVT LTD",
            duration: "Aug 2022 - Feb 2023",
            points: [
                "Screened resumes and conducted pre-screening interviews",
                "Collaborated with internal and external clients to understand hiring needs and goals",
                "Analyzed employment-related data and prepared recruitment reports",
                "Demonstrated strong leadership and organizational abilities"
            ]
        }
    ];
    useGSAP(() => {
        gsap.from(".container", {
            y: 100,
            opacity: 0,
            duration: 1,
            sragger: 1,
            scrollTrigger: {
                trigger: "container",
                scroll: "body",
                scrub: 2,

                start: "top 80%",
                end: "top 30%",

            }
        })
        



    })
    const timelineItemsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        timelineItemsRef.current.forEach((item) => {
            if (item) observer.observe(item);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className="experience-section">
            <div className="container">
                <h2 className="section-title">Work Experience</h2>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="timeline-item"
                            ref={(el) => (timelineItemsRef.current[index] = el)}
                        >
                            <div className="timeline-dot"></div>
                            {index !== experiences.length - 1 && <div className="timeline-line"></div>}

                            <div className="timeline-content">
                                <div className="header">
                                    <div>
                                        <h3 className="job-title">{exp.title}</h3>
                                        <p className="company">{exp.company}</p>
                                    </div>
                                    <span className="duration">{exp.duration}</span>
                                </div>

                                <ul className="points">
                                    {exp.points.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;