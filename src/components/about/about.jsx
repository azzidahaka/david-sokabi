import { Row, Card, Button } from 'react-bootstrap';
import MotionDiv from '../MotionDiv';
export const About = () => {
  return (
    <Row className='section about  justify-content-center align-items-center text-center '>
      <MotionDiv
        threshold={0.5} // Trigger when 20% of the element is visible
        initial={{ opacity: 0, x: '-20vw' }}
        inViewControl={{ opacity: 1, x: 0 }} // Slide in
        outViewControl={{ opacity: 0, x: '-10vw' }} // Slide out while partially visible
        transition={{ duration: 0.4 }}>
        <h1 className='align-text fs-1 fw-bolder'>About Me</h1>
        <p className='align-text fs-5'>
          I was born in Lagos, Nigeria, and am currently based in Canada. My journey into tech began at a
          young age, sparked by a childhood fascination with the world of technology, especially after
          watching <em>Spy Kids</em>. What started as curiosity quickly turned into a passion, and I decided
          to explore this further when my brother introduced me to CorelDRAW and Python. The joy of creating
          things with code ignited my enthusiasm, and I've been hooked ever since.
        </p>
      </MotionDiv>
      <MotionDiv
        threshold={0.5}
        initial={{ opacity: 0, x: '20vw' }}
        transition={{ duration: 0.5 }}
        inViewControl={{ opacity: 1, x: '0vw' }}
        outViewControl={{ opacity: 0, x: '10vw' }}>
        <h2 className='align-text fs-2 fw-bolder'>Background and Career Path</h2>
        <p className='align-text fs-5'>
          Although I initially envisioned myself as a mechanical engineer, my love for technology led me to
          pursue a career in full-stack web development. I’ve gained significant experience working with
          JavaScript, React, Node.js, Python, and MongoDB, honing my skills through hands-on projects that
          allow me to merge my technical expertise with my natural problem-solving mindset. I thrive in
          environments where I can tackle complex challenges and create solutions that truly make a
          difference.
        </p>
        <p className='align-text fs-5'>
          What excites me about this field is the endless possibilities for innovation. I find joy in
          problem-solving and in building applications that are not only functional but also intuitive and
          enjoyable to use. Whether I’m developing an API, optimizing code, or designing the client-side of a
          web app, I love the creative process that goes into making something truly unique.
        </p>
      </MotionDiv>

      <MotionDiv
        threshold={0.5} // Trigger when 20% of the element is visible
        initial={{ opacity: 0, x: '-20vw' }}
        inViewControl={{ opacity: 1, x: 0 }} // Slide in
        outViewControl={{ opacity: 0, x: '-10vw' }} // Slide out while partially visible
        transition={{ duration: 0.4 }}>
        <h2 className='align-text fs-2 fw-bolder'>My Approach to Work</h2>
        <p className='align-text fs-5'>
          When it comes to my approach to work, I value collaboration and effective communication. I believe
          that the best results come from working together, sharing ideas, and supporting each other. This was
          a key aspect of my previous role as a Technical Advisor, where I worked closely with customers to
          solve problems and provide solutions. I’ve brought these skills into my development work, and they
          continue to shape my collaborative approach to coding.
        </p>
      </MotionDiv>
      <MotionDiv
        threshold={0.5} // Trigger when 20% of the element is visible
        initial={{ opacity: 0, x: '20vw' }}
        inViewControl={{ opacity: 1, x: 0 }} // Slide in
        outViewControl={{ opacity: 0, x: '10vw' }} // Slide out while partially visible
        transition={{ duration: 0.4 }}>
        <h2 className='align-text fs-2 fw-bolder'>Outside of Work</h2>
        <p className='align-text fs-5'>
          Outside of work, I’m passionate about gaming and reading —especially fantasy and sci-fi genres.
          These interests fuel my imagination and creativity, helping me approach coding challenges with a
          fresh perspective.
        </p>
      </MotionDiv>

      <MotionDiv
        threshold={0.5} // Trigger when 20% of the element is visible
        initial={{ opacity: 0, x: '-20vw' }}
        inViewControl={{ opacity: 1, x: 0 }} // Slide in
        outViewControl={{ opacity: 0, x: '-10vw' }} // Slide out while partially visible
        transition={{ duration: 0.4 }}>
        <h2>Looking Ahead</h2>
        <p className='align-text fs-5'>
          As I continue to grow as a developer, I’m looking for opportunities that will challenge me, allow me
          to learn from talented teams, and enable me to contribute to impactful projects. Whether in a
          full-time, part-time, or freelance capacity, I’m always eager to collaborate and create innovative
          web solutions.
        </p>{' '}
      </MotionDiv>

      <MotionDiv
        threshold={0.5} // Trigger when 20% of the element is visible
        initial={{ opacity: 0, x: '20vw' }}
        inViewControl={{ opacity: 1, x: 0 }} // Slide in
        outViewControl={{ opacity: 0, x: '10vw' }} // Slide out while partially visible
        transition={{ duration: 0.4 }}>
        <Button
          href='/David_Sokabi_Resume.pdf'
          className=' align-text'
          download
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            borderRadius: '5px',
            textDecoration: 'none',
          }}>
          Download My Resume
        </Button>
      </MotionDiv>
    </Row>
  );
};
