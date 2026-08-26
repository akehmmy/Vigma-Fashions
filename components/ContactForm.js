"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const name = data.get("name");
    const email = data.get("email");
    const subject = data.get("subject") || "Inquiry from VIgma Fashion website";
    const message = data.get("message");

    // No backend yet: open the visitor's email client pre-filled.
    // Swap this for an API route or a form service (Formspree, Resend) later.
    const body = `Name: ${name}%0AEmail: ${email}%0A%0A${encodeURIComponent(
      message || ""
    )}`;
    window.location.href = `mailto:vigmafashion@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;

    setSent(true);
  }

  if (sent) {
    return (
      <div>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Thank you.</h2>
        <p style={{ color: "var(--color-muted)", maxWidth: "40ch" }}>
          Your email client should have opened with your message ready to send.
          We&apos;ll be in touch shortly.
        </p>
        <button
          className="btn btn--ghost"
          style={{ marginTop: "2rem" }}
          onClick={() => setSent(false)}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" required placeholder="Your name" />
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required placeholder="you@email.com" />
      </div>

      <div className="field">
        <label htmlFor="subject">Subject</label>
        <input id="subject" name="subject" type="text" placeholder="What's this about?" />
      </div>

      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={6} required placeholder="Tell us more..." />
      </div>

      <button type="submit" className="btn">Send Message</button>
      <p className="form-note">
        We typically reply within two business days.
      </p>
    </form>
  );
}
