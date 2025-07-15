import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AuctionPage from './pages/AuctionPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/auction/:id" component={AuctionPage} />
      </Switch>
    </Router>
  );
}

export default App;
