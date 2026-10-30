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
      "Investigating detector-aware optimization and lightweight enhancement in FPT University capstone research.",
    evidence:
      "Ongoing research; final experimental results are not yet available.",
    evaluation: [
      { label: "Enhancement quality", metrics: "PSNR · SSIM · LPIPS" },
      { label: "Detection performance", metrics: "mAP" },
      {
        label: "Computational efficiency",
        metrics: "Parameters · MACs · Inference latency",
      },
    ],
    limitation:
      "The pipeline illustration describes the research workflow, not a final benchmark or a verified deployment.",
    tags: ["Image restoration", "Knowledge distillation", "Efficient vision"],
  },
  {
    id: "ocr",
    title: "EXAM_OCR",
    category: "DOCUMENT INTELLIGENCE",
    status: "Research project",
    problem:
      "Recognizing handwritten Python code in academic examinations while preserving its structure.",
    method:
      "Line detection and classification, TrOCR recognition, and indentation-aware code reconstruction.",
    limitation:
      "Recognition errors remain the main end-to-end bottleneck, particularly where symbols and indentation determine code correctness.",
    optimization:
      "PyTorch-to-OpenVINO optimization for CPU inference, evaluated separately from recognition quality.",
    contribution:
      "Developed the end-to-end recognition platform and analyzed component-level errors and accuracy–latency trade-offs.",
    evidence:
      "End-to-end evaluation combines line recovery and exact code match; OpenVINO optimization reduces CPU inference time from 81.7s to 23.4s.",
    tags: ["TrOCR", "OpenVINO", "Handwritten code"],
    url: "https://github.com/TuanMinhDo1203/EXAM_OCR",
    metrics: [
      { value: "90.51%", label: "Line recovery" },
      { value: "27.01%", label: "Exact match" },
      { value: "81.7 → 23.4s", label: "CPU inference time" },
    ],
  },
  {
    id: "edge",
    title: "EdgePlant",
    category: "ON-DEVICE COMPUTER VISION",
    status: "Deployment contribution · Aug 2026",
    problem:
      "Bringing agricultural disease detection to the Qualcomm QCS8550 edge platform.",
    method:
      "YOLO11x converted from PyTorch through ONNX to Qualcomm QNN, using W8A16 quantization on QCS8550.",
    contribution:
      "Contributed model conversion, quantization, and hardware-accelerated edge deployment optimization.",
    evidence:
      "Model conversion, quantized execution, and hardware-accelerated inference on Qualcomm QCS8550.",
    technicalNote:
      "A 116-class YOLO11x model, converted through ONNX to Qualcomm QNN with W8A16 quantization, runs through the QNN runtime / HTP path on the QCS8550 Hexagon NPU.",
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
