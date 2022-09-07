import React from 'react'
import Badhon from '../../../assets/badhon.png'
import Onik from '../../../assets/Onik.png'
import Niloy from '../../../assets/niloy.png'


function Leadership() {
  return (
    <section className='py-16'>
        <h1 className='container mx-auto text-center text-4xl py-2 text-green'>Leadership</h1>
        <div className='container mx-auto grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-12 py-8'>
            <div className='bg-white text-center py-16 rounded-tl-lg rounded-br-lg drop-shadow-md hover:drop-shadow-lg hover:border-green hover:border'>
                <img className='mx-auto py-1' src={Badhon} alt='FullTransparency'/>
                <h3 className='font-bold py-1'>Arif Faisal Khan</h3>
                <p className='mx-auto text-xs font-medium w-3/4 py-1 leading-relaxed'>CO-FOUNDER & Chairman</p>
            </div>
            <div className='bg-white text-center py-16 rounded-tl-lg rounded-br-lg drop-shadow-md hover:drop-shadow-lg hover:border-green hover:border'>
                <img className='mx-auto py-1' src={Onik} alt='FullTransparency'/>
                <h3 className='font-bold py-1'>MD Istiaq Gani</h3>
                <p className='mx-auto text-xs font-medium w-3/4 py-1 leading-relaxed'>CO-FOUNDER & CEO</p>
            </div>
            <div className='bg-white text-center py-16 rounded-tl-lg rounded-br-lg drop-shadow-md hover:drop-shadow-lg hover:border-green hover:border'>
                <img className='mx-auto py-1' src={Niloy} alt='FullTransparency'/>
                <h3 className='font-bold py-1'>Tahsin Alam Chowdhury</h3>
                <p className='mx-auto text-xs font-medium w-3/4 py-1 leading-relaxed'>CO-FOUNDER & M.D</p>
            </div>
            
            
        </div>
    </section>
  )
}

export default Leadership