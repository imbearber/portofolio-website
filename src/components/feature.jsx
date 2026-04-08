import { ArrowRight } from 'lucide-react';
import CodingIllustration from '../assets/coding-2.svg'; 

export default function Feature() {
    return (
        <section className="w-full py-20 px-8 md:px-16 lg:px-24 bg-bg-main">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 items-center">
                <div className="relative w-full md:w-3/4 max-w-100 aspect-square mx-auto flex items-center justify-center">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-primary/20 rounded-full blur-3xl -z-10"></div>
                    <img 
                        src={CodingIllustration} 
                        alt="Software Engineering Illustration" 
                        className="relative w-full h-full object-contain z-10 drop-shadow-sm" 
                    />
                </div>
                <div className="flex flex-col gap-5 items-center md:items-start">
                    <h2 className="text-3xl md:text-4xl text-center md:text-left font-bold text-primary tracking-wide leading-tight mt-1 hover:-translate-y-3 transition-all duration-300">
                        Crafting Digital Solutions Through Design and Engineering
                    </h2>
                    
                    <p className="text-txt-secondary text-lg leading-relaxed text-center md:text-left font-medium">
                        By combining human centered design principles with robust web development, I create digital solutions that don't just look great, but work flawlessly. I partner with businesses to turn complex requirements into intuitive, accessible, and high-performing digital products.
                    </p>
                    <a href="#experience" className="mt-4 group flex items-center gap-2 text-primary font-semibold text-lg transition-all duration-300 hover:opacity-70 hover:-translate-y-2 hover:cursor-pointer">
                        See my experience
                        <ArrowRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1.5" />
                    </a>
                </div>
            </div>
        </section>
    );
}