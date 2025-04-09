import React from 'react';
import { Row, Col } from 'react-bootstrap';
import MotionDiv from '../MotionDiv';
import IntroPic from '../../assets/img/IntroPic.jpg';
export const Profile = () => {
  return (
    <Row className='profile section align-content-center'>
      <Row className='w-70 '>
        <Col
          xs={11}
          md={5}
          className='text-center'>
          <img
            src={IntroPic}
            alt='Me'
            className='profile__portrait'
          />
        </Col>
        <Col className='profile__intro align-content-end mb-5'>
          <span className='fs-1 fw-bolder'>Hi, I’m David — Full-Stack Web Developer</span>
          <p className='intro'>
            I’m passionate about building clean, user-focused web apps that connect frontend design with
            powerful backend logic. With a background in tech support and a knack for solving problems, I love
            creating smooth, intuitive experiences. When I’m not coding, you’ll find me gaming, reading
            fantasy novels, or diving into the latest tech trends.
          </p>
        </Col>
      </Row>
    </Row>
  );
};
