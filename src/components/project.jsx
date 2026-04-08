import { useState } from 'react';
import codingfarm from '../assets/project-coding-farm.png'
import dropapp from '../assets/project-agency.png'
import dashboard from '../assets/project-dashboard.png'
import dbklik from '../assets/project-desktop-dbklik.png'

export default function Project() {
    const [selectedProject, setSelectedProject] = useState(null)

    function openModal(project) {
        setSelectedProject(project);
    }

    function closeModal() {
        setSelectedProject(null);
    }

    return (
        <>
        <section id="project" className="w-full py-20 px-8 md:px-16 lg:px-24 bg-bg-main">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
                <div className="w-full lg:w-1/4 lg:sticky lg:top-32">
                    <h2 className="text-3xl md:text-4xl text-center lg:text-left font-bold text-primary tracking-wide">
                        Latest Project
                    </h2>
                </div>
                <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projectData.map((project) => (
                        <div 
                            onClick={() => openModal(project)}
                            key={project.id} 
                            className="bg-white p-5 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-50 flex flex-col"
                        >
                            {/* Area Thumbnail Gambar */}
                            <div className="w-full aspect-4/3 bg-[#F4F5F7] rounded-2xl overflow-hidden flex items-center justify-center p-4">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-contain"
                                    // Gunakan object-cover jika gambar sudah presisi rasio 4:3
                                />
                            </div>

                            {/* Area Teks Judul */}
                            <h3 className="mt-5 text-xl font-bold text-[#1A1A1A] leading-snug grow">
                                {project.title}
                            </h3>

                            {/* Area Ikon Link */}
                            <div className="flex items-center gap-3 mt-5">
                                {/* Dribbble Icon */}
                                <a href={project.linkDribbble} target="_blank" rel="noreferrer" className="w-9 h-9 bg-[#EA4C89] rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm8.46 10.3c-.09-.03-2.61-.83-5.59-.51.98 2.74 1.39 5.09 1.45 5.46 2.51-1.78 4.09-4.7 4.14-4.95zm-8.46 8.2c-1.99 0-3.83-.62-5.36-1.68.08-.34.62-2.31 3.51-3.66.44.89 1.05 2.14 1.57 3.09-.84.22-1.72.33-2.61.33-1.07 0-2.11-.18-3.08-.51 1.05-1.16 2.45-3.03 3.65-4.59-1.99-2.31-3.79-3.92-3.87-3.99 1.34-1.87 3.32-3.21 5.61-3.71.69 2.05 1.13 4.29 1.25 5.03 2.87-.87 4.88-1.07 5.16-1.1.28.03.62.1.84.28-1.52 3.19-4.22 5.56-7.39 6.57l-1.08-1.42c.86-.14 1.76-.39 2.65-.77z"/>
                                    </svg>
                                </a>
                                
                                {/* Behance Icon */}
                                <a href={project.linkBehance} target="_blank" rel="noreferrer" className="w-9 h-9 bg-[#1769FF] rounded-full flex items-center justify-center text-white font-bold hover:opacity-80 transition-opacity">
                                    <span className="text-[13px] leading-none">Bē</span>
                                </a>
                                
                                {/* LinkedIn Icon */}
                                <a href={project.linkLinkedin} target="_blank" rel="noreferrer" className="w-9 h-9 bg-[#0A66C2] rounded-full flex items-center justify-center text-white font-bold hover:opacity-80 transition-opacity">
                                    <span className="text-[13px] leading-none">in</span>
                                </a>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

            {selectedProject && (
                <div 
                    className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
                    onClick={closeModal}
                >
                    <div 
                        className="relative bg-white rounded-3xl w-full max-w-4xl p-6 md:p-10 max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col gap-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Tombol X (Absolute Kiri Atas) */}
                        <button 
                            onClick={closeModal} 
                            className="absolute top-4 left-4 md:top-6 md:left-6 w-10 h-10 bg-gray-100 hover:bg-red-50 text-gray-600 hover:text-red-500 rounded-full flex items-center justify-center font-bold text-xl transition-colors z-10"
                        >
                            ✕
                        </button>
                        <div className="w-full bg-[#F4F5F7] rounded-2xl overflow-hidden p-6 mt-10 md:mt-0 flex items-center justify-center">
                             <img 
                                src={selectedProject.image} 
                                alt={selectedProject.title} 
                                className="max-w-full max-h-[50vh] object-contain drop-shadow-md" 
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A]">
                                {selectedProject.title}
                            </h2>
                            <p className="text-txt-secondary text-lg leading-relaxed">
                                {selectedProject.desc}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
        </>
    );
}

const projectData = [
    {
        id: 1,
        title: "Coding Farm Landing Page",
        image: codingfarm,
        desc: "Coding Farm is School Coding for kids based at Surabaya, Indonesia. A modern and engaging landing page for Coding Farm, an online coding bootcamp. The design features a clean layout, vibrant colors, and interactive elements to attract potential students and showcase the benefits of joining the bootcamp.",
        linkDribbble: "#",
        linkBehance: "#",
        linkLinkedin: "#"
    },
    {
        id: 2,
        title: "Drop App Digital Agency Landing Page",
        image: dropapp,
        desc: "A sleek and professional landing page for Drop App, a digital agency specializing in web and mobile app development. The design emphasizes the agency's expertise and portfolio, with a focus on clear calls-to-action to encourage potential clients to get in touch.",
        linkDribbble: "#",
        linkBehance: "#",
        linkLinkedin: "#"
    },
    {
        id: 3,
        title: "Simple Minimalist Dashboard",
        image: dashboard,
        desc: "A simple and minimalist dashboard design for a productivity app. The design focuses on clean lines, ample white space, and intuitive navigation to help users easily access their tasks, calendar, and analytics. The use of subtle colors and typography enhances the user experience while maintaining a modern aesthetic.",
        linkDribbble: "#",
        linkBehance: "#",
        linkLinkedin: "#"
    },
    {
        id: 4,
        title: "DB Klik Membership Store Landing Page",
        image: dbklik,
        desc: "DB Klik is store computer based at Surabaya, Indonesia. A vibrant and user-friendly landing page for DB Klik, a membership store offering exclusive deals and discounts. The design incorporates bold colors, engaging visuals, and clear messaging to attract users and encourage them to sign up for the membership program.",
        linkDribbble: "#",
        linkBehance: "#",
        linkLinkedin: "#"
    },
];