import { FeaturedProjects } from "./components/FeaturedProjects";
import { PublicationList } from "./components/PublicationList";
import { HonorsSection } from "./components/HonorsSection";
import { FigureViewerProvider } from "./components/FigureViewer";
import { ExperienceSection } from "./components/ExperienceSection";
import { MotionConfig } from "motion/react";
import { SiteHeader } from "./components/SiteHeader";
import {
  AboutSection,
  HeroSection,
  ResearchFocus,
  SiteFooter,
} from "./components/ResearchSections";
export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <FigureViewerProvider>
        <SiteHeader />
        <main id="main">
          <HeroSection />
          <ResearchFocus />
          <PublicationList />
          <ExperienceSection />
          <HonorsSection />
          <FeaturedProjects />
          <AboutSection />
        </main>
        <SiteFooter />
      </FigureViewerProvider>
    </MotionConfig>
  );
}
