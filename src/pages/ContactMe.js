import "../styles/ContactMe.css";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";

function ContactMe() {
  const [submitted, setSubmitted] = useState(false);
  const [counter, setCounter] = useState(7);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );

    const intervalId = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter === 0) {
          clearInterval(intervalId);
          console.log("you are on HOME Page !!");
          window.location.href = "/";
          return 0;
        }
        return prevCounter - 1;
      });
    }, 1000);
  };

  return (
    <div >
      {submitted ? (
        <div className="thankyou">
          <center>
            <h1>Your Message Sent Successfully</h1>
            <h1>Thank You</h1>
            <p>You are redirecting to home page...{counter}</p>
            <p>
              if not Click here <Link to="/"> Home </Link>{" "}
            </p>
          </center>
        </div>
      ) : (
        <center>
          <form ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <br></br>
            <input type="text" name="user_name" />
            <br></br>
            <label>Your Email</label>
            <br></br>
            <input type="email" name="user_email" />
            <br></br>
            <label>Message</label>
            <br></br>
            <textarea name="message" />
            <br></br>

            <button
              type="button"
              id="button"
              onClick={() => (window.location.href = "/")}
            >
              Home
            </button>
            <input type="submit" value="Send" />
          </form>
        </center>
      )}
    </div>
  );
}

export default ContactMe;
