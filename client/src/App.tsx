import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Inbox from './components/Inbox';
import ComposeEmail from './components/ComposeEmail';
import EmailDetails from './components/EmailDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/compose" component={ComposeEmail} />
          <Route path="/email/:id" component={EmailDetails} />
          <Route path="/" exact component={Inbox} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;