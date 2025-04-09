import { Button, Form, Row, Col, Card, CardBody } from 'react-bootstrap';
export const Contact = () => {
  return (
    <Row>
      <h1 className='text-center'>Contact me</h1>
      <Col className='d-flex justify-content-center align-items-center'>
        <Card className='contact'>
          <Card.Body>
            <Form>
              {/* Email Field */}
              <Form.Group
                controlId='formEmail'
                className='mb-3'>
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter your email'
                  required
                />
              </Form.Group>

              {/* Phone Number Field */}
              <Form.Group
                controlId='formPhone'
                className='mb-3'>
                <Form.Label>Phone Number:</Form.Label>
                <Form.Control
                  type='tel'
                  placeholder='Enter your phone number'
                  required
                />
              </Form.Group>

              {/* Message Field */}
              <Form.Group
                controlId='formMessage'
                className='mb-3'>
                <Form.Label>Message:</Form.Label>
                <Form.Control
                  as='textarea'
                  rows={4}
                  placeholder='Enter your message'
                  required
                />
              </Form.Group>

              {/* Submit Button */}
              <Button
                type='submit'
                className='w-100'>
                Submit
              </Button>
            </Form>
          </Card.Body>
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
