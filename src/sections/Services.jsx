import React from 'react'
import { Element } from 'react-scroll';
import { services } from '../constants/index';
import Title from '../components/Title';

const Services = () => {
  return <section>
  <Element name='Services'>
      <div className='flex justify-center flex-col container'>
          <Title sectionId={0}/>
          <div className='flex justify-center items-center w-full mt-20 max-lg:px-3'>
              <div className='grid grid-cols-1 max-lg:grid-cols-1 max-md:grid-cols-1  md:grid-cols-2 lg:grid-cols-2 gap-10 max-md:gap-5'> {/* Use grid instead of flex */}
                  {services.map((service) => (
                      <div className=' max-md:w-auto flex-shrink-0 ' key={service.id}>
                          <div className={`p-10 rounded-[40px] flex justify-between items-start ${service.bgColor} h-full shadow-dark-bottom`}>
                              {/* Left side: Title and Button */}
                              <div className='flex flex-col text-start justify-between h-full'>
                                  {/* Title with background wrapping around text */}
                                  <span className='text-[32px] font-bold max-md:text-[20px]'>
                                    {service.title.split(/(<br>)/g).map((word, index) => (
                                        <React.Fragment key={index}>
                                            
                                            {word === '<br>' ? (
                                                <>
                                                    <br className='leading-none' /> 
                                                </>
                                            ) : (
                                                <span className={`inline-block p-1.5 ${service.bgText}`}>
                                                    {word}
                                                </span>
                                            )}
                                            
                                            {index < service.title.split(' ').length - 1 && word !== '<br>'}
                                        </React.Fragment>
                                    ))}
                                </span>
                                  {/* Button */}
                                  <button className={`flex items-center mt-[93px] ${service.textColor}`}>
                                    <img src={service.btn[0].icon} width={41} height={30} className='mr-3' />
                                    <span className={`hidden md:inline-block hover:border-b-2 hover:border-black border-b-2 border-transparent ${service.hover}`}>{service.btn[0].text}</span>
                                </button>

                              </div>
                              
                              <img src={service.image} alt={service.title} width={210} height={47} className="self-center max-md:w-[165px] max-md:h-[129px] max-md:self-end" />
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </div>
  </Element>
</section>


}

export default Services
