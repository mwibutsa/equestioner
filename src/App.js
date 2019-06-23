import React from 'react';
import Navigation from './components/navigation/index';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import './styles/css/main.css';
import HomePage from './components/header';
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation></Navigation>
        <Switch>
          <Route to="/" component={HomePage}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
