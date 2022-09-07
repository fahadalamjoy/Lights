import React from 'react'
import Legal from '../../../assets/legal.jpg'


function LegalProcess() {
  return (
    <section>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 py-10">
        <div className="my-auto p-4">
          <h1 className="text-2xl lg:text-4xl py-2 ">
            Legal Process Outsourcing 
          </h1>
          <p className="py-2 w-11/12 font-light">
            Legal Research: Doing research and retrieving information that can
            support legal decision making. Involves collecting viable law
            references, incorporating citations to statutes and other similar
            cases in the briefs presented in court
          </p>
          <p className="py-2 font-medium">
            Medical Record Overview: For medical-legal lawsuits where lawyers
            need to review hundreds of medical records to understand key facts
            to prepare for trials, we can do the reviewing work and provide
            abridged results from the findings. Also involves medical chart
            review, sorting and categorizing medical records, and indexing and
            bookmarking
          </p>
        </div>
        <div>
          <img className='p-14' src={Legal} alt="BPO" />
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 py-14">
        
        <div className="my-auto p-4">
          <h1 className="text-2xl lg:text-4xl py-2 ">
            Accounting Outsourcing
          </h1>
          <ul className="py-0 text-sm font-normal">
            <li>- Bookkeeping and Catch up (Categorize, record and reconcile) in Accounting systems
(Quickbooks, Xero, SAP etc.)
</li>
            <li>- Bookkeeping and Clean-Up in Accounting systems (Quickbooks, Xero, SAP etc.)</li>
            <li>- Catch up of previous years financial transactions in Accounting systems (Quickbooks, Xero, sap etc)</li>
            <li>- Categorization, Classifications, and Reconciliation of up to 10 years transactions</li>
            <li>- Ongoing Monthly Bookkeeping Help in Accounting systems (Quickbooks, Xero, SAP etc.)</li>
            <li>- Setting Up Chart of Accounts in Accounting systems (Quickbooks, Xero, SAP etc.)</li>
            <li>- Record Invoices and Bills in any Accounting systems (Quickbooks, Xero, SAP etc.)</li>
            <li>- Vendors and Customers management</li>
            <li>- Financial Statements Preparation</li>
          </ul>
        </div>
        <div>
          <img className='p-14' src={Legal} alt="BPO" />
        </div>
      </div>
    </section>
  );
}

export default LegalProcess