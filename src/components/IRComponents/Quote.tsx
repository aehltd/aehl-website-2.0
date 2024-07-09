import React from "react";
import { MiniChart } from "react-ts-tradingview-widgets";

const StockQuoteRow = () => {
  return (
    <>
      <div className="flex flex-col w-[45%] justify-center">
        <h1>Stock Quote</h1>
        <p>Page under construction.</p>
      </div>
      <div className="flex flex-col w-[55%]">
        <MiniChart symbol="AEHL" width="100%" height="270" dateRange="3M"/>
      </div>
    </>
  );
};

export default StockQuoteRow;
