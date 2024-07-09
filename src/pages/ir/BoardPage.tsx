import React from "react";
import BoardRow from "../../components/IRComponents/Board";

const BoardPage = () => {
  return (
    <div id="container" className="container">
      <div id="overview" className="row">
        <h1>Board of Directors</h1>
      </div>
      <BoardRow />
    </div>
  );
};

export default BoardPage;