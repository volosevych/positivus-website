import React from 'react'

import { companyLogos } from '../constants'

const Companies = () => {
  return <section className='container'>
   <div className="w-full relative bottom-[120px] max-lg:bottom-[95px] overflow-x-auto py-6 hide-scrollbar">
    <div className="flex space-x-6 justify-between">
        {companyLogos.map((logoData) => (
        <div key={logoData.id} className="shrink-0">
            <img src={logoData.logo} alt={`Company Logo ${logoData.id}`} width={124} height={48} />
        </div>
        ))}
    </div>
    </div>
  </section>
}

export default Companies
