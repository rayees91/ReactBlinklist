import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <Auth0Provider
    domain="dev-ytajxe91.us.auth0.com"
    clientId="6raK0ygOW3oWxdC67cxJtySbqdV6NXwz"
    redirectUri={window.location.origin}
  ></Auth0Provider> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
