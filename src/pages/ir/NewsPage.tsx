import React from "react";
import PressReleasesRow from "../../components/IRComponents/PressReleases";
const IRNewsPage = () => {
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
          <h1 className="mb-4">Press Releases</h1>
          <PressReleasesRow />
        </div>
      </div>
    </div>
  );
};

export default IRNewsPage;
