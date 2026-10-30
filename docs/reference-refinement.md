# Editorial refinement from a public research-homepage reference

Reviewed on 30 October 2026: [Duy Le's public homepage](https://aduy2408.github.io/) and its [public source](https://github.com/aduy2408/aduy2408.github.io/blob/main/index.html). The search/browser fetch of the homepage failed, but a direct HTTP fetch and the public source provided its rendered text and research-entry structure. No reference assets or implementation files were copied into this repository.

## Conceptual lessons applied

The reference connects a concrete research problem with a method, scoped quantitative evidence, authentic figures, and paper/implementation links. This site applies that communication sequence to its own verified record while retaining its DM Sans/IBM Plex Mono type, cobalt accents, neutral surfaces, portrait, responsive editorial layout, theme support, and React components.

## Changes

- Final order: Hero, compact Research Focus, Publications, Experience, Honors, Selected Research Projects, Contact. Projects never precede Publications.
- Two selected first-author contributions are integrated directly into the eight-work bibliography; titles and entries are not duplicated in a second list. Filters still apply to the complete collection.
- OCR: research problem, multi-stage recognition and indentation reconstruction, 90.51% line recovery, and 27.01% exact match. The related EXAM_OCR project carries the separate OpenVINO/CPU runtime context. The preview is explicitly the associated implementation pipeline, not asserted to be a published-paper figure.
- CPGA-Stable: optimization-stability problem, bounded parameterization/initialization from the supplied CV, mean PSNR 14.75 → 20.09 dB, and the genuine comparison containing a failure case. No detection-accuracy claim is derived from PSNR and no result is attributed to the capstone.
- Both selected works have Published status supported by the publication records already audited in `content-integrity.md`. EIDT-SIMC remains Accepted without a DOI.
- MEDES retains its full entry and Best Paper distinction, with a direct award-to-paper link. No extra methods, metrics, or figure were added because the supplied material did not contain enough detail for a third evidence-rich spotlight.
- All six honors remain visible. Top 100 photography now sits with the other honors photographs. Contact displays the real Gmail address; the user-confirmed LinkedIn URL appears in Contact and the hero.
- Figures use bounded, uncropped previews and the existing accessible image viewer. Native internal links connect OCR paper/project and research awards/papers. Filters reset when necessary to reveal a linked paper.

## Source boundaries and open information

The supplied CV and approved local research figures remain the source of this site's personal and scientific claims. No reference biography, affiliation, dataset, architecture, runtime result, citation, photo, CSS, typography, or literal layout was adopted. Additional MEDES methodology/figures, final capstone results, and comparable EdgePlant measurements still require user-supplied evidence. LinkedIn returned HTTP 999 to the automated check; its URL is taken directly from the user's confirmation.

## Verification

Strict TypeScript, lint, and production build passed. Six Chromium production tests cover reading order, six visible honors groups, all eight works and filters, bounded previews, dialog keyboard behavior, social destinations, same-anchor links across filters, responsive widths, local media, and both CV downloads. Screenshots were inspected on desktop and mobile in both themes. No push or deployment was performed.
