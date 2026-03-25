import styles from "./projects.module.css";

const projects = [
  {
    title: "Fintech App",
    tech: "React.js",
    description:
      "Developed the frontend for financial reports with a clear, data-focused interface for better readability.",
  },
  {
    title: "E-commerce Sites",
    tech: "React.js",
    description:
      "Worked on multiple e-commerce platforms, building responsive interfaces optimized for product browsing and checkout flow.",
  },
  {
    title: "Event & Invitation Platform",
    tech: "Next.js",
    description:
      "Created a modern digital invitation system with customization options and guest response tracking.",
  },
  {
    title: "Job Portal",
    tech: "React.js",
    description:
      "Built the frontend of a job portal with a user-friendly design focused on discoverability and smooth interactions.",
  },
];

function projectsPage() {
  return (
    <main
      className={`page-shell simple-page ${styles.projectsPage}`}
      data-aos="fade-up"
    >
      <header
        className={styles.hero}
        data-aos="fade-right"
        data-aos-delay="120"
      >
        <p className={styles.kicker}>Selected Work</p>
        <h1>Projects</h1>
        <p className={styles.lead}>
          A collection of frontend projects built with React.js and Next.js,
          focused on responsive design, usability, and polished user
          experiences.
        </p>
      </header>

      <section className={styles.grid} aria-label="Project list">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className={styles.card}
            data-aos="fade-up"
            data-aos-delay={180 + index * 80}
          >
            <div className={styles.cardTop}>
              <h2>{project.title}</h2>
              <span className={styles.badge}>{project.tech}</span>
            </div>
            <p>{project.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

export default projectsPage;
