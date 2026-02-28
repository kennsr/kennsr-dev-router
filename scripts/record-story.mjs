import { chromium } from "@playwright/test";
import path from "path";
import fs from "fs";

const OUTPUT_DIR = path.join(process.cwd(), "output");

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR);
}

const RECORDING_PATH = path.join(OUTPUT_DIR, "story-export.webm");

async function recordStory() {
  console.log("🎬 Starting Playwright for Story Recording...");

  // Launch Chromium
  const browser = await chromium.launch({
    headless: true, // Run in background
  });

  // Create a context that records video
  const context = await browser.newContext({
    viewport: { width: 1080, height: 1920 }, // Exact Instagram Story dimensions
    deviceScaleFactor: 1, // 1:1 scale for exact 1080p output
    recordVideo: {
      dir: OUTPUT_DIR,
      size: { width: 1080, height: 1920 },
    },
  });

  const page = await context.newPage();

  console.log(
    "📱 Navigating to local story page (ensure localhost:3000 is running)...",
  );

  try {
    await page.goto("http://localhost:3000/instagram/stories/pricing", {
      waitUntil: "networkidle",
    });
  } catch (error) {
    console.error(
      "❌ Failed to connect. Is your local Next.js server running on port 3000?",
    );
    process.exit(1);
  }

  // Inject CSS to force the container to be exactly 414x736 (mobile size)
  // then scale it by exactly 2.608695 to fill the 1080x1920 viewport.
  // We MUST override min-height: 100vh from Tailwind otherwise the box becomes 1920px before scaling!
  await page.addStyleTag({
    content: `
      body {
        margin: 0 !important;
        padding: 0 !important;
        overflow: hidden !important;
        background: black !important;
      }
      #story-wrapper { 
        width: 414px !important; 
        min-width: 414px !important;
        height: 736px !important; 
        min-height: 736px !important;
        transform: scale(2.608695) !important; 
        transform-origin: top left !important; 
        padding: 0 !important; 
        margin: 0 !important; 
        display: block !important;
        align-items: flex-start !important;
        justify-content: flex-start !important;
      }
      #story-container {
        width: 414px !important;
        height: 736px !important;
        max-width: none !important;
        max-height: none !important;
        border-radius: 0 !important;
        border: none !important;
        margin: 0 !important;
      }
    `,
  });

  // Hide the progress bar for recording if desired, or let it track.
  // Wait for the fonts and initial animations to load
  await page.waitForTimeout(1000);

  console.log("▶️ Recording Slide 1 (Hook)...");
  await page.waitForTimeout(4000); // Wait 4 seconds for reading/animations

  console.log("⏭️ Clicking to Slide 2...");
  // Click the right side of the screen to advance
  await page.mouse.click(800, 960);
  await page.waitForTimeout(4000); // Wait 4 seconds for Slide 2

  console.log("⏭️ Clicking to Slide 3...");
  await page.mouse.click(800, 960);
  await page.waitForTimeout(4500); // Wait 4.5 seconds for final CTA slide

  console.log("💾 Saving video...");

  // Close the page to finalize the video
  await page.close();

  // Get the saved video path and rename it
  const videoPath = await page.video().path();
  fs.renameSync(videoPath, RECORDING_PATH);

  await browser.close();

  console.log(`✅ Success! High-res video saved to: ${RECORDING_PATH}`);
  console.log(
    "ℹ️ Note: This is an uncompressed WebM file. If you need MP4 for Instagram, you can convert it using an online converter or FFmpeg.",
  );
}

recordStory().catch(console.error);
