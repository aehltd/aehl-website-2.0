import React from "react";
import QModComponent from "../../components/QModWidget";
import QModFooter from "../../components/QModFooter";

const IRFilingsPage = () => {
  const params = {
    lang: "en",
    socialshare: true,
    resultsPerPage: 10,
    excludeTopics: "NONCOMPANY",
    src: "qmr",
    summLen: 100,
    showLogo: false,
    lowHigh: false,
    videonews: true,
    showVideos: true,
    showSharingButtons: true,
    showThumbnail: false,
    dateHeadings: true,
    yearSelect: false,
    yearSelectNumYears: 2,
    yearSelected: 0,
    datePickerFormat: "Y-m-d",
    symbol: "AEHL",
  };

  return (
    <div id="container" className="container">
      <div className="flex w-full justify-center bg-slate-400">
        <div className="row">
          <h1 className="text-white">SEC Filings</h1>
        </div>
      </div>
      <div className="row">
        <QModComponent tool="filings" params={JSON.stringify(params)} />
      </div>
      <div className="row">
        <QModFooter />
      </div>
    </div>
  );
};

export default IRFilingsPage;
