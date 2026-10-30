# Portfolio V3 — final refinement report

30 October 2026 · No commit, push, deployment, or release was performed.

## A. Changes made

Preserved the explicitly approved order: Hero → Compact Research Focus → Publications → Experience → Honors → Featured Research Projects → Contact. The headline, real portrait, cobalt/neutral palette, two contribution spotlights, eight works, six honors, project figures, industry roles, and competency groups remain intact.

The main readability change is a consistent chapter system: full-width surface bands, stronger section-boundary rules, numbered 01–05 headers, a divider under each section title, and intentional outer padding. Experience has a quiet gray-blue surface to distinguish it from the white Publications and Honors sections. Projects retains its existing pale-blue band and navy capstone. Contact has its own full-width boundary. Dark-mode surfaces and dividers follow the same structure.

## B. Relevant files

- `src/components/SectionLayout.tsx`: shared numbered section heading.
- `src/components/ResearchSections.tsx`: precise View Publications CTA, aligned research-highlights strip, full-width Contact.
- `src/components/PublicationList.tsx`: author lines in official order, emphasis on the owner's exact name variant, full-width section wrapper.
- `src/data/verifiedPublications.ts`: verified authors, publisher-deposited status, dates, and metadata-source URLs.
- `src/data/publications.ts`: typed metadata associations and scoped LOLv1/six-seed CPGA context.
- `src/types/content.ts`: typed author/verification metadata and optional project limitation.
- `src/components/ExperienceSection.tsx`: consistent chapter header and surface wrapper; employment content and placement preserved.
- `src/components/HonorsSection.tsx`: chapter header and Academic Moments gallery label.
- `src/components/FeaturedProjects.tsx`, `src/data/projects.ts`: natural public-facing EdgePlant copy and deployment details, preserving technical scope and implementation links.
- `src/index.css`: section boundaries, readable author wrapping, highlight alignment, compact uncropped photo previews, and responsive rules.
- `tests/portfolio.spec.ts`: existing framework extended to cover seven author lines, owner-name variants, seven Published/one Accepted statuses, SCI Q1, section indices, CTA, and 360px width.
- `docs/publication-metadata.json`: auditable metadata snapshot with original author order and source URLs.

No deployment configuration changes or new test framework/dependencies were needed.

## C. Publication metadata audit

All seven supplied DOI records returned title-matching, publisher-deposited author lists through DOI content negotiation (`application/vnd.citationstyles.csl+json`). Each DOI was matched to the exact portfolio entry and its title was compared after Unicode whitespace/case normalization; author names were **not** normalized or copied from another paper. The complete data is retained in `publication-metadata.json` and `src/data/verifiedPublications.ts`.

| Entry                      | Verified author order                                                                                 | Publisher date            | Display status                               |
| -------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------- | -------------------------------------------- |
| Handwritten Python OCR     | Tuan-Minh Do; Cong-Tam Phan; Hoang-Phuc Mai; Ngoc-Bao-Quang Nguyen; Cao Vu Bui                        | 2026-09-26                | Published                                    |
| CPGA-Stable                | Tuan-Minh Do; Hoang-Phuc Mai; Cong-Tam Phan; Thi-Thu-Hong Phan                                        | 2026-10-09                | Published                                    |
| Waste classification       | Ngoc-Bao-Quang Nguyen; Tuan-Minh Do; Cong-Tam Phan; Thi-Thu-Hong Phan                                 | 2026-04 (month precision) | Published; SCI Q1 retained from supplied CV  |
| DICOM preprocessing        | Thi-Bich-Tra Le; Ngoc-Duy Le; Tuan-Minh Do; Trung-Nguyen Hoang; Ly-Minh-Hoang Tran; Thi-Thu-Hong Phan | 2026-09-26                | Published                                    |
| Lightweight loss functions | No verified complete author list supplied/found                                                       | Not verified              | Accepted, from canonical CV; no DOI invented |
| Vietnamese receipt OCR     | Tuan Minh Do; Cong Tam Phan; Ngoc Bao Quang Nguyen; Luong Vuong Nguyen                                | 2026-07-26                | Published                                    |
| Red River architectures    | Tuan-Minh Do; Ngoc-Bao-Quang Nguyen; Cong-Tam Phan; Thi-Thu-Hong Phan                                 | 2026-08-28                | Published; conference remains MEDES 2025     |
| Forecasting loss functions | Tuan-Minh Do; Ngoc-Bao-Quang Nguyen; Cong-Tam Phan; Thi-Thu-Hong Phan                                 | 2025-12-11                | Published; ICAIDES 2025                      |

The non-hyphenated names in the receipt OCR record are preserved exactly, including **Tuan Minh Do**. The author line is omitted for EIDT-SIMC rather than extrapolating collaborators from other work. Existing Published labels were retained; the other five DOI-backed works gained that label only after checking actual publisher-deposited publication dates. Conference-year labels were not changed to match proceedings publication years.

Primary publisher pages for the selected papers also support the methodological copy: [handwritten Python OCR](https://link.springer.com/chapter/10.1007/978-981-92-5699-0_20), [CPGA-Stable](https://link.springer.com/chapter/10.1007/978-981-92-6513-8_12). The latter identifies LOLv1 and six evaluated seeds for the displayed rounded mean PSNR. No additional metric values or claims of detection improvement were introduced.

## D. UI/UX refinement

- **Hero:** unchanged headline and identity, accurate View Publications destination, coherent inline 8/6/2 highlights on desktop and controlled wrapping on smaller widths.
- **Publications:** official author lines are secondary to titles and wrap without truncation. Full-image diagrams remain in the existing accessible viewer; previews stay contained and bounded. All eight entries and year/role filters remain available.
- **Honors:** six groups always visible; two research distinctions prominent. Gallery renamed Academic Moments. Uniform 240px desktop/220px mobile photo previews show the full photograph using `object-fit: contain`; originals remain available through the dialog. The APWeb feature photo is also bounded. No new or repeated photograph was introduced.
- **Projects:** ongoing capstone, all three metric dimensions, EXAM_OCR recognition/CPU optimization distinction, genuine diagrams, and secondary projects preserved. EdgePlant emphasizes conversion, quantization, and QCS8550 execution; internal CV-validation language and absent-metric disclaimers are removed. The 116-class deployment detail remains; artifact sizes stay in the source CV/audit rather than becoming a public comparison.
- **Sections:** full-width alternating surfaces, stronger boundaries, aligned chapter markers, and consistent spacing distinguish adjacent sections without introducing decorative effects.

## E. Source integrity / remaining information

The missing complete author list and any newer official record for the Accepted EIDT-SIMC paper remain the only bibliographic gaps. No speculative author list or new DOI was added. Final capstone results and comparable EdgePlant performance measurements remain unavailable and are not claimed. SCI Q1 remains the classification explicitly supplied in the canonical CV and confirmed by the user; no new ranking-database audit is claimed. The exact round/ceremony in the OlpAI award photo remains unspecified in its caption. No QACI employment, new degree, synthetic portrait, or fabricated research figure was added.

## F. Link, asset, SEO and engineering checks

- Approved order and desktop/mobile navigation remain consistent, including paper/project and award/paper cross-references under active publication filters.
- Seven DOI destinations resolve: six HTTP 200, IEEE HTTP 202. The title/author/date audit relies on publisher-deposited metadata, not HTTP status alone. All four GitHub URLs return 200. LinkedIn returns HTTP 999 to automated access; the exact user-confirmed URL is preserved. Email matches the canonical CV and uses mailto; no email was sent.
- All 13 original-image links are byte-identical to supplied source images. Both CV links resolve to the real PDF, and the PDF matches the canonical file byte-for-byte. No localhost URL appears in production source links.
- Title, description, canonical/OG URLs, favicon, robots.txt, sitemap, and Vite base `/` were inspected. No nonexistent social-image reference or unsupported structured-data claim was added. The official Pages Actions workflow remains unchanged. A live deployment was not attempted.
- Final command/test outcomes are recorded below after running them against the completed implementation. Browser screenshots are local artifacts under `output/review/v3/`, excluded from deployment.

### Final outcomes

| Check                       | Actual result                                                                                                                                  |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm run typecheck`         | Passed                                                                                                                                         |
| `npm run lint`              | Passed; no application lint warnings                                                                                                           |
| `npm run build`             | Passed; JS 126.77 kB gzip, CSS 10.15 kB gzip                                                                                                   |
| `npm run test:e2e`          | 6/6 Chromium production tests passed; no console or uncaught page errors                                                                       |
| Responsive overflow         | No horizontal overflow at 320, 360, 390, 768, 1024, and 1440px                                                                                 |
| Visual inspection           | Requested 1440/1024/768/390/360px widths captured in light/dark; section transitions, headings, authors, portrait, cards, and gallery reviewed |
| Axe scans                   | Six desktop/mobile/theme/dialog scans; zero WCAG 2 A/AA or 2.1 AA violations detected; not a full manual accessibility certification           |
| Production auxiliary assets | Favicon, robots.txt, sitemap.xml, and CV each returned HTTP 200                                                                                |
| Canonical                   | `https://tuanminhdo1203.github.io/`                                                                                                            |
| Social images               | No nonexistent `og:image` reference; no custom social-preview image is currently configured                                                    |
| Original media / CV         | 13 unmodified original-image sources and CV match source files byte-for-byte                                                                   |
| Deployment                  | Not pushed, deployed, or tested on a live Pages host                                                                                           |

## G. Remaining issues

The exact EIDT-SIMC author list and any newer official record remain unavailable, so no author line or DOI was added there. LinkedIn blocks automated access with HTTP 999; the user-confirmed URL is preserved. Dense scientific diagrams require opening the viewer/original to read all text on a small phone. No other unresolved failure was observed in the tested Chromium flows. Other browser engines and a live deployment remain outside this local QA pass. No Lighthouse score is claimed.
