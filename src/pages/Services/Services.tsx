import React from 'react'
import "./Services.css";
import gain from "../../assets/gain.jpg"
import unique from "../../assets/unique.png"
import clearity from "../../assets/clearity.png"
import repeat from "../../assets/repeat.png"
import beating from "../../assets/beating.png"
import OurService from './Sections/OurService';
import ServicesDetails from './Sections/Services';
import DigitalMarketing from './Sections/DigitalMarketing';
import Footer from '../Footer/Footer';

function Services() {
  return (
    <>
      <section className="lg:h-80 text-gray-600 pt-14 body-font services-img">
        <h1 className="container text-center mx-auto text-white  text-4xl lg:text-6xl w-4/5">
          At the heart of branding is a journey of self-discovery.
        </h1>
      </section>
      <div className="pt-14">
        <h2 className="container text-center mx-auto font-extralight text-black  text-2xl lg:text-2xl w-4/5">
          WE ARE AN ECOSYSTEM THAT LEARNS, GROWS AND EVOLVES WITH YOUR BRAND.
        </h2>
        <h1 className="container text-center mx-auto font-bold text-black  text-4xl lg:text-4xl w-4/5">
          WHAT YOU CAN EXPECT TO GAIN
        </h1>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  items-center  ">
          <div>
            <img src={gain} alt="gain" />
          </div>
          <div className='py-8 lg:ml-14 lg:pt-14 lg:mt-16 lg:pl-8'>
                    <div className="flex lg:py-4 ">
                    <div>
                        <img className='w-full s-icon mt-8' src={unique} alt="gain" />
                    </div>
                    <div>
                        <h2 className='lg:text-xl font-bold lg:py-2 lg:px-4'>UNIQUE BRAND RECOGNITION</h2>
                        <p className='lg:text-xl w-full font-light py-1 px-4 xl:w-3/3'>
                        A powerfully positioned brand can almost instantaneously
                        catapult your margins to bigger and better heights.
                        </p>
                    </div>
                    </div>
                    <div className="flex py-2 lg:py-4">
                    <div>
                        <img className=' s-icon mt-8' src={clearity} alt="gain" />
                    </div>
                    <div>
                        <h2 className='lg:text-xl font-bold lg:py-2 lg:px-4'>CLARITY AND BUSINESS FOCUS</h2>
                        <p className='lg:text-xl w-full font-light py-1 px-4 xl:w-3/3'>
                        At the cornerstone of any robust business strategy is a brand that draws intensely on its founding values and beliefs.
                        </p>
                    </div>
                    </div>
                    <div className="flex py-2 lg:py-4">
                    <div>
                        <img className='w-full s-icon mt-8' src={repeat} alt="gain" />
                    </div>
                    <div>
                        <h2 className='lg:text-xl font-bold lg:py-2 lg:px-4'>REPEAT CUSTOMERS</h2>
                        <p className='lg:text-xl w-full font-light py-1 px-4 xl:w-3/3'>
                        A powerfully positioned brand can almost instantaneously catapult your margins to bigger and better heights.
                        </p>
                    </div>
                    </div>
                    <div className="flex py-2 lg:py-4">
                    <div>
                        <img className='w-full s-icon mt-8' src={beating} alt="gain" />
                    </div>
                    <div>
                        <h2 className='lg:text-xl font-bold lg:py-2 lg:px-4'>REPEAT CUSTOMERS</h2>
                        <p className='lg:text-xl w-full font-light py-1 px-4 xl:w-3/3'>
                        A powerfully positioned brand can almost instantaneously catapult your margins to bigger and better heights.
                        </p>
                    </div>
                    </div>
            
          </div>
        </div>
      </div>
      <OurService/>
      <ServicesDetails/>
      <DigitalMarketing/>
      <Footer/>
    </>
  );
}

export default Services