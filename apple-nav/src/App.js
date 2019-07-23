import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import { Route } from 'react-router-dom';

import NavWrapper from "./components/Nav/NavWrapper";
import ContentContainer from "./components/ContentContainer"

function App() {
  return (
    <div className="App">
      <NavWrapper />
      <ContentContainer />      
    </div>
  );
}

export default App;
