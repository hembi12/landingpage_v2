import React from 'react';
import ReactDOM from 'react-dom/client';
import { ParallaxProvider } from 'react-scroll-parallax'; // Importa el contexto de Parallax
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </React.StrictMode>
);

reportWebVitals();
