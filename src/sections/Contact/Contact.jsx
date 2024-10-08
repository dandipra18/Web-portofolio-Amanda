// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import styles from "./ContactStyles.module.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lhu7fg2",
        "template_5m62w5s",
        form.current,
        "z9YRTDmx-fb_F08pN"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email successfully sent!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the email. Please try again later.");
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
