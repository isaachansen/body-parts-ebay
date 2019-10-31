import React, { Component } from "react";
import logo from "./logo.png";
import {connect} from 'react-redux';
import {setUser} from './ducks/reducer';
import { Switch, NavLink, Route, withRouter } from "react-router-dom";
import AuthComponent from "./components/AuthComponent";
import Profile from "./components/Profile";
import axios from 'axios';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div>
            <div>
              <img src={logo} alt="logo" />
            </div>
            <nav>
              <NavLink activeClassName="active" exact to="/">
                Home
              </NavLink>
              <NavLink activeClassName="active" to="/store">
                Store
              </NavLink>
              <NavLink activeClassName="active" to="/profile">
                Profile
              </NavLink>
              {this.props.user && <button onClick={() => {
                axios.delete('/auth/logout').then(()=> {
                  this.props.setUser(null);
                })
              }}>Log Out</button>}
            </nav>
          </div>
        </header>
        <Switch>
          <Route
            exact
            path="/"
            component={AuthComponent}
          />
          <Route
            path="/store"
            render={() => {
              return <div>Store</div>;
            }}
          />
          <Route
            path="/profile"
            component={Profile}
          />
          <Route
            path="*"
            render={() => {
              return <div>GET THAT SPOOKY BUTT OUTTA HERE</div>;
            }}
          />
        </Switch>
      </div>
    );
  }
}

function mapReduxStateToProps(reduxState) {
  return reduxState
}

const mapDispatchToProps = {
  setUser
}
const invokedConnect = connect(mapReduxStateToProps, mapDispatchToProps);

export default invokedConnect(withRouter(App));

