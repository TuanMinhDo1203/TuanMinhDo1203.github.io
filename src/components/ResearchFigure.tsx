import { Expand } from "lucide-react";
import type { ResearchImage } from "../types/content";
import { useFigureViewer } from "./figureContext";
export function ResearchFigure({
  image,
  className = "",
  thumbnail = false,
}: {
  image: ResearchImage;
  className?: string;
  thumbnail?: boolean;
}) {
  const open = useFigureViewer();
  return (
    <figure
      className={`research-figure ${thumbnail ? "figure-thumbnail" : ""} ${className}`}
    >
      <button
        type="button"
        className="figure-trigger"
        onClick={() => open(image)}
        aria-haspopup="dialog"
        aria-label={`View ${image.title ?? image.alt}`}
      >
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading="lazy"
          decoding="async"
        />
        <span className="figure-expand" aria-hidden="true">
          <Expand size={16} />
        </span>
      </button>
      {thumbnail ? (
        <figcaption>View figure</figcaption>
      ) : (
        image.caption && <figcaption>{image.caption}</figcaption>
      )}
    </figure>
  );
}
