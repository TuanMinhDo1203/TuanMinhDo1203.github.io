# Portfolio V2 — content and link audit

Historical V2 audit. The current metadata and UI audit is [Portfolio V3](v3-refinement.md), which supersedes the earlier status/author-list coverage below.

Audit date: 30 October 2026 (Asia/Ho_Chi_Minh). No push or deployment was performed.

## Canonical content

`DoTuanMinh_CV-1.pdf` is the supplied canonical CV. The original eight paper titles and conference years remain unchanged. Roles, internships, email, GPA, education dates, distinctions, project contributions, and DOI destinations come from this CV and the implementation briefs. `public/DoTuanMinh_CV.pdf` is an unchanged copy. No phone number is duplicated on the homepage; the downloadable CV retains its original content. TOEFL 2023 was removed from the homepage and remains historical information in the CV.

Core project methods, contributions, evidence, caveats, and all six honors groups render without disclosures. Disclosures are reserved for secondary project descriptions and the EdgePlant artifact context. All event photos are now visible by default, including the newly supplied SoICT and Top 100 photographs. All eight bibliography entries remain visible with no filter selected. The OCR and CPGA-Stable entries now include selected contribution narratives and explicitly verified Published status; the Accepted entry remains separate. The selected publication figures open a keyboard-accessible native dialog rather than expanding the list.

## Research claim boundaries

- **Capstone:** ongoing, with no final quantitative result or deployment claim. Evaluation distinguishes enhancement (PSNR/SSIM/LPIPS), detection (mAP), and efficiency (parameters/MACs/latency). The user explicitly requested `images/LLIE.png` instead of the overall diagram. It is labeled a schematic workflow and does not substantiate a benchmark.
- **EXAM_OCR:** 90.51% line recovery and 27.01% exact match are separate recognition outcomes. CPU inference 81.7s → 23.4s is the supplied optimization result. Dataset, sample count, hardware configuration, and statistical uncertainty are not fully specified here. These figures are not generic model accuracy or cross-project comparisons.
- **CPGA-Stable:** the supplied mean PSNR 14.75 → 20.09 dB belongs to this paper. The figure includes both an example and a failure case and is never attributed to the capstone.
- **EdgePlant:** contribution to model conversion, W8A16 quantization, and QCS8550 deployment is supported by the CV. The 116-class description and artifact/checkpoint sizes are retained only in supplemental technical context. Over 400 MB and approximately 58.8 MB refer to different artifacts and are not presented as a compression ratio. No FPS, speedup, accuracy, or memory benchmark is asserted.
- **Honors:** six groups from the CV. OlpAI regional Second Prize is distinct from national finalist/Consolation Prize. The four Top 100 terms are separately listed. No QACI employment is shown.

Final capstone measurements, comparable EdgePlant evaluation, and fuller experimental protocols remain useful future additions, not claims made by this site.

## Bibliographic link audit

Checks followed redirects using HTTP GET. A successful HTTP response is evidence of reachability, not a substitute for title verification. Springer can return a cookie-related query parameter; IEEE can return an HTTP 202 intermediary response.

| Work                              | DOI                                                                                      | HTTP | Metadata verification                                                                                                                                                                                                  |
| --------------------------------- | ---------------------------------------------------------------------------------------- | ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Handwritten Python OCR            | [10.1007/978-981-92-5699-0_20](https://doi.org/10.1007/978-981-92-5699-0_20)             | 200  | Crossref title matches (typographic whitespace normalized); published 26 Sep 2026                                                                                                                                      |
| CPGA-Stable                       | [10.1007/978-981-92-6513-8_12](https://doi.org/10.1007/978-981-92-6513-8_12)             | 200  | Crossref title matches; published 9 Oct 2026                                                                                                                                                                           |
| Waste image classification        | [10.1016/j.asej.2026.104062](https://doi.org/10.1016/j.asej.2026.104062)                 | 200  | [ScienceDirect publisher record](https://www.sciencedirect.com/science/article/pii/S2090447926000894) matches title and DOI; journal issue April 2026                                                                  |
| DICOM preprocessing               | [10.1007/978-981-92-5699-0_29](https://doi.org/10.1007/978-981-92-5699-0_29)             | 200  | Crossref title matches with publisher capitalization differences; published 26 Sep 2026                                                                                                                                |
| Vietnamese receipt OCR            | [10.1007/978-3-032-33384-1_42](https://doi.org/10.1007/978-3-032-33384-1_42)             | 200  | Crossref title matches; published 26 Jul 2026                                                                                                                                                                          |
| Red River architecture study      | [10.1007/978-3-032-36547-7_5](https://doi.org/10.1007/978-3-032-36547-7_5)               | 200  | DOI citation metadata title matches; publisher issued 28 Aug 2026; conference year retained as MEDES 2025, as confirmed by the [Springer proceedings record](https://link.springer.com/book/10.1007/978-3-032-36547-7) |
| Water-level loss functions        | [10.1109/ICAIDES67265.2025.11404066](https://doi.org/10.1109/ICAIDES67265.2025.11404066) | 202  | DOI citation metadata title matches; issued 11 Dec 2025; redirect reaches IEEE document 11404066. Full IEEE page accessibility can vary.                                                                               |
| EIDT-SIMC lightweight enhancement | No supplied DOI                                                                          | n/a  | Remains **Accepted**, with no invented paper URL                                                                                                                                                                       |

Crossref title metadata was read from `https://api.crossref.org/works/<DOI>`. For the MEDES and ICAIDES entries, DOI content negotiation (`Accept: application/vnd.citationstyles.csl+json`) supplied the title and issued date after the initial Crossref requests failed. No dates were changed solely to match a proceedings publication year; no full author list was invented. The OCR and CPGA-Stable Published labels use the verified publication dates above; the remaining unsupplied statuses remain omitted.

All four GitHub destinations returned HTTP 200:

- [Profile](https://github.com/TuanMinhDo1203)
- [EXAM_OCR](https://github.com/TuanMinhDo1203/EXAM_OCR)
- [Academic RAG chatbot](https://github.com/TuanMinhDo1203/FPT_FAP_CHAT/tree/main)
- [Reddit sentiment analysis](https://github.com/TuanMinhDo1203/Reddit_Sentiment_Analysis)

Email `tuanminhdo1203@gmail.com` matches the CV and uses `mailto:`; delivery was not tested and no email was sent. Both CV buttons point to `/DoTuanMinh_CV.pdf`, with a download attribute. Production browser checks confirm HTTP 200, PDF MIME type, and `%PDF-` signature. Internal anchors and local figure resources are checked by the browser suite.

## Asset provenance

All assets below were supplied by the user in `images/`. Optimized viewing copies live in `public/research/`; unmodified image copies for full-resolution viewing live in `public/research/originals/`. `src/data/media.ts` records each original filename, title, alt text, caption, original-image URL, and attribution. The figure dialog displays contextual attribution and provides an original-image link.

| Original source        | Use and attribution boundary                                                                                                                        |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `portrait.jpg`         | Genuine portrait; framing only, no facial/identity changes                                                                                          |
| `fptu.png`             | Education logo next to verified FPT University education                                                                                            |
| `fis.png`, `fsoft.png` | Verified FIS/FPT Software internship entries; neither implies sponsorship                                                                           |
| `LLIE.png`             | User-selected capstone pipeline illustration, explicitly schematic                                                                                  |
| `EXAM_OCR.png`         | Recognition platform screenshot; no generic accuracy claim                                                                                          |
| `examocr.png`          | Supplementary multi-stage OCR workflow thumbnail/dialog                                                                                             |
| `edgeplant.png`        | EdgePlant conversion/deployment workflow, not a performance chart                                                                                   |
| `cpga_stable.png`      | CPGA-Stable successful example and failure case; never attached to capstone                                                                         |
| `trash_Q1.png`         | Hybrid waste-classification workflow attached to the correct paper                                                                                  |
| `APWEB_thirdbest.png`  | APWeb-WAIM award photo; award title from the CV                                                                                                     |
| `OLPAI.png`            | OlpAI event photo; exact ceremony/round is not independently established, so the caption does not assign a regional or national award to this photo |
| `top100.jpg`           | Top 100 student recognition at FPT University; no specific academic term is assigned to this photograph                                             |
| `soict.jpg`            | SoICT Summer School on Edge AI event photo; presentation-award caption from the CV                                                                  |
| `team_OLPAI.jpg`       | OlpAI team/event photograph; caption avoids assigning a specific prize to the pictured moment                                                       |

The user's supplied assets and instructions establish the requested context of use. Independent copyright/photographer credits and original experimental-generation records were not provided. The site does not invent those credits or treat the figures as independently reproduced results. `LLIE_CPGA.pdf` remains an unused source file. The former overall diagram is not used. No generated research imagery is included.

## V2 verification results

- `npm run typecheck`: passed with strict TypeScript.
- `npm run lint`: passed with no warnings.
- `npm run build`: passed; Vite base remains `/`; the official Actions Pages workflow is unchanged.
- `npm run test:e2e`: 6 production-browser tests passed. Coverage includes section order, six unhidden honor groups, research evidence, eight entries and all filters, dialog focus trapping/restoration and Escape, mobile menu, persistent theme, bounded thumbnails, all local image resources, and both CV downloads. Console errors and uncaught page errors are asserted absent in every flow.
- Horizontal overflow checked at 320, 390, 768, 1024, and 1440px. Desktop/tablet/mobile screenshots inspected in both themes.
- Six Axe scans (desktop and mobile, light and dark plus open dialogs) reported zero WCAG 2 A/AA or 2.1 AA violations. This is an automated check, not a complete accessibility certification. No Lighthouse score is claimed.
- All 13 original-image links map to byte-identical copies of the user-supplied sources. The production CV is byte-identical to the canonical CV.
- The current visual limitation is inherent to text-dense diagrams on a small display: thumbnails remain uncropped, the dialog contains the full figure, and the original-image link is available for zooming. No other unresolved UI failure was observed in the tested Chromium flows. Other browsers and a live GitHub Pages deployment were not tested.

Production screenshots are local review artifacts under `output/review/v2/`; they are not part of the deployed app.

## Latest reference-based refinement

Top 100 photography now belongs to the Honors gallery, not Contact. The user explicitly supplied `https://www.linkedin.com/in/tuan-minh-do-1755a52b8/`; the exact URL is used in hero and Contact. A direct automated GET returned HTTP 999 from LinkedIn, so no independent accessibility or profile-content verification is claimed. Gmail is displayed as `tuanminhdo1203@gmail.com` with the CV-matched mailto destination. No email was sent.

The updated section-order and interaction tests also cover two selected contribution entries, verified recognition/PSNR labels, original figure context, four visible gallery images, Top 100 being inside Honors only, and repeated award-to-paper navigation while year filters hide the target. OCR inference time remains project-level context rather than a paper-level recognition metric. The reference's metrics, methods, assets, and personal claims were not imported into this portfolio.

The waste-classification entry displays **SCI Q1** beside Ain Shams Engineering Journal, matching the supplied canonical CV and the user's explicit confirmation. This is the supplied classification, not a claim that a current ranking database was re-audited.
