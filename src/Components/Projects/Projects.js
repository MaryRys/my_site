import React from 'react';
import dataGetter from '../../helpers/dataGetter';
import ProjectItem from '../ProjectItem/ProjectItem';

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
        <h1>
          Projects Page
          { buildProjects }
        </h1>
      </div>
    )
  }
}

export default Projects;