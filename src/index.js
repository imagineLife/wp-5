import React, { Fragment, useReducer, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { Header } from './components'

const rootContainer = createRoot(document.getElementById('root'));
rootContainer.render(<Header />);
