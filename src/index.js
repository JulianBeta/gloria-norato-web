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
    <button  className='whatsapp'><a target='_blank' rel='noreferrer' href='https://api.whatsapp.com/send/?phone=573006822639'> <img src={LogoWhatsapp} alt="wapp" /> </a></button>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
