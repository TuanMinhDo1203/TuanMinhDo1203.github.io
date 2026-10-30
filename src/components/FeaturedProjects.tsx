import { ArrowUpRight } from "lucide-react";
import { projects, otherProjects } from "../data/projects";
import { projectMedia } from "../data/media";
import { ResearchResults } from "./ResearchResults";
import { ResearchFigure } from "./ResearchFigure";
import { Reveal, SectionTitle } from "./SectionLayout";
export function FeaturedProjects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <Reveal>
          <SectionTitle
            index="04"
            title="Featured research."
            label="SELECTED PROJECTS"
          >
            <p className="section-intro">
              Research questions, personal contributions, and the evidence so
              far.
            </p>
          </SectionTitle>
        </Reveal>
        <div className="projects-grid">
          {projects.map((project) => (
            <Reveal
              key={project.id}
              className={`project project-${project.id}`}
            >
              <div className="project-top">
                <p className="eyebrow">{project.category}</p>
                <span className="project-status">
                  <span className="status-dot" />
                  {project.status}
                </span>
              </div>
              <h3 id={`project-${project.id}`}>{project.title}</h3>
              <p className="project-problem">{project.problem}</p>
              <div className="project-research">
                <div className="project-approach">
                  <p className="detail-label mono">APPROACH</p>
                  <p>{project.method}</p>
                  {project.optimization && (
                    <>
                      <p className="detail-label mono">
                        INFERENCE OPTIMIZATION
                      </p>
                      <p>{project.optimization}</p>
                    </>
                  )}
                </div>
                <div>
                  <p className="detail-label mono">MY CONTRIBUTION</p>
                  <p>{project.contribution}</p>
                </div>
              </div>
              {project.evaluation && (
                <div className="evaluation-axes">
                  {project.evaluation.map((axis) => (
                    <div key={axis.label}>
                      <h4>{axis.label}</h4>
                      <p>{axis.metrics}</p>
                    </div>
                  ))}
                </div>
              )}
              {project.metrics && (
                <ResearchResults metrics={project.metrics} className="metrics" />
              )}
              {project.limitation && (
                <p className="project-note">{project.limitation}</p>
              )}
              {project.url && (
                <a
                  href={project.url}
                  className="inline-link"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title} repository on GitHub`}
                >
                  GitHub repository <ArrowUpRight size={16} />
                </a>
              )}
              {project.id === "ocr" && (
                <a
                  className="inline-link project-publication-link"
                  href="#publication-python-ocr"
                >
                  Related APWeb-WAIM paper <ArrowUpRight size={15} />
                </a>
              )}
              {projectMedia[project.id] && (
                <div className="project-gallery">
                  <ResearchFigure image={projectMedia[project.id][0]} />
                </div>
              )}
            </Reveal>
          ))}
        </div>
        <div className="secondary-index">
          <p className="eyebrow">OTHER EXPLORATIONS</p>
          {otherProjects.map((project) => (
            <details className="secondary-project" key={project.title}>
              <summary>
                <span>{project.title}</span>
                <span className="mono">{project.period}</span>
              </summary>
              <p>{project.description}</p>
              {project.url && (
                <a
                  href={project.url}
                  className="inline-link"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title} repository on GitHub`}
                >
                  GitHub repository <ArrowUpRight size={15} />
                </a>
              )}
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
