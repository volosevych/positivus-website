import React from 'react'
import './App.css'
import { steps, testimonials } from './constants';

import { Header, Hero, Companies, Services, 
  Proposal, Studies, WorkingProcess, Team, Testimonials, ContactUs, Footer} from './sections/index';

const App = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Companies/>
      <Services/>
      <Proposal/>
      <Studies/>
      <WorkingProcess steps={steps}/>
      <Team/>
      <Testimonials testimonials={testimonials}/>
      <ContactUs/>
      <Footer/>
    </>
  )
}

export default App

