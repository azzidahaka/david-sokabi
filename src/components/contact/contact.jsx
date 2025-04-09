import { Button, Form, Row, Col, Card } from 'react-bootstrap';
import Github from '../../assets/img/github.svg';
import X from '../../assets/img/x.svg';
import LinkedIn from '../../assets/img/linked-in.svg';
import MotionDiv from '../MotionDiv';
export const Contact = () => {
  return (
    <Row>
      <MotionDiv
        threshold={0.5} // Trigger when 20% of the element is visible
        initial={{ opacity: 0, x: '-20vw' }}
        inViewControl={{ opacity: 1, x: 0 }} // Slide in
        outViewControl={{ opacity: 0, x: '-10vw' }} // Slide out while partially visible
        transition={{ duration: 0.4 }}>
        <h1 className='text-center'>Contact me</h1>
      </MotionDiv>
      <MotionDiv
        threshold={0.5} // Trigger when 20% of the element is visible
        initial={{ opacity: 0, x: '20vw' }}
        inViewControl={{ opacity: 1, x: 0 }} // Slide in
        outViewControl={{ opacity: 0, x: '10vw' }} // Slide out while partially visible
        transition={{ duration: 0.4 }}
        className='d-flex justify-content-center'>
        <Col
          className=' justify-content-center '
          sm={12}
          md={8}
          lg={6}>
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
      </MotionDiv>
      <Row className='page-footer text-center'>
        <p>Find me on</p>
        <div className='social-media'>
          <a
            href='https://github.com/azzidahaka'
            target='_blank'
            rel='noreferrer'>
            <img
              src={Github}
              alt='github'
            />
          </a>
          <a
            href='https://twitter.com/azzidahaka'
            target='_blank'
            rel='noreferrer'>
            <img
              src={X}
              alt='X'
            />
          </a>
          <a
            href='https://www.linkedin.com/in/david-sokabi-30618aa5/'
            target='_blank'
            rel='noreferrer'>
            <img
              src={LinkedIn}
              alt='linkedin'
            />
          </a>
        </div>
      </Row>
    </Row>
  );
};
