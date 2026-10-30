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
      "Worked with OutSystems Developer Cloud on business workflows, data modeling, and application logic.",
      "Explored Azure AI Document Intelligence custom extraction, from document labeling to model training and testing.",
      "Gained hands-on experience with API integration, chatbots, and AI-assisted automation.",
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
      "Developed OCR post-processing modules that reconstruct DOCX and HTML documents from JSON while preserving layout.",
      "Prepared Vietnamese document datasets for VietOCR fine-tuning, evaluation, and error analysis.",
      "Supported distributed inference and contributed logging, monitoring, table-layout detection, and asynchronous processing components alongside senior engineers.",
    ],
    tags: ["VietOCR", "Document reconstruction", "Docker", "Redis / RabbitMQ"],
  },
];
export const skillGroups = [
  {
    label: "Computer Vision & Deep Learning",
    description:
      "Image restoration, object detection, and comparative model evaluation.",
    tools: "PyTorch · TensorFlow · OpenCV · YOLO",
  },
  {
    label: "Document AI",
    description:
      "Handwritten code recognition, structured reconstruction, and OCR error analysis.",
    tools: "TrOCR · VietOCR · Azure AI Document Intelligence",
  },
  {
    label: "Model Optimization & Deployment",
    description:
      "Inference conversion and optimization across CPU and edge targets.",
    tools: "OpenVINO · ONNX Runtime · Qualcomm QNN",
  },
  {
    label: "ML Systems & Experimentation",
    description:
      "Controlled experiments, ablations, evaluation workflows, and asynchronous inference.",
    tools: "Python · FastAPI · Docker · Redis / Celery",
  },
];
// Complete tool inventory remains available in the downloadable CV.
