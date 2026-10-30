import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  await page.goto("/");
  // Runtime failures are asserted in every interaction flow.
  await page.exposeFunction("runtimeErrors", () => errors);
});
test.afterEach(async ({ page }) => {
  expect(
    await page.evaluate(() =>
      (
        window as unknown as { runtimeErrors: () => Promise<string[]> }
      ).runtimeErrors(),
    ),
  ).toEqual([]);
});

test("research-first order and all core evidence are visible by default", async ({
  page,
}) => {
  expect(
    await page
      .locator("main > section")
      .evaluateAll((sections) => sections.map((s) => s.id)),
  ).toEqual([
    "home",
    "research",
    "publications",
    "experience",
    "honors",
    "projects",
    "contact",
  ]);
  await expect(page.locator(".honor-card")).toHaveCount(6);
  expect(
    await page
      .locator(".honor-card")
      .evaluateAll((cards) =>
        cards.every(
          (card) =>
            !card.closest("details") &&
            getComputedStyle(card).display !== "none",
        ),
      ),
  ).toBe(true);
  await expect(
    page.getByText("Central Vietnam Regional Round — Second Prize", {
      exact: true,
    }),
  ).toBeVisible();
  await expect(
    page.getByText("National round — Finalist; Consolation Prize", {
      exact: true,
    }),
  ).toBeVisible();
  await expect(page.locator(".honor-terms li")).toHaveCount(4);
  await expect(page.locator(".evaluation-axes > div")).toHaveCount(3);
  await expect(page.locator(".project-evidence")).toHaveCount(3);
  await expect(page.locator(".metrics")).toContainText("90.51%");
  await expect(page.locator(".metrics")).toContainText("27.01%");
  await expect(page.locator(".metrics")).toContainText("81.7 → 23.4s");
  expect(
    await page
      .locator(".project-evidence, .project-research, .metrics")
      .evaluateAll((elements) =>
        elements.every((element) => !element.closest("details")),
      ),
  ).toBe(true);
  await expect(page.locator(".expertise-card")).toHaveCount(4);
  await expect(page.locator("main")).not.toContainText("TOEFL");
  await expect(
    page.getByRole("link", { name: "View Publications", exact: true }),
  ).toHaveAttribute("href", "#publications");
  await expect(page.locator(".section-index")).toHaveText([
    "01",
    "02",
    "03",
    "04",
    "05",
  ]);
  await expect(page.locator(".award-moments")).toContainText(
    "ACADEMIC MOMENTS",
  );
  await expect(page.locator(".project-edge")).not.toContainText(
    "The supplied CV documents",
  );
  await expect(page.locator(".project-edge")).not.toContainText(
    "No verified FPS",
  );
  expect(
    await page
      .locator('a[href^="#"]')
      .evaluateAll((links) =>
        links
          .map((link) => link.getAttribute("href")!)
          .filter((href) => !document.getElementById(href.slice(1))),
      ),
  ).toEqual([]);
});

test("all eight works, metadata, accepted status, and publication filters", async ({
  page,
}) => {
  const entries = page.locator(".publication");
  await expect(entries).toHaveCount(8);
  const accepted = entries.filter({ hasText: "EIDT-SIMC" });
  await expect(accepted.locator(".publication-status")).toHaveText("Accepted");
  await expect(accepted.locator("a")).toHaveCount(0);
  await expect(page.locator(".publication-authors")).toHaveCount(7);
  await expect(page.locator(".publication-authors strong")).toHaveCount(7);
  await expect(accepted.locator(".publication-authors")).toHaveCount(0);
  await expect(
    page.locator("#publication-python-ocr .publication-authors strong"),
  ).toHaveText("Tuan-Minh Do");
  await expect(
    page.locator(
      "#publication-vietnamese-receipt-ocr .publication-authors strong",
    ),
  ).toHaveText("Tuan Minh Do");
  await expect(
    page.locator(".publication-status").filter({ hasText: "Published" }),
  ).toHaveCount(0);
  await expect(
    page.locator("#publication-waste-classification .journal-tier"),
  ).toHaveText("SCI Q1");
  for (const [filter, count] of [
    ["2026", 6],
    ["2025", 2],
    ["First author", 6],
    ["Co-author", 2],
    ["All", 8],
  ] as const) {
    await page.getByRole("button", { name: filter, exact: true }).click();
    await expect(entries).toHaveCount(count);
    await expect(page.locator(".publication-toolbar")).toContainText(
      String(count).padStart(2, "0") + " ENTRIES",
    );
  }
  await expect(
    page.locator('.publication a[href^="https://doi.org/"]'),
  ).toHaveCount(7);
  await expect(page.locator(".publication details")).toHaveCount(0);
  await expect(page.locator(".publication .figure-thumbnail")).toHaveCount(3);
  await expect(page.locator(".publication-spotlight")).toHaveCount(2);
  for (const figure of await page
    .locator(".publication:not(.publication-spotlight) .figure-trigger")
    .all()) {
    const box = await figure.boundingBox();
    expect(box!.height).toBeLessThanOrEqual(80);
    expect(box!.width).toBeLessThanOrEqual(124);
  }
});

test("figure dialog preserves context, traps keyboard focus, and restores its trigger", async ({
  page,
}) => {
  const trigger = page.getByRole("button", {
    name: "View CPGA-Stable: qualitative examples and failure case",
    exact: true,
  });
  await trigger.click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(dialog.getByRole("heading")).toHaveText(
    "CPGA-Stable: qualitative examples and failure case",
  );
  await expect(dialog).toContainText("includes a failure case");
  await expect(dialog).toContainText("not the capstone");
  await expect(
    dialog.getByRole("button", { name: "Close image viewer" }),
  ).toBeFocused();
  for (let i = 0; i < 5; i++) {
    await page.keyboard.press("Tab");
    expect(
      await page.evaluate(() => !!document.activeElement?.closest("dialog")),
    ).toBe(true);
  }
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(trigger).toBeFocused();
  expect(await page.evaluate(() => document.body.style.overflow)).not.toBe(
    "hidden",
  );
  const waste = page.getByRole("button", {
    name: "View Hybrid waste-classification workflow",
    exact: true,
  });
  await waste.click();
  await expect(dialog).toBeVisible();
  await expect(dialog.locator("img")).toHaveCSS("object-fit", "contain");
  const full = await dialog
    .getByRole("link", { name: "Open original image" })
    .getAttribute("href");
  const original = await page.request.get(full!);
  expect(original.ok()).toBe(true);
  expect(original.headers()["content-type"]).toContain("image/");
  await dialog.getByRole("button", { name: "Close image viewer" }).click();
  await expect(waste).toBeFocused();
});

test("responsive layout, mobile navigation, and persistent dark mode", async ({
  page,
}) => {
  for (const width of [320, 360, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
  }
  await page.setViewportSize({ width: 390, height: 844 });
  const menu = page.getByRole("button", { name: "Open navigation" });
  await menu.click();
  await page.keyboard.press("Escape");
  await expect(menu).toBeFocused();
  await menu.click();
  await page
    .getByRole("navigation", { name: "Mobile navigation" })
    .getByRole("link", { name: "Honors", exact: true })
    .click();
  await expect(page.locator("#mobile-navigation")).toHaveCount(0);
  await page.getByRole("button", { name: "Switch to dark mode" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await expect(
    page.getByRole("button", { name: "Switch to light mode" }),
  ).toBeVisible();
  expect(
    await page.locator(".brand").evaluate((el) => getComputedStyle(el).color),
  ).toBe("rgb(238, 241, 245)");
  await page.getByRole("button", { name: "Switch to light mode" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
});

test("both CV downloads and local figure resources work in production", async ({
  page,
}) => {
  const downloads = page.getByRole("link", {
    name: "Download CV",
    exact: true,
  });
  await expect(downloads).toHaveCount(2);
  for (const link of await downloads.all()) {
    expect(await link.getAttribute("download")).not.toBeNull();
    const href = await link.getAttribute("href");
    expect(href).toBe("/DoTuanMinh_CV.pdf");
    const response = await page.request.get(href!);
    expect(response.ok()).toBe(true);
    expect(response.headers()["content-type"]).toContain("pdf");
    expect((await response.body()).subarray(0, 5).toString()).toBe("%PDF-");
  }
  expect(
    await page
      .locator(".award-gallery")
      .evaluate((el) => !el.closest("details")),
  ).toBe(true);
  for (const src of ["/research/soict.webp", "/research/top100.webp"]) {
    const image = page.locator(`img[src="${src}"]`);
    await expect(image).toHaveCount(1);
    expect(await image.evaluate((el) => !el.closest("details"))).toBe(true);
  }
  await expect(page.locator(".award-gallery .research-figure")).toHaveCount(4);
  await expect(
    page.locator('#honors img[src="/research/top100.webp"]'),
  ).toHaveCount(1);
  await expect(
    page.locator('#contact img[src="/research/top100.webp"]'),
  ).toHaveCount(0);
  const sources = await page
    .locator("img")
    .evaluateAll((images) => [
      ...new Set(images.map((image) => image.getAttribute("src")!)),
    ]);
  for (const src of sources) {
    const resource = await page.request.get(src);
    expect(resource.ok(), src).toBe(true);
    expect(resource.headers()["content-type"], src).toContain("image/");
  }
  await page
    .getByRole("button", {
      name: "View APWeb-WAIM 2026 award presentation",
      exact: true,
    })
    .click();
  await expect(page.getByRole("dialog")).toContainText(
    "award title from the CV",
  );
  await page.keyboard.press("Escape");
});

test("selected paper contributions, social links, and cross-links survive filtering", async ({
  page,
}) => {
  const ocr = page.locator("#publication-python-ocr");
  const cpga = page.locator("#publication-cpga-stable");
  await expect(ocr.locator(".publication-status")).toHaveCount(0);
  await expect(cpga.locator(".publication-status")).toHaveCount(0);
  await expect(page.locator(".selected-contribution-label")).toHaveCount(0);
  await expect(ocr.locator(".contribution-metrics")).toContainText("90.51%");
  await expect(ocr.locator(".contribution-metrics")).toContainText("27.01%");
  await expect(ocr.locator(".contribution-metrics")).not.toContainText("23.4");
  await expect(cpga.locator(".contribution-metrics")).toContainText(
    "14.75 → 20.09 dB",
  );
  await expect(page.locator(".contribution-context")).toHaveCount(0);
  for (const figure of await page
    .locator(".contribution-preview .figure-trigger")
    .all()) {
    expect((await figure.boundingBox())!.height).toBeLessThanOrEqual(160);
    await expect(figure.locator("img")).toHaveCSS("object-fit", "contain");
  }
  for (const year of ["2026", "2026"]) {
    await page.getByRole("button", { name: year, exact: true }).click();
    await expect(
      page.locator("#publication-red-river-forecasting"),
    ).toHaveCount(0);
    await page
      .locator('#honors a[href="#publication-red-river-forecasting"]')
      .click();
    await expect(page.locator(".publication")).toHaveCount(8);
    await expect(
      page.locator("#publication-red-river-forecasting"),
    ).toBeFocused();
  }
  await ocr
    .getByRole("link", { name: "Explore EXAM_OCR", exact: true })
    .click();
  await expect(page).toHaveURL(/#project-ocr$/);
  await page.locator(".project-publication-link").click();
  await expect(ocr).toBeFocused();
  await expect(
    page.getByRole("link", {
      name: "Email tuanminhdo1203@gmail.com",
      exact: true,
    }),
  ).toHaveCount(2);
  for (const email of await page.locator('a[href^="mailto:"]').all())
    await expect(email).toHaveAttribute(
      "href",
      "mailto:tuanminhdo1203@gmail.com",
    );
  const linkedIn = page.getByRole("link", { name: "LinkedIn", exact: true });
  await expect(linkedIn).toHaveCount(2);
  for (const link of await linkedIn.all())
    await expect(link).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/tuan-minh-do-1755a52b8/",
    );
});
