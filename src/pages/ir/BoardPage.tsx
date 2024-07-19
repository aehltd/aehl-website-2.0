import React from "react";
import BoardRow from "../../components/IRComponents/Board";

const BoardPage = () => {
  return (
    <div id="container" className="container">
      <div className="flex w-full justify-center bg-slate-400">
        <div className="row">
          <h1 className="text-white">Board of Directors</h1>
        </div>
      </div>
      <BoardRow />
    </div>
  );
};

export default BoardPage;
