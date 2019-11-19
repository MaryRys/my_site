import React from 'react';
import './Technologies.scss';
import csharp from '../../images/tech/csharp-e7b8fcd4ce.png';
import jqueryImg from '../../images/tech/jquery1.png';
import reactImg from '../../images/tech/react.png';
import htmlcss from '../../images/tech/htmlcss.jpg';
import msSQL from '../../images/tech/msSQL.png';
import dotnet from '../../images/tech/msDOTNET.png';
import visualStudio from '../../images/tech/visualstudio.png';

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
              <img className="techImg" src={htmlcss} alt="HTML and CSS"></img>
            </div>
            <div className="singleTech">
              <i className="fab fa-sass fa-7x"></i>
            </div>
            <div className="singleTech">
              <img className="techImg" src={reactImg} alt="ReactJS"></img>
              <h5>ReactJS</h5>
            </div>
            <div className="singleTech">
              <i className="fab fa-github fa-7x"></i>
              <h5>Github</h5>
            </div>
            <div className="singleTech">
              <img className="techImg" src={csharp} alt="C#"></img>
            </div>
            <div className="singleTech">
              <img className="techImg" src={jqueryImg} alt="C#"></img>
            </div>
            <div className="singleTech">
              <img className="techImg" src={msSQL} alt="MS SQL Server"></img>
            </div>
            <div className="singleTech">
              <img className="techImg" src={dotnet} alt="MS .NET"></img>
            </div>
            <div className="singleTech">
              <img className="techImg" src={visualStudio} alt="MS Visual Studio"></img>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Tech;