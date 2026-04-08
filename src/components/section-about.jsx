import '../App.css'

export default function About() {
    return (
        // Padding dan layout dipastikan 100% kembar dengan Hero
        <section id="about" className="w-full py-16 px-8 md:px-16 lg:px-24 bg-bg-main">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">
                
                <div className="md:col-span-1">
                    <h2 className="text-3xl text-center md:text-4xl md:text-left font-bold text-primary tracking-wide">
                        About Me
                    </h2>
                </div>
                
                <div className="md:col-span-2">
                    <p className="text-txt-secondary text-lg md:text-[19px] leading-relaxed md:pr-10 text-center md:text-left font-medium">
                        Hi, I'm Berliano Ridho Pratama, a product driven UI/UX Designer based in Surabaya. As a recent Informatics Engineering graduate, I bring a unique analytical approach to creative problem solving. Over the past year, I have successfully delivered end to end digital solutions, from conceptualizing human centered interfaces to executing functional web development. My recent work includes a comprehensive website redesign and feature expansion for a tech company, where I directly aligned user needs with core business objectives. I thrive in dynamic environments where I can transform complex challenges into seamless, accessible digital experiences
                    </p>
                </div>
                
            </div>
        </section>
    );
}