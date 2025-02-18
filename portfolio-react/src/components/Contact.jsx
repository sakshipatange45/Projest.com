import React, { useState } from "react";
import { motion } from "framer-motion";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const validateForm = () => {
    if (!name || !email || !message) {
      setError("All fields are required.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
        timestamp: new Date(),
      });
      setSuccess("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="contact-section"
    >
      <h2 className="contact-heading">Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <InputField
          label="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <InputField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <TextAreaField
          label="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
        />
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </motion.section>
  );
};

// Reusable Input Field Component
const InputField = ({ label, type, value, onChange, placeholder }) => {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

// Reusable TextArea Field Component
const TextAreaField = ({ label, value, onChange, placeholder }) => {
  return (
    <div className="input-field">
      <label>{label}</label>
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default Contact;