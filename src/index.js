import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";

const Header = () => {
  const [clicked, setClicked] = useState(false)

  return <Fragment>
<h1>Splitting Chunks</h1>
<p>Splitting Chunks: With the `optimization: splitChunks: chunks 'all'`, react gets split from the rest of the app. 56% of the react bundle goes unused.</p>

<h1>Leveraging Fragmen</h1>
<p>55% of the react bundle goes unused.</p>

<p>Clicked: {clicked.toString()}</p>

<h1>SetState && Button Click</h1>
<p>With a button that is clickable && a state to update, the un-used react elements go down to 41% after clicking.</p>

<button onClick={(e) => setClicked(true)}>Click</button>
</Fragment>
}

ReactDOM.render(
    <Header />,
  document.getElementById("root")
);
