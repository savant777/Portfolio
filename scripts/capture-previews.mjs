import { mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, '..');
const outputDir = resolve(rootDir, 'public', 'projects');

const previews = [
    {
        name: 'ZZZCODE EDITOR',
        url: 'https://zzzcode.vercel.app/?group=category&tag=all',
        file: 'zzzcode-editor.png'
    },
    {
        name: 'IoT Anomaly Detection Dashboard',
        url: 'https://anomaly-detection-two.vercel.app/',
        file: 'iot-anomaly-detection.png'
    },
    {
        name: 'Playtorium Test',
        url: 'https://savant777.github.io/playtorium-test2/',
        file: 'playtorium-test.png'
    }
];

await mkdir(outputDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1
});

for (const preview of previews) {
    const outputPath = resolve(outputDir, preview.file);

    console.log(`Capturing ${preview.name}`);
    await page.goto(preview.url, { waitUntil: 'networkidle', timeout: 60000 });
    await page.screenshot({
        path: outputPath,
        type: 'png',
        fullPage: false
    });
    console.log(`Saved ${outputPath}`);
}

await browser.close();
