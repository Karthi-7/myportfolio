import React from 'react'
import { Navbar } from './components'
import { About,Header,Footer,Skills,Testimonial,Work } from './container'

import "./App.scss"

function App() {
  return (
    <div className='app'>
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    {/* <Testimonial /> */}
    <Footer /> 
    </div>
  )
}

export default App
