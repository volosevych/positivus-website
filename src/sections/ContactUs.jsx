import React, { useState } from 'react'
import { Element } from 'react-scroll';
import Title from '../components/Title';

const ContactUs = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form Submitted:', formData);
    };

    const [selectedOption, setSelectedOption] = useState('Say Hi');

    const handleOptionChange = (e) => {
      setSelectedOption(e.target.value);
    };
  
  return <section>
    <Element name='Contact Us'>
      <div className='container'>
        <div className='mt-40'>
          <Title sectionId={5}/>
        </div>

        <div className='flex mt-20 bg-p3 rounded-3xl p-20 relative max-lg:p-5 max-lg:justify-center overflow-hidden' >
            <div className='text-start'>
              <form onSubmit={handleSubmit} className="space-y-4 w-[556px] max-lg:w-auto">

                <div className='flex flex-row'>
                    <label className='flex items-center'>
                      <input 
                        type="radio"
                        name='option'
                        value='Say Hi'
                        checked={selectedOption === 'Say Hi'}
                        onChange={handleOptionChange}
                        className='form-radio h-[28px] w-[28px] max-lg:h-[20px] max-lg:w-[20px] bg-p1 border border-p1 focus:ring-p1'
                        />
                        <span className='ml-3 text-[18px]'>Say Hi</span>
                    </label>

                    <label className="inline-flex items-center ml-10">
                    <input
                      type="radio"
                      className="form-radio h-[28px] w-[28px] max-lg:h-[20px] max-lg:w-[20px] bg-p1 border border-p1 focus:ring-p1 checked:bg-green-400"
                      name="option"
                      value="Get a Quote"
                      checked={selectedOption === 'Get a Quote'}
                      onChange={handleOptionChange}
                    />
                    <span className="ml-2 text-gray-700">Get a Quote</span>
                  </label>
                </div>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-p2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message*</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-p2 text-white font-bold py-3 px-4 rounded-md focus:outline-none hover:text-p1 transition duration-500"
                >
                  Send Message
                </button>
             </form>
            </div>

            <div>
              <img src="/assets/contactFormIllustration.png" className='absolute right-[-320px] top-0 max-lg:hidden' alt="contact form illustration" />
            </div>
        </div>
      </div>
    </Element>
  </section>
}

export default ContactUs

