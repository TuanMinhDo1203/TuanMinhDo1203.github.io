import { experience, skillGroups } from "../data/experience";
import { Reveal, SectionTitle } from "./SectionLayout";
export function ExperienceSection() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <Reveal>
          <SectionTitle
            index="02"
            title="Experience & expertise."
            label="RESEARCH IN PRACTICE"
          />
        </Reveal>
        <div className="experience-list">
          {experience.map((item) => (
            <Reveal className="experience-item" key={item.organization}>
              <div className="experience-identity">
                <div className="company-logo">
                  <img
                    src={item.logo}
                    alt={item.organization}
                    width="100"
                    height="80"
                    loading="lazy"
                  />
                </div>
                <p className="mono">{item.period}</p>
                <h3>{item.organization}</h3>
              </div>
              <div className="experience-body">
                <h4>{item.role}</h4>
                <ul>
                  {item.contributions.map((text) => (
                    <li key={text}>{text}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="expertise-section">
          <h3 className="eyebrow">RESEARCH COMPETENCIES</h3>
          <div className="expertise-grid">
            {skillGroups.map((group) => (
              <article className="expertise-card" key={group.label}>
                <h4>{group.label}</h4>
                <p>{group.description}</p>
                <p className="expertise-tools">{group.tools}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
