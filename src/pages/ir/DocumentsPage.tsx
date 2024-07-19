import React from "react";
import Documents from "../../components/IRComponents/Documents";

const IRDocumentsPage = () => {
  return (
    <div id="container" className="container">
      {/* <div id="overview" className="row">
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
      > */}
      <div className="flex w-full justify-center bg-slate-400">
        <div className="row">
          <h1 className="text-white">Documents</h1>
        </div>
      </div>
      <div className="row">
        <Documents />
      </div>
      {/* </div> */}
    </div>
  );
};

export default IRDocumentsPage;
