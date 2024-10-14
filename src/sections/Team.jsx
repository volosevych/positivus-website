import React from 'react'
import { Element } from 'react-scroll'
import Title from '../components/Title'

import { team } from '../constants'
import Button from '../components/Button'

const Team = () => {
  return <section>
    <Element name='Team'>
      <div className='container'>
      <div className='pt-40'>
            <Title sectionId={3}/>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-20">
          {team.map(({ id, name, title, experience, photo }) => (
              <div key={id} className="border border-p2 p-10 rounded-3xl shadow-dark-bottom">
                  <div className='flex items-center relative'>
                      <img src={photo} alt="" />
                      <div className='absolute bottom-0 left-36 text-start max-md:text-[18px] max-md:left-32'>
                          <h3 className='font-bold'>{name}</h3>
                          <h4 className=''>{title}</h4>
                      </div>
                      
                      <div className='absolute right-0 top-0'>
                        <a href="#"><img src="/assets/photos/linkedin.svg" alt="linkedIn" /></a>
                      </div>
                  </div>

                  <div className="h-px bg-p2 my-7"></div>

                  <div className='text-start max-md:text-[18px]'>
                      {experience}
                  </div>
              </div>
          ))}
        </div>

        <div className='flex justify-end max-md:justify-center'>
          <Button className='px-12 bg-p2 text-p3 hover:text-p1 transition-colors duration-500 max-md:px-28' id={4}/>
        </div>
      </div>




    </Element>
  </section>
}

export default Team
