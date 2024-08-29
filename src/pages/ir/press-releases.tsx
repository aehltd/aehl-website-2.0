import QMod from "@/components/QMod";
import QModFooter from "@/components/QModFooter";

export default function IRNews() {
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
    symbol: "AEHL",
  };

  return (
    <div id="container" className="container">
      <div className="flex w-full justify-center bg-gray-500">
        <div className="row">
          <h1 className="text-white">Newsroom</h1>
        </div>
      </div>

      <div className="row">
        <QMod
          tool="fullnewssummary"
          params={JSON.stringify(params)}
          datatracked
        />
      </div>

      <div
        className="bg-local flex flex-col w-full items-center"
      >
        <div className="row">
          <QModFooter />
        </div>
      </div>
    </div>
  );
}
