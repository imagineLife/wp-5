import React from "react";
import ReactDOM from "react-dom";

const Header = () => <p>Splitting Chunks: With the `optimization: splitChunks: chunks 'all'`, react gets split from the rest of the app. 56% of the react bundle goes unused.</p>

ReactDOM.render(
    <Header />,
  document.getElementById("root")
);
