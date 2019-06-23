import React from 'react';
import Navigation from './components/navigation/index';
import { BrowserRouter } from 'react-router-dom';
import './styles/css/main.css';
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation></Navigation>
      </div>
    </BrowserRouter>
  );
};

export default App;
