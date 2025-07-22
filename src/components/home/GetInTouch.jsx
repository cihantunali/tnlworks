import React, { useState } from "react";
import "../../scss/GetInTouch.scss";

const GetInTouch = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const data = new FormData(form);
    const response = await fetch("https://formspree.io/f/xkgzjjvk", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    }
  };

  return (
    <section id="contact" className="get-in-touch-section">
      <h2 className="contact-title">Let's Work Together</h2>
      <p className="contact-subtitle">
        Tell me about your needs or just say hi — I’ll get back to you as soon as possible.
      </p>

      {submitted ? (
        <div className="thank-you-message">
          <h3>Thank you!</h3>
          <p>Your message has been sent successfully.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Tell me about your project..."
            rows="6"
            required
          />
          <button type="submit">Send Message</button>
        </form>
      )}
    </section>
  );
};

export default GetInTouch;