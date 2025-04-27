// Component for the Meet App case study
// Provides an overview, challenges, and outcomes of the Meet App project
// Uses React-Bootstrap for layout and custom SCSS for styling

import React, { useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import MeetAppImage from '../../assets/img/meet.png';
import OAuthImage from '../../assets/img/oauth.png';
import OfflineImage from '../../assets/img/offline.png';
import ChartImage from '../../assets/img/chart.png';
import './meetcasestudy.scss';

export const MeetCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <Container className='case-container'>
      <div className='case-study'>
        <h1 className='text-center'>Meet App – A Serverless Progressive Web Application</h1>
        <section className='align-items-center justify-content-center'>
          <h2>Project Overview</h2>
          <Row>
            <Col
              className='p-0'
              lg={5}
              md={5}>
              <p>
                Meet App is a serverless Progressive Web Application (PWA) built with React using a
                Test-Driven Development (TDD) approach. The app connects with the Google Calendar API to fetch
                and display upcoming events, allowing users to find and filter events based on selected
                cities.
              </p>
              <p>
                Meet App offers an optimized mobile experience, including offline usability and installation
                prompts, to ensure accessibility and convenience for users on the go.
              </p>
              <p>
                <a
                  href='https://github.com/azzidahaka/meet'
                  target='_blank'
                  rel='noreferrer'>
                  View Project on GitHub
                </a>
              </p>
            </Col>
            <Col
              className='meet-app d-flex'
              lg={7}
              md={7}>
              <img
                src={MeetAppImage}
                alt='Meet App'
              />
            </Col>
          </Row>
        </section>

        <section>
          <h2>The Challenge</h2>
          <p>The goal was to build a modern web application that:</p>
          <ul>
            <li>Is serverless to reduce backend complexity and improve scalability.</li>
            <li>Offers a progressive experience, allowing users to install the app and use it offline.</li>
            <li>Provides a highly responsive and user-friendly interface for event search.</li>
            <li>Ensures high code quality by using Test-Driven Development (TDD).</li>
            <li>Seamlessly integrates with the Google Calendar API to fetch real-time event data.</li>
          </ul>
          <p>
            The project needed to balance advanced functionality with a lightweight, fast, and accessible
            design, delivering a smooth experience across different devices and network conditions.
          </p>
        </section>

        <section>
          <h2>My Role</h2>
          <p>
            Full-Stack Developer (with focus on Frontend React development, TDD, API integration, and PWA
            optimization)
          </p>
        </section>

        <section>
          <h2>Tools & Technologies</h2>
          <ul>
            <li>React.js</li>
            <li>Jest & Cucumber (for testing)</li>
            <li>Google Calendar API</li>
            <li>AWS Lambda (for serverless backend functions)</li>
            <li>OAuth 2.0 (for secure authentication)</li>
            <li>Puppeteer (for end-to-end testing)</li>
            <li>Workbox (for PWA features like offline functionality)</li>
            <li>Recharts (for event data visualization)</li>
          </ul>
        </section>

        <section>
          <h2>The Process</h2>
          <h3>1. Planning and Research</h3>
          <p>I started by breaking down the project requirements into actionable features:</p>
          <ul>
            <li>Fetch events from Google Calendar.</li>
            <li>Filter events by city.</li>
            <li>Allow users to choose the number of events displayed.</li>
            <li>Create a responsive design and offline support.</li>
            <li>Implement TDD with unit, integration, and end-to-end tests.</li>
          </ul>
          <p>
            I also researched best practices for PWA development and serverless architecture, focusing on
            minimizing load times and ensuring app reliability.
          </p>

          <h3>2. Building with TDD</h3>
          <p>Each feature was developed using the Test-Driven Development (TDD) approach:</p>
          <ul>
            <li>Unit tests were written before coding the components and functions.</li>
            <li>Integration tests ensured that different parts of the app worked together as expected.</li>
            <li>End-to-end tests were automated using Puppeteer to simulate real user interactions.</li>
          </ul>
          <p>This method allowed for early detection of bugs and improved code maintainability.</p>

          <h3>3. API Integration</h3>
          <p>
            I set up a secure OAuth 2.0 flow with the Google Calendar API. Using AWS Lambda, I created
            serverless functions to handle authentication and event fetching without exposing sensitive
            credentials on the client side.
          </p>

          <h3>4. Progressive Web App Features</h3>
          <p>Using Workbox, I added:</p>
          <ul>
            <li>A custom service worker for caching assets and API responses.</li>
            <li>
              Offline support, so users could still view previously loaded events without an internet
              connection.
            </li>
            <li>
              Installation prompts, allowing users to "install" the web app on their device, giving it a
              native-app-like experience.
            </li>
          </ul>

          <h3>5. Data Visualization</h3>
          <p>Using Recharts, I built interactive charts that showed:</p>
          <ul>
            <li>The distribution of events by city.</li>
            <li>The number of events over time.</li>
          </ul>
          <p>This helped users quickly grasp event trends and availability.</p>
        </section>

        <section>
          <h2>Key Features Delivered</h2>
          <ul>
            <li>✅ Search for events by city</li>
            <li>✅ Specify the number of events shown</li>
            <li>✅ View event details (description, location, etc.)</li>
            <li>✅ App works offline and can be installed on a device</li>
            <li>✅ Secure authentication with Google OAuth</li>
            <li>✅ Clean and tested codebase (unit, integration, and E2E tests)</li>
            <li>✅ Event data visualization with charts</li>
          </ul>
        </section>

        <section>
          <h2>Challenges & Solutions</h2>
          <Row>
            <Col
              lg={6}
              md={6}>
              <li>
                <strong>Challenge:</strong> Managing OAuth security in a frontend app
                <br />
                <strong>Solution:</strong> Used AWS Lambda serverless functions to handle authentication
                server-side
              </li>
            </Col>
            <Col
              lg={6}
              md={6}>
              <img
                src={OAuthImage}
                alt='OAuth'
                className='w-100 h-100'
              />
            </Col>
          </Row>
          <Row>
            <Col
              lg={6}
              md={6}>
              <img
                src={OfflineImage}
                alt='Offline'
                className='w-100 h-100'
              />
            </Col>
            <Col>
              <li>
                <strong>Challenge:</strong> Ensuring reliable offline functionality
                <br />
                <strong>Solution:</strong> Implemented service workers with Workbox to cache critical assets
                and data
              </li>
            </Col>
          </Row>
          <Row>
            <Col>
              <li>
                <strong>Challenge:</strong> Writing tests before code (TDD learning curve)
                <br />
                <strong>Solution:</strong> Started with small unit tests and iteratively added more coverage
                as confidence grew
              </li>
            </Col>
            <Col
              lg={6}
              md={6}>
              <img
                src={ChartImage}
                alt='Chart'
                className='w-100 h-100'
              />
            </Col>
          </Row>
        </section>

        <section>
          <h2>Outcomes</h2>
          <ul>
            <li>Successfully deployed a fully functional, installable PWA.</li>
            <li>Achieved over 90% test coverage, ensuring robustness.</li>
            <li>Gained hands-on experience in serverless architecture, TDD, and PWA development.</li>
            <li>Improved debugging and testing efficiency thanks to TDD.</li>
            <li>Enhanced understanding of React's component-driven architecture and best practices.</li>
          </ul>
        </section>

        <section>
          <h2>Learnings</h2>
          <ul>
            <li>
              Test-Driven Development forces you to think deeply about application design and user flows
              before implementation.
            </li>
            <li>PWAs can provide excellent user experiences even without native mobile app development.</li>
            <li>
              Serverless functions are powerful tools for securely handling backend logic while keeping apps
              lightweight.
            </li>
            <li>
              Continuous testing and integration result in faster development and higher quality output.
            </li>
          </ul>
        </section>

        <section>
          <h2>Final Thoughts</h2>
          <p>
            Meet App was a fantastic opportunity to bridge modern frontend development techniques with
            powerful backend solutions, all while maintaining a user-centered, performance-driven approach.
            The skills I developed through this project — particularly around TDD, serverless functions, and
            PWA optimization — have become invaluable tools in my developer toolkit.
          </p>
        </section>
      </div>
    </Container>
  );
};

export default MeetCaseStudy;
