import React, {useState} from 'react'
import Title from '../components/Title'

import PlusIcon from '../toggleIcons/minus.svg';
import MinusIcon from '../toggleIcons/plus.svg';

const WorkingProcess = ({ steps }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    }
    
  return (
    <section>
        <div className='container'>
            <div className='mb-20'>
                <Title sectionId={2}/>
            </div>

            <div className="flex flex-col items-center space-y-8 w-full">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`w-full rounded-2xl border-2 border-gray-300 p-10 max-md:p-5 shadow-dark-bottom transition-all duration-300 ease-in-out ${
            activeIndex === index ? 'bg-lime-300' : 'bg-gray-100'
          }`}
        >
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => handleToggle(index)}
          >
            <div className="flex items-center space-x-4 text-start">
              <span className="text-[38px] max-md:text-[28px] font-bold">{step.number}</span>
              <span className="text-[28px] max-md:text-[16px] font-semibold">{step.title}</span>
            </div>
            
            <button
              className={`flex items-center justify-center w-[58px] h-[58px] max-md:w-[30px] max-md:h-[30px] rounded-full border-2 transition-colors duration-300 ${
                activeIndex === index ? 'bg-white border-[1px] border-p2 p-1' : ' border-p2 border-[1px] p-1'
              }`}
              aria-label={activeIndex === index ? 'Collapse section' : 'Expand section'}
            >
              <img
                src={activeIndex === index ? PlusIcon : MinusIcon}
                alt={activeIndex === index ? 'Collapse' : 'Expand'}
              />
            </button>
          </div>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              activeIndex === index ? 'max-h-[500px] opacity-100 border-t-p2' : 'max-h-0 opacity-0'
            }`}
          >
            <div className={`mt-6 border-t pt-4 text-[18px] text-start font-bold ${activeIndex === index ? 'border-t-p2' : 'border-t-transparent'}`}>
              {step.description}
            </div>
          </div>
        </div>
      ))}
    </div>
        </div>
    </section>
  )
}

export default WorkingProcess
