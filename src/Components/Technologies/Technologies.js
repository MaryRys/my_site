import React from 'react';
import './Technologies.scss';

class Tech extends React.Component {
  render() {
    return (
      <div className="techContainer container">
        <div className="column">
          <h1>
            Here's what I know
          </h1>
          <div className="techs container">
            <div className="singleTech">
              <i className="fab fa-js-square fa-7x"></i>
              <h5>Javascript</h5>
            </div>
            <div className="singleTech">
              <i className="fab fa-html5 fa-7x"></i>
              <h5>HTML5</h5>
            </div>
            <div className="singleTech">
              <i className="fab fa-css3-alt fa-7x"></i>
              <h5>CSS3</h5>
            </div>
            <div className="singleTech">
              <i className="fab fa-sass fa-7x"></i>
              <h5>Sass</h5>
            </div>
            <div className="singleTech">
              <i className="fab fa-github fa-7x"></i>
              <h5>Github version control</h5>
            </div>
            <div className="singleTech">
              <i className="fab fa-react fa-7x"></i>
              <h5>React JS</h5>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Tech;