import type { Project } from "../types/content";
export const projects: Project[] = [
  {
    id: "lowlight",
    title: "Detector-aware lightweight low-light image enhancement",
    category: "FPT UNIVERSITY · CAPSTONE RESEARCH",
    status: "In development",
    problem:
      "How can low-light image enhancement improve downstream detection while remaining computationally efficient?",
    method:
      "Exploring Retinexformer, lightweight architectures, knowledge distillation / PKD, and detector-aware optimization.",
    contribution:
      "Studying how detector-aware optimization and distillation affect downstream detection, restoration fidelity, and computational cost.",
    evaluation: [
      { label: "Enhancement quality", metrics: "PSNR · SSIM · LPIPS" },
      { label: "Detection performance", metrics: "mAP" },
      {
        label: "Computational efficiency",
        metrics: "Parameters · MACs · Inference latency",
      },
    ],
    limitation: "Ongoing evaluation; final benchmark results are pending.",
    tags: ["Image restoration", "Knowledge distillation", "Efficient vision"],
  },
  {
    id: "ocr",
    title: "EXAM_OCR",
    category: "DOCUMENT INTELLIGENCE",
    status: "Research project",
    problem:
      "Turning handwritten exam submissions into reviewable Python code.",
    method:
      "TrOCR and indentation reconstruction, with asynchronous FastAPI/Celery processing, Redis, Azure SQL/Blob storage, and Docker; PyTorch-to-OpenVINO CPU inference.",
    limitation:
      "Syntax-sensitive recognition remains the main end-to-end bottleneck.",
    contribution:
      "Built the recognition platform and teacher-review workflow; analyzed component errors and accuracy–latency trade-offs.",
    tags: ["TrOCR", "OpenVINO", "Handwritten code"],
    url: "https://github.com/TuanMinhDo1203/EXAM_OCR",
    metrics: [{ value: "81.7 → 23.4s", label: "CPU inference time" }],
  },
  {
    id: "edge",
    title: "EdgePlant",
    category: "ON-DEVICE COMPUTER VISION",
    status: "Deployment contribution · Aug 2026",
    problem: "Agricultural disease detection on Qualcomm QCS8550.",
    method:
      "YOLO11x exported from PyTorch through ONNX to Qualcomm QNN, with W8A16 quantization on the QCS8550 Hexagon NPU.",
    contribution:
      "Contributed model export, quantization, QNN runtime integration, and hardware-accelerated HTP inference for a 116-class agricultural detector.",
    tags: ["YOLO11x", "Qualcomm QNN", "W8A16"],
  },
];
export const otherProjects = [
  {
    title: "Student Academic Assistant Chatbot — Intent-aware RAG",
    period: "May — Aug 2025",
    description:
      "BGE-M3 embeddings, Qdrant, metadata filtering, and a DistilBERT intent classifier for academic support. Evaluated retrieval and classification trade-offs using Precision, Recall, F1, and latency.",
    url: "https://github.com/TuanMinhDo1203/FPT_FAP_CHAT/tree/main",
  },
  {
    title: "StallyApp — AI-assisted B2B Procurement",
    period: "Apr — Jul 2026",
    description:
      "Co-developed a human-reviewed procurement workflow with AI assistance for request drafting, supplier reranking, and multimodal quotation extraction. React, TypeScript, Express, SSE, and Supabase/Postgres.",
  },
  {
    title: "Reddit Sentiment Analysis",
    period: "Jan — Mar 2025",
    description:
      "Analyzed Premier League 2024/2025 discussions with a fine-tuned BERT-based sentiment model, web-collected match data, and a Streamlit dashboard.",
    url: "https://github.com/TuanMinhDo1203/Reddit_Sentiment_Analysis",
  },
];
