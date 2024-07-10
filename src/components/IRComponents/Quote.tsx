import React from "react";
import { FundamentalData, MiniChart } from "react-ts-tradingview-widgets";

const StockQuoteRow = () => {
  return (
    <div className="flex w-full space-x-8 h-96">
      <div className="flex flex-col justify-between w-[40%]">
        <div>
          <h1>Stock Quote</h1>
          <p>Page under construction.</p>
        </div>
        <div className="h-[60%]">
        <FundamentalData symbol="AEHL" width="100%" height="100%" />
        </div>
      </div>
      <div className="w-[60%]">
          <MiniChart symbol="AEHL" width="100%" height="100%" dateRange="3M" />
      </div>
    </div>
  );
};

export default StockQuoteRow;
