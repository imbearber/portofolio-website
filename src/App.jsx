import './App.css'
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"
import Navbar from './components/navbar.jsx'
import Hero from './components/hero.jsx'
import About from './components/section-about.jsx'
import Feature from './components/feature.jsx'
import Project from './components/project.jsx'
import Experience from './components/experience.jsx'
import Footer from './components/footer.jsx'
import Contact from './components/contact.jsx'
import Skills from './components/skills.jsx'

function App() {
  return (
    <>
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1}}>
      <Navbar />
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 1.3 }}>
      <Hero />
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true, amount: 0.2 }}>
      <About />
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true, amount: 0.2 }}>
      <Feature />
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true, amount: 0.1 }}>
      <Project/>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true, amount: 0.1 }}>
      <Experience />
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true, amount: 0.1 }}>
      <Skills />
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true, amount: 0.1 }}>
      <Contact />
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true, amount: 0.1 }}>
      <Footer />
    </motion.div>
    </>
  )
}

export default App
