import type { ResearchMetric } from "../types/content";

export function ResearchResults({
  metrics,
  className = "",
}: {
  metrics: ResearchMetric[];
  className?: string;
}) {
  return (
    <dl className={`research-results ${className}`}>
      {metrics.map((metric) => {
        const [baseline, result] = metric.value.split(" → ");
        return (
          <div className="result-item" key={metric.label}>
            <dt>{metric.label}</dt>
            <dd>
              {result ? (
                <>
                  <span className="result-baseline">{baseline}</span>
                  {" "}<span className="result-arrow">→</span>{" "}
                  <span className="result-value">{result}</span>
                </>
              ) : (
                <span className="result-value">{metric.value}</span>
              )}
            </dd>
            {metric.note && <dd className="result-note">{metric.note}</dd>}
          </div>
        );
      })}
    </dl>
  );
}
