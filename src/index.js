import React, { Fragment, useState, Suspense, lazy } from "react";
import ReactDOM from "react-dom";

const Box = lazy(()=> import('./Box'));

const Header = () => {
  const [clicked, setClicked] = useState(false)
  const [see, setSee] = useState(false)

  return <Fragment>
    <h1>Splitting Chunks</h1>
    <p>Splitting Chunks: With the `optimization: splitChunks: chunks 'all'`, react gets split from the rest of the app. 56% of the react bundle goes unused.</p>

    <h1>Leveraging Fragmen</h1>
    <p>55% of the react bundle goes unused.</p>

    <p>Clicked: {clicked.toString()}</p>

    <h1>SetState && Button Click</h1>
    <p>With a button that is clickable && a state to update, the un-used react elements go down to 41% after clicking.</p>

    <button onClick={(e) => {
      setClicked(true)
      setSee(true)
    }}>Click</button>


    {see === true && <Suspense fallback={<p>loading...</p>}>
      <Box />
    </Suspense>}

    <h1>Suspense && Lazy loading</h1>
    <p>Initial load: React unused = 48%: MORE than without lazy</p>
    <p>After loading lazy bundle: React unused = 35%</p>

  </Fragment>
  }

ReactDOM.render(
    <Header />,
  document.getElementById("root")
);
