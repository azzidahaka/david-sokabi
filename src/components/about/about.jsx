import { Row } from 'react-bootstrap';
import MotionDiv from '../MotionDiv';
export const About = () => {
  return (
    <Row className='section '>
      <MotionDiv
        initial={{ opacity: 0, x: 1000 }}
        transition={{ duration: 1 }}
        inViewControl={{ opacity: 1, x: 0 }}
        outViewControl={{ opacity: 0, x: 1000 }}
        className='intoabout'>
        <h1 className='align-text'>About Me</h1>
        <p>
          I was born in Lagos, Nigeria, and am currently based in Canada. My journey into tech began at a
          young age, sparked by a childhood fascination with the world of technology, especially after
          watching <em>Spy Kids</em>. What started as curiosity quickly turned into a passion, and I decided
          to explore this further when my brother introduced me to CorelDRAW and Python. The joy of creating
          things with code ignited my enthusiasm, and I've been hooked ever since.
        </p>
      </MotionDiv>

      <MotionDiv
        initial={{ opacity: 0, x: -1000 }}
        transition={{ duration: 1 }}
        inViewControl={{ opacity: 1, x: 0 }}
        outViewControl={{ opacity: 0, x: -1000 }}
        className='intoabout2'>
        <h2>Background and Career Path</h2>
        <p>
          Although I initially envisioned myself as a mechanical engineer, my love for technology led me to
          pursue a career in <strong>full-stack web development</strong>. I’ve gained significant experience
          working with <strong>JavaScript, React, Node.js, Python</strong>, and <strong>MongoDB</strong>,
          honing my skills through hands-on projects that allow me to merge my technical expertise with my
          natural problem-solving mindset. I thrive in environments where I can tackle complex challenges and
          create solutions that truly make a difference.
        </p>
        <p>
          What excites me about this field is the <strong>endless possibilities for innovation</strong>. I
          find joy in <strong>problem-solving</strong> and in building applications that are not only
          functional but also intuitive and enjoyable to use. Whether I’m developing an API, optimizing code,
          or designing the client-side of a web app, I love the creative process that goes into making
          something truly unique.
        </p>
      </MotionDiv>

      <section className='approach'>
        <h2>My Approach to Work</h2>
        <p>
          When it comes to my approach to work, I value collaboration and{' '}
          <strong>effective communication</strong>. I believe that the best results come from working
          together, sharing ideas, and supporting each other. This was a key aspect of my previous role as a{' '}
          <strong>Technical Advisor</strong>, where I worked closely with customers to solve problems and
          provide solutions. I’ve brought these skills into my development work, and they continue to shape my
          collaborative approach to coding.
        </p>
      </section>

      <section className='interests'>
        <h2>Outside of Work</h2>
        <p>
          Outside of work, I’m passionate about gaming and <strong>reading</strong>
          —especially fantasy and sci-fi genres. These interests fuel my imagination and creativity, helping
          me approach coding challenges with a fresh perspective.
        </p>
      </section>

      <section className='goals'>
        <h2>Looking Ahead</h2>
        <p>
          As I continue to grow as a developer, I’m looking for opportunities that will challenge me, allow me
          to learn from talented teams, and enable me to contribute to impactful projects. Whether in a{' '}
          <strong>full-time, part-time</strong>, or <strong>freelance</strong> capacity, I’m always eager to
          collaborate and create innovative web solutions.
        </p>
      </section>
      <a
        href='assets/David_Sokabi_Resume.pdf'
        className='button'
        download>
        Download my resume
      </a>
    </Row>
  );
};
