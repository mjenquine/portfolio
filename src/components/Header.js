import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <section className="hero is-black is-large">
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
