import React, {Component} from 'react';

const projects = [
  {
    title: "Student Reading Journal",
    description: "A reading log app for parents and children to track reading comprehension",
    url: "https://mj-express-mongo-example.herokuapp.com/logs",
    technology: "Node.js Mongoose Express EJS",
    image: "../images/studentreadingjournal.png"
  }
]
class Projects extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="cards">
            <a href="https://tranquil-everglades-83050.herokuapp.com/new/1">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="https://i.imgur.com/UV104if.png" alt="Placeholder image" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">Tosa MTB Trail Conditions</p>
                      <p className="subtitle is-6">React Apollo Graphql Prisma Node.js Bulma</p>
                    </div>
                  </div>
                  <div className="content">
                    A trail conditions log for local riders to add real time updates.
                  </div>
                </div>
              </div>
            </a>
            <a href="https://mj-express-mongo-example.herokuapp.com/logs">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="https://i.imgur.com/uGE1nQW.png" alt="Placeholder image" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">Student Reading Journal</p>
                      <p className="subtitle is-6">Node.js MongoDB Express EJS Bulma</p>
                    </div>
                  </div>
                  <div className="content">
                    A reading log app for parents and children to track reading comprehension.
                  </div>
                </div>
              </div>
            </a>
            <a href="https://enigmatic-mountain-68507.herokuapp.com/shop">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="https://i.imgur.com/INST4KK.png" alt="Placeholder image" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">React Ecommerce Mock</p>
                      <p className="subtitle is-6">React Node.js MongoDB Express Bootstrap</p>
                    </div>
                  </div>
                  <div className="content">
                    Online shop for boots. A group project utilizing github for CI/CD version control.
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects
