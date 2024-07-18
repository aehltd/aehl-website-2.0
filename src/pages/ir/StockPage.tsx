import React from "react";
import {
  SingleTicker,
  AdvancedRealTimeChart,
  FundamentalData,
} from "react-ts-tradingview-widgets";

const IRStockPage = () => {
  return (
    <div id="container" className="container">
      <div className="row">
        <div className="flex w-full justify-between space-x-8">
          <div className="flex flex-col">
            <h1>Stock Information</h1>
            <p className="smalltext">
              AEHL New Energy, Inc. Ordinary Shares (AEHL)
            </p>
          </div>

          <div>
            <SingleTicker symbol="AEHL" />
          </div>
        </div>
        <AdvancedRealTimeChart
          symbol="AEHL"
          details
          range="3M"
          width="100%"
          allow_symbol_change={false}
          hide_side_toolbar
          hide_top_toolbar
        />
      </div>
      <div
        className="bg-local flex w-full justify-center"
        style={{
          backgroundImage:
            "url('https://www.aehlus.com/png/img12.f4ed389f.png')",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col row h-96">
          <FundamentalData symbol="AEHL" width="100%" height="100%" />
        </div>
      </div>
    </div>
  );
};

export default IRStockPage;
