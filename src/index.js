import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CarProvider } from './Context'

ReactDOM.render(
  <CarProvider>
    <App />
  </CarProvider>,

  document.getElementById('root')
);

reportWebVitals();
