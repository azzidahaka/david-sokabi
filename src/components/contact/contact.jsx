import { Button, Form, Row, Col, Card } from 'react-bootstrap';
import Github from '../../assets/img/github.svg';
import X from '../../assets/img/x.svg';
import LinkedIn from '../../assets/img/linked-in.svg';
import MotionDiv from '../MotionDiv';
import emailjs from 'emailjs-com';

export const Contact = () => {
  // References for form inputs
  let emailInput, telInput, messageInput, form;

  function showError(input, message) {
    const formContainer = input.parentElement;
    let error = formContainer.querySelector('.error-message');
    if (error) {
      formContainer.removeChild(error);
    }

    if (message) {
      error = document.createElement('div');
      error.classList.add('error-message');
      error.innerText = message;
      input.parentNode.insertBefore(error, input.nextSibling);
    }
  }

  function validateEmail() {
    const value = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!value) {
      showError(emailInput, 'Email is a required field.');
      return false;
    }

    if (!emailRegex.test(value)) {
      showError(emailInput, 'You must enter a valid email address.');
      return false;
    }

    showError(emailInput, null);
    return true;
  }

  function validateNo() {
    const phoneRegex = /^\d{10}$/;
    const value = telInput.value;

    if (!value) {
      showError(telInput, 'Phone number is a required field.');
      return false;
    }

    if (!phoneRegex.test(value)) {
      showError(telInput, 'Please enter a valid 10-digit phone number.');
      return false;
    }

    showError(telInput, null);
    return true;
  }

  function validateForm() {
    const isValidEmail = validateEmail();
    const isValidNo = validateNo();
    return isValidEmail && isValidNo;
  }

  // Initialize EmailJS
  emailjs.init('NKsUA2M8D6DI6xETy'); // Replace with your EmailJS public key

  function handleSubmit(e) {
    e.preventDefault(); // Prevent default form submission

    if (validateForm()) {
      // Collect form data
      const email = emailInput.value;
      const telephone = telInput.value;
      const message = messageInput.value;

      // Send email using EmailJS
      emailjs
        .send('service_ivfq4ys', 'template_ix663r9', {
          contact_email: email,
          contact_no: telephone,
          message: message,
        })
        .then(() => {
          alert('Message sent successfully!');
          form.reset(); // Reset the form after successful submission
        })
        .catch(() => {
          alert('Failed to send the message. Please try again.');
        });
    } else {
      console.log('Form validation failed'); // Debugging log
    }
  }

  return (
    <Row>
      <MotionDiv
        threshold={0.5}
        initial={{ opacity: 0, x: '-20vw' }}
        inViewControl={{ opacity: 1, x: 0 }}
        outViewControl={{ opacity: 0, x: '-10vw' }}
        transition={{ duration: 0.4 }}>
        <h1 className='text-center'>Contact me</h1>
      </MotionDiv>
      <MotionDiv
        threshold={0.5}
        initial={{ opacity: 0, x: '20vw' }}
        inViewControl={{ opacity: 1, x: 0 }}
        outViewControl={{ opacity: 0, x: '10vw' }}
        transition={{ duration: 0.4 }}
        className='d-flex justify-content-center'>
        <Col
          sm={12}
          md={8}
          lg={6}>
          <Card className='contact'>
            <Card.Body>
              <Form
                ref={(el) => (form = el)}
                onSubmit={handleSubmit}>
                {/* Email Field */}
                <Form.Group
                  controlId='formEmail'
                  className='mb-3'>
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type='email'
                    placeholder='Enter your email'
                    required
                    ref={(el) => (emailInput = el)}
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
                    ref={(el) => (telInput = el)}
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
                    ref={(el) => (messageInput = el)}
                  />
                </Form.Group>

                {/* Submit Button */}
                <div className='d-flex justify-content-center'>
                  <Button
                    type='submit'
                    className='w-50'>
                    Submit
                  </Button>
                </div>
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
