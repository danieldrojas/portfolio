import React from 'react';
import Home from './containers/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Projects from './containers/Projects/Projects';
import { HashRouter as Router, Switch, Route, } from "react-router-dom";
// import NoMatch from './containers/NoMatch/NoMatch';
import Contact from './containers/Contact/Contact';
import Footer from './components/Footer/Footer'


function App() {
  return (
    <Router >
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />

      </Switch>
      <Footer />
    </Router>

  );
}

export default App;
