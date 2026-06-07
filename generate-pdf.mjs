import puppeteer from "puppeteer";
import { createServer } from "http";
import { readFileSync, existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, "dist");

// Simple static file server for the dist folder
const mimeTypes = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".css": "text/css",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".avif": "image/avif",
  ".pdf": "application/pdf",
  ".ico": "image/x-icon",
};

const server = createServer((req, res) => {
  let filePath = path.join(distDir, req.url === "/" ? "index.html" : req.url);
  if (!existsSync(filePath)) filePath = path.join(distDir, "index.html");
  const ext = path.extname(filePath);
  const mime = mimeTypes[ext] || "application/octet-stream";
  try {
    const content = readFileSync(filePath);
    res.writeHead(200, { "Content-Type": mime });
    res.end(content);
  } catch {
    res.writeHead(404);
    res.end("Not found");
  }
});

server.listen(4173, async () => {
  console.log("Server running at http://localhost:4173");

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  console.log("Loading page...");
  await page.goto("http://localhost:4173", { waitUntil: "networkidle0", timeout: 30000 });

  // Scroll down slowly to trigger all whileInView animations
  console.log("Scrolling to trigger animations...");
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let pos = 0;
      const distance = 400;
      const timer = setInterval(() => {
        window.scrollBy(0, distance);
        pos += distance;
        if (pos >= document.body.scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 150);
    });
  });

  await new Promise((r) => setTimeout(r, 2500));
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise((r) => setTimeout(r, 500));

  const outputPath = path.join(__dirname, "portfolio-felix.pdf");
  console.log("Generating PDF...");

  await page.pdf({
    path: outputPath,
    format: "A4",
    printBackground: true,
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
  });

  console.log(`✅ PDF saved: ${outputPath}`);
  await browser.close();
  server.close();
  process.exit(0);
});
