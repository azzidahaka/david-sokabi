// Component for the Pokédex App case study
// Provides an overview, challenges, and outcomes of the Pokédex project
// Uses React-Bootstrap for layout and custom SCSS for styling

import React, { useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import PokedexImage from '../../assets/img/pokedex.png';
import SearchImage from '../../assets/img/search.png';
import ModalImage from '../../assets/img/modal.png';
import ResponsiveImage from '../../assets/img/responsive.png';
import './casestudy.scss';

export const PokedexCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <Container className='case-container'>
      <div className='case-study'>
        <h1 className='text-center'>Pokédex App – A Web Application for Pokémon Exploration</h1>
        <section className='align-items-center justify-content-center'>
          <h2>Overview</h2>
          <Row>
            <Col
              className='p-0'
              lg={5}
              md={5}>
              <p>
                The Pokédex app is a web application that allows users to explore a list of Pokémon, view
                detailed information about specific creatures, and search for Pokémon by name. The app
                leverages an external API, incorporates responsive design, and uses modern JavaScript
                patterns.
              </p>
              <p>
                This project demonstrates my ability to design and implement a scalable architecture, debug
                complex issues, and adhere to best practices in front-end development.
              </p>
            </Col>
            <Col
              className='case d-flex'
              lg={7}
              md={7}>
              <img
                src={PokedexImage}
                alt='Pokédex App'
              />
            </Col>
          </Row>
        </section>

        <section>
          <h2>Problem & Goal</h2>
          <p>
            Pokémon fans often need a simple and engaging way to explore Pokémon data. Existing solutions
            lacked intuitive navigation and responsiveness.
          </p>
          <p>
            <strong>Solution:</strong>
          </p>
          <ul>
            <li>Fetch Pokémon data from an external API.</li>
            <li>Display a list of Pokémon with dynamically generated UI elements.</li>
            <li>Allow users to search for specific Pokémon and view their details in a modal.</li>
            <li>Ensure responsive design for usability across devices.</li>
          </ul>
        </section>

        <section>
          <h2>Tech Stack</h2>
          <ul>
            <li>
              <strong>Frontend:</strong> JavaScript, jQuery, Bootstrap, CSS
            </li>
            <li>
              <strong>API:</strong> PokéAPI
            </li>
            <li>
              <strong>Deployment:</strong> GitHub Pages
            </li>
          </ul>
        </section>

        <section>
          <h2>Development & Challenges</h2>
          <h3>1. Fetching Data & Dynamic UI</h3>
          <Row className='case hstack'>
            <Col
              lg={6}
              md={6}>
              <li>
                <strong>Challenge:</strong> Fetching and managing Pokémon data efficiently.
                <br />
                <strong>Solution:</strong> Used the PokéAPI to fetch data and dynamically generate UI elements
                for each Pokémon.
              </li>
            </Col>
            <Col
              lg={6}
              md={6}>
              <img
                src={SearchImage}
                alt='Search Functionality'
                className='w-100 h-100'
              />
            </Col>
          </Row>

          <h3>2. Search & Modal Functionality</h3>
          <Row className='case hstack'>
            <Col
              lg={6}
              md={6}>
              <img
                src={ModalImage}
                alt='Modal Details'
                className='w-100 h-100'
              />
            </Col>
            <Col>
              <li>
                <strong>Challenge:</strong> Creating a search feature and displaying Pokémon details in a
                modal.
                <br />
                <strong>Solution:</strong> Implemented a search bar and modal using jQuery and Bootstrap for
                seamless interaction.
              </li>
            </Col>
          </Row>

          <h3>3. Responsive Design</h3>
          <Row className='case hstack'>
            <Col>
              <li>
                <strong>Challenge:</strong> Ensuring the app is usable on both desktop and mobile devices.
                <br />
                <strong>Solution:</strong> Used CSS media queries and Bootstrap grid system for responsive
                layouts.
              </li>
            </Col>
            <Col
              lg={6}
              md={6}>
              <img
                src={ResponsiveImage}
                alt='Responsive Design'
                className='w-100 h-100'
              />
            </Col>
          </Row>
        </section>

        <section>
          <h2>Final Outcome & Lessons Learned</h2>
          <p>
            The Pokédex app successfully met its objectives, providing users with an engaging and interactive
            way to explore Pokémon.
          </p>
          <ul>
            <li>
              <strong>Biggest Lesson:</strong> The importance of modular code for scalability and maintenance.
            </li>
            <li>
              <strong>Most Challenging:</strong> Debugging asynchronous API requests and DOM updates.
            </li>
            <li>
              <strong>Surprising:</strong> How small UI/UX improvements can significantly enhance user
              experience.
            </li>
          </ul>

          <h2>Future Improvements</h2>
          <ul>
            <li>Add pagination to handle larger datasets.</li>
            <li>Implement advanced search filters (e.g., by type or abilities).</li>
            <li>Introduce offline support with caching.</li>
          </ul>
        </section>

        <section>
          <h2>Final Reflection</h2>
          <p>
            This project was a valuable experience in front-end development, showcasing my skills in API
            integration, responsive design, and debugging. It also reinforced the importance of user-centric
            design and modular code.
          </p>
          <p>I’m excited to apply these lessons to future projects!</p>
        </section>
      </div>
    </Container>
  );
};

export default PokedexCaseStudy;
