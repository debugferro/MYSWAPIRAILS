import React from 'react';
// import { useQuery } from 'react-query';
import { BrowserRouter, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root'

import PublicRoutes from './PublicRoutes';
import NavigationBar from '../components/NavigationBar';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
          <Switch>
            <div className="container">
              <PublicRoutes />
            </div>
          </Switch>
      </BrowserRouter>
    </>
  );
}

export default hot(App);
