import React, { Component } from 'react';
import './App.css';
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Account from './components/pages/Account/Account';
import Kits from './components/pages/Kits/Kits';
import Packs from './components/pages/Packs/Packs';
import Home from './components/pages/Home/Home';

const RootApp = () => {
  return (
          <BrowserRouter>
              <AppWithRouter/>
          </BrowserRouter>
  )
};

export default RootApp;

class App extends Component {
  render() {
      return (
          <div className="App">
              <Routes>
                <Route path='/packs' element={<Packs />} />
                <Route path='/kits' element={<Kits />} />
                <Route path='/my-account' element={<Account />} />
                <Route path='/' element={<Home />} />
              </Routes>
          </div>
      );
  }
}

const AppWithRouter = withRouter(App);
function withRouter(App) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <App
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}
