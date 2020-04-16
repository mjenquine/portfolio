import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Tags from './components/Tags'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Footer from './components/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container is-widescreen">
          <Header />
          <br />
          <Tags />
          <br />
          <Route path='/resume' component={Resume} />
          <Route path='/projects' component={Projects} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
