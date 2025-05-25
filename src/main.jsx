// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/lora/400.css';
import '@fontsource/lora/700.css';

// Import flag-icons CSS here
import 'flag-icons/css/flag-icons.min.css'; //

// Pagrindinis CSS failas
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);