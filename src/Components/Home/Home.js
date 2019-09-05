import React from 'react';
import myImg from '../../images/me.jpg';
import './Home.scss';

import { Nav, NavItem, NavLink } from 'reactstrap';


class Home extends React.Component {

  makeContacts = () => {
    return (
      <div>
        <Nav>
          <NavItem>
            <NavLink href="https://www.linkedin.com/in/maryrys"><i className="fab fa-linkedin fa-3x animated slideInDown"></i></NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/MaryRys"><i className="fab fa-github-alt fa-3x animated slideInDown"></i></NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="mailto: rys.mary@gmail.com"><i className="far fa-envelope fa-3x animated slideInDown"></i></NavLink>
          </NavItem>
        </Nav>
        <hr />
      </div>
    )
    };

  render() {
    return(
      <div className="homeContainer container">
        <h1 className="name animated slideInDown">Mary Rys</h1>
        <div className="container">
          <div className="row">
            <div className="myImg">
              <img src={myImg} alt="headshot"></img>
            </div>
            <div className="description">
              <p>
              I'm a California native, Nashville transplant with a B.S. in biology. 
              I'm a graduate Nashville Software School making a transition into a tech career. 
              Out of college I began working in public health conducting surveillance for West Nile Virus and Zika Virus. 
              I quickly began working with large amounts of data, and several softwares designed to track all this information. 
              After finding that none of these programs really met our needs, 
              I began to investigate how I could improve upon what I was handed, which lead me to learning some code and the rest is history!
              </p>
            </div>
            <div className="contacts container">
                <h3 className="contactsTitle">Contact Me</h3>
                {this.makeContacts()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;