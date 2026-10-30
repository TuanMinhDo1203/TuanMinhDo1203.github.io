import { ArrowDown, ArrowRight, ArrowUpRight, Code2 } from "lucide-react";
import { pillars, profile } from "../data/site";
import { media } from "../data/media";
import { publications } from "../data/publications";
import { awards } from "../data/awards";
import { Reveal, SectionTitle } from "./SectionLayout";
export function HeroSection() {
  return (
    <section id="home" className="hero container">
      <Reveal className="hero-copy">
        <p className="eyebrow">COMPUTER VISION & EFFICIENT AI</p>
        <h1>
          Tuan Minh Do<span className="name-period">.</span>
        </h1>
        <h2>
          From visual restoration
          <br />
          to efficient AI systems.
        </h2>
        <p className="hero-summary">
          Final-year AI student at FPT University, Da Nang, working across
          computer vision, image restoration, document intelligence, and
          efficient deep learning. I study models through downstream evaluation,
          error analysis, and accuracy–efficiency trade-offs.
        </p>
        <div className="hero-buttons">
          <a href="#publications" className="button primary">
            View Publications <ArrowDown size={16} />
          </a>
          {profile.cv && (
            <a href={profile.cv} download className="button text-button">
              Download CV <ArrowDown size={16} />
            </a>
          )}
        </div>
        <div className="hero-socials">
          <a href={profile.github} target="_blank" rel="noreferrer">
            <Code2 size={16} />
            GitHub
            <ArrowUpRight size={14} />
          </a>
          {profile.email && (
            <a
              href={`mailto:${profile.email}`}
              aria-label={`Email ${profile.email}`}
            >
              Gmail
              <ArrowUpRight size={14} />
            </a>
          )}
          {profile.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>
        <ul className="research-highlights" aria-label="Research record">
          <li>
            <strong>{publications.length}</strong>
            <div>
              <span>listed research works</span>
              <small>including accepted work</small>
            </div>
          </li>
          <li>
            <strong>
              {publications.filter((p) => p.role === "First author").length}
            </strong>
            <span>first-author works</span>
          </li>
          <li>
            <strong>
              {awards.filter((a) => a.group === "research").length}
            </strong>
            <span>paper distinctions</span>
          </li>
        </ul>
      </Reveal>
      <Reveal className="hero-portrait">
        <img
          src={media.portrait.src}
          alt="Tuan Minh Do"
          width={media.portrait.width}
          height={media.portrait.height}
          fetchPriority="high"
        />
        <p>
          Tuan Minh Do <span>AI research & engineering</span>
        </p>
      </Reveal>
    </section>
  );
}
export function ResearchFocus() {
  return (
    <section
      id="research"
      className="research-snapshot container"
      aria-labelledby="research-focus-title"
    >
      <h2 id="research-focus-title" className="eyebrow">
        RESEARCH FOCUS
      </h2>
      <div className="pillar-grid">
        {pillars.map((pillar) => (
          <article className="pillar" key={pillar.title}>
            <h3>{pillar.title}</h3>
            <p>{pillar.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
export function AboutSection() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <Reveal>
          <SectionTitle
            index="05"
            title="Let’s connect."
            label="CONTACT & ACADEMIC BACKGROUND"
          />
          <div className="contact-grid">
            <div>
              <a
                className="button primary"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                Connect on GitHub <ArrowUpRight size={17} />
              </a>
              <div className="optional-links">
                {profile.email && (
                  <a
                    href={`mailto:${profile.email}`}
                    aria-label={`Email ${profile.email}`}
                  >
                    {profile.email}
                    <ArrowUpRight size={14} />
                  </a>
                )}
                {profile.scholar && (
                  <a href={profile.scholar}>Google Scholar</a>
                )}
                {profile.linkedin && (
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn
                    <ArrowUpRight size={14} />
                  </a>
                )}
                {profile.cv && (
                  <a href={profile.cv} download>
                    Download CV <ArrowDown size={14} />
                  </a>
                )}
              </div>
            </div>
            <div className="about-copy">
              <p>
                I’m building toward a career in AI research and engineering,
                with an emphasis on careful experimentation and efficient
                systems.
              </p>
              <div className="education">
                <img
                  className="university-logo"
                  src={media.university.src}
                  alt={media.university.alt}
                  width={media.university.width}
                  height={media.university.height}
                  loading="lazy"
                />
                <span className="mono">EDUCATION</span>
                <strong>BSc in Artificial Intelligence</strong>
                <span>
                  FPT University, Da Nang · Sep 2023 — Early 2027 (expected)
                </span>
                <span>GPA: 8.8/10</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
export function SiteFooter() {
  return (
    <footer className="container footer">
      <a className="footer-brand" href="#home">
        Tuan Minh Do<span>.</span>
      </a>
      <span>© {2026} Tuan Minh Do · Research, made visible.</span>
      <a href="#home">
        Back to top <ArrowRight size={15} className="back-arrow" />
      </a>
    </footer>
  );
}
