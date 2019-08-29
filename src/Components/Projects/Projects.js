import React from 'react';
import dataGetter from '../../helpers/dataGetter';
import ProjectItem from '../ProjectItem/ProjectItem';
import './Projects.scss';

class Projects extends React.Component {
  state = {
    projects : []
  }

  componentDidMount(){
      dataGetter.getAllProjectsFromDb()
        .then((projects) => {
          this.setState({ projects });
        })
        .catch(err => console.error('error with projects GET', err));
  }
  

  render() {
    const { projects } = this.state;

    const buildProjects = projects.map(project => (
      <ProjectItem
      project={project}
      screenshot={project.screenshot}
      title={project.title}
      description={project.description}
      technologiesUsed={project.technologiesUsed}
      key={project.id}
      />
    ));

    return(
      <div className="projectsContainer container">
        <div className="column">
          <h1>Check out my Projects</h1>
          <div className="projects">
            { buildProjects }
          </div>
        </div>
      </div>
    )
  }
}

export default Projects;