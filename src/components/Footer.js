import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered ">
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
      </footer>
      )
  }
}

export default Footer
