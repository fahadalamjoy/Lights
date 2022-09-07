import React from 'react'
import SecondSections from './Sections/SecondSections';
import "../About/About.css"
import Footer from '../Footer/Footer';

function About() {
  return (
    <>
    <section className="bg-green py-8">
      <div>
        <h1 className="container text-center mx-auto text-white  text-2xl lg:text-4xl w-4/5 py-2">
          ABOUT LIGHTS GLOBAL SERVICES
        </h1>
        <p className="container text-center mx-auto font-thin text-white  text-xl lg:text-xl w-5/7 px-2 lg:w-3/5 py-6">
          With LIGHTS Global Services (LGS), you get 360-degree service under
          one roof including all back-office, customer care, legal and financial
          compliance services required for your business to perform smoothly.
        </p>
        <div className='container mx-auto text-center py-2'>
        <button type='button' className=' bg-l-black hover:bg-white hover:text-green text-white  p-3 rounded'>
          GET IN TOUCH
        </button>
        </div>
      </div>
    </section>
    <SecondSections/>
    <Footer/>
    </>
  );
}

export default About