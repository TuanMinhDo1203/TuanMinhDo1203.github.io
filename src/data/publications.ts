import { verifiedPublications } from "./verifiedPublications";
import type { Publication } from "../types/content";
export const publications: Publication[] = [
  {
    id: "python-ocr",
    ...verifiedPublications["python-ocr"],
    contribution: {
      problem:
        "Handwritten Python recognition must preserve indentation and code structure, not just individual characters.",
      method:
        "Developed a multi-stage OCR pipeline combining line detection/classification, TrOCR recognition, and indentation-aware reconstruction.",
      metrics: [
        { value: "90.51%", label: "Line recovery" },
        { value: "27.01%", label: "Exact match" },
      ],
      context:
        "Reported recognition evaluation. CPU inference optimization is described separately in the EXAM_OCR project.",
      figureKey: "python-ocr",
      projectId: "project-ocr",
      codeUrl: "https://github.com/TuanMinhDo1203/EXAM_OCR",
    },
    url: "https://doi.org/10.1007/978-981-92-5699-0_20",
    title:
      "Recognition of Handwritten Python Code in Academic Exam Settings Using a Multi-stage OCR Pipeline",
    venue: "APWeb-WAIM",
    year: 2026,
    role: "First author",
    highlight: "3rd Best Research Paper Award",
  },
  {
    id: "cpga-stable",
    ...verifiedPublications["cpga-stable"],
    contribution: {
      problem:
        "Optimization instability can make physics-inspired low-light enhancement difficult to train consistently.",
      method:
        "Studied bounded transmission and controlled initialization of the final transmission head to improve CPGA optimization stability.",
      metrics: [{ value: "14.75 → 20.09 dB", label: "Mean PSNR" }],
      context:
        "LOLv1: mean PSNR across six evaluated seeds. The qualitative figure includes an example and a failure case; these results belong to CPGA-Stable, not the detector-aware capstone.",
      figureKey: "cpga-stable",
    },
    url: "https://doi.org/10.1007/978-981-92-6513-8_12",
    title:
      "CPGA-Stable: Improving Optimization Stability in Physics-Inspired Low-Light Image Enhancement",
    venue: "MIWAI",
    year: 2026,
    role: "First author",
    highlight: "Mean PSNR: 14.75 → 20.09 dB",
  },
  {
    id: "waste-classification",
    ...verifiedPublications["waste-classification"],
    url: "https://doi.org/10.1016/j.asej.2026.104062",
    title:
      "Towards Accurate and Efficient Waste Image Classification: A Hybrid Deep Learning and Machine Learning Approach",
    venue: "Ain Shams Engineering Journal",
    journalTier: "SCI Q1",
    year: 2026,
    role: "Co-author",
  },
  {
    id: "dicom-preprocessing",
    ...verifiedPublications["dicom-preprocessing"],
    url: "https://doi.org/10.1007/978-981-92-5699-0_29",
    title:
      "Impact of DICOM Preprocessing Strategies on Chest X-ray Abnormality Detection",
    venue: "APWeb-WAIM",
    year: 2026,
    role: "Co-author",
  },
  {
    id: "lightweight-losses",
    title:
      "Understanding Loss Function Behavior Across Lightweight Low-Light Image Enhancement Architectures",
    venue: "EIDT-SIMC",
    year: 2026,
    role: "First author",
    status: "Accepted",
  },
  {
    id: "vietnamese-receipt-ocr",
    ...verifiedPublications["vietnamese-receipt-ocr"],
    url: "https://doi.org/10.1007/978-3-032-33384-1_42",
    title:
      "Robustness and Vietnamese-Specific OCR Error Analysis on Receipt Images",
    venue: "MISNC",
    year: 2026,
    role: "First author",
  },
  {
    id: "red-river-forecasting",
    ...verifiedPublications["red-river-forecasting"],
    url: "https://doi.org/10.1007/978-3-032-36547-7_5",
    title:
      "Comparative Study of Deep Learning Architectures for Water Level Forecasting in the Red River",
    venue: "MEDES",
    year: 2025,
    role: "First author",
    highlight: "Best Paper Award",
  },
  {
    id: "forecasting-losses",
    ...verifiedPublications["forecasting-losses"],
    url: "https://doi.org/10.1109/ICAIDES67265.2025.11404066",
    title:
      "Comparative Analysis of Loss Functions in Deep Learning Models for Water Level Forecasting",
    venue: "ICAIDES",
    year: 2025,
    role: "First author",
  },
];
