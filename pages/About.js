import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutHero from './components/AboutHero'
import AboutSection01 from './components/AboutSection01'
import AboutSection02 from './components/AboutSection02'
import Vision from './components/Vision'
import Mission from './components/Mission'


const About = () => {

  return (
    <div className='font-blinker'>
      <Header />
      <div className='w-full'>
        {/* hero section */}
      <AboutHero />
      </div>

      <AboutSection01 />
      <AboutSection02 />


      <Vision />
      <Mission />

      <Footer />
    </div>
  )
}

export default About