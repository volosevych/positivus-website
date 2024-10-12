import React from 'react'
import { Element } from 'react-scroll';

import Button from '../components/Button';


const Hero = () => {
  return <section>
  <Element name="About Us">
    <div className="container w-full h-screen flex-col flex items-center justify-center">
      <div className="flex flex-col-reverse lg:flex-row justify-between w-full items-center md:items-center">
        <div className="md:flex-1 text-center lg:text-left">
          <h2 className="text-left text-[32px] font-medium max-lg:text-center lg:text-[60px]">
            Navigating the digital landscape for success
          </h2>

          <p className='pt-[25px] pb-[40px] text-[18px] max-lg:text-[16px]'>
          Our digital marketing agency helps businesses grow and 
          succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
          </p>

          <Button id={1} className='text-p3 bg-p2 mt-3 hover:text-p1 transition-colors duration-500'/>
        </div>
        <div className="md:flex-1 flex justify-center lg:justify-end w-full">
          <img className="block lg:mx-auto" src="/assets/illustration.png" alt="Illustration" />
        </div>
      </div>
    </div>
  </Element>
</section>

}

export default Hero
