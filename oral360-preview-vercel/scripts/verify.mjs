import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
const browser = await chromium.launch({ channel: "msedge", headless: true });
const errors = [];
const report = [];
await fs.mkdir("qa", { recursive: true });
try {
  const context = await browser.newContext();
  const page = await context.newPage();
  page.on("pageerror", (error) => errors.push(error.message));
  for (const [name, width, height] of [
    ["desktop", 1440, 1000],
    ["tablet", 768, 1024],
    ["mobile", 390, 844],
    ["small", 320, 740],
  ]) {
    await page.setViewportSize({ width, height });
    await page.goto("http://127.0.0.1:3600/", { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    for (const section of await page.locator("main section").all()) {
      await section.scrollIntoViewIfNeeded();
      await page.waitForTimeout(180);
    }
    await page.waitForTimeout(700);
    const layout = await page.evaluate(() => ({
      width: innerWidth,
      scrollWidth: document.documentElement.scrollWidth,
      images: [...document.images].map((image) => ({
        source: image.currentSrc,
        loaded: image.complete && image.naturalWidth > 0,
      })),
    }));
    assert.ok(layout.scrollWidth <= width, `${name}: horizontal overflow`);
    assert.ok(
      layout.images.every((image) => image.loaded),
      `${name}: broken image`,
    );
    assert.equal(await page.locator("h1").count(), 1);
    for (const link of await page.locator('a[href^="#"]').all()) {
      const id = (await link.getAttribute("href")).slice(1);
      assert.equal(
        await page.locator(`[id="${id}"]`).count(),
        1,
        `missing anchor ${id}`,
      );
    }
    const whatsapp = await page
      .locator('a[href^="https://wa.me/"]')
      .evaluateAll((links) => links.map((link) => link.href));
    assert.ok(whatsapp.length >= 9);
    for (const href of whatsapp) {
      const url = new URL(href);
      assert.equal(url.pathname, "/5521998133001");
      assert.ok(url.searchParams.get("text")?.startsWith("Olá!"));
    }
    for (const item of await page.locator(".faq-item").all()) {
      await item.locator("summary").click();
      assert.equal(await item.getAttribute("open"), "");
      await item.locator("summary").click();
      assert.equal(await item.getAttribute("open"), null);
    }
    await page.locator(".faq-item summary").first().focus();
    await page.keyboard.press("Enter");
    assert.equal(
      await page.locator(".faq-item").first().getAttribute("open"),
      "",
    );
    await page.keyboard.press("Enter");
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    if (width < 1100) {
      const toggle = page.locator(".menu-toggle");
      await toggle.click();
      assert.equal(await toggle.getAttribute("aria-expanded"), "true");
      await page.keyboard.press("Escape");
      assert.equal(await toggle.getAttribute("aria-expanded"), "false");
      assert.ok(await toggle.evaluate((el) => el === document.activeElement));
      await toggle.click();
      await page.locator('#navigation a[href="#unidades"]').click();
      assert.equal(await toggle.getAttribute("aria-expanded"), "false");
      await page.waitForTimeout(700);
      assert.equal(new URL(page.url()).hash, "#unidades");
      await page.evaluate(() =>
        window.scrollTo({ top: 0, behavior: "instant" }),
      );
    }
    await page.waitForTimeout(500);
    await page.screenshot({ path: `qa/${name}.png`, fullPage: true });
    const accessibility = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    report.push({
      name,
      layout,
      violations: accessibility.violations.map((v) => ({
        id: v.id,
        impact: v.impact,
        nodes: v.nodes.map((n) => ({
          target: n.target,
          summary: n.failureSummary,
        })),
      })),
    });
  }
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.reload({ waitUntil: "networkidle" });
  assert.equal(
    await page.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior,
    ),
    "auto",
  );
  assert.equal(await page.locator(".reveal-pending").count(), 0);
  assert.equal(
    await page.locator('meta[name="robots"]').getAttribute("content"),
    "noindex, nofollow",
  );
  assert.ok(
    await page.locator('meta[property="og:title"]').getAttribute("content"),
  );
  const popupWait = page.waitForEvent("popup");
  await page.context().route("https://wa.me/**", (route) =>
    route.fulfill({
      status: 200,
      contentType: "text/html",
      body: "<title>WhatsApp link verified</title>",
    }),
  );
  await page.locator(".hero-actions .button").click();
  const popup = await popupWait;
  await popup.waitForLoadState();
  assert.equal(new URL(popup.url()).pathname, "/5521998133001");
  await popup.close();
  await fs.writeFile(
    "qa/report.json",
    JSON.stringify(
      { report, errors, reducedMotion: true, whatsappPopup: true },
      null,
      2,
    ),
  );
  console.log(
    JSON.stringify(
      {
        layouts: report.map((r) => ({
          name: r.name,
          violations: r.violations,
        })),
        errors,
        reducedMotion: true,
        whatsappPopup: true,
      },
      null,
      2,
    ),
  );
  assert.equal(errors.length, 0, "Browser errors");
  assert.ok(
    report.every((r) => r.violations.length === 0),
    "Accessibility violations — see qa/report.json",
  );
} finally {
  await browser.close();
}
