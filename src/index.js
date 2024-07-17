import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LogoWhatsapp from './../src/assets/image/WAI1.svg'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <button  className='whatsapp'><a target='_blank' rel='noreferrer' href='https://api.whatsapp.com/send/?phone=573103349616'> <img src={LogoWhatsapp} alt="wapp" /> </a></button>
    
  </React.StrictMode>
);


reportWebVitals();
