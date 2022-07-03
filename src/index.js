import React, { Fragment, useReducer, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";

import {
  headerInitState,
  headerReducer,
  headerReducerTypes
} from './state'
const Box = lazy(()=> import('./Box'));

const Header = () => {
  const [{ clicked, see }, dispatch] = useReducer(headerReducer, headerInitState);
  
  console.log('%c Header render', 'background-color: pink; color: black;');
  
  
  return <Fragment>
    <h1>Splitting Chunks</h1>
    <p>Splitting Chunks: With the `optimization: splitChunks: chunks 'all'`, react gets split from the rest of the app. 56% of the react bundle goes unused.</p>

    <h1>Leveraging Fragments</h1>
    <p>55% of the react bundle goes unused.</p>

    <p>Clicked: {clicked.toString()}</p>

    <h3>SetState && Button Click</h3>
    <p>With a button that is clickable && a state to update, the un-used react elements go down to 41% after clicking.</p>

    <button onClick={(e) => {
      dispatch({ type: headerReducerTypes.CLICK_BTN });
    }}>Click</button>


    {see === true && <Suspense fallback={<p>loading...</p>}>
      <Box />
    </Suspense>}

    <h1>Suspense && Lazy loading</h1>
    <p>Initial load: React unused = 48%: MORE than without lazy</p>
    <p>After loading lazy bundle: React unused = 35%</p>

  </Fragment>
  }

const rootContainer = createRoot(document.getElementById('root'));
rootContainer.render(<Header />);
