import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import "./contact.css";
import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import contact3 from "../../assests/images/contact3.jpg";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !msg) {
        toast.error("Please provide all fields");
        return;
      }

      const response = await axios.post("https://my-personal-portfolio-backend.vercel.app/api/send-email", {
        name,
        userEmail: email,
        message: msg,
      });

      if (response.data.msg) {
        toast.success(response.data.msg);
        setName("");
        setEmail("");
        setMsg("");
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  const openWhatsApp = () => {
    const message = `Hello, I'm interested in your services.`;
    const url = `https://wa.me/923043637810?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="contact" id="contact">
      <div className="card card0 border-0">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
            <div className="card1">
              <div className="row border-line">
                <img
                  src={contact3}
                  alt="contact us"
                  className="image"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="card2 d-flex card border-0 px-4 py-5">
              <div className="row">
                <div className="row">
                  <h6>
                    Contact With Us
                    <a
                      href="https://www.linkedin.com/in/abdul-rahman-216a802bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin color="blue" size={25} className="ms-2" />
                    </a>
                    <a
                      href="https://github.com/abdulRahman3070"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsGithub color="black" size={25} className="ms-2" />
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=100056956593019&mibextid=ZbWKwL"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsFacebook color="blue" size={25} className="ms-2" />
                    </a>
                    <a
                      href="https://www.instagram.com/r_hafizabdul?igsh=MXU0YjlwYjlnNWc2ag=="
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsInstagram color="#D10686" size={25} className="ms-2" />
                    </a>
                    <button
                      onClick={openWhatsApp}
                      style={{
                        cursor: "pointer",
                        background: "none",
                        border: "none",
                        padding: 0,
                      }}
                    >
                      <AiOutlineWhatsApp color="green" size={25} className="ms-2" />
                    </button>
                  </h6>
                </div>

                <div className="row px-3 mb-4">
                  <div className="line" />
                  <small className="or text-center">OR</small>
                  <div className="line" />
                </div>
                <div className="row px-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your Name"
                    className="mb-3"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="row px-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email Address"
                    className="mb-3"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="row px-3">
                  <textarea
                    type="text"
                    name="msg"
                    placeholder="Write your message"
                    className="mb-3"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                  />
                </div>
                <div className="row px-3">
                  <button className="button" onClick={handleSubmit}>
                    SEND MESSAGE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-center" 
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Contact;
