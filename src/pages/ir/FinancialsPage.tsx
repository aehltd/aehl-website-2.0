import React from "react";
import StockQuoteRow from "../../components/IRComponents/Quote";
import PressReleasesRow from "../../components/IRComponents/PressReleases";
import SECFilingsRow from "../../components/IRComponents/SECFilings";

const IRFinancialsPage = () => {
  return (
    <div id="container" className="container">
      <div id="stock" className="flex row">
        <StockQuoteRow />
      </div>
      <div
        className="bg-local flex w-full justify-center"
        style={{
          backgroundImage:
            "url('https://www.aehlus.com/png/img12.f4ed389f.png')",
        }}
      >
        <div id="sec" className="row">
          <SECFilingsRow />
        </div>
      </div>
    </div>
  );
};

export default IRFinancialsPage;
