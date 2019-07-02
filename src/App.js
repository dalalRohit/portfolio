import React, { Component } from 'react';
import classes from './App.css';
import Auxi from './hoc/Auxi/Auxi';
import Layout from './components/Layout/Layout';
import { Route } from 'react-router-dom';

//Routes
import Main from './containers/Main/Main';
import About from './containers/About/About';
import Skills from './containers/Skills/Skills'
import Projects from './containers/Projects/Projects'
import Contact from './containers/Contact/Contact';

class App extends Component {
  render() {
    return (
      <Auxi>
        <Layout>
          <div className={classes.App}>
            <Route path="/" exact component={Main} />
            <Route path="/about" exact component={About} />
            <Route path="/skills" exact component={Skills} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/contact" exact component={Contact} />
          </div>
        </Layout>
      </Auxi>
    );
  }
}


export default App;