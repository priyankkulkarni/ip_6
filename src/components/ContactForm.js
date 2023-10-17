import React from 'react';

function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <section className='contactForm' id='contactForm'>
      <h1>Let's Connect!</h1>
      <form onSubmit={handleSubmit}>
        <div className='formGroup'>
          <label htmlFor='name'>Enter Full Name</label>
          <br />
          <input type='text' id='name' placeholder='Full Name' />
        </div>
        <div className='formGroup'>
          <label htmlFor='email'>Email</label>
          <br />
          <input type='text' id='email' placeholder='Email' />
        </div>
        <div className='formGroup'>
          <label htmlFor='message'>Message</label>
          <br />
          <textarea
            placeholder='Send some message!'
            id='message'
            name='w3review'
            rows='4'
            cols='50'
          ></textarea>
        </div>
        <button className='submitButton' type='submit'>
          Connect
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
