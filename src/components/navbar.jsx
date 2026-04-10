import '../App.css'
import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [status, setStatus] = useState(false);

    function toggleMenu() {
        setStatus(!status);
        console.log("clicked " + status);
    }
          
    return(
    <>
       <header className="bg-bg-main w-full py-5 px-8 md:px-16 lg:px-24">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
            <a href="/" className="text-2xl font-bold text-primary tracking-wide">Berliano</a>
            <div className="flex items-center gap-10">
                <ul className="hidden md:flex items-center gap-8 font-medium text-txt-primary">
                <li>
                    <a href="/" className="text-txt-primary text-lg border-transparent border-b-2 pb-1.5 transition-colors duration-200 hover:text-primary hover:border-primary hover:font-semibold">Home</a>
                </li>
                <li>
                    <a href="#about" className="text-txt-primary text-lg border-transparent border-b-2 pb-1.5 transition-colors duration-200 hover:text-primary hover:border-primary hover:font-semibold">About</a>
                </li>
                <li>
                    <a href="#project" className="text-txt-primary text-lg border-transparent border-b-2 pb-1.5 transition-colors duration-200 hover:text-primary hover:border-primary hover:font-semibold">Project</a>
                </li>
                <li>
                    <a href="#experience" className="text-txt-primary text-lg border-transparent border-b-2 pb-1.5 transition-colors duration-200 hover:text-primary hover:border-primary hover:font-semibold">Experience</a>
                </li>
            </ul>
            {/* <button className='hidden md:block border-2 text-button font-semibold py-2 px-7 rounded-lg cursor-pointer transition-colors duration-300 hover:bg-button/10'>
                Hire Me
            </button> */}
            <button className='block md:hidden' onClick={toggleMenu}>
                <Menu color="#FF9161"/>
            </button>
            </div>

            {/* Mobile Menu */}
            <div 
               className={`md:hidden absolute top-20 left-0 w-full bg-bg-main py-5 px-8 shadow-lg z-40 transition-all duration-300 ease-in-out ${
                    status 
                    ? 'opacity-100 translate-y-0 pointer-events-auto' 
                    : 'opacity-0 -translate-y-5 pointer-events-none'
            }`}
            >
                <ul className='flex flex-col items-center gap-6 font-medium text-txt-primary'>
                    <li 
                    className={`transition-all duration-500 delay-200 ${
                        status 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 -translate-x-5'}`}>
                        <a href="/" className="text-txt-primary text-lg border-transparent border-b-2 pb-1.5 transition-colors duration-200 hover:text-primary hover:border-primary hover:font-semibold">Home</a>
                    </li>
                    <li 
                    className={`transition-all duration-500 delay-300 ${
                        status 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 -translate-x-5'}`}>
                        <a href="/" className="text-txt-primary text-lg border-transparent border-b-2 pb-1.5 transition-colors duration-200 hover:text-primary hover:border-primary hover:font-semibold">About</a>
                    </li>
                    <li 
                    className={`transition-all duration-500 delay-400 ${
                        status 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 -translate-x-5'}`}>
                        <a href="/" className="text-txt-primary text-lg border-transparent border-b-2 pb-1.5 transition-colors duration-200 hover:text-primary hover:border-primary hover:font-semibold">Project</a>
                    </li>
                    <li 
                    className={`transition-all duration-500 delay-500 ${
                        status 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 -translate-x-5'}`}>
                        <a href="/" className="text-txt-primary text-lg border-transparent border-b-2 pb-1.5 transition-colors duration-200 hover:text-primary hover:border-primary hover:font-semibold">Experience</a>
                    </li>
                </ul>
                <button className='border-2 text-button font-semibold py-3 mt-5 rounded-lg w-full cursor:-pointer transition-colors duration-300 hover:bg-button/10'>
                    Hire Me
                </button>
                </div>
        </nav>
       </header> 
    </>
    )
}
