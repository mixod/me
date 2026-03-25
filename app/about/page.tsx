import styles from "./about.module.css";

function aboutPage() {
  const skills = [
    { name: "JavaScript" },
    { name: "HTML/CSS" },
    { name: "Tailwind CSS" },
    { name: "React.js" },
    { name: "Next.js" },
    { name: "Node.js" },
  ];

  return (
    <main
      className={`page-shell simple-page ${styles.aboutPage}`}
      data-aos="fade-up"
    >
      <header
        className={styles.hero}
        data-aos="fade-right"
        data-aos-delay="120"
      >
        <p className={styles.kicker}>Profile</p>
        <h1>About Me</h1>
      </header>

      <section
        className={styles.introGrid}
        data-aos="fade-up"
        data-aos-delay="180"
      >
        <article className={styles.panel}>
          <h2>Who I Am</h2>
          <p>
            I&apos;m a passionate React Developer currently pursuing my
            Bachelor&apos;s degree in BSc CSIT. I work at IT Bridge Nepal, where
            I build modern web applications using React and other cutting-edge
            technologies.
          </p>
          <p>
            My journey in tech has been marked by continuous learning and
            hands-on experience. From winning hackathons to developing
            real-world applications, I&apos;m committed to creating seamless
            digital experiences.
          </p>
          <div className={styles.progressTrack} aria-hidden="true">
            <span className={styles.trackLine} />
            <span className={`${styles.orb} ${styles.orbOne}`} />
            <span className={`${styles.orb} ${styles.orbTwo}`} />
            <span className={`${styles.orb} ${styles.orbThree}`} />
            <span className={`${styles.orb} ${styles.orbFour}`} />
            <span className={`${styles.orb} ${styles.orbFive}`} />
            <span className={styles.startRing} />
            <span className={styles.endArrow} />
          </div>
        </article>

        <article className={styles.panel}>
          <h2>Skills</h2>
          <ul className={styles.skillsList}>
            {skills.map((skill) => (
              <li key={skill.name} className={styles.skillRow}>
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section
        className={styles.cardsGrid}
        data-aos="fade-up"
        data-aos-delay="260"
      >
        <article className={styles.card}>
          <h3>Education</h3>
          <p>Currently pursuing BSc CSIT</p>
        </article>

        <article className={styles.card}>
          <h3>Achievement</h3>
          <p>First Runner-up in College Hackathon</p>
        </article>

        <article className={styles.card}>
          <h3>Web Development</h3>
          <p>Strong foundation in modern web technologies</p>
        </article>
      </section>
    </main>
  );
}

export default aboutPage;
