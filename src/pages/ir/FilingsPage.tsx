import React from "react";
import SECFilingsRow from "../../components/IRComponents/SECFilings";

const IRFilingsPage = () => {
  return (
    <div id="container" className="container">
      <div className="flex w-full justify-center bg-slate-400">
        <div className="row">
          <h1 className="text-white">SEC Filings</h1>
        </div>
      </div>
      <div id="sec" className="row">
        <SECFilingsRow />
      </div>
    </div>
  );
};

export default IRFilingsPage;
