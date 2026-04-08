import { TypeAnimation } from 'react-type-animation';
import { Star } from 'lucide-react'; 
import photoprofile from '../assets/photo-profile.png'
import figmalogo from '../assets/figma-logo.svg'
import sketchlogo from '../assets/sketch-logo.svg'
import clientone from '../assets/client-1.png'
import clienttwo from '../assets/client-2.png'
import clientthree from '../assets/client-3.png'

export default function Hero() {
    return (
        <>
        <section className="w-full py-12 px-8 md:px-16 lg:px-24 bg-bg-main">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col gap-5">
                    <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-primary leading-tight tracking-wide">
                        Hi, Im <TypeAnimation
                            sequence={[
                                'Berliano Ridho Pratama.', 2000,
                                'UI/UX Designer.', 2000,
                                'Developer.', 2000,
                                'Engineer.', 2000
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            style={{ display: 'inline-block' }}
                        />
                    </h1>
                    
                    <p className="text-txt-secondary text-xl leading-relaxed md:pr-10">
                        Bridging the gap between human centered design and robust technology. I am an Informatics Engineering graduate dedicated to crafting seamless digital products, from conceptualization to functional web execution.
                    </p>
                    <div className="flex flex-wrap items-center gap-5 mt-4">
                        <button className="bg-primary text-white font-semibold py-3 px-8 rounded-lg shadow-lg shadow-primary/30 transition-transform duration-300 hover:-translate-y-3">
                            Get In Touch
                        </button>
                        <button className="border-2 text-button font-semibold py-3 px-8 rounded-lg shadow-lg shadow-button/30 transition-all duration-300 hover:bg-button/10 hover:-translate-y-3">
                            Book a demo
                        </button>
                    </div>
                    <div className="flex items-center gap-3 mt-6">
                        <div className="flex -space-x-3">
                            <img src={clientone} alt="Client 1" className="w-10 h-10 rounded-full border-2 border-bg-main object-cover bg-gray-300" />
                            <img src={clienttwo} alt="Client 2" className="w-10 h-10 rounded-full border-2 border-bg-main object-cover bg-gray-400" />
                            <img src={clientthree} alt="Client 3" className="w-10 h-10 rounded-full border-2 border-bg-main object-cover bg-gray-500" />
                        </div>
                        <div className="flex items-center gap-1 text-sm font-semibold text-txt-primary">
                            <span>4.5</span>
                            <Star color="#efaf25" size={18} />
                            <Star color="#efaf25" size={18} />
                            <Star color="#efaf25" size={18} />
                            <Star color="#efaf25" size={18} />
                            <Star color="#efaf25" opacity={0.5} size={18} />
                            <span className="text-gray-400 ml-1 font-normal">50+ Clients</span>
                        </div>
                    </div>
                </div>

                <div className="relative flex justify-center items-center mt-10 md:mt-0">
                    <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden bg-gray-200 relative z-10 shadow-2xl">
                        <img src={photoprofile} alt="Berliano Profil" className="w-full h-full object-cover" />
                    </div>

                    <div className="absolute top-5 left-0 md:-left-10 z-20 animate-melayang bg-[#FF9161] backdrop-blur-sm text-white px-5 py-2 rounded-full font-semibold shadow-lg">
                        UI Designer
                    </div>

                    <div className="absolute bottom-5 right-0 md:-right-5 z-20 animate-melayang [animation-delay:1.5s] bg-[#FF6F61] text-white px-5 py-2 rounded-full font-semibold shadow-lg">
                        Product Designer
                    </div>

                    <div className="absolute top-10 right-5 md:-right-8 z-0 animate-melayang [animation-delay:0.5s]">
                        <img src={figmalogo} alt="figma logo" className="w-20 h-20"/> 
                    </div>

                    <div className="absolute bottom-10 left-5 md:-left-5 z-20 animate-melayang [animation-delay:2s]">
                        <img src={sketchlogo} alt="sketch logo" className="w-20 h-20"/> 
                    </div> 
                </div>
                
            </div>
        </section>
        </>
    );
}