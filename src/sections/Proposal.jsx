import React from 'react'
import Button from '../components/Button';

const Proposal = () => {
  return (
    <section className="bg-gray-100 p-10 max-md:p-5 max-md:py-12 rounded-2xl flex items-center justify-between my-100 max-md:mx-10">
    {/* Left Side: Text Section */}
    <div className="w-full flex justify-between relative max-md:justify-center">
        <div className='flex p-5 max-md:p-1 text-start flex-col'>
            <h2 className="text-3xl font-bold">Let’s make things happen</h2>
            <p className="text-lg py-12">
                Contact us today to learn more about how our digital <br/> 
                marketing services can help your business grow and <br/> succeed online.
            </p>

            <Button id={2} className='text-p3 bg-p2 mt-3 hover:text-p1 transition-colors duration-500'/>
        </div>

        <div>
            <img src="/assets/proposal.png" className='absolute right-[100px] top-[-52px] max-md:hidden' alt="proposal" />
        </div>

        
    </div>

    {/* Right Side: Decorative Shapes */}
    
</section>

  )
}

export default Proposal
