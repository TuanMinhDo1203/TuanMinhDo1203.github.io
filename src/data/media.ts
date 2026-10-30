import type { ResearchImage } from "../types/content";
export const media = {
  portrait: {
    src: "/research/portrait.webp",
    fullSrc: "/research/originals/portrait.jpg",
    sourceFile: "images/portrait.jpg",
    title: "Tuan Minh Do",
    attribution: "Portrait supplied by Tuan Minh Do.",
    width: 900,
    height: 1200,
    alt: "Tuan Minh Do outdoors beside a waterfront.",
  },
  university: {
    src: "/research/fpt-university.png",
    fullSrc: "/research/originals/fptu.png",
    sourceFile: "images/fptu.png",
    title: "FPT University",
    attribution:
      "University logo supplied by Tuan Minh Do; education affiliation from the CV.",
    width: 554,
    height: 554,
    alt: "FPT University",
  },
  top100: {
    src: "/research/top100.webp",
    fullSrc: "/research/originals/top100.jpg",
    sourceFile: "images/top100.jpg",
    title: "FPT University — Top 100 Outstanding Students",
    attribution:
      "Photograph supplied by Tuan Minh Do; distinction and academic terms documented in the CV. No specific term is assigned to this photograph.",
    width: 1500,
    height: 1000,
    alt: "Tuan Minh Do at an FPT University Top 100 student recognition ceremony.",
    caption: "FPT University · Top 100 Outstanding Students",
  },
  soict: {
    src: "/research/soict.webp",
    fullSrc: "/research/originals/soict.jpg",
    sourceFile: "images/soict.jpg",
    title: "SoICT Summer School on Edge AI 2026",
    attribution:
      "Photograph supplied by Tuan Minh Do; presentation award and project title documented in the CV.",
    width: 1400,
    height: 1050,
    alt: "Group photograph at the SoICT Summer School on Edge AI closing event.",
    caption:
      "SoICT Summer School on Edge AI 2026 · 1st Runner-up Presentation Award",
  },
  apweb: {
    src: "/research/apweb-award.webp",
    fullSrc: "/research/originals/APWEB_thirdbest.png",
    sourceFile: "images/APWEB_thirdbest.png",
    title: "APWeb-WAIM 2026 award presentation",
    attribution:
      "Photograph supplied by Tuan Minh Do; award title from the CV.",
    width: 1400,
    height: 932,
    alt: "Presentation of the Third Best Research Paper Award at APWeb-WAIM 2026.",
    caption: "APWeb-WAIM 2026 · 3rd Best Research Paper Award",
  },
} satisfies Record<string, ResearchImage>;
export const projectMedia: Record<string, ResearchImage[]> = {
  lowlight: [
    {
      src: "/research/llie-pipeline.webp",
      fullSrc: "/research/originals/LLIE.png",
      sourceFile: "images/LLIE.png",
      title: "Detector-aware low-light enhancement pipeline",
      attribution:
        "Figure supplied and selected by Tuan Minh Do. Schematic workflow; not final quantitative evidence.",
      width: 1672,
      height: 501,
      alt: "Supplied pipeline illustration showing low-light input, image enhancement, and downstream object detection.",
      caption:
        "Low-light enhancement → object detection · supplied pipeline illustration; ongoing capstone research",
    },
  ],
  ocr: [
    {
      src: "/research/exam-ocr-demo.webp",
      fullSrc: "/research/originals/EXAM_OCR.png",
      sourceFile: "images/EXAM_OCR.png",
      title: "EXAM_OCR recognition demonstration",
      attribution:
        "Project screenshot supplied by Tuan Minh Do; project context from the CV.",
      width: 1600,
      height: 777,
      alt: "EXAM_OCR interface showing a handwritten Python exam page beside reconstructed code.",
      caption: "EXAM_OCR · handwritten input and reconstructed Python code",
    },
    {
      src: "/research/exam-ocr-pipeline.webp",
      fullSrc: "/research/originals/examocr.png",
      sourceFile: "images/examocr.png",
      title: "EXAM_OCR multi-stage pipeline",
      attribution: "Pipeline figure supplied by Tuan Minh Do for EXAM_OCR.",
      width: 1800,
      height: 552,
      alt: "OCR pipeline from preprocessing and line detection through classification, recognition, and code reconstruction.",
      caption: "Multi-stage recognition and code reconstruction pipeline",
    },
  ],
  edge: [
    {
      src: "/research/edgeplant-pipeline.webp",
      fullSrc: "/research/originals/edgeplant.png",
      sourceFile: "images/edgeplant.png",
      title: "EdgePlant conversion and deployment workflow",
      attribution:
        "Workflow supplied by Tuan Minh Do; deployment contribution from the CV.",
      width: 1572,
      height: 645,
      alt: "EdgePlant workflow from PyTorch through ONNX, QNN conversion, W8A16 quantization, and QNN runtime on the Qualcomm QCS8550 Hexagon NPU.",
      caption: "EdgePlant · model conversion and edge inference workflow",
    },
  ],
};

export const awardGallery: ResearchImage[] = [
  {
    src: "/research/olpai.webp",
    fullSrc: "/research/originals/OLPAI.png",
    sourceFile: "images/OLPAI.png",
    title: "OlpAI 2025 award event",
    attribution:
      "Photograph supplied by Tuan Minh Do. Exact ceremony/round is not independently established from the image.",
    width: 1200,
    height: 781,
    alt: "OlpAI award event photograph supplied by Tuan Minh Do.",
    caption: "OlpAI 2025 · award event",
  },
  {
    src: "/research/olpai-team.webp",
    fullSrc: "/research/originals/team_OLPAI.jpg",
    sourceFile: "images/team_OLPAI.jpg",
    title: "OlpAI 2025 team photograph",
    attribution:
      "Photograph supplied by Tuan Minh Do; event context from the CV.",
    width: 1400,
    height: 1050,
    alt: "Team photograph at the 2025 student Olympiad event.",
    caption: "OlpAI 2025 · team photograph",
  },
];
export const publicationMedia: Record<string, ResearchImage> = {
  "CPGA-Stable: Improving Optimization Stability in Physics-Inspired Low-Light Image Enhancement":
    {
      src: "/research/cpga-stable.webp",
      fullSrc: "/research/originals/cpga_stable.png",
      sourceFile: "images/cpga_stable.png",
      title: "CPGA-Stable: qualitative examples and failure case",
      attribution:
        "Figure supplied by Tuan Minh Do for CPGA-Stable. Not a result of the detector-aware capstone.",
      width: 1714,
      height: 786,
      alt: "Supplied CPGA-Stable comparison with input, ground truth, Base CPGA, and CPGA-Stable columns, including an example and a failure case.",
      caption:
        "Supplied qualitative comparison · includes a failure case; results belong to CPGA-Stable, not the capstone.",
    },
  "Towards Accurate and Efficient Waste Image Classification: A Hybrid Deep Learning and Machine Learning Approach":
    {
      src: "/research/waste-classification.webp",
      fullSrc: "/research/originals/trash_Q1.png",
      sourceFile: "images/trash_Q1.png",
      title: "Hybrid waste-classification workflow",
      attribution:
        "Workflow figure supplied by Tuan Minh Do for the Ain Shams Engineering Journal paper.",
      width: 1281,
      height: 1448,
      alt: "Supplied workflow diagram for hybrid waste image classification.",
      caption:
        "Hybrid deep learning and machine learning classification workflow",
    },
};

// Project imagery is explicitly identified as implementation context, not a paper figure.
export const selectedPublicationMedia: Record<string, ResearchImage> = {
  "python-ocr": {
    ...projectMedia.ocr[1],
    title: "Handwritten Python OCR — implementation pipeline",
    caption:
      "EXAM_OCR implementation pipeline associated with the handwritten-code research.",
    attribution:
      "User-supplied EXAM_OCR project diagram. Shown as implementation context for the related APWeb-WAIM paper, not asserted to be a figure from the published paper.",
  },
  "cpga-stable":
    publicationMedia[
      "CPGA-Stable: Improving Optimization Stability in Physics-Inspired Low-Light Image Enhancement"
    ],
};
