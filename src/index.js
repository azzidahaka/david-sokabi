// Main entry point for the React application
// Importing necessary libraries and components
import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import { Container } from 'react-bootstrap';
import { Profile } from './components/profile/profile';
import { About } from './components/about/about';
import { Work } from './components/work/work';
import { Contact } from './components/contact/contact';
import { NavigationBar } from './components/navigationbar/navigationbar';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { MyFlixCaseStudy } from './components/work/myflixcasestudy';
import MeetCaseStudy from './components/work/meetcasestudy';
import PokedexCaseStudy from './components/work/pokedexcasestudy';

// Setting up the Portfolio component with routing and navigation
const Portfolio = () => {
  return (
    <Router>
      <NavigationBar />
      <Container>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Profile />
                <About />
                <Work />
                <Contact />
              </>
            }
          />
          <Route
            path='/myflix-casestudy'
            element={<MyFlixCaseStudy />}
          />
          <Route
            path='/meet-casestudy'
            element={<MeetCaseStudy />}
          />
          <Route
            path='/pokedex-casestudy'
            element={<PokedexCaseStudy />}
          />
        </Routes>
      </Container>
    </Router>
  );
};

// Rendering the Portfolio component into the root DOM element
const container = document.querySelector('#root');
const root = createRoot(container);
root.render(<Portfolio />);
