import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutHero from './components/AboutHero'
import AboutSection01 from './components/AboutSection01'
import AboutSection02 from './components/AboutSection02'
import Vision from './components/Vision'
import Mission from './components/Mission'
import Search from './components/Search'
import { useState } from 'react'
import Layout from './components/Layout'

const About = () => {
  const [searchPage, setSearchPage] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <Layout  >
    <div className='font-blinker'>
      <Header 
              searchPage={searchPage}
              setSearchPage={setSearchPage}
              search={search}
              setSearch={setSearch}
              />

              
      {searchPage ? (
        <Search search={search} setSearchPage={setSearchPage} />
      ) : (
        <>
        
       
      <div className='w-full'>
        {/* hero section */}
      <AboutHero />
      </div>

      <AboutSection01 />
      <AboutSection02 />


      <Vision />
      <Mission />

      <Footer />
      </>)}
    </div>
    </Layout>
  )
}

export default About