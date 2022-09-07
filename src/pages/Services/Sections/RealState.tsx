import React from "react";
import RealStateImg from "../../../assets/real-state.jpg";
import Media from "../../../assets/media-and-entertainment.jpg";
import Guard from "../../../assets/guard.jpg";
import Customer from "../../../assets/customer.jpg";

function RealState() {
  return (
    <>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 py-6">
        <div className="my-auto p-4">
          <h1 className="text-2xl lg:text-4xl py-2 ">Real Estate Industry</h1>
          <p className="py-2 w-11/12 font-light">
            We provide a number of business solutions to Real Estate Industry
            that is specialized to provide remote staffing and reduce their
            costs in the Administrative tasks.
          </p>
          <p className="py-2 font-medium">
            The type of outsourcing services we provide in this category
            includes:
          </p>
          <ul className="py-0 font-normal">
            <li>Administrative tasks</li>
            <li>Updating Property listing across various platforms</li>
            <li>
              Keeping track of buying and selling of properties and all related
              documents
            </li>
          </ul>
        </div>
        <div>
          <img src={RealStateImg} alt="BPO" />
        </div>
      </div>
      <h1 className="lg:text-4xl font-bold pt-10 text-center text-black py-6">
        Media And Entertainment Industry
      </h1>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 py-6">
        <div>
          <img className="p-6" src={Media} alt="BPO" />
        </div>
        <div className="my-auto p-4">
          <p className="py-2 w-11/12 font-light">
            Most of the organizations in the media and entertainment (M&E)
            sector strive to explore innovative business models to have scalable
            growth. M& E-business may be related to television, cinema, music,
            radio, news channels, film production houses, advertising companies,
            broadcasters, gaming companies, or publishing houses. Tasks such as
            staff training, commercial inventory management, scheduling,
            customer service, onscreen ad placements, etc. are quite
            time-consuming. Many organizations in this industry are now relying
            on back office outsourcing, a cost-effective and reliable solution
            to get quality back office support.
          </p>
          <p className="py-2 font-medium">
            M&E Benefits of Back Office Outsourcing
          </p>

          <ul className="py-0 font-medium">
            <li>Improve processes</li>
            <li>Enhance productivity</li>
            <li>Increase revenue</li>
            <li>Reduce operating costs</li>
            <li>Drive digital transformation</li>
          </ul>
        </div>
      </div>

      <h1 className="lg:text-4xl font-bold pt-10 text-center text-black py-6">
        Security Guard Back Office Support
      </h1>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 py-6">
        <div className="my-auto p-4">
          <p className="py-2 w-11/12 font-light">
            With a few easy clicks, distribute your resources in the most
            impactful way possible and manage risk and security across your
            operations. Pre-empt issues before they become problems with
            real-time data and keep an exact account of your operations using
            our all-encompassing Back-Office Suite software.
          </p>
          <p className="py-2 w-11/12 font-light">
            How do you guarantee that you have the right security guard at the
            right site at the right time? And how do you deal with last-minute
            changes in availability and attendance?
          </p>
          <p className="py-2 w-11/12 font-light">
            With a live overview of your guard shifts, organize your operations
            with a convenient view of officer availability, time-log tracking,
            officer skill profile to post matching, and quick and easy
            communication.
          </p>
        </div>

        <div>
          <img className="p-6" src={Guard} alt="BPO" />
        </div>
      </div>

      <h1 className="lg:text-4xl font-bold pt-10 text-center text-black py-6">
        Customer Care Support
      </h1>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 py-6">
        <div>
          <img className="p-6" src={Customer} alt="BPO" />
        </div>
        <div className="my-auto p-4">
          <p className="py-2 w-11/12 font-light">
            As the name implies this is companies hiring Inbound customer care
            agents from the outsourcing company to receive calls from customers
            and resolve their queries.
          </p>
          <p className="py-2 w-11/12 font-light">
            While your in-house staff is busy with the core customers facing
            operations functions, all of the administrative tasks can start to
            pile up
          </p>
          <p className="py-2 font-medium">
            Back-office support is very important to the overall operations of
            your business, but your employees simply do not have time to get
            around. This is where back-office outsourcing comes to the rescue.
            Not only can it help you get everything organized, it can also save
            you a lot of money along the way.
          </p>

          
        </div>
      </div>
    </>
  );
}

export default RealState;
