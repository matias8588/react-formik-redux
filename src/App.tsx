import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Form from './components/test';
import Users from './views/Users';

const App: React.FC = () => (
  <div className="h-screen w-screen bg-gray-100">
    <div className="container h-full mx-auto flex justify-center items-center p-2 md:p-0">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Form} />
          <Route exact path="/users" component={Users} />
        </Switch>
      </BrowserRouter>
    </div>
  </div>
);

export default App;
