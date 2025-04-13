import React from 'react';
import './MyFlixCaseStudy.scss';

export const MyFlixCaseStudy = () => {
  return (
    <div className='case-study'>
      <h1>myFlix – A Full-Stack Movie Web App</h1>
      <section>
        <h2>Overview</h2>
        <p>
          myFlix is a full-stack movie application that lets users browse movies, save favorites, and manage
          their profiles. It consists of:
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
          This self-initiated project deepened my full-stack development, authentication, and UI/UX design
          skills.
        </p>
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
      </section>

      <section>
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
          <li>
            <strong>Challenge:</strong> Structuring movie and user data efficiently.
            <br />
            <strong>Solution:</strong> Used MongoDB with Mongoose schemas and indexed queries for better
            performance.
          </li>
          <li>
            <strong>Challenge:</strong> Secure authentication and password storage.
            <br />
            <strong>Solution:</strong> Implemented bcrypt for hashing and JWT for authentication with
            Passport.js.
          </li>
          <li>
            <strong>Challenge:</strong> CORS issues between the frontend and the backend.
            <br />
            <strong>Solution:</strong> Configured CORS middleware to allow controlled cross-origin access.
          </li>
        </ul>

        <h3>2. Frontend Development: UI & State Management</h3>
        <ul>
          <li>
            <strong>Challenge:</strong> Managing user authentication and favorites efficiently.
            <br />
            <strong>Solution:</strong> Used Redux Toolkit for state management and persisted user data with
            local storage.
          </li>
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
            <strong>Most Challenging:</strong> Debugging authentication issues and handling CORS errors across
            separate deployments.
          </li>
          <li>
            <strong>Surprising:</strong> The complexity of securing APIs and managing authentication tokens.
          </li>
        </ul>
      </section>

      <section>
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
          This project was a valuable hands-on experience in full-stack development, reinforcing my skills in
          API design, authentication, and front-end optimization. It also taught me how to troubleshoot
          real-world issues and improve performance.
        </p>
        <p>I’m excited to apply these lessons to future projects!</p>
      </section>
    </div>
  );
};

export default MyFlixCaseStudy;
