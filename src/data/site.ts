import type { Profile } from "../types/content";
export const profile: Profile = {
  name: "Tuan Minh Do",
  github: "https://github.com/TuanMinhDo1203",
  email: "tuanminhdo1203@gmail.com",
  linkedin: "https://www.linkedin.com/in/tuan-minh-do-1755a52b8/",
  cv: "/DoTuanMinh_CV.pdf",
};
export const navigation = [
  "Research",
  "Publications",
  "Experience",
  "Honors",
  "Projects",
  "Contact",
];
export const pillars = [
  {
    title: "Image restoration & visual understanding",
    text: "Low-light enhancement and image restoration for better downstream visual understanding.",
    question: "When does a better-looking image become a more useful image?",
    tags: "LOW-LIGHT VISION / OBJECT DETECTION",
  },
  {
    title: "Document intelligence & OCR",
    text: "Recognition pipelines that preserve layout and structure in handwritten code and Vietnamese documents.",
    question:
      "How can recognition preserve the structure that carries meaning?",
    tags: "HANDWRITING / STRUCTURED RECOGNITION",
  },
  {
    title: "Efficient AI & edge deployment",
    text: "Lightweight architectures, distillation, and inference optimization for resource-constrained systems.",
    question: "What can we preserve when computation becomes a constraint?",
    tags: "MODEL COMPRESSION / EDGE INFERENCE",
  },
];
