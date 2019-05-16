import React, { Component, Fragment } from "react";
import Head from "./components/Header";
//import { handleInitialData } from "../actions/shared";
import "./styles/App.css";
import "./styles/hover-min.css";
import New from "./components/New.jsx";
import Footer from "./components/Footer.jsx";
import Memorial from "./components/Memorial.jsx";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import { handleAddProject } from "./actions/projects";

class App extends Component {
  /*componentDidMount() {
    this.props.dispatch(handleInitialData());
  }*/
  render() {
    return (
      <Fragment>
        <Router>
          <div className="App">
            <Head />
            <div className="App-body">
              <Route path="/" exact component={Dashboard} />
              <Route path="/project/:id" component={Memorial} />
              <Route path="/new" component={New} />
            </div>
            <Footer />
          </div>
        </Router>
      </Fragment>
    );
  }
}

export default connect()(App);
