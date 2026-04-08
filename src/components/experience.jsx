import React, { useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useSpring } from 'motion/react';


export default function Experience() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 20,
        restDelta: 0.001
    });

    return (
        <section id="experience" className="w-full py-20 px-8 md:px-16 lg:px-24 bg-bg-main">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
                <div className="w-full lg:w-1/4 lg:sticky lg:top-32">
                    <h2 className="text-3xl md:text-4xl text-center lg:text-left font-bold text-primary tracking-wide">
                        Experience
                    </h2>
                </div>
                <div ref={containerRef} className="w-full lg:w-3/4 relative pt-2">
                    <div className="absolute left-3.5 top-4 bottom-0 w-1 bg-gray-200 z-0 rounded-full"></div>
                    <motion.div 
                        className="absolute left-3.5 top-4 bottom-0 w-1 bg-primary z-0 origin-top rounded-full"
                        style={{ scaleY: scaleY }} 
                    />
                    <div className="flex flex-col gap-10">
                        {experienceData.map((exp) => (
                            <div key={exp.id} className="relative pl-14">
                                <motion.div 
                                    initial={{ backgroundColor: "#E5E7EB" }} // gray-200
                                    whileInView={{ backgroundColor: "#FF8F61" }} // primary color
                                    transition={{ duration: 0.3 }}
                                    viewport={{ once: false, margin: "0% 0px -50% 0px" }}
                                    className="absolute left-0 top-1.5 w-8 h-8 rounded-full shadow-sm z-10 border-[6px] border-bg-main"
                                />

                                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                    {exp.duration}
                                </h3>

                                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-50 flex flex-col gap-3">
                                    <h4 className="font-bold text-[#1A1A1A] text-lg">
                                        {exp.title}
                                    </h4>
                                    
                                    {exp.company && (
                                        <div className="flex items-center gap-3 text-gray-500 font-medium">
                                            {exp.logo && (
                                                <img 
                                                    src={exp.logo} 
                                                    alt={`${exp.company} logo`} 
                                                    className="w-6 h-auto object-contain"
                                                />
                                            )}
                                            <span>{exp.company}</span>
                                        </div>
                                    )}
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}


const experienceData = [
    {
        id: 1,
        title: "Full Stack Web Developer",
        company: "Freelance",
        duration: "January 2025 - Present",
        description: "As a freelance Full Stack Web Developer, I have successfully completed various projects for clients across different industries. My responsibilities include designing and developing responsive websites, implementing user-friendly interfaces, and ensuring seamless functionality. I collaborate closely with clients to understand their requirements and deliver high-quality solutions that meet their business goals."
    },
    {
        id: 2,
        title: "UI/UX Designer",
        company: "Internship at DB Klik Indonesia",
        duration: "January 2025 - June 2025",
        description: "As a UI/UX Designer, I have successfully completed various design projects for clients across different industries. My responsibilities include creating user personas, conducting user research, and designing intuitive and visually appealing interfaces. I collaborate closely with developers to ensure the designs are implemented correctly and provide a great user experience."
    },
    {
        id: 3,
        title: "Social Media Specialist",
        company: "Internship at DB Klik Indonesia",
        duration: "March 2025 - June 2025",
        description: "As a Social Media Specialist, I have successfully completed various social media management projects for clients across different industries. My responsibilities include creating engaging content, managing social media accounts, and analyzing performance metrics. I collaborate closely with the marketing team to ensure consistent brand messaging and effective audience engagement."
    },
]