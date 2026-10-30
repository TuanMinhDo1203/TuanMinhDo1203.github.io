import { useEffect, useId, useRef, useState } from "react";
import type { ReactNode } from "react";
import { ArrowUpRight, X } from "lucide-react";
import type { ResearchImage } from "../types/content";
import { FigureContext } from "./figureContext";
export function FigureViewerProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<ResearchImage | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const captionId = useId();
  useEffect(() => {
    if (!active || !dialog.current) return;
    const previousFocus =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    const previousOverflow = document.body.style.overflow;
    const element = dialog.current;
    element.showModal();
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus({ preventScroll: true });
    };
  }, [active]);
  return (
    <FigureContext.Provider value={setActive}>
      {children}
      <dialog
        ref={dialog}
        className="figure-dialog"
        aria-labelledby={titleId}
        aria-describedby={active?.caption ? captionId : undefined}
        onCancel={(event) => {
          event.preventDefault();
          setActive(null);
        }}
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const controls = event.currentTarget.querySelectorAll<HTMLElement>(
            'button:not([disabled]), a[href], [tabindex="0"]',
          );
          const first = controls[0];
          const last = controls[controls.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
          }
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) setActive(null);
        }}
      >
        {active && (
          <div className="figure-dialog-panel">
            <div className="figure-dialog-header">
              <h2 id={titleId}>{active.title ?? "Research figure"}</h2>
              <button
                ref={closeButton}
                className="icon-button"
                aria-label="Close image viewer"
                onClick={() => setActive(null)}
              >
                <X size={22} />
              </button>
            </div>
            <div className="figure-dialog-image">
              <img
                src={active.src}
                alt={active.alt}
                width={active.width}
                height={active.height}
              />
            </div>
            <div className="figure-dialog-footer">
              {active.caption && <p id={captionId}>{active.caption}</p>}
              {active.attribution && (
                <p className="figure-attribution">{active.attribution}</p>
              )}
              <a
                href={active.fullSrc ?? active.src}
                target="_blank"
                rel="noreferrer"
              >
                Open original image <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        )}
      </dialog>
    </FigureContext.Provider>
  );
}
