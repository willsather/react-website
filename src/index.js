import React from 'react';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from "react-router-dom"
import { router } from "./router";
import './app.css'

const root = createRoot(document.getElementById('root')); // createRoot(container!) if you use TypeScript

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
