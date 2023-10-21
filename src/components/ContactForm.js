import React, { useState } from 'react';
import SubmittedData from './SubmittedData';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here, e.g., sending the data to a server
    // For this example, we'll just update the state to display the data.

    // Update the formData state with the entered values
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    setFormData({ name, email, message });

    // Set the submitted state to true
    setSubmitted(true);
  };

  return (
    <section className='contactForm' id='contactForm'>
      <h1>Let's Connect!</h1>
      {submitted ? (
        <SubmittedData formData={formData} />
      ) : (
        <form onSubmit={handleSubmit}>
          <div className='formGroup'>
            <label htmlFor='name'>Enter Full Name</label>
            <br />
            <input type='text' id='name' name='name' placeholder='Full Name' />
          </div>
          <div className='formGroup'>
            <label htmlFor='email'>Email</label>
            <br />
            <input type='text' id='email' name='email' placeholder='Email' />
          </div>
          <div className='formGroup'>
            <label htmlFor='message'>Message</label>
            <br />
            <textarea
              placeholder='Send some message!'
              id='message'
              name='message'
              rows='4'
              cols='50'
            ></textarea>
          </div>
          <button className='submitButton' type='submit'>
            Connect
          </button>
        </form>
      )}
    </section>
  );
}

export default ContactForm;
