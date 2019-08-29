import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';
import './ProjectItem.scss';

class ProjectItem extends React.Component {
  render() {
    const project = this.props;
  return (
    <div className="cardContainer">
      <Card>
        <CardImg className="cardImage" src={project.screenshot} alt="Project image" />
        <CardBody>
          <CardTitle className="cardTitle">{project.title}</CardTitle>
          <CardText className="cardText">{project.description}</CardText>
          <CardText className="cardText">Technologies: {project.technologiesUsed}</CardText>
          <Button className="githubButton">View on Github</Button>
        </CardBody>
      </Card>
    </div>
  );
  }
};

export default ProjectItem;