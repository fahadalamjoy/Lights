import React from "react";
import "./Home.css";
import FAQ from "./Sections/FAQ";
import FourthSection from "./Sections/FourthSection";
import SecondSection from "./Sections/SecondSection";
import ThirdSection from "./Sections/ThirdSection";
import Down from '../../assets/down.png'
import Up from '../../assets/up.png'
import Footer from "../Footer/Footer";


function Home() {
  return (
    <>
    <section className=" text-gray-600 body-font background-img py-2 lg:py-8 overflow-hidden sm:h-screen ">
      <div className="container mx-auto lg:py-12 xl:py-18 py-6  items-center  ">
        <div className="lg:flex-grow  lg:pr-24 md:pr-16 flex flex-col pl-0 lg:pl-12 md:items-start md:text-left mb-16 md:mb-0 items-center ">
          <div>
            <h1 className='font-copper text-2xl xl:text-6xl	tracking-[.25em]'>A Trusted  <span className='text-green font-bold '> BPO</span></h1>  
            <h3 className='font-copper text-lg xl:text-2xl	tracking-[.25em] -mt-2'>who  <span className='text-green  '> will help</span></h3>  
          </div>
          <div className="xl:pt-6 sm:pt-2">
            <div className="flex pl-6">
              <img src={Down} alt='Down'/>
              <h3 className='py-4 pl-4 font-copper text-xl	tracking-[.25em]'>YOUR  <span className='text-green font-black '> COST</span></h3>  
            </div>
            <div className="flex pl-12">
              <img src={Up} alt='Down'/>
              <h3 className='py-4 pl-4 font-copper text-xl	tracking-[.25em]'>Your   <span className='text-green font-bold '> Productivity</span></h3>  
            </div>
          </div>
        </div>
      </div>
    </section>
    <SecondSection/>
    {/* <ThirdSection /> */}
    <FourthSection/>
    <FAQ/>
    <Footer/>
    </>
  );
}

export default Home;
