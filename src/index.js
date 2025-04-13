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
const Portfolio = () => {
  return (
    <>
      <NavigationBar />
      <Container>
        <Profile />
        <About />
        <Work />
        <Contact />
      </Container>
    </>
  );
};
const container = document.querySelector('#root');
const root = createRoot(container);
root.render(<Portfolio />);
