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

                        {/* Social Media Icons (Lingkaran Putih, Ikon Warna Primary) */}
                        <div className="flex items-center gap-4 mt-12">
                            {/* Dribbble */}
                            <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary hover:scale-110 transition-transform duration-300">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm8.46 10.3c-.09-.03-2.61-.83-5.59-.51.98 2.74 1.39 5.09 1.45 5.46 2.51-1.78 4.09-4.7 4.14-4.95zm-8.46 8.2c-1.99 0-3.83-.62-5.36-1.68.08-.34.62-2.31 3.51-3.66.44.89 1.05 2.14 1.57 3.09-.84.22-1.72.33-2.61.33-1.07 0-2.11-.18-3.08-.51 1.05-1.16 2.45-3.03 3.65-4.59-1.99-2.31-3.79-3.92-3.87-3.99 1.34-1.87 3.32-3.21 5.61-3.71.69 2.05 1.13 4.29 1.25 5.03 2.87-.87 4.88-1.07 5.16-1.1.28.03.62.1.84.28-1.52 3.19-4.22 5.56-7.39 6.57l-1.08-1.42c.86-.14 1.76-.39 2.65-.77z"/>
                                </svg>
                            </a>
                            {/* Behance */}
                            <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary hover:scale-110 transition-transform duration-300">
                                <span className="font-bold text-xl tracking-tighter">Bē</span>
                            </a>
                            {/* X (Twitter) */}
                            <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary hover:scale-110 transition-transform duration-300">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                            </a>
                            {/* Instagram */}
                            <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary hover:scale-110 transition-transform duration-300">
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