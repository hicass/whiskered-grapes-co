import { useState, useRef } from 'react';
import validator from 'validator';
import Logo from '../../components/Logo/Logo';
import './ContactPage.css';

export default function ContactPage() {
    const form = useRef();
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [emailMessage, setEmailMessage] = useState('');
    const [formValues, setFormValues] = useState({
      name: '',
      email: '',
      message: '',
    });
    
      const handleSubmit = () => {
        setFormSubmitted(true);
        setFormValues({
          name: '',
          email: '',
          message: '',
        });
        setEmailMessage('');
        setTimeout(() => setFormSubmitted(false), 7000);
      };
    
      const validateEmail = (e) => {
        const email = e.target.value;
    
        if (validator.isEmail(email)) {
          setEmailMessage('Wooo!');
        } else {
          setEmailMessage('Please enter a valid email...');
        }
      };
    
      const handleEmail = (e) => {
        setFormValues({ ...formValues, email: e.target.value });
        validateEmail(e);
      };

  return (
    <section id="contact-page">
      <div className="page-logo">
        <Logo />
      </div>
      <h1>Contact Us</h1>

      <div className="submit-confirmation">
        {formSubmitted ? (
          <div className="confirmation-msg">
            <p className="confirmation-txt">
              If this was real, your message would have been sent... But its not hehe
            </p>
          </div>
        ) : (
          <div className="confirmation-msg">
            <span className="place-holder">p</span>
          </div>
        )}
      </div>

      <div id="contact-contents">
        <form
          className="contact-form"
          ref={form}
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="form-div">
            <label className="form-label">Name</label>
            <input
              className="form-input"
              type="text"
              name="from_name"
              value={formValues.name}
              onChange={(e) =>
                setFormValues({ ...formValues, name: e.target.value })
              }
            />
          </div>

          <div className="form-div">
            <label className="form-label">Email</label>
            <input
              className="form-input email-input"
              type="email"
              name="from_email"
              value={formValues.email}
              onChange={(e) => handleEmail(e)}
            />
            <p id="email-message">
              <span className="place-holder">p</span>
              {emailMessage}
            </p>

            <label className="form-label">Message</label>
            <textarea
              name="message"
              value={formValues.message}
              onChange={(e) =>
                setFormValues({ ...formValues, message: e.target.value })
              }
            />
          </div>

          <input className="form-submit" type="submit" value="Send" />
        </form>
      </div>
    </section>
  );
}
