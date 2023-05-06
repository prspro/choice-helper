import React from 'react';
import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux';
import App from './App';
import "normalize.css";
import "./index.sass";

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
