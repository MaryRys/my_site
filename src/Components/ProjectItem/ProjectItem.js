import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';

class ProjectItem extends React.Component {
  render() {
    const project = this.props;
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="" alt="Card image cap" />
        <CardBody>
          <CardTitle>{project.title}</CardTitle>
          <CardText>{project.description}</CardText>
          <CardText>{project.technologiesUsed}</CardText>
          <Button className="githubButton">View on Github</Button>
        </CardBody>
      </Card>
    </div>
  );
  }
};

export default ProjectItem;