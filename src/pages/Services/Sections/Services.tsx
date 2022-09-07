import React from 'react'
import BPO from '../../../assets/bpo.jpg'
import Backoffice from '../../../assets/backoffice.jpg'
import RealState from './RealState';
import LegalProcess from './LegalProcess';

function Services() {
  return (
    <section>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 py-10">
        <div className="my-auto p-4">
          <h1 className="text-2xl lg:text-4xl py-2 ">
            Business Process Outsourcing
          </h1>
          <p className="py-2 w-11/12 font-light">
            We provide a number of business solutions to businesses that is
            specialized to provide remote staffing and reduce their costs in the
            front-end and back-end part of clients operations.
          </p>
          <p className="py-2 font-medium">
            The type of outsourcing services we provide in this category
            includes:
          </p>
          <ul className="py-0 font-normal">
            <li>Back Office Support</li>
            <li>Customer Care Support</li>
            <li>Omni-channel Support</li>
            <li>Virtual Assistance</li>
          </ul>
        </div>
        <div>
          <img src={BPO} alt="BPO" />
        </div>
      </div>
      <h1 className='lg:text-4xl font-bold pt-10 text-center text-black py-6'>Back Office Support</h1>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 py-10">
        <div className='self-center'>
          <img  src={Backoffice} alt="BPO" />
        </div>

        <div className="my-auto p-0">
          <p className="py-2 w-11/12 font-light">
            What is back office support? This is the part of operations that
            does not come face to face with the customer but their work enhances
            the customer’s experience and/or helps the company to keep a fluid
            process of their operations.
          </p>
          <p className="py-2 font-medium">
            This service has a wide variety of applications in different
            industries. In the following slides will provide examples of back
            office solutions that are provided to different industries.
          </p>
          <p>
            Client usually hires a team for their back-end solutions, team size
            depending on how big the client company is :
          </p>
          <ul className="py-0 font-medium">
            <li>Food Delivery Industry</li>
            <li>E-commerce Industry</li>
            <li>Updating and maintaining product items in the online store</li>
            <li>Fulfilling and Keeping track of orders</li>
            <li>Optimizing Product Lists</li>
            <li>Managing Pricing and Inventory</li>
            <li>Processing Returns</li>
          </ul>
        </div>
      </div>
      <RealState/>
      <LegalProcess/>
    </section>
  );
}

export default Services