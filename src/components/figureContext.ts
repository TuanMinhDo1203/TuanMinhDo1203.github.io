import { createContext, useContext } from "react";
import type { ResearchImage } from "../types/content";
export const FigureContext = createContext<
  ((image: ResearchImage) => void) | null
>(null);
export function useFigureViewer() {
  const open = useContext(FigureContext);
  if (!open) throw new Error("Figure controls require FigureViewerProvider");
  return open;
}
