import React, { Fragment } from "react";
import ReactDOM from "react-dom";

const Header = () => <Fragment>
<h1>Splitting Chunks</h1>
<p>Splitting Chunks: With the `optimization: splitChunks: chunks 'all'`, react gets split from the rest of the app. 56% of the react bundle goes unused.</p>
</Fragment>

ReactDOM.render(
    <Header />,
  document.getElementById("root")
);
