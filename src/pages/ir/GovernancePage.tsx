import React from "react";
import Documents from "../../components/IRComponents/Documents";

const IRGovernancePage = () => {
  return (
    <div id="container" className="container">
      <div id="overview" className="row">
        <h1>Corporate Governance</h1>
        <p>Page under construction.</p>
      </div>
      <div
        className="bg-local flex w-full justify-center"
        style={{
          backgroundImage:
            "url('https://www.aehlus.com/png/img12.f4ed389f.png')",
          backgroundSize: "cover",
        }}
      >
        <div id="documents" className="row">
          <h1 className="mb-4">Documents</h1>
          <Documents />
        </div>
      </div>
    </div>
  );
};

export default IRGovernancePage;
