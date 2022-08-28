import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Main from './Pages/Main';
// import Sidebar from './Pages/Sidebar';
// import Navbar from './Pages/Navbar';
// import Header from './Pages/Header';
import Content from './Pages/Content';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/custom.css";


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <>
    <Main />
  </>
);

