import React, { useState } from 'react'
import { Element } from 'react-scroll'
import Title from '../components/Title';

const ContactUs = () => {
    const [selectedOption, setSelectedOption] = useState('sayHi');


  return <section>
    <Element name=''>
        <div className='container'>
            <div className='mt-40'>
                <Title sectionId={5}/>
            </div>

            <div className='w-full bg-p3 p-6 rounded-3xl'>
                <div className='flex items-center mb-6'>
                    <label className='flex items-center mr-6'>
                        <input 
                            type="radio"
                            name='option'
                            value='sayHi'
                            checked={selectedOption === 'sayHi'}
                            onChange={() => setSelectedOption('sayHi')}
                            className='form-radio h-5 w-5 text-p1 border-p2'
                            />

                            <span className='ml-2 text-gray-700'>Say Hi</span>
                    </label>

                    <label
                        type='radio'
                        name='option'
                        value='quote'
                        checked={selectedOption === 'quote'}
                        onChange={() => setSelectedOption('quote')}
                        className='form-radio h-5 w-5 text-gray-500 border-gray-300'
                    >
                        <span className='ml-2 text-gray-700'>Get a Quote</span>
                    </label>
                </div>

                <form>
                <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            placeholder="Name" 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black text-gray-700"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">Email<span className="text-red-500">*</span></label>
          <input 
            type="email" 
            id="email" 
            placeholder="Email" 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black text-gray-700"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="message">Message<span className="text-red-500">*</span></label>
          <textarea 
            id="message" 
            rows="5" 
            placeholder="Message" 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black text-gray-700"
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-black transition-all"
        >
          Send Message
        </button>
      </form>
                
            </div>
        </div>
    </Element>
  </section>
}

export default ContactUs
