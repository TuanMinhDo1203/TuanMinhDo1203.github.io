import { useEffect, useState } from "react";
import { ArrowUpRight, Award } from "lucide-react";
import { publications } from "../data/publications";
import { publicationMedia, selectedPublicationMedia } from "../data/media";
import { ResearchResults } from "./ResearchResults";
import { ResearchFigure } from "./ResearchFigure";
import { SectionTitle, Reveal } from "./SectionLayout";
export function PublicationList() {
  const [filter, setFilter] = useState("All");
  const filtered = publications.filter(
    (p) => filter === "All" || String(p.year) === filter || p.role === filter,
  );
  const years = [...new Set(publications.map((p) => p.year))].sort(
    (a, b) => b - a,
  );
  useEffect(() => {
    let frame = 0;
    const reveal = (hash: string) => {
      if (!publications.some((p) => hash === `#publication-${p.id}`)) return;
      setFilter("All");
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const entry = document.getElementById(hash.slice(1));
        entry?.scrollIntoView({ behavior: "instant", block: "start" });
        entry?.focus({ preventScroll: true });
      });
    };
    const onHash = () => reveal(window.location.hash);
    const onLink = (event: MouseEvent) => {
      const anchor =
        event.target instanceof Element
          ? event.target.closest<HTMLAnchorElement>('a[href^="#publication-"]')
          : null;
      if (anchor) reveal(anchor.hash);
    };
    window.addEventListener("hashchange", onHash);
    document.addEventListener("click", onLink);
    return () => {
      window.removeEventListener("hashchange", onHash);
      document.removeEventListener("click", onLink);
      cancelAnimationFrame(frame);
    };
  }, []);
  return (
    <section id="publications" className="section section-publications">
      <div className="container">
        <Reveal>
          <SectionTitle
            index="01"
            title="Publications."
            label="RESEARCH & SELECTED CONTRIBUTIONS"
          >
            <p className="section-intro">
              Methods and evidence from selected first-author work, followed by
              the complete research record.
            </p>
          </SectionTitle>
        </Reveal>
        <div className="publication-toolbar">
          <span className="mono">
            {String(filtered.length).padStart(2, "0")} ENTRIES
          </span>
          <div
            className="filters"
            role="group"
            aria-label="Filter publications"
          >
            {["All", ...years.map(String), "First author", "Co-author"].map(
              (value) => (
                <button
                  key={value}
                  aria-pressed={filter === value}
                  onClick={() => setFilter(value)}
                >
                  {value}
                </button>
              ),
            )}
          </div>
        </div>
        <p className="sr-only" aria-live="polite">
          {filtered.length} publications shown
        </p>
        <div className="publication-list">
          {filtered.map((p) => {
            const contribution = p.contribution;
            const figure = contribution
              ? selectedPublicationMedia[contribution.figureKey]
              : publicationMedia[p.title];
            return (
              <article
                id={`publication-${p.id}`}
                tabIndex={-1}
                className={`publication ${figure ? "has-figure" : ""} ${contribution ? "publication-spotlight" : ""}`}
                key={p.id}
              >
                <span className="publication-year mono">{p.year}</span>
                <div className="publication-content">
                  <div className="publication-meta">
                    <span>{p.venue}</span>
                    <span>{p.role}</span>
                    {p.journalTier && (
                      <span
                        className="journal-tier"
                        title="Journal classification listed in the supplied CV"
                      >
                        {p.journalTier}
                      </span>
                    )}
                    {p.status && p.status !== "Published" && (
                      <span className="publication-status">{p.status}</span>
                    )}
                  </div>
                  <h3>
                    {p.url ? (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Read ${p.title} — DOI / publisher`}
                      >
                        {p.title}
                        <ArrowUpRight size={16} />
                      </a>
                    ) : (
                      p.title
                    )}
                  </h3>
                  {p.authors && (
                    <p className="publication-authors" aria-label="Authors">
                      {p.authors.map((author, index) => (
                        <span key={author.name}>
                          {index > 0 && ", "}
                          {author.isOwner ? (
                            <strong>{author.name}</strong>
                          ) : (
                            author.name
                          )}
                        </span>
                      ))}
                    </p>
                  )}
                  {p.highlight &&
                    (!contribution || p.highlight.includes("Award")) && (
                      <p className="publication-highlight">
                        {p.highlight.includes("Award") && <Award size={13} />}{" "}
                        {p.highlight}
                      </p>
                    )}
                  {contribution && (
                    <>
                      <div className="contribution-story">
                        <div>
                          <p className="detail-label mono">RESEARCH PROBLEM</p>
                          <p>{contribution.problem}</p>
                        </div>
                        <div>
                          <p className="detail-label mono">CONTRIBUTION</p>
                          <p>{contribution.method}</p>
                        </div>
                      </div>
                      <ResearchResults
                        metrics={contribution.metrics}
                        className="contribution-metrics"
                      />
                      {(contribution.codeUrl || contribution.projectId) && (
                        <div className="contribution-links">
                          {contribution.projectId && (
                            <a href={`#${contribution.projectId}`}>
                              Explore EXAM_OCR
                              <ArrowUpRight size={14} />
                            </a>
                          )}
                          {contribution.codeUrl && (
                            <a
                              href={contribution.codeUrl}
                              target="_blank"
                              rel="noreferrer"
                              aria-label={`View implementation code for ${p.title}`}
                            >
                              Implementation code
                              <ArrowUpRight size={14} />
                            </a>
                          )}
                        </div>
                      )}
                    </>
                  )}
                </div>
                {figure && (
                  <ResearchFigure
                    image={figure}
                    thumbnail
                    className={contribution ? "contribution-preview" : ""}
                  />
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
