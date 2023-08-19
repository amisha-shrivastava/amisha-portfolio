import React from "react";
import emailjs from "@emailjs/browser";
import lottie from "lottie-web";
import { useEffect, useRef, useState } from "react";
import "./Contact.css";

export default function Contact() {
  const form = useRef();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  const contain = useRef(null);
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    const tempelateparams = {
      from_name: name + " " + email,
      to_name: "Amisha",
      feedback: message
    };
    emailjs
      .send(
        "service_7y7neo7",
        "template_uewabq9",
        tempelateparams,
        "kwP1K1T0KRzZ7c09M"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: contain.current,
      render: "svg",
      direction: "1",
      loop: true,
      autoplay: true,
      animationData: require("../lottie/contact.json")
    });
    return () => {
      animation.destroy();
    };
  }, []);
  return (
    <>
      <div>
        <div className="contact-me-card row">
          <div className="col-lg-6 col-md-6 col-sm-12 left-contact px-2 py-2">
            <span className="get-in-touch mx-4 my-5">Get in Touch</span>
            <div
              className="py-5 d-flex justify-content-center contact-img"
              ref={contain}
            ></div>
          </div>
          <div className="col-lg-6 col-md-8 col-sm-12 my-auto">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="d-flex flex-column card-contact-right"
            >
              <div className="input-group my-3 d-flex flex-column">
                <label>Name</label>
                <input
                  value={name}
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                  type="text"
                  placeholder="enter your name"
                  className="input-groups"
                />
              </div>
              <div className="input-group my-3 d-flex flex-column">
                <label>Email</label>
                <input
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  type="text"
                  placeholder="enter your email"
                  className="input-groups"
                />
              </div>
              <div className="input-group my-3 d-flex flex-column">
                <label>Message</label>
                <textarea
                  value={message}
                  onChange={(e) => {
                    setmessage(e.target.value);
                  }}
                  type="text"
                  placeholder="enter your message"
                  className="input-groups"
                />
              </div>
              <div className="input-group my-3 d-flex flex-column">
                <input
                  className="btn btn-success"
                  type="submit"
                  value="Send Message"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
