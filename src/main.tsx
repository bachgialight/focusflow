import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import "./i18n.ts";
import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = "G-9G19PWWEJT";

ReactGA.initialize(GA_MEASUREMENT_ID);


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
