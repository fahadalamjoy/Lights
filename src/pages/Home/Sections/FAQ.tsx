import React from 'react'
import According from '../../../components/According'
import Outsourcing from '../../../assets/Outsourcing-Services.png'

function FAQ() {
  return (
    <>
        <div className='container mx-auto items-center text-center py-10'>
            <h1 className='text-xl sm:text-3xl lg:text-5xl pt-10'>Frequently Asked <span className='text-green '> Questions</span></h1>  
            <p className='w-5/6 lg:w-4/6 mx-auto leading-normal pt-2'>- We offer customized solutions to meet customer's unique business needs.</p>  
      </div>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-14 items-center p-5 lg:px-14'>
        <div>
            <img src={Outsourcing} alt="outsoursing-img"/>
        </div>
        <div >
            <According />
        </div>
      </div>
    </>
  )
}

export default FAQ