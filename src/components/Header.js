import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <section className="hero is-black is-large">
        <div className="hero-head">
        <p>
          <a href="https://www.linkedin.com/in/markjenquine/" target="_blank">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="https://github.com/mjenquine" target="_blank">
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a href="mailto:mjenquine@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-envelope-open-text fa-2x"></i>
          </a>
        </p>
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-size-1 has-text-weight-bold">
              Mark Jenquine
            </h1>
            <h2 className="subtitle is-size-4">
              Full Stack Web Developer
            </h2>
          </div>
        </div>
      </section>
      )
  }
}

export default Header
