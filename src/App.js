import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './pages/login/login'
import Admin from './pages/admin/admin'
import 'antd/dist/antd.css';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/' component={Admin}></Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
