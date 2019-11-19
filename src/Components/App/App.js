import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import connection from '../../helpers/connection';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';

import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import MyNavbar from '../MyNavbar/MyNavbar';
import Tech from '../Technologies/Technologies';

class App extends React.Component {
  componentDidMount() {
    connection();
  }

  render() {

    return (
      <div className="appPage">
        <BrowserRouter>
            <React.Fragment>
                <MyNavbar />
                <div className="row">
                  <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/home' component={Home} />
                    <Route path='/projects' component={Projects} />
                    <Route path='/technologies' component={Tech} />
                  </Switch>
                </div>
            </React.Fragment>
          </BrowserRouter>
      </div>
    )
    }
};

export default App;
