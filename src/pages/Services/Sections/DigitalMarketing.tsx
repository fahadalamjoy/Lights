import React from 'react'
import Digital from "../../../assets/digital.jpg";
import DataEntry from "../../../assets/data-entry.jpg";


function DigitalMarketing() {
  return (
    <section className="py-6">
      <h1 className="lg:text-4xl font-bold pt-10 text-center text-black py-6">
        Digital Marketing Solutions
      </h1>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 py-2">
        <div className="my-auto p-4">
          <p className="py-2 w-11/12 font-light">
            Marketing has changed more in the past 10 years than it had in the
            previous 100—launching us out of the age of TV spots and print ads
            and into the age of websites, online video, social media, and
            Google. Consumers today are connected to the web 24/7—U.S. adults
            now spend upwards of 6 hours per day consuming digital media, and
            that doesn’t count those whose jobs are internet-dependent
          </p>
          <p className="py-2 font-light w-11/12">
            How do you turn these online consumers into paying customers? With
            top-rated internet marketing services from an award-winning online
            marketing company. Your website is arguably your most important
            marketing asset and should serve as your 24/7 online sales
            representative. But how easily can it be found?
          </p>
          <p className="py-2 font-bold">Service Provided:</p>

          <ul className="py-0 font-medium">
            <li>SEO</li>
            <li>Social Media Management</li>
            <li>Social Media Marketing & Advertisement</li>
            <li>Search Engine Marketing (Ad campaigns)</li>
            <li>Email Marketing</li>
            <li>SEO Copywriting</li>
            <li>SEO Content Writing</li>
          </ul>
        </div>
        <div>
          <img className="p-6" src={Digital} alt="BPO" />
        </div>
      </div>
      
      <h1 className="lg:text-4xl font-bold pt-10 text-center text-black py-6">
        Data Entry Solutions
      </h1>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 py-10">
        <div>
          <img src={DataEntry} alt="BPO" />
        </div>

        <div className="my-auto p-4">
          <p className="py-2 w-11/12 font-medium">
            Experience working with a variety of word processors, spreadsheets, CRM databases, ERP systems, and a range of record management software.
          </p>
          <p className="py-2 w-11/12 font-medium">
            Skilled with a particular focus on data integrity and speed, along with an excellent typing speed of a minimum of 70 WPM and an accuracy rating of 99.5%.
          </p>
          <p className="py-2 font-medium">
            Skilled with a particular focus on data integrity and speed, along with an excellent typing speed of a minimum of 70 WPM and an accuracy rating of 99.5%.
          </p>
          <p className="py-2 font-medium">
            Equipped with the skills required to enter several types of coded, statistical, and financial information.
          </p>
          <p className="py-2 font-medium">
            Knowledge of relevant software packages including Microsoft Word, PowerPoint, Excel, Access, Project, and Open Office.
          </p>
          
        </div>
      </div>
    </section>
  ); 
}

export default DigitalMarketing