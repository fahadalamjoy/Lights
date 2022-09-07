import React from 'react'
import ToThePoint from '../../../assets/ToThePoint.jpg'
import Leadership from './Leadership';
import Packages from './Packages';

function SecondSections() {
  return (
    <>
    <section>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 py-10">
        <div className="my-auto p-4">
          <h1 className="text-2xl  lg:text-4xl py-2 font-medium">
            TO THE POINT SERVICES
          </h1>
          <h4 className="text-2xl text-green lg:text-xl py-2 font-medium">
            HONEST ADVICE & ACTION THAT GETS RESULTS
          </h4>
          <p className="py-2 w-11/12 font-light">
            Our Mission is to engage experts to delivery exceptional offshore
            staffing solutions that go beyond simple cost reductions. LIGHTS
            Global Services (LGS) We at LIGHTS Global Services (LGS), are a
            global outsourcing solutions company who has ready teams of
            Chartered Accountants, Cost and Management Accountants, Junior
            Accountants, Barristers, Advocates, Lawyers, Office Support
            Executives and Business Consultants who have a proven record of
            accomplishments in providing excellent service and practical
            guidance that will support you in accomplishing your corporate
            objectives. We provide all types of outsourcing solutions for
            business to reduce their cost of operations and help them focus on
            their primary objective. LGS is a concern of Lights Communication
            having offices in multiple locations across Bangladesh. Our
            reputation is founded on the simple philosophy of personal, prompt
            service and advice relevant to the modern requirements of business
            around the world. Your subscription with our service would get you
            paired with our team of dedicated highly vetted professionals, who
            would learn your business practice and processes to start providing
            the best plausible solutions.
          </p>
        </div>
        <div className='self-center'>
          <img src={ToThePoint} alt="BPO" />
        </div>
      </div>
    </section>
    <Packages/>
    <Leadership/>
    </>
  );
}

export default SecondSections