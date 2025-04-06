// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// <<< NAUJI Fontsource šriftų importai >>>
import '@fontsource/montserrat/400.css'; // Montserrat Regular
import '@fontsource/montserrat/700.css'; // Montserrat Bold
import '@fontsource/lora/400.css';       // Lora Regular (jei reikia)
import '@fontsource/lora/700.css';       // Lora Bold (antraštėms)
// Galite importuoti ir kitus svorius, pvz., italic

// Pagrindinis CSS failas
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);