import React from 'react';
import { CONTACT } from '../constants';
//import ContactModel from '../../server/models/Contact';

const Contact = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      query: event.target.query.value,
    };

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        alert(result.message);
        event.target.reset(); // Clear form fields
      } else {
        throw new Error('Error submitting form');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className='border-b border-neutral-900 pb-20' id='contact'>
      <h2 className='my-20 text-center text-4xl font-mono'>--- Get in touch ---</h2>

      <div className='text-center tracking-tighter'>
        <p className='my-4'>{CONTACT.address}</p>
        <p className='my-4'>{CONTACT.phoneNo}</p>
        <a href={`mailto:${CONTACT.email}`} className='border-b'>
          {CONTACT.email}
        </a>
      </div>

      <div className='mt-10 flex justify-center'>
        <form className='w-full max-w-lg bg-gray-100 p-8 rounded-lg shadow-lg' onSubmit={handleSubmit}>
          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
              Name
            </label>
            <input
              className='w-full px-3 py-2 text-gray-950 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
              id='name'
              name='name'
              type='text'
              placeholder='Your Name'
              required
            />
          </div>

          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
              Email
            </label>
            <input
              className='w-full px-3 py-2 text-gray-950 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
              id='email'
              name='email'
              type='email'
              placeholder='Your Email Address'
              required
            />
          </div>

          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='query'>
              Query
            </label>
            <textarea
              className='w-full px-3 py-2 text-gray-950 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
              id='query'
              name='query'
              rows='5'
              placeholder='Your Query'
              required
            />
          </div>

          <div className='flex items-center justify-between'>
            <button
              type='submit'
              className='bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className='mt-10 text-center text-sm text-white-600'>
        <p>&copy; {new Date().getFullYear()} Sayak. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Contact;
