import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import connection from '../../helpers/connection';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';

import Home from '../Home/Home';
import Projects from '../Projects/Projects';

class App extends React.Component {
  componentDidMount() {
    connection();
  }

  render() {

    return (
      <div>
        <BrowserRouter>
            <React.Fragment>
                <div className="row">
                  <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/home' component={Home} />
                    <Route path='/projects' component={Projects} />
                  </Switch>
                </div>
            </React.Fragment>
          </BrowserRouter>
      </div>
    )
    }
};

export default App;
