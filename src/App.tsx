import React from 'react';
// import Form from './views/Form';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Form from './components/test';
import Users from './views/Users';

const App: React.FC = () => (
  <div className="h-screen w-screen bg-gray-300">
    <div className="container h-screen mx-auto flex justify-center items-center p-2 md:p-0">
      <div className="border border-gray-300 p-6 grid grid-cols-1 gap-6 bg-white shadow-lg rounded-lg">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Form} />
            <Route exact path="/users" component={Users} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  </div>
);

export default App;
