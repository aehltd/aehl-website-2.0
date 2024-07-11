import React from "react";
import BoardRow from "../../components/IRComponents/Board";

const BoardPage = () => {
  return (
    <div id="container" className="container">
      <div className="row w-full">
        <h1>Board of Directors</h1>
      </div>
      <BoardRow />
    </div>
  );
};

export default BoardPage;