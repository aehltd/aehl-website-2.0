import React from "react";
import PresentationsRow from "../../components/IRComponents/Presentations";

const IREventsPresentationsPage = () => {
  return (
    <div className="container" id="container">
      <div className="flex w-full justify-center bg-slate-400">
        <div className="row">
          <h1 className="text-white">Events and Presentations</h1>
        </div>
      </div>
      <div className="row">
        <h1 className="mb-4">Upcoming Events</h1>
        <p>No events scheduled.</p>
      </div>
      <div
        className="bg-local flex w-full justify-center"
        style={{
          backgroundImage:
            "url('https://www.aehlus.com/png/img12.f4ed389f.png')",
          backgroundSize: "cover",
        }}
      >
        <div id="presentation" className="row">
          <h1 className="mb-4">Past Events</h1>
          <PresentationsRow />
        </div>
      </div>
    </div>
  );
};

export default IREventsPresentationsPage;
