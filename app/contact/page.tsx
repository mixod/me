import styles from "./contact.module.css";
import ContactForm from "./contact-form";

const contactItems = [
  {
    label: "Email",
    value: "thapasangram64@gmail.com",
    href: "mailto:thapasangram64@gmail.com",
    note: "Best for project discussions",
  },
  {
    label: "Phone",
    value: "9803142989",
    href: "tel:9803142989",
    note: "Available for quick calls",
  },
  {
    label: "GitHub",
    value: "github.com/mixod",
    href: "https://github.com/mixod",
    note: "Code samples and repositories",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/sangram-thapa-b0639831b",
    href: "https://www.linkedin.com/in/sangram-thapa-b0639831b/",
    note: "Professional profile",
  },
];

function contactPage() {
  return (
    <main
      className={`page-shell simple-page ${styles.contactPage}`}
      data-aos="fade-up"
    >
      <header
        className={styles.hero}
        data-aos="fade-right"
        data-aos-delay="120"
      >
        <p className={styles.kicker}>Let&apos;s Connect</p>
        <h1>Contact</h1>
        <p className={styles.lead}>
          Open to collaborations, frontend roles, and freelance opportunities.
          Reach out through any channel below.
        </p>
      </header>

      <section className={styles.grid} aria-label="Contact links">
        {contactItems.map((item, index) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            className={styles.card}
            data-aos="fade-up"
            data-aos-delay={180 + index * 90}
          >
            <span className={styles.label}>{item.label}</span>
            <span className={styles.value}>{item.value}</span>
            <span className={styles.note}>{item.note}</span>
          </a>
        ))}
      </section>

      <ContactForm />
    </main>
  );
}

export default contactPage;
