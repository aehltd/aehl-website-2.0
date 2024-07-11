import React from "react";
import PressReleasesRow from "../../components/IRComponents/PressReleases";
import PresentationsRow from "../../components/IRComponents/Presentations";

const IRNewsPage = () => {
  return (
    <div id="container" className="container">
      <div id="press" className="row">
        <h1>IR News Page</h1>
        <p>Page under construction.</p>
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
          <PressReleasesRow />
        </div>
      </div>
      <div id="presentation" className="row">
        <PresentationsRow />
      </div>
    </div>
  );
};

export default IRNewsPage;
