import { Award } from "lucide-react";
import { awards } from "../data/awards";
import { media, awardGallery } from "../data/media";
import { ResearchFigure } from "./ResearchFigure";
import { SectionTitle, Reveal } from "./SectionLayout";
export function HonorsSection() {
  return (
    <section id="honors" className="section honors-section">
      <div className="container">
        <Reveal>
          <SectionTitle
            index="03"
            title="Honors & distinctions."
            label="RECOGNITION"
          />
        </Reveal>
        <p className="honors-group-label mono">RESEARCH AWARDS</p>
        <div className="research-recognition">
          <ResearchFigure image={media.apweb} className="recognition-photo" />
          <div className="research-awards">
            {awards
              .filter((a) => a.group === "research")
              .map((award) => (
                <article
                  className="honor-card research-award"
                  key={award.venue}
                >
                  <div className="honor-card-top">
                    <p className="mono">
                      {award.venue} · {award.year}
                    </p>
                    <Award size={23} strokeWidth={1.4} aria-hidden="true" />
                  </div>
                  <h3>{award.title}</h3>
                  <p className="honor-detail">{award.detail}</p>
                  {award.publicationId && (
                    <a
                      href={`#publication-${award.publicationId}`}
                      className="inline-link"
                    >
                      View awarded paper <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </article>
              ))}
          </div>
        </div>
        <p className="honors-group-label mono">
          ACADEMIC COMPETITIONS & DISTINCTIONS
        </p>
        <div className="academic-awards">
          {awards
            .filter((a) => a.group === "academic")
            .map((award) => (
              <article className="honor-card academic-award" key={award.venue}>
                <p className="mono">
                  {award.venue} · {award.year ?? award.period}
                </p>
                <h3>{award.title}</h3>
                {award.distinctions && (
                  <ul>
                    {award.distinctions.map((text) => (
                      <li key={text}>{text}</li>
                    ))}
                  </ul>
                )}
                {award.detail && <p className="honor-detail">{award.detail}</p>}
                {award.terms && (
                  <ul className="honor-terms">
                    {award.terms.map((term) => (
                      <li key={term}>{term}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
        </div>
        <div className="award-moments">
          <p className="eyebrow">ACADEMIC MOMENTS</p>
          <div className="award-gallery">
            {[media.top100, media.soict, ...awardGallery].map((image) => (
              <ResearchFigure key={image.src} image={image} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
