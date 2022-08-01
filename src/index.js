import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/js/bootstrap.js'
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import 'flag-icon-css/css/flag-icons.min.css'
import App from './App';



// to prevent initial value on refresh
const loadingMarkup = (
  <div className='py-4 text-center' >
    <h2>Loading...</h2>
  </div>
)
ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Suspense>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
