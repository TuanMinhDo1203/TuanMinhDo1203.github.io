# Content density and visual rhythm

This refinement follows deployment `4b51669`. The owner approved pushing and deploying the revised content, simplified introduction, and ORCID on 30 October 2026.

## Content changes

- Preserved Hero → Research Focus → Publications → Experience → Honors → Featured Research → Contact, all eight works, seven verified author lists, two spotlights, six visible honors groups, and SCI Q1.
- Condensed Experience to two substantive bullets per role. Removed the summary sentence that repeated the bullets. Kept original dates, roles, ODC/Azure work, OCR document reconstruction, Vietnamese dataset work, inference/monitoring, and team-contribution scope.
- Shortened the spotlight problem/method text while retaining recognition metrics, bounded transmission/initialization, mean PSNR, official titles, metadata, links, and authentic figure viewers. No explanatory footnote was reintroduced.
- Simplified projects around problem, approach, contribution, and verified results. Removed generic evidence/status paragraphs that repeated nearby content. Kept the capstone's ongoing status and evaluation dimensions and the OCR recognition bottleneck.
- OCR recognition results remain in its publication: 90.51% line recovery and 27.01% exact match. Its implementation card now focuses on FastAPI/Celery processing, storage, teacher review, component errors, and PyTorch-to-OpenVINO CPU inference (81.7s → 23.4s). These engineering details come from the supplied CV. No metrics were reclassified as generic model accuracy.
- EdgePlant retains YOLO11x, PyTorch/ONNX/QNN, W8A16, QCS8550/Hexagon, the 116-class scope, and personal conversion/quantization contributions. Repetitive technical prose and missing-benchmark commentary are not displayed. No fabricated performance metric was added.
- The redundant OCR pipeline preview under the project was removed; the same genuine diagram remains accessible through the OCR publication spotlight. Its application screenshot stays in the project. No source asset was deleted.

## Layout

Side-by-side OCR/EdgePlant cards use intrinsic heights instead of stretching the shorter card into a large empty box. Primary figure frames share a contained 210px desktop / 180px mobile height. Honors gallery frames are 200px with object-contain and original-image access; all four photos and six award groups remain visible.

## Density measurement

Before/after counts use rendered `innerText` with disclosures in their default state and whitespace-separated tokens, across the same selectors in a local Chromium session. Numbers include visible technical labels, so they describe displayed density rather than a precise linguistic word count.

| Scope                               | Before | After | Reduction |
| ----------------------------------- | -----: | ----: | --------: |
| Experience                          |    211 |   169 |       20% |
| Featured Research                   |    334 |   263 |       21% |
| Spotlight problem/method narratives |     59 |    46 |       22% |
| Combined selected scopes            |    604 |   478 |       21% |

Full paper titles, authors, honors, and numerical achievements were not shortened to reach these counts.

## Verification

TypeScript, lint, production build, and the six existing production-browser tests passed. The tests cover section order, two bullets per role, all eight works, six visible honors, retained metrics, filters, cross-links, figure dialogs, CVs, image resources, mobile navigation, themes, and horizontal overflow at 320/360/390/768/1024/1440px. Desktop and mobile screenshots of Experience, project cards, gallery, and dark-mode project layout were inspected. No new framework or dependency was added.
