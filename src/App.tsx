import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Form from './views/Form';
import Users from './views/Users';

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Form} />
      <Route exact path="/users" component={Users} />
    </Switch>
  </BrowserRouter>
);

export default App;
