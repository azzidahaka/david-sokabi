import { Row, Col } from 'react-bootstrap';
import MotionDiv from '../MotionDiv';
import { projects } from '../projects';
export const Work = () => {
  return (
    <Row className='section'>
      <h1 className='text-center'>Work</h1>
      {projects.map((project, idx) => (
        <Col
          className='grid'
          key={project.title}
          sm={12}
          md={12}
          lg={6}>
          <MotionDiv
            threshold={0.3}
            initial={{ opacity: 0, x: idx % 2 === 0 ? '-20vw' : '20vw' }}
            inViewControl={{ opacity: 1, x: 0 }} // Slide in
            outViewControl={{ opacity: 0, x: idx % 2 === 0 ? '-20vw' : '20vw' }} // Slide out while partially visible
            transition={{ duration: 0.4 }}
            className='project'>
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
          </MotionDiv>
        </Col>
      ))}
    </Row>
  );
};
