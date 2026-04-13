import { FigmaIcon } from "./icon/figma-icon";
import { ReactIcon } from "./icon/react-icon";
import { NextjsIcon } from "./icon/next-icon";
import { IconHtml } from "./icon/html-icon";
import { CssIcon } from "./icon/css-icon";
import { TailwindCSS } from "./icon/tailwind-css";
import { Bootstrap } from "./icon/bootstrap-icon";
import { JavaScript } from "./icon/javascript-icon";
import { Nodejs } from "./icon/nodejs-icon";
import { Bun } from "./icon/bun-icon";
import { TypeScript } from "./icon/typescript-icon";
import { Php } from "./icon/php-icon";
import { Laravel } from "./icon/laravel-icon";
import { PostgreSQL } from "./icon/postgree-sql";
import { MySQL } from "./icon/mysql-icon";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"

export default function Skills() {

    const stackData = [
    { component: <IconHtml className="size-12"/>, key: 'html', name: "HTML" },
    { component: <CssIcon className="size-12"/>, key: 'css', name: "CSS" },
    { component: <Bootstrap className="size-12"/>, key: 'bootstrap', name: "Bootstrap" },
    { component: <TailwindCSS className="size-12"/>, key: 'tailwind', name: "Tailwind" },
    { component: <JavaScript className="size-12"/>, key: 'javascript', name: "Javascript" },
    { component: <TypeScript className="size-12"/>, key: 'typescript', name: "TypeScript" },
    { component: <Nodejs className="size-12"/>, key: 'node', name: "Node" },
    { component: <Bun className="size-12"/>, key: 'bun', name: "Bun" },
    { component: <ReactIcon className="size-12"/>, key: 'react', name: "React" },
    { component: <NextjsIcon className="size-12"/>, key: 'nextjs', name: "Next" },
    { component: <Php className="size-12"/>, key: 'php', name: "Php" },
    { component: <Laravel className="size-12"/>, key: 'laravel', name: "Laravel" },
    { component: <MySQL className="size-12"/>, key: 'mysql', name: "MySQL" },
    { component: <PostgreSQL className="size-12"/>, key: 'postgree', name: "Postgree" },
    { component: <FigmaIcon className="size-12"/>, key: 'figma', name: "Figma" },
];

    const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

    const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.8 },
    visible: { 
        y: 0, opacity: 1, scale: 1,
        transition: { type: "spring", stiffness: 120, damping: 12 }
    },
};

    return (
        <motion.section 
            id="skills" 
            className="w-full py-20 px-8 md:px-16 lg:px-24 bg-bg-main"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
        >
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
                <motion.div 
                    className="w-full lg:w-1/4 lg:sticky lg:top-32"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h2 className="text-3xl md:text-4xl text-center lg:text-left font-bold text-primary tracking-wide">
                    Skills
                    </h2>
                </motion.div>

                <div className="flex flex-col w-full lg:w-3/4 items-center">
                    <div className="mb-10">
                        <h2 className="text-xl md:text-2xl text-center font-bold text-txt-primary/70">
                            Working with Latest Technology & Stack
                        </h2>
                    </div>

                    <motion.div 
                        className="flex flex-row flex-wrap justify-center gap-8 md:gap-10 my-4 w-full"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {stackData.map((item) => (
                            <motion.div 
                                key={item.key} 
                                variants={itemVariants}
                                whileHover={{ scale: 1.15, y: -5 }}
                                className="will-change-transform flex flex-col items-center gap-y-3 cursor-pointer" 
                            >
                                {item.component}
                                
                                <span className="text-sm font-semibold text-gray-600 hidden md:block">
                                    {item.name}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>    
            </div>
        </motion.section>
    )
}




