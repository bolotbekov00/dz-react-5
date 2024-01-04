import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Marketplace from "./component/Marketplace.jsx";
import {Provider} from "react-redux";
import store from "./store/store.js";
import Navbar from "./component/Nav.jsx";



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
          <Navbar/>
          <Marketplace/>
      </Provider>
  </React.StrictMode>
)