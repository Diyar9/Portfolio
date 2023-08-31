import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet>
        <title>Diyar's Portfolio</title>
        <link rel="icon" href={process.env.PUBLIC_URL + '/diyar.ico.png'} type="image/png" />
      </Helmet>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
