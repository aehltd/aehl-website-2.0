import React from "react";

const IRContactPage = () => {
  return (
    <div id="container" className="container">
      <div className="flex w-full justify-center bg-slate-400">
        <div className="row">
          <h1 className="text-white">Contact Investor Relations</h1>
        </div>
      </div>
      <div className="row">
        <div className="space-y-4">
          <h2>
            All investor inquiries should be directed towards our IR department.
          </h2>
          <div>
            <h2>Phone</h2>
            <p>+1 (646) 694 - 8538</p>
          </div>
          <div>
            <h2>Email</h2>
            <p>ir@aehltd.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IRContactPage;
