import React,{StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './css/main.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
//Import Toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { icons } from './assets/icons'
import { Provider } from 'react-redux'
import Store from "./redux/store/Store";
import "react-datepicker/dist/react-datepicker.css";

require('dotenv').config();
// React.icons = icons
let store = Store();
const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider><ToastContainer />
  </StrictMode>,
  rootElement
);


