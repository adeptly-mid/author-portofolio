import React from "react";
import "../css/rightPane.css";
import "../css/page.css";
import Search from "./Search";

function RightPane() {
  return (
    <div className="rightPane">
      <div className="rightItem">
        <Search />
      </div>
    </div>
  );
}

export default RightPane;
