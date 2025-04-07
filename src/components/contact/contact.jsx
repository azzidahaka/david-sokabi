import { Row } from 'react-bootstrap';
export const Contact = () => {
  return (
    <Row>
      <h1>Contact me</h1>
      <div>
        <a href='mailto:ds@gamil.com'>DavidSokabi@gmail.com</a>
      </div>
      <form id='contact-form'>
        <label htmlFor='contact-email'>Email: </label>
        <input
          type='email'
          id='contact-email'
          required
        />
        <label htmlFor='contact-no'>Telephone: </label>
        <input
          type='tel'
          id='contact-no'
          required
        />
        <label htmlFor='message-area'>Message: </label>
        <textarea
          id='message-area'
          maxLength='240'
          required></textarea>
        <input
          type='submit'
          value='Send message'
        />
      </form>
      <footer className='page-footer'>
        <p>Find me on</p>
        <div className='social-media'>
          <a
            href='https://github.com/azzidahaka'
            target='_blank'>
            <img
              src='./img/github.svg'
              alt='github'
            />
          </a>
          <a
            href='https://twitter.com/azzidahaka'
            target='_blank'>
            <img
              src='./img/x.svg'
              alt='X'
            />
          </a>
          <a
            href='https://www.linkedin.com/in/david-sokabi-30618aa5/'
            target='_blank'>
            <img
              src='./img/linked-in.svg'
              alt='linkedin'
            />
          </a>
        </div>
      </footer>
    </Row>
  );
};
