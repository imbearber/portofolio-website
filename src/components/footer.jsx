import { DribbbleIcon } from "./icon/dribble-icon";
import { GitHubIcon } from "./icon/github-icon";
import { LinkedInIcon } from "./icon/linkedin-icon";

export default function Footer() {
    return (
        <footer className="w-full relative bg-primary text-white py-16 md:py-24 px-8 md:px-16 lg:px-24 overflow-hidden">
            <div 
                className="absolute inset-0 opacity-[0.05] pointer-events-none" 
                style={{ 
                    backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', 
                    backgroundSize: '80px 80px' 
                }}
            ></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8">
                    
                    {/* KOLOM KIRI: Let's talk, Email, Socials */}
                    <div className="flex flex-col items-start w-full lg:w-1/2">
                        <span className="text-xl md:text-2xl font-medium mb-2">
                            Let's talk
                        </span>
                        <a 
                            href="mailto:mastama17@outlook.com" 
                            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight hover:opacity-80 transition-opacity"
                        >
                            Mastama17@outlook.com
                        </a>

                        <div className="flex items-center gap-4 mt-12">
                            <a href="https://github.com/imbearber" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary hover:scale-110 transition-transform duration-300">
                                <GitHubIcon className="size-8"/>
                            </a>
                            <a href="https://www.linkedin.com/in/berliano-ridho-pratama-110566199/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B9sYZH0XQSQCg8zQW8QsVWA%3D%3D" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary hover:scale-110 transition-transform duration-300">
                               <LinkedInIcon className="size-8"/>
                            </a>
                            <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary hover:scale-110 transition-transform duration-300">
                                <DribbbleIcon className="size-8"/>
                            </a>
                            <a href="instagram.com/hiberliano" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary hover:scale-110 transition-transform duration-300">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* KOLOM KANAN: 3 Kolom Links */}
                    <div className="w-full lg:w-1/2 flex flex-wrap sm:flex-nowrap justify-between gap-10 sm:gap-4 mt-8 lg:mt-0">
                        
                        {/* Navigation */}
                        <div className="flex flex-col gap-6 w-[45%] sm:w-auto">
                            <h3 className="font-semibold text-lg">Navigation</h3>
                            <ul className="flex flex-col gap-4 text-white/80">
                                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                                <li><a href="#project" className="hover:text-white transition-colors">Project</a></li>
                                <li><a href="#experience" className="hover:text-white transition-colors">Experience</a></li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="flex flex-col gap-6 w-[45%] sm:w-auto">
                            <h3 className="font-semibold text-lg">Services</h3>
                            <ul className="flex flex-col gap-4 text-white/80">
                                <li><a href="#" className="hover:text-white transition-colors">UI/UX Design</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Web Design</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Design System</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Software Development</a></li>
                            </ul>
                        </div>

                        {/* Support */}
                        <div className="flex flex-col gap-6 w-[45%] sm:w-auto">
                            <h3 className="font-semibold text-lg">Support</h3>
                            <ul className="flex flex-col gap-4 text-white/80">
                                <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Support Center</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="mt-20 lg:mt-32 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/80 text-sm md:text-base">
                    <p>© 2026 Berliano Ridho Pratama, All Rights Reserved.</p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms Of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}