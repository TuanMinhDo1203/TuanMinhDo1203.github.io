export interface PublicationAuthor {
  name: string;
  isOwner?: boolean;
}
export interface VerifiedPublicationMetadata {
  authors: PublicationAuthor[];
  metadataSource: string;
  publishedDate: string;
  status: "Published";
}
export interface Publication {
  id: string;
  authors?: PublicationAuthor[];
  metadataSource?: string;
  publishedDate?: string;
  contribution?: {
    problem: string;
    method: string;
    metrics: { value: string; label: string }[];
    context: string;
    figureKey: string;
    projectId?: string;
    codeUrl?: string;
  };
  title: string;
  year: number;
  venue: string;
  journalTier?: string;
  role: "First author" | "Co-author";
  status?: "Accepted" | "Published";
  highlight?: string;
  url?: string;
}
export interface Project {
  id: string;
  title: string;
  category: string;
  status: string;
  problem: string;
  method: string;
  contribution: string;
  evidence: string;
  optimization?: string;
  technicalNote?: string;
  evaluation?: { label: string; metrics: string }[];
  limitation?: string;
  tags: string[];
  url?: string;
  metrics?: { value: string; label: string }[];
}
export interface Profile {
  name: string;
  github: string;
  email?: string;
  scholar?: string;
  linkedin?: string;
  cv?: string;
}
export interface ResearchImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  title?: string;
  fullSrc?: string;
  sourceFile?: string;
  attribution?: string;
}
export interface Experience {
  organization: string;
  role: string;
  period: string;
  logo: string;
  summary: string;
  contributions: string[];
  tags: string[];
}
export interface Honor {
  title: string;
  venue: string;
  year?: number;
  period?: string;
  detail?: string;
  group: "research" | "academic";
  distinctions?: string[];
  terms?: string[];
  publicationId?: string;
}
