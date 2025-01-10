import React from "react";
import "../css/page.css";
import Nav from "./Nav.js";
import LeftPane from "./LeftPane.js";
import RightPane from "./RightPane.js";

function Home() {
  return (
    <div className="pageLayout">
      <Nav />
      <LeftPane />
      <RightPane />
    </div>
  );
}

export default Home;
