import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Achievements from '../components/Achievements'
import CodingProfiles from '../components/CodingProfiles'
import ResumeCTA from '../components/ResumeCTA'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import BackgroundEffects from '../components/BackgroundEffects'

export default function Home() {
  return (
    <>
      <BackgroundEffects />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <CodingProfiles />
        <ResumeCTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
