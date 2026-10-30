import type { Experience } from "../types/content";
export const experience: Experience[] = [
  {
    organization: "FPT Software",
    role: "AI Engineer Intern",
    period: "Sep 2026 — Present",
    logo: "/research/fpt-software.png",
    summary:
      "Connecting enterprise applications with document AI and assisted workflows.",
    contributions: [
      "Contributed to enterprise applications in OutSystems ODC, working on business workflows, data models, application logic, and API integration for AI-assisted processes.",
      "For structured field extraction from documents, labeled training data and explored custom model training and testing with Azure AI Document Intelligence.",
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
      "To turn OCR output into editable documents, developed post-processing modules that reconstruct DOCX and HTML from OCR JSON while preserving layout consistency.",
      "Curated and preprocessed domain-specific Vietnamese document datasets for VietOCR fine-tuning, evaluation, and recognition-error analysis.",
      "Supported distributed OCR inference with Redis, RabbitMQ, and Docker; built logging and monitoring components to track latency and system performance. Collaborated with senior engineers on table-layout detection and asynchronous processing.",
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
