import React from 'react';
import myImg from '../../images/me.jpg';
import './Home.scss';


class Home extends React.Component {
  render() {
    return(
      <div className="homeContainer container">
        <h1>Homepage</h1>
        <div className="myImg">
          <img src={myImg} alt="headshot"></img>
        </div>

      </div>
    )
  }
}

export default Home;