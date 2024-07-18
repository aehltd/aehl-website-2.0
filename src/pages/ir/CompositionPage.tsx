import React from "react";
import CommitteeComposition from "../../components/IRComponents/CommitteeComposition";
import DiversityMatrix from "../../components/IRComponents/DiversityMatrix";

const IRCompositionPage = () => {
  return (
    <div className="container">
      <div className="row">
        <h1>Committee Composition</h1>
        <p>
          Below is the list of the Board of Directors and their positions in
          each committee.
        </p>
        <div className="my-4">
          <div className="flex space-x-2">
            <p className="text-black font-bold">C </p>
            <p>-</p>
            <p>Chairman</p>
          </div>
          <div className="flex space-x-2">
            <p className="text-slate-500 font-bold">M</p>
            <p>-</p>
            <p>Member</p>
          </div>
        </div>
        <CommitteeComposition />
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
        <h1>Diversity Matrix</h1>
          <p className="mb-4">
            Below is the diversity matrix of the Board of Directors.
          </p>
          <DiversityMatrix />
        </div>
      </div>
    </div>
  );
};

export default IRCompositionPage;
