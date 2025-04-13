import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import MyFlix from '../../assets/img/myflix.png';
import User from '../../assets/img/userInfo.png';
import Movie from '../../assets/img/movieInfo.png';
import Cors from '../../assets/img/cors.png';
import Auth from '../../assets/img/auth.png';
import Large from '../../assets/img/large.png';
import Mid from '../../assets/img/medium.png';
import Small from '../../assets/img/small.png';
import { NavigationBar } from '../navigationbar/navigationbar';
import './myflixcasestudy.scss';
export const MyFlixCaseStudy = () => {
  return (
    <Container className='case-container'>
      <div className='case-study '>
        <h1 className='text-center'>myFlix – A Full-Stack Movie Web App</h1>
        <section className='align-items-center justify-content-center'>
          <h2>Overview</h2>
          <Row>
            <Col
              className='p-0'
              lg={5}
              md={5}>
              <p>
                myFlix is a full-stack movie application that lets users browse movies, save favorites, and
                manage their profiles. It consists of:
              </p>
              <ul>
                <li>
                  <strong>myFlix API (Backend):</strong> A Node.js/Express REST API with MongoDB.
                </li>
                <li>
                  <strong>myFlix Client (Frontend):</strong> A React-based UI with Redux for state management.
                </li>
              </ul>
              <p>
                This self-initiated project deepened my full-stack development, authentication, and UI/UX
                design skills.
              </p>
            </Col>
            <Col
              className='myflix  d-flex'
              lg={7}
              md={7}>
              <img
                src={MyFlix}
                alt='MyFlix'
              />
            </Col>
          </Row>
        </section>
        <section>
          <h2>Problem & Goal</h2>
          <p>
            Many movie lovers struggle to track their favorite films and discover new ones. Existing platforms
            lack personalized features for managing favorites.
          </p>
          <p>
            <strong>Solution:</strong>
          </p>
          <ul>
            <li>Build a secure API for movie data and user authentication.</li>
            <li>Develop a user-friendly React UI for browsing and managing favorites.</li>
            <li>Implement JWT-based authentication for secure user sessions.</li>
          </ul>

          <h2>Tech Stack</h2>
          <ul>
            <li>
              <strong>Backend:</strong> Node.js, Express, MongoDB, Mongoose, Passport.js, JWT, bcrypt
            </li>
            <li>
              <strong>Frontend:</strong> React, Redux Toolkit, React Router, Bootstrap
            </li>
            <li>
              <strong>Deployment:</strong> Heroku (backend), Netlify (frontend)
            </li>
          </ul>
        </section>

        <section>
          <h2>Development & Challenges</h2>
          <h3>1. Backend Development: API & Authentication</h3>
          <ul>
            <Row className='myflix hstack'>
              <Col
                lg={4}
                md={4}>
                <li>
                  <strong>Challenge:</strong> Structuring movie and user data efficiently.
                  <br />
                  <strong>Solution:</strong> Used MongoDB with Mongoose schemas and indexed queries for better
                  performance.
                </li>
              </Col>
              <Col
                lg={4}
                md={4}>
                <img
                  src={User}
                  alt='User'
                  className='w-100 h-100'
                />
              </Col>
              <Col
                lg={4}
                md={4}>
                <img
                  src={Movie}
                  alt='Movie'
                  className='w-100 h-100'
                />
              </Col>
            </Row>
            <Row className='myflix hstack'>
              <Col
                lg={6}
                md={6}>
                <img
                  src={Auth}
                  alt='Me'
                  className='w-75 h-75'
                />
              </Col>
              <Col>
                <li>
                  <strong>Challenge:</strong> Secure authentication and password storage.
                  <br />
                  <strong>Solution:</strong> Implemented bcrypt for hashing and JWT for authentication with
                  Passport.js.
                </li>
              </Col>
            </Row>
            <Row className='myflix hstack'>
              <Col>
                <li>
                  <strong>Challenge:</strong> CORS issues between the frontend and the backend.
                  <br />
                  <strong>Solution:</strong> Configured CORS middleware to allow controlled cross-origin
                  access.
                </li>
              </Col>
              <Col
                lg={6}
                md={6}>
                <img
                  src={Cors}
                  alt='Cors'
                  className='w-100 h-100'
                />
              </Col>
            </Row>
          </ul>

          <h3>2. Frontend Development: UI & State Management</h3>
          <ul>
            <Row className=''>
              <Col
                lg={12}
                md={12}>
                <li>
                  <strong>Challenge:</strong> Managing user authentication and favorites efficiently.
                  <br />
                  <strong>Solution:</strong> Used Redux Toolkit for state management and persisted user data
                  with local storage.
                </li>
              </Col>
              <Col
                lg={2}
                md={2}>
                <img
                  src={Small}
                  alt='Small'
                  className='w-100 '
                />
              </Col>

              <Col
                lg={4}
                md={4}>
                <img
                  src={Mid}
                  alt='Mid'
                  className='w-100 '
                />
              </Col>
              <Col
                lg={6}
                md={6}>
                <img
                  src={Large}
                  alt='Large'
                  className='w-100 '
                />
              </Col>
            </Row>
          </ul>
        </section>
        <section>
          <h2>Final Outcome & Lessons Learned</h2>
          <p>
            The project successfully met its original goal of providing a secure, scalable, and user-friendly
            movie-tracking experience.
          </p>
          <ul>
            <li>
              <strong>Biggest Lesson:</strong> Small decisions—like state management tools or API
              optimizations—impact performance significantly.
            </li>
            <li>
              <strong>Most Challenging:</strong> Debugging authentication issues and handling CORS errors
              across separate deployments.
            </li>
            <li>
              <strong>Surprising:</strong> The complexity of securing APIs and managing authentication tokens.
            </li>
          </ul>

          <h2>Future Improvements</h2>
          <ul>
            <li>Enhance UI/UX with animations and better loading states.</li>
            <li>Improve performance with server-side caching.</li>
            <li>Expand features with user-generated reviews and movie recommendations.</li>
          </ul>
        </section>

        <section>
          <h2>Final Reflection</h2>
          <p>
            This project was a valuable hands-on experience in full-stack development, reinforcing my skills
            in API design, authentication, and front-end optimization. It also taught me how to troubleshoot
            real-world issues and improve performance.
          </p>
          <p>I’m excited to apply these lessons to future projects!</p>
        </section>
      </div>
    </Container>
  );
};

export default MyFlixCaseStudy;
