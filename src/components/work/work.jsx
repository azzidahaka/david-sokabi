import { Row, Col, Button } from 'react-bootstrap';
import MotionDiv from '../MotionDiv';
import { projects } from '../projects';
import { useNavigate, Link } from 'react-router-dom';
import { MyFlixCaseStudy } from './myflixcasestudy';

// Work component for the portfolio
// Displays a list of projects with their details and links
// Uses MotionDiv for animations and React-Bootstrap for layout
export const Work = () => {
  const navigate = useNavigate();

  return (
    <Row
      id='work'
      className='section'>
      <MotionDiv
        threshold={0.5} // Trigger when 50% of the element is visible
        initial={{ opacity: 0, x: '-20vw' }}
        inViewControl={{ opacity: 1, x: 0 }} // Slide in
        outViewControl={{ opacity: 0, x: '-10vw' }} // Slide out while partially visible
        transition={{ duration: 0.4 }}>
        <h1 className='text-center mt-5'>Work</h1>
      </MotionDiv>
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
            className='project vstack gap-4 px-4 py-4 align-items-center'>
            <h2>{project.title}</h2>
            <img
              src={project.image}
              className='project-img'
              alt={project.alt}
            />
            <p className='fs-5'>{project.description}</p>
            <div className='vstack gap-1 align-items-center '>
              <Button
                href={project.links.github}
                target='_blank'
                rel='noreferrer'>
                See project on GitHub
              </Button>
              <Button
                href={project.links.liveDemo}
                target='_blank'
                rel='noreferrer'>
                Live Demo
              </Button>
              {project.case === 'true' && (
                <Button onClick={() => navigate(project.caseLink)}>Case Study</Button>
              )}
              {project.case === 'MyFlix' && (
                <>
                  <Button
                    href='myflix-case-study'
                    onClick={() => (window.location.href = project.caseLink)}>
                    View MyFlix Case Study
                  </Button>
                  <Button href='#myflix-case-study'>Case Study</Button>
                </>
              )}
            </div>
          </MotionDiv>
        </Col>
      ))}
    </Row>
  );
};
