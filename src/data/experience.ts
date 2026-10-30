import type { Experience } from "../types/content";
export const experience: Experience[] = [
  {
    organization: "FPT Software",
    role: "Enterprise Application / AI Engineering Intern",
    period: "Sep 2026 — Present",
    logo: "/research/fpt-software.png",
    summary:
      "Connecting enterprise applications with document AI and assisted workflows.",
    contributions: [
      "Worked on OutSystems ODC workflows, data models, application logic, and API integrations for AI-assisted applications.",
      "Explored Azure AI Document Intelligence custom extraction through document labeling, model training, and testing.",
    ],
    tags: [
      "OutSystems ODC",
      "Azure AI Document Intelligence",
      "API integration",
    ],
  },
  {
    organization: "FPT Information System (FIS)",
    role: "AI Engineer Intern",
    period: "Oct 2025 — Apr 2026",
    logo: "/research/fpt-is.png",
    summary:
      "Building components for structured document reconstruction and OCR workflows.",
    contributions: [
      "Developed layout-preserving OCR JSON → DOCX/HTML reconstruction and prepared Vietnamese datasets for VietOCR fine-tuning, evaluation, and error analysis.",
      "Contributed to table-layout detection, distributed/asynchronous inference, and logging/monitoring with senior engineers using Docker, Redis, and RabbitMQ.",
    ],
    tags: ["VietOCR", "Document reconstruction", "Docker", "Redis / RabbitMQ"],
  },
];
export const skillGroups = [
  {
    label: "Computer Vision & Deep Learning",
    description:
      "Image restoration, object detection, and comparative evaluation.",
    tools: "PyTorch · TensorFlow · OpenCV · YOLO",
  },
  {
    label: "Document AI",
    description:
      "Handwritten OCR, structured reconstruction, and error analysis.",
    tools: "TrOCR · VietOCR · Azure AI Document Intelligence",
  },
  {
    label: "Model Optimization & Deployment",
    description: "Model conversion and inference optimization for CPU/edge.",
    tools: "OpenVINO · ONNX Runtime · Qualcomm QNN",
  },
  {
    label: "ML Systems & Experimentation",
    description:
      "Ablations, benchmarking, and asynchronous inference workflows.",
    tools: "Python · FastAPI · Docker · Redis / Celery",
  },
];
// Complete tool inventory remains available in the downloadable CV.
