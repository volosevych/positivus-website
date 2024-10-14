import React from 'react'
import { Element } from 'react-scroll'
import Title from '../components/Title'
import { caseStudies } from '../constants'

const Studies = () => {
  
  return <section>
  <div className='container '>
    <Title sectionId={1} />
    
    <div className='flex mx-auto my-20 mb-[120px] max-lg:bg-p3 lg:bg-p2 rounded-3xl overflow-x-auto hide-scrollbar snap-x snap-mandatory'>
  {caseStudies.map(({ id, text, btn }, index) => (
    <div 
      key={id} 
      className='bg-p2 p-20 text-p3 rounded-3xl relative max-lg:flex max-lg:flex-col max-lg:min-w-[calc(100%-20px)] max-lg:flex-100 max-lg:text-[18px] max-lg:p-12 max-lg:mr-3'>
      <div className='text-start'>
        <p>{text}</p>

        <button className='flex flex-row items-center mt-5'>
          {btn} <img src="/assets/arrows/icon-1.svg" alt="" />
        </button>
        
      </div>
      {index !== caseStudies.length - 1 && (
        <div className='max-lg:hidden absolute right-0 top-20 bottom-20 mx-auto w-px bg-p3 z-10'></div>
      )}
    </div>
  ))}
</div>
  </div>

</section>
}

export default Studies
