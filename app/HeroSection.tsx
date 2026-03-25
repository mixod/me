import Image from "next/image";

function HeroSection() {
  return (
    <section className="page-shell hero-wrap" data-aos="fade-up">
      <div className="hero-grid">
        <div data-aos="fade-right" data-aos-delay="120">
          <p className="hero-kicker">
            Hey, I am <span>Sangram</span>
          </p>
          <h1 className="hero-title">Frontend Developer</h1>
          <p className="hero-copy">
            BSc CSIT Student | Building seamless web experiences with modern
            technologies
          </p>

          <div className="hero-actions">
            <button className="btn-primary" type="button">
              Hire Me
            </button>
            <button className="btn-ghost" type="button">
              Contact
            </button>
          </div>

          <div
            className="hero-curve-panel"
            data-aos="fade-up"
            data-aos-delay="240"
          >
            <svg
              className="hero-curve-svg"
              viewBox="0 0 420 150"
              role="img"
              aria-label="Animated experience graph"
            >
              <path
                className="curve-frame"
                d="M16 16 V58 M16 16 H170 M170 16 L250 114 M250 114 H404 V74"
              />
              <path
                className="curve-path-glow"
                d="M16 80 C98 54 156 50 214 96 C262 132 328 126 390 102"
              />
              <path
                className="curve-path"
                d="M16 80 C98 54 156 50 214 96 C262 132 328 126 390 102"
              />
              <circle className="curve-node node-start" cx="16" cy="80" r="5" />
              <circle className="curve-node node-mid" cx="214" cy="96" r="5" />
              <circle className="curve-node node-end" cx="390" cy="102" r="5" />
            </svg>

            <div className="curve-orbs" aria-hidden="true">
              <span className="orb orb-1" />
              <span className="orb orb-2" />
              <span className="orb orb-3" />
              <span className="orb orb-4" />
              <span className="orb orb-5" />
              <span className="orb orb-6" />
              <span className="orb orb-7" />
              <span className="orb orb-8" />
              <span className="orb orb-9" />
            </div>
          </div>
        </div>

        <div className="hero-art" data-aos="zoom-in" data-aos-delay="180">
          <div className="avatar-orb">
            <div className="avatar-core">
              <Image
                src="/image/pp.png"
                alt="Sangram profile photo"
                fill
                className="avatar-photo"
                sizes="(max-width: 680px) 80vw, 320px"
                priority
              />
            </div>
            <span className="float-chip chip-html">HTML</span>
            <span className="float-chip chip-css">CSS</span>
            <span className="float-chip chip-js">JS</span>
            <span className="float-chip chip-design">UI</span>
          </div>
        </div>
      </div>
      <div className="hero-pattern" />
    </section>
  );
}

export default HeroSection;
