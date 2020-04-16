import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class Tags extends Component {
  render() {
    return (
      <div>
        <div className="tags is-centered">
          <span className="tag tg">HTML5</span>
          <span className="tag tg">CSS</span>
          <span className="tag tg">Javascript</span>
          <span className="tag tg">Express</span>
          <span className="tag tg">Node.js</span>
          <span className="tag tg">React</span>
          <span className="tag tg">MongoDB</span>
          <span className="tag tg">PostgreSQL</span>
          <span className="tag tg">Github</span>
          <span className="tag tg">jQuery</span>
          <span className="tag tg">Ruby on Rails</span>
          <span className="tag tg">Bootstrap</span>
          <span className="tag tg">Bulma</span>
          <span className="tag tg">Flexbox</span>
        </div>
        <div className="columns">
          <div className="column is-one-quarter is-offset-one-quarter has-text-centered">
            <button class="button is-light">
              <Link to="/resume">Resume</Link>
            </button>
          </div>
          <div className="column is-one-quarter has-text-centered">
            <button class="button is-light">
              <Link to="/projects">Projects</Link>
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Tags
