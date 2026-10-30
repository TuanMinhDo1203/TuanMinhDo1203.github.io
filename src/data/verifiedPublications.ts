import type { VerifiedPublicationMetadata } from "../types/content";

// Publisher-deposited DOI metadata; preserve author order and name spelling.
// Detailed provenance: docs/publication-metadata.json (verified 30 October 2026).
export const verifiedPublications: Partial<
  Record<string, VerifiedPublicationMetadata>
> = {
  "python-ocr": {
    authors: [
      {
        name: "Tuan-Minh Do",
        isOwner: true,
      },
      {
        name: "Cong-Tam Phan",
      },
      {
        name: "Hoang-Phuc Mai",
      },
      {
        name: "Ngoc-Bao-Quang Nguyen",
      },
      {
        name: "Cao Vu Bui",
      },
    ],
    metadataSource: "https://doi.org/10.1007/978-981-92-5699-0_20",
    publishedDate: "2026-09-26",
    status: "Published",
  },
  "cpga-stable": {
    authors: [
      {
        name: "Tuan-Minh Do",
        isOwner: true,
      },
      {
        name: "Hoang-Phuc Mai",
      },
      {
        name: "Cong-Tam Phan",
      },
      {
        name: "Thi-Thu-Hong Phan",
      },
    ],
    metadataSource: "https://doi.org/10.1007/978-981-92-6513-8_12",
    publishedDate: "2026-10-09",
    status: "Published",
  },
  "waste-classification": {
    authors: [
      {
        name: "Ngoc-Bao-Quang Nguyen",
      },
      {
        name: "Tuan-Minh Do",
        isOwner: true,
      },
      {
        name: "Cong-Tam Phan",
      },
      {
        name: "Thi-Thu-Hong Phan",
      },
    ],
    metadataSource: "https://doi.org/10.1016/j.asej.2026.104062",
    publishedDate: "2026-04",
    status: "Published",
  },
  "dicom-preprocessing": {
    authors: [
      {
        name: "Thi-Bich-Tra Le",
      },
      {
        name: "Ngoc-Duy Le",
      },
      {
        name: "Tuan-Minh Do",
        isOwner: true,
      },
      {
        name: "Trung-Nguyen Hoang",
      },
      {
        name: "Ly-Minh-Hoang Tran",
      },
      {
        name: "Thi-Thu-Hong Phan",
      },
    ],
    metadataSource: "https://doi.org/10.1007/978-981-92-5699-0_29",
    publishedDate: "2026-09-26",
    status: "Published",
  },
  "vietnamese-receipt-ocr": {
    authors: [
      {
        name: "Tuan Minh Do",
        isOwner: true,
      },
      {
        name: "Cong Tam Phan",
      },
      {
        name: "Ngoc Bao Quang Nguyen",
      },
      {
        name: "Luong Vuong Nguyen",
      },
    ],
    metadataSource: "https://doi.org/10.1007/978-3-032-33384-1_42",
    publishedDate: "2026-07-26",
    status: "Published",
  },
  "red-river-forecasting": {
    authors: [
      {
        name: "Tuan-Minh Do",
        isOwner: true,
      },
      {
        name: "Ngoc-Bao-Quang Nguyen",
      },
      {
        name: "Cong-Tam Phan",
      },
      {
        name: "Thi-Thu-Hong Phan",
      },
    ],
    metadataSource: "https://doi.org/10.1007/978-3-032-36547-7_5",
    publishedDate: "2026-08-28",
    status: "Published",
  },
  "forecasting-losses": {
    authors: [
      {
        name: "Tuan-Minh Do",
        isOwner: true,
      },
      {
        name: "Ngoc-Bao-Quang Nguyen",
      },
      {
        name: "Cong-Tam Phan",
      },
      {
        name: "Thi-Thu-Hong Phan",
      },
    ],
    metadataSource: "https://doi.org/10.1109/ICAIDES67265.2025.11404066",
    publishedDate: "2025-12-11",
    status: "Published",
  },
};
