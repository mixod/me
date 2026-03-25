"use client";

import { FormEvent, useState } from "react";
import styles from "./contact.module.css";

type FormStatus = {
  type: "idle" | "success" | "error";
  message: string;
};

const initialStatus: FormStatus = {
  type: "idle",
  message: "",
};

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<FormStatus>(initialStatus);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    setIsSubmitting(true);
    setStatus(initialStatus);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Unable to send message right now.");
      }

      setStatus({
        type: "success",
        message: "Message sent successfully. I will get back to you soon.",
      });
      form.reset();
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Unable to send message right now.";

      setStatus({
        type: "error",
        message,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      className={styles.messageSection}
      data-aos="fade-up"
      data-aos-delay="220"
    >
      <div className={styles.messageHead}>
        <h2>Send Message</h2>
        <p>
          Fill this form and your message will be sent directly to
          thapasangram64@gmail.com.
        </p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.field}>
          <span>Name</span>
          <input type="text" name="name" placeholder="Your name" required />
        </label>

        <label className={styles.field}>
          <span>Email</span>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            required
          />
        </label>

        <label className={`${styles.field} ${styles.full}`}>
          <span>Message</span>
          <textarea
            name="message"
            rows={6}
            placeholder="Write your message"
            required
          />
        </label>

        <button
          type="submit"
          className={styles.sendBtn}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {status.type !== "idle" ? (
          <p
            className={`${styles.feedback} ${
              status.type === "error" ? styles.feedbackError : ""
            }`}
            role="status"
            aria-live="polite"
          >
            {status.message}
          </p>
        ) : null}
      </form>
    </section>
  );
}

export default ContactForm;
