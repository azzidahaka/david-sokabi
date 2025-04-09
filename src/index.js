import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import { Container } from 'react-bootstrap';
import { Profile } from './components/profile/profile';
import { About } from './components/about/about';
import { Work } from './components/work/work';
import { Contact } from './components/contact/contact';
import { BrowserRouter } from 'react-router-dom';
const Portfolio = () => {
  return (
    <BrowserRouter>
      <header className='page-header'>
        <img
          src='./img/David.png'
          alt=''
          className='page-header__item'
        />
        <nav className='main-navigation page-header__item'>
          <ul
            role='menubar'
            className='navigation-list'>
            <li role='presentation'>
              <a
                href='index.html'
                role='menuitem'
                className='navigation-list__item navigation-list__item'>
                Home
              </a>
            </li>
            <li role='presentation'>
              <a
                href='about.html'
                role='menuitem'
                className='navigation-list__item navigation-list__item'>
                About Me
              </a>
            </li>
            <li role='presentation'>
              <a
                href='work.html'
                role='menuitem'
                className='navigation-list__item navigation-list__item'>
                Work
              </a>
            </li>
            <li role='presentation'>
              <a
                href='contact.html'
                role='menuitem'
                className='navigation-list__item navigation-list__item'>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <Container>
        <Profile />
        <About />
        <Work />
        <Contact />
      </Container>
    </BrowserRouter>
  );
};
const container = document.querySelector('#root');
const root = createRoot(container);
root.render(<Portfolio />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
