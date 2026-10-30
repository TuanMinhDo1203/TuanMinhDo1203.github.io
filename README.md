# Tuan Minh Do — Research, Made Visible

An academic research portfolio for Tuan Minh Do, a final-year BSc in Artificial Intelligence student at FPT University, Da Nang. The single page presents research interests, three featured projects, eight supplied publication entries, six honors entries, two industry internships, and an academic biography.

## Stack and architecture

React, strict TypeScript, Vite (base `/`), Tailwind CSS v4 through `@tailwindcss/vite`, Motion for React, and Lucide. This is a static client application with no backend or credentials.

- `src/App.tsx`: page composition and reduced-motion configuration.
- `src/components/SiteHeader.tsx`: sticky navigation, mobile menu, and persisted theme preference.
- `src/components/ResearchSections.tsx`: hero, compact research snapshot, contact, and footer.
- `src/components/FeaturedProjects.tsx`: visible research methods, contributions, evaluation axes, and evidence.
- `src/components/PublicationList.tsx`: compact bibliography, filters, and optional figure thumbnails.
- `src/components/HonorsSection.tsx`: all six visible distinctions and supplementary event photos.
- `src/components/SectionLayout.tsx`: shared subtle reveals and section headings.
- `src/data/site.ts`: identity, optional contact links, navigation, and research pillars.
- `src/data/projects.ts`: typed project content, metrics, limitations, and repository links.
- `src/data/publications.ts`: exact supplied titles, venues, conference years, roles, and contribution data.
- `src/data/verifiedPublications.ts`: DOI-verified authors in official order, dates, and statuses.
- `src/data/awards.ts`: CV-grounded distinctions.
- `src/data/experience.ts`: internships and technical toolkit.
- `src/components/ExperienceSection.tsx`: company affiliations and contribution summaries.
- `src/data/media.ts`: image paths, dimensions, alt text, and captions.
- `src/components/ResearchFigure.tsx`: accessible lazy-loaded figures and compact thumbnails.
- `src/components/FigureViewer.tsx` / `figureContext.ts`: native modal with focus management, Escape, captions, provenance, and original-image links.
- `docs/content-integrity.md`: source boundaries, bibliographic checks, and asset provenance.
- `tests/portfolio.spec.ts`: production browser regression checks.
- `src/types/content.ts`: content contracts.
- `src/index.css`: responsive design tokens, typography, light/dark themes, and image layouts.
- `public/`: favicon, robots.txt, sitemap.xml, and future approved research assets.
- `.github/workflows/deploy.yml`: checks, build, and official GitHub Pages artifact deployment.

## Local development

Use Node.js 22 LTS and npm. Dependencies are locked in `package-lock.json`.

```sh
npm ci
npm run dev
```

Open http://localhost:5173. The theme follows the system on the first visit; the toggle stores an explicit preference when storage is available. Mobile navigation supports Escape. Publication filters support all entries, either supplied year, and first-author work.

```sh
npm run typecheck
npm run lint
npm run build
npm run preview
```

The preview server serves the production `dist` build, normally at http://localhost:4173.

## Content maintenance

### Publications

Add an object to `src/data/publications.ts`, using `Publication` in `src/types/content.ts`. Preserve the verified title. Supply venue, year, and authorship role. `status`, `highlight`, and `url` are optional. Add a working canonical paper URL only when verified. Do not infer Published from a venue/year, substitute Accepted for Published, invent DOI values, or invent full author lists. Seven DOI-backed entries have verified author lists, dates, and Published status in `src/data/verifiedPublications.ts`. The EIDT-SIMC entry remains Accepted without an invented author list or DOI. See `docs/v3-refinement.md` and `docs/publication-metadata.json` for the publisher-metadata audit. Year filters are derived automatically from the data. First-author and co-author filters update both visible rows and the entry count.

### Projects

Add a `Project` object to `src/data/projects.ts`: unique ID, title, category, status, problem, method, personal contribution, optional scientific limitations, and tags. Verified results belong in precisely labeled `metrics`. Optional `optimization` separates inference work from recognition; optional `evaluation` identifies distinct metric families. Core evidence always renders directly. Metrics require both values and precise labels. Repository links are optional. Featured layouts use `project-<id>` CSS classes; the capstone is a wide navy feature, OCR has evaluation metrics, and EdgePlant uses a quiet editorial treatment. Add a layout class when introducing a different visual composition.

### Contact and biography

Update `src/data/site.ts` for genuine email, Scholar, LinkedIn, or CV links. Optional fields render only when present. Biography and education copy live in `AboutSection`. QACI is intentionally excluded pending confirmation of permitted public wording. Update the footer year in `SiteFooter` when maintaining the site in a later year.

### Research assets

Put approved assets under `public/research/`, then add their typed entries in `src/data/media.ts`. Preserve an unmodified copy in `public/research/originals/` for the full-image link. Supply source filename, contextual attribution, title, alt text, actual dimensions, and a precise caption. Use the existing `ResearchFigure` component so figures share the accessible dialog. Use `thumbnail` for bibliography figures to keep rows compact. Do not place oversized figures or figure disclosures directly into publication rows.

The hero retains the supplied portrait, with portrait-first mobile ordering. The compact research snapshot leads into Publications (two selected contributions integrated into the eight-entry index), then Experience/Expertise, Honors, Selected Research Projects, and Contact. All honors and research evidence remain visible without interaction. Event photography is now visible without opening a disclosure: APWeb-WAIM accompanies the research distinctions; SoICT and OlpAI appear in the honors photo grid; the Top 100 recognition photo is grouped with SoICT and OlpAI in Honors. Only secondary project notes and EdgePlant artifact context use disclosures. See [content integrity and provenance](docs/content-integrity.md) for exact asset mappings and caveats.

DM Sans and IBM Plex Mono load from Google Fonts with system fallbacks. The layout remains usable when fonts are unavailable. Metadata does not reference an image that does not exist.

## Deploy to GitHub Pages

Nothing is automatically pushed by local development. Before publishing, review the content and changes.

1. In `TuanMinhDo1203/TuanMinhDo1203.github.io`, open **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**. Keep the repository public for public GitHub Pages hosting.
2. Review and commit the files from the repository root:

   ```sh
   git status --short
   git add .
   git commit -m "Build research portfolio"
   git push -u origin main
   ```

3. Open the repository **Actions** tab and inspect **Deploy portfolio to GitHub Pages**. The workflow runs on pushes to `main` and also supports **Run workflow**. It runs `npm ci`, type checking, lint, and the production build before uploading `dist` and deploying.
4. Wait for both build and deploy jobs to succeed. Open https://tuanminhdo1203.github.io/ and verify theme switching, mobile navigation, and links. If a protected `github-pages` environment requests approval, approve that deployment in GitHub.

This user site requires Vite base `/`; no `gh-pages` branch is used. Do not change to a repository subpath. The workflow uses the official [custom GitHub Pages workflow](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages) pattern.

## Content still needed

The complete EIDT-SIMC author list and any newer official publication record, a Scholar profile, and final capstone or like-for-like EdgePlant evaluation evidence. Email, CV download, internships, GPA, honors, and seven DOI links now come from `DoTuanMinh_CV-1.pdf`, the canonical supplied local CV (not versioned). The public download is `public/DoTuanMinh_CV.pdf`; replace that file when updating the CV and synchronize the data files. The contact section displays the Gmail address and the LinkedIn URL explicitly provided by the user; email and LinkedIn also appear in the hero. The phone number remains only in the downloadable CV. Missing values are omitted rather than replaced with placeholder links. Supplied OCR and PSNR figures are included with their specific labels. No Lighthouse score is claimed without an actual audit.

## Implementation verification

TypeScript strict checking, Oxlint, and the production build passed. Chromium checks covered publication counts and filters, persisted theme selection, mobile navigation and Escape, internal anchor targets, and horizontal overflow at widths 320, 390, 768, 1024, and 1440 pixels. No runtime errors were observed. Axe scans after entrance animations settled reported no WCAG 2 A/AA or 2.1 AA violations in either theme; automated checks do not replace a complete manual accessibility audit. Both supplied GitHub destinations returned HTTP 200. No Lighthouse score or live deployment verification is claimed.

## V2 browser verification

Install the development dependencies and Chromium, build the production app, then run:

```sh
npx playwright install chromium
npm run build
npm run test:e2e
```

The suite starts a dedicated production preview at port 4175 and checks section order, six visible honors groups, evaluation evidence, all eight works and their filters, Accepted status, bounded thumbnail sizes, dialog focus trapping/restoration and Escape, responsive overflow at 320/390/768/1024/1440px, mobile navigation, theme persistence, both CV downloads, gallery controls, and local image resources. Failure screenshots/traces go to ignored `test-results/`. Playwright is a development-only dependency; no runtime UI library was added.

Axe scans are supplemental automated checks, not a full accessibility certification. No Lighthouse score or live deployment result is claimed. Existing PDFs/screenshots in `output/` are exports from earlier revisions unless regenerated; they are not loaded or shipped by Vite.

## Research storytelling refinement

The current reading order is Hero → Compact Research Focus → Publications → Experience → Honors → Selected Research Projects → Contact. Each of the eight publications appears exactly once. Optional typed `contribution` data adds the problem, method, bounded figure preview, verified metrics, and implementation links to selected entries. All other entries stay compact and immediately visible. Figures retain original attribution and open in the shared modal. Internal award/project links reset a conflicting publication filter before scrolling to the paper, including repeated clicks on the same anchor.

See [reference refinement](docs/reference-refinement.md) for the editorial reference, choices preserved from this site's design, and source boundaries. No reference code, CSS, assets, biography, or results were copied.

## V3 finishing pass

The approved section order remains unchanged. Full-width surface bands, dividers, and numbered 01–05 headers separate the five major chapters; the research snapshot stays compact. Gallery thumbnails are bounded and uncropped, and the hero CTA reads View Publications. Seven official author lists are displayed with the owner's exact name variant emphasized. EIDT-SIMC has no speculative author line. See [V3 report](docs/v3-refinement.md) for source verification, files, and QA. Earlier reports describe their corresponding revisions; the V3 report is the current audit.

## Source material and public repository

Local raw `images/`, the source CV at the repository root, generated exports, browser traces, and `node_modules` are excluded from Git. The approved web images, full-resolution image links, and real downloadable CV are included under `public/`. Original-image provenance is recorded in the data and audit files; local source paths describe the supplied material, while published copies are available under `public/research/originals/`.

## Content-density and introduction refinement

Experience now uses two contribution bullets per role without a repeated summary. The two publication spotlights retain recognition/PSNR evidence; the EXAM_OCR implementation card emphasizes the processing/review system and the separate OpenVINO CPU timing. Its recognition metrics remain visible in the related publication instead of repeating in both sections. The same OCR pipeline diagram remains available in its publication preview; the project retains the actual application screenshot. Project cards use intrinsic heights and contained image frames. All eight works, six honors, authentic figures, and approved section order are preserved.

The displayed word count in Experience, Featured Research, and spotlight narratives decreased approximately 21% in this revision. Gallery frames were reduced from 240px to 200px on desktop while retaining click-to-expand original images. No new disclosure hides core research or awards. See `docs/content-density.md` for verification and scope.

The latest introduction uses Inter consistently, a concise research summary, quieter social links, and the supplied ORCID in both Hero and Contact. The owner approved publishing this revision on 30 October 2026.
