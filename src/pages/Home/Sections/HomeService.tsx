import React from 'react'
import BackOffice from '../../../assets/BackOffice.png'
import Outsourcing from '../../../assets/Outsourcing.png'
import Media from '../../../assets/Media.png'
import RealState from '../../../assets/RealState.png'
import Legal from '../../../assets/Legal.png'
import Customer from '../../../assets/customer.png'
import Monitoring from '../../../assets/Monitoring-Icon.png'
import Marketing from '../../../assets/Marketing.png'
import Data from '../../../assets/Data.png'


function HomeService() {
  return (
    <section className=" packages-bg py-12">
        <h1 className=" text-center mx-auto text-black  text-2xl lg:text-4xl w-4/5 py-12">
          OUR SERVICES
        </h1>
        <div className='container mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-12 py-6'>
            <div className='bg-white text-center py-16 rounded-tl-lg rounded-br-lg drop-shadow-md hover:drop-shadow-lg hover:border-green hover:border'>
                <img className='mx-auto py-1' src={BackOffice} alt='FullTransparency'/>
                <h3 className='font-bold py-1'>Back Office Support</h3>
                <p className='mx-auto text-xs font-light w-3/4 py-1 leading-relaxed'>What is back office support? This is the part of operations that does not come face to face with the customer but their work enhances the customer’s experience and/or helps the company to keep a fluid process of their operations.</p>
                {/* <p className='font-bold text-green'>Read More</p> */}
            </div>
            <div className='bg-white text-center py-16 rounded-tl-lg rounded-br-lg drop-shadow-md hover:drop-shadow-lg hover:border-green hover:border'>
                <img className='mx-auto py-1' src={Outsourcing} alt='FullTransparency'/>
                <h3 className='font-bold py-1'>Business Process Outsourcing</h3>
                <p className='mx-auto text-xs font-light w-3/4 py-1 leading-relaxed'>We provide a number of business solutions to businesses that is specialized to provide remote staffing and reduce their costs in the front-end and back-end part of clients operations.</p>
            </div>
            <div className='bg-white text-center py-16 rounded-tl-lg rounded-br-lg drop-shadow-md hover:drop-shadow-lg hover:border-green hover:border'>
                <img className='mx-auto py-1' src={Media} alt='FullTransparency'/>
                <h3 className='font-bold py-1 px-2'>Media And Entertainment Industry</h3>
                <p className='mx-auto text-xs font-light w-3/4 py-1 leading-relaxed'>Most of the organizations in the media and entertainment (M&E) sector strive to explore innovative business models to have scalable growth. M& E-business may be related to television, publishing houses.</p>
            </div>
            <div className='bg-white text-center py-16 rounded-tl-lg rounded-br-lg drop-shadow-md hover:drop-shadow-lg hover:border-green hover:border'>
                <img className='mx-auto py-1' src={Customer} alt='FullTransparency'/>
                <h3 className='font-bold py-1'>Customer Care Support</h3>
                <p className='mx-auto text-xs font-light w-3/4 py-1 leading-relaxed'>As the name implies this is companies hiring Inbound customer care agents from the outsourcing company to receive calls from customers and resolve their queries.

While your in-house staff is busy with the core customers facing operations functions, all of the administrative tasks can start to pile up</p>
            </div>
            
        </div>
        <div className='container mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-12 py-6'>
            <div className='bg-white text-center py-16 rounded-tl-lg rounded-br-lg drop-shadow-md hover:drop-shadow-lg hover:border-green hover:border'>
                <img className='mx-auto py-1' src={Marketing} alt='FullTransparency'/>
                <h3 className='font-bold py-1'>Digital Marketing Solutions</h3>
                <p className='mx-auto text-xs font-light w-3/4 py-1 leading-relaxed'>Marketing has changed more in the past 10 years than it had in the previous 100—launching us out of the age of TV spots and print ads and into the age of websites, online video, social media, and Google. Consumers today are connected to the web 24/7—U.S. adults now spend upwards of 6 hours per day consuming digital media, and that doesn’t count those whose jobs are internet-dependent</p>
                {/* <p className='font-bold text-green'>Read More</p> */}
            </div>
            <div className='bg-white text-center py-16 rounded-tl-lg rounded-br-lg drop-shadow-md hover:drop-shadow-lg hover:border-green hover:border'>
                <img className='mx-auto py-1' src={Data} alt='FullTransparency'/>
                <h3 className='font-bold py-1'>Data Entry Solutions</h3>
                <p className='mx-auto text-xs font-light w-3/4 py-1 leading-relaxed'>Experience working with a variety of word processors, spreadsheets, CRM databases, ERP systems, and a range of record management software.Skilled with a particular focus on data integrity and speed, along with an excellent typing speed of a minimum of 70 WPM and an accuracy rating of 99.5%.</p>
            </div>
            <div className='bg-white text-center py-16 rounded-tl-lg rounded-br-lg drop-shadow-md hover:drop-shadow-lg hover:border-green hover:border'>
                <img className='mx-auto py-1' src={RealState} alt='FullTransparency'/>
                <h3 className='font-bold py-1 px-2'>Real Estate Industry</h3>
                <p className='mx-auto text-xs font-light w-3/4 py-1 leading-relaxed'>We provide a number of business solutions to Real Estate Industry that is specialized to provide remote staffing and reduce their costs in the Administrative tasks. The type of outsourcing services we provide in this category includes:
                  Administrative tasks
                  Updating Property listing across various platforms
                  Keeping track of buying and selling of properties and all related documents</p>
            </div>
            <div className='bg-white text-center py-16 rounded-tl-lg rounded-br-lg drop-shadow-md hover:drop-shadow-lg hover:border-green hover:border'>
                <img className='mx-auto py-1' src={Legal} alt='FullTransparency'/>
                <h3 className='font-bold py-1'>Legal Process Outsourcing</h3>
                <p className='mx-auto text-xs font-light w-3/4 py-1 leading-relaxed'>Legal Research: Doing research and retrieving information that can support legal decision making. Involves collecting viable law references, incorporating citations to statutes and other similar cases in the briefs presented in court</p>
            </div>
            
        </div>
    </section>
  );
}

export default HomeService