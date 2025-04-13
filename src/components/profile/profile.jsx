import React from 'react';
import { Row, Col } from 'react-bootstrap';
import IntroPic from '../../assets/img/IntroPic.jpg';
export const Profile = () => {
  return (
    <Row
      id='home'
      className='profile section d-flex align-items-center justify-content-center text-center'>
      <Row className='w-100 d-flex align-items-center justify-content-center'>
        <Col
          xs={11}
          md={5}>
          <img
            src={IntroPic}
            alt='Me'
            className='profile__portrait'
          />
        </Col>
        <Col className='profile__intro justify-content-center mb-5'>
          <div>
            <span className='fs-1 fw-bolder'> Hi, I’m David</span>
            <span className='fs-3 fw-bolder'> — Full-Stack Web Developer</span>
          </div>

          <p className='intro align-text'>
            I’m passionate about building clean, user-focused web apps that connect frontend design with
            powerful backend logic. With a background in tech support and a knack for solving problems, I love
            creating smooth, intuitive experiences. When I’m not coding, you’ll find me diving into the latest
            tech trends, reading fantasy novels, or gaming.
          </p>
        </Col>
      </Row>
    </Row>
  );
};
