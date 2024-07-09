import React from "react";
import { FundamentalData, MiniChart } from "react-ts-tradingview-widgets";

const StockQuoteRow = () => {
  return (
    <div className="flex w-full space-x-8">
      <div className="flex flex-col w-[40%]">
        <div>
          <h1>Stock Quote</h1>
          <p>Page under construction.</p>
        </div>
        <div className="mt-auto">
          <FundamentalData symbol="AEHL" width="100%" height="300" />
        </div>
      </div>
      <div className="flex flex-col w-[60%]">
          <MiniChart symbol="AEHL" width="100%" height="400" dateRange="3M" />
      </div>
    </div>
  );
};

export default StockQuoteRow;
