import React from 'react'
import icon1 from '../../../assets/icon1.png'

function FourthSection() {
  return (
    <>
      <div className='container mx-auto items-center text-center py-10'>
            <h1 className='text-xl sm:text-2xl lg:text-5xl	'>Why Choose <span className='text-green '> Lights Global Solutions</span></h1>  
            <p className='w-5/6 lg:w-4/6 mx-auto leading-normal pt-10'>- We offer customized solutions to meet customer's unique business needs.</p>  
            <p className='w-5/6 lg:w-4/6 mx-auto leading-normal pt-1'>- Our clients see tangible results from our dedicated and experienced team of consultants.</p>  
            <p className='w-5/6 lg:w-4/6 mx-auto leading-normal pt-1'>- We provide low cost and highly scalable services. - We have the expertise of working with global companies.</p>  
            <p className='w-5/6 lg:w-4/6 mx-auto leading-normal pt-1'>- We have the flexibility to tailor our services to our customer's needs.</p>  
            <p className='w-5/6 lg:w-4/6 mx-auto leading-normal pt-1'>- Our team of experts has the knowledge, skills, and expertise to develop and deliver business solutions.</p>  
            <p className='w-5/6 lg:w-4/6 mx-auto leading-normal pt-1'>- We deliver more than our client expect by leveraging our deep domain expertise to create a value proposition where our customer can significantly reduce their overall costs and increase their productivity.</p>  
            <p className='w-5/6 lg:w-4/6 mx-auto leading-normal pt-1'>- Our extensive experience in working with global companies and delivering high-quality business insights and outsourcing solutions.</p>  
      </div>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center p-5 lg:px-14'>
        <div className='flex '>
          <div className='w-full'>
            <img  src={icon1} alt="logo1"/>
          </div>
          <div className='pl-3'>
            <h1 className='text-xl font-bold py-1'>Budget Friendly</h1>
            <p className='w-full lg:w-5/6 text-sm font-light py-1'>Expertly led outsourcing services under your budget. We custom design the plan to meet your business needs, which evidently helps in fulfilling your business needs.</p>
          </div>
        </div>
        <div className='flex '>
          <div className='w-full'>
            <img  src={icon1} alt="logo1"/>
          </div>
          <div className='pl-3'>
            <h1 className='text-xl font-bold py-1'>Quality Support</h1>
            <p className='w-full lg:w-5/6 text-sm font-light py-1'>Expertly led outsourcing services under your budget. We custom design the plan to meet your business needs, which evidently helps in fulfilling your business needs.</p>
          </div>
        </div>
        <div className='flex '>
          <div className='w-full'>
            <img  src={icon1} alt="logo1"/>
          </div>
          <div className='pl-3'>
            <h1 className='text-xl font-bold py-1'>100% Response Time</h1>
            <p className='w-full lg:w-5/6 text-sm font-light py-1'>Expertly led outsourcing services under your budget. We custom design the plan to meet your business needs, which evidently helps in fulfilling your business needs.</p>
          </div>
        </div>
        <div className='flex '>
          <div className='w-full'>
            <img  src={icon1} alt="logo1"/>
          </div>
          <div className='pl-3'>
            <h1 className='text-xl font-bold py-1'>Multilingualism</h1>
            <p className='w-full lg:w-5/6 text-sm font-light py-1'>Expertly led outsourcing services under your budget. We custom design the plan to meet your business needs, which evidently helps in fulfilling your business needs.</p>
          </div>
        </div>
        <div className='flex '>
          <div className='w-full'>
            <img  src={icon1} alt="logo1"/>
          </div>
          <div className='pl-3'>
            <h1 className='text-xl font-bold py-1'>Future Proof</h1>
            <p className='w-full lg:w-5/6 text-sm font-light py-1'>Expertly led outsourcing services under your budget. We custom design the plan to meet your business needs, which evidently helps in fulfilling your business needs.</p>
          </div>
        </div>
        <div className='flex '>
          <div className='w-full'>
            <img  src={icon1} alt="logo1"/>
          </div>
          <div className='pl-3'>
            <h1 className='text-xl font-bold py-1'>Knowledgeable</h1>
            <p className='w-full lg:w-5/6 text-sm font-light py-1'>Expertly led outsourcing services under your budget. We custom design the plan to meet your business needs, which evidently helps in fulfilling your business needs.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FourthSection