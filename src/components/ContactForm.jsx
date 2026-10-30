import { useState } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { inquiryTypes } from "../data/content";

const initial = {
  name: "",
  email: "",
  subject: "",
  inquiry: "Job Opportunity",
  message: "",
};

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_CONTACT_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID;
const EMAILJS_AUTOREPLY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function isEmailjsConfigured() {
  return Boolean(
    EMAILJS_SERVICE_ID &&
    EMAILJS_CONTACT_TEMPLATE_ID &&
    EMAILJS_AUTOREPLY_TEMPLATE_ID &&
    EMAILJS_PUBLIC_KEY
  );
}

if (import.meta.env.DEV && !isEmailjsConfigured()) {
  console.warn(
    "EmailJS is not fully configured. Set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_CONTACT_TEMPLATE_ID, VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your .env file, then restart the dev server."
  );
}

export default function ContactForm() {
  const location = useLocation();
  const [form, setForm] = useState(() => ({
    ...initial,
    inquiry: location.state?.inquiryType || "Job Opportunity",
  }));
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const update = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Enter your full name.";
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!form.subject.trim()) next.subject = "Add a subject.";
    if (!form.message.trim()) next.message = "Write a short message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (sending) return;

    if (!validate()) {
      setStatus("Please fix the highlighted fields.");
      return;
    }

    if (!isEmailjsConfigured()) {
      if (import.meta.env.DEV) {
        console.warn(
          "EmailJS is not fully configured. Set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_CONTACT_TEMPLATE_ID, VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your .env file, then restart the dev server."
        );
      }
      setStatus("Email is not configured yet. Please try again later.");
      return;
    }

    const firstName = form.name.trim().split(" ")[0];
    const publicKey = { publicKey: EMAILJS_PUBLIC_KEY };

    setSending(true);
    setStatus("");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_CONTACT_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          inquiry_type: form.inquiry,
          message: form.message,
        },
        publicKey
      );

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_AUTOREPLY_TEMPLATE_ID,
        {
          to_name: form.name,
          to_email: form.email,
          subject: form.subject,
          inquiry_type: form.inquiry,
        },
        publicKey
      );

      setForm(initial);
      setErrors({});
      setStatus(`Thanks, ${firstName}. Your message has been sent.`);
    } catch {
      setStatus("Something went wrong while sending your message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <form id="f" noValidate onSubmit={onSubmit}>
      <label htmlFor="n">Full name</label>
      <input
        id="n"
        type="text"
        placeholder="Enter your name"
        value={form.name}
        onChange={update("name")}
        aria-invalid={Boolean(errors.name) || undefined}
      />
      <div className="er" id="ne" role="alert">{errors.name || ""}</div>

      <label htmlFor="e">Email address</label>
      <input
        id="e"
        type="email"
        placeholder="Enter your email"
        value={form.email}
        onChange={update("email")}
        aria-invalid={Boolean(errors.email) || undefined}
      />
      <div className="er" id="ee" role="alert">{errors.email || ""}</div>

      <label htmlFor="s">Subject</label>
      <input
        id="s"
        type="text"
        placeholder="What is this about?"
        value={form.subject}
        onChange={update("subject")}
        aria-invalid={Boolean(errors.subject) || undefined}
      />
      <div className="er" id="se" role="alert">{errors.subject || ""}</div>

      <label htmlFor="it">Inquiry type</label>
      <select id="it" value={form.inquiry} onChange={update("inquiry")}>
        {inquiryTypes.map((type) => (
          <option key={type}>{type}</option>
        ))}
      </select>
      <div className="er" />

      <label htmlFor="m">Message</label>
      <textarea
        id="m"
        placeholder="Tell me about your project"
        value={form.message}
        onChange={update("message")}
        aria-invalid={Boolean(errors.message) || undefined}
      />
      <div className="er" id="me" role="alert">{errors.message || ""}</div>

      <button className="btn p" type="submit" disabled={sending}>
        {sending ? "Sending…" : "Send message"}
      </button>
      <p id="ok" role="status">{status}</p>
    </form>
  );
}
