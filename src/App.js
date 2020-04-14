import React, {Component} from 'react';
import Header from './components/Header'
import Tags from './components/Tags'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Footer from './components/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container is-widescreen">
        <Header />
        <br />
        <Tags />
        <br />
        <Projects />
        <Resume />
        <Footer />
      </div>
    )
  }
}

export default App;
