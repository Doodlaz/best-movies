import React from 'react';
import 'antd/dist/antd.css'
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'

// import { Provider } from 'react-redux'


import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('app'),
)
