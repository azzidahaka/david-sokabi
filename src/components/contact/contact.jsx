import { Button, Form, Row, Col, Card, CardBody } from 'react-bootstrap';
export const Contact = () => {
  return (
    <Row>
      <h1 className='text-center'>Contact me</h1>
      <Col className='d-flex justify-content-center align-items-center'>
        <Card className='contact'>
          <CardBody>
            <Form>
              <Form.Group controlId='formUsername'>
                <Form.Label> Username:</Form.Label>
                <Form.Control
                  type='text'
                  //   value={username}
                  //   onChange={(e) => setUsername(e.target.value)} //set username state with user input
                  required
                  minLength='3'
                />
              </Form.Group>
              <Form.Group controlId='formPassword'>
                <Form.Label> Password:</Form.Label>
                <Form.Control
                  type='password'
                  //   value={password}
                  //   onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId='formBirthday'>
                <Form.Label> Birthday:</Form.Label>
                <Form.Control
                  type='date'
                  //   value={birthday}
                  //   onChange={(e) => setBirthday(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId='formEmail'>
                <Form.Label> Email:</Form.Label>
                <Form.Control
                  type='email'
                  //   value={email}
                  //   onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
              <Button type='submit'>Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
      {/* <h1>Contact me</h1>
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
      </footer> */}
    </Row>
  );
};
