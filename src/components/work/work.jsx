import { Row, Col } from 'react-bootstrap';
import { projects } from '../projects';
export const Work = () => {
  return (
    <Row className='section'>
      <h1 className='text-center'>Work</h1>
      {projects.map((project) => (
        <Col
          className='grid'
          key={project.title}
          sm={12}
          md={12}
          lg={6}>
          <h2>{project.title}</h2>
          <img
            src={project.image}
            className='project-img'
            alt={project.alt}
          />
          <p>{project.description}</p>
          <div className='vstack align-items-center'>
            <a href={project.links.github}>See project on GitHub</a>
            <a href={project.links.liveDemo}>Live Demo</a>
          </div>
        </Col>
      ))}
    </Row>
  );
};
