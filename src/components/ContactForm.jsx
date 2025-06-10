import React from 'react';


const ContactForm = () => {
  
  return (
    <div className='border-2 border-black'>
      <form
  action="https://api.web3forms.com/submit"
  method="POST"
  className="flex flex-col gap-4"
>
  <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY" />

  <input
    className="p-2 border border-gray-300 rounded"
    type="text"
    name="name"
    placeholder="Your Name"
    required
  />
  <input
    className="p-2 border border-gray-300 rounded"
    type="email"
    name="email"
    placeholder="Your Email"
    required
  />
  <textarea
    className="p-2 border border-gray-300 rounded"
    name="message"
    placeholder="Your Message"
    required
  ></textarea>

  <button className="border-2 p-2 rounded hover:bg-gray-100">Submit</button>
</form>

    </div>
  );
};

export default ContactForm;

