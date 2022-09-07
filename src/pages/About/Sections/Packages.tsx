import React from 'react'
import FullTransparency from '../../../assets/Full-Transparency.png'
import BigData from '../../../assets/Big-Data.png'
import LiveSupport from '../../../assets/Live-Support.png'
import Monitoring from '../../../assets/Monitoring-Icon.png'


function Packages() {
  return (
    <section className=" packages-bg py-12">
        <h1 className=" text-center mx-auto text-black  text-2xl lg:text-4xl w-4/5 py-12">
            ALL OUR PACKAGES INCLUDE
        </h1>
        <div className='container mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-12 py-6'>
            <div className='bg-white text-center py-16 rounded-tl-lg rounded-br-lg drop-shadow-md hover:drop-shadow-lg hover:border-green hover:border'>
                <img className='mx-auto py-1' src={FullTransparency} alt='FullTransparency'/>
                <h3 className='font-bold py-1'>Full Transparency</h3>
                <p className='mx-auto text-xs font-light w-3/4 py-1 leading-relaxed'>We'll provide you with monthly reporting so you can keep track of everything we're doing, plus all the key stats.</p>
                {/* <p className='font-bold text-green'>Read More</p> */}
            </div>
            <div className='bg-white text-center py-16 rounded-tl-lg rounded-br-lg drop-shadow-md hover:drop-shadow-lg hover:border-green hover:border'>
                <img className='mx-auto py-1' src={BigData} alt='FullTransparency'/>
                <h3 className='font-bold py-1'>Fast Support</h3>
                <p className='mx-auto text-xs font-light w-3/4 py-1 leading-relaxed'>Need some critical changes made to your site? Need some information before a meeting first thing on a Monday Morning? No worries, drop us an email or a call and we'll get back to you fast.</p>
            </div>
            <div className='bg-white text-center py-16 rounded-tl-lg rounded-br-lg drop-shadow-md hover:drop-shadow-lg hover:border-green hover:border'>
                <img className='mx-auto py-1' src={LiveSupport} alt='FullTransparency'/>
                <h3 className='font-bold py-1 px-2'>Tailored Packages</h3>
                <p className='mx-auto text-xs font-light w-3/4 py-1 leading-relaxed'>Our packages are completely malleable. We'll take time to understand your requirements and put together a service that suits you. So you'll only ever be paying for what you really need.</p>
            </div>
            <div className='bg-white text-center py-16 rounded-tl-lg rounded-br-lg drop-shadow-md hover:drop-shadow-lg hover:border-green hover:border'>
                <img className='mx-auto py-1' src={Monitoring} alt='FullTransparency'/>
                <h3 className='font-bold py-1'>No Bull</h3>
                <p className='mx-auto text-xs font-light w-3/4 py-1 leading-relaxed'>Honest, to the point advice and action that gets you results. We won't bamboozle you with jargon. Our approach will not only improve your online visibility but also help to educate you in the world of Digital Marketing.</p>
            </div>
            
        </div>
        
    </section>
  );
}

export default Packages