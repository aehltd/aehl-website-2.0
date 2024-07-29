import React from "react";
import DiversityMatrix from "../../components/IRComponents/DiversityMatrix";

const IRDiversityPage = () => {
  return (
    <div className="container">
      <div className="flex w-full justify-center bg-slate-400">
        <div className="row">
          <h1 className="text-white">Diversity Matrix</h1>
        </div>
      </div>
      <div className="row">
        {/* <h1>Diversity Matrix</h1>
        <p className="mb-4">
          Below is the diversity matrix of the Board of Directors.
        </p> */}
        <DiversityMatrix />
      </div>
    </div>
  );
};

export default IRDiversityPage;