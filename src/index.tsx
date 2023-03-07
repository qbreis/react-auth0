import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import "./index.css";

const domain:string = process.env.REACT_APP_AUTH0_DOMAIN!; // Use type string + non-null assertion operator !
const clientId:string = process.env.REACT_APP_AUTH0_CLIENT_ID!; // Use type string + non-null assertion operator !

ReactDOM.render(
    <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
            redirect_uri: window.location.origin,
        }}
        {/* Documentation: https://auth0.com/docs/libraries/auth0-react */}
    >
        <App />
    </Auth0Provider>,
    document.getElementById("root")
);

/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/
