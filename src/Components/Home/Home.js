import React from 'react';
import { Button } from 'reactstrap'

class Home extends React.Component {
  render() {
    return(
      <div className="homeContainer container">
        <h1>Homepage</h1>
        <Button className="btn btn-info">Button</Button>
      </div>
    )
  }
}

export default Home;