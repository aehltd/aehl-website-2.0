import React from "react";
import QModComponent from "../../components/QModWidget";
import QModFooter from "../../components/QModFooter";

const IRNewsPage = () => {
  const params = {
    lang: "en",
    socialshare: true,
    resultsPerPage: 10,
    excludeTopics: "NONCOMPANY",
    noSrc: "qmr",
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
    symbol: "AEHL"
  };

  return (
    <div id="container" className="container">
      <div className="flex w-full justify-center bg-slate-400">
        <div className="row">
          <h1 className="text-white">Newsroom</h1>
        </div>
      </div>
      <div
        className="bg-local flex w-full justify-center"
        style={{
          backgroundImage:
            "url('https://www.aehlus.com/png/img12.f4ed389f.png')",
          backgroundSize: "cover",
        }}
      >
        <div className="row">
          <QModComponent tool="fullnewssummary" params={JSON.stringify(params)} />
        </div>
        <div className="row">
          <QModFooter />
        </div>
      </div>
    </div>
  );
};

export default IRNewsPage;
