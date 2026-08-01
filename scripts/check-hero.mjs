import puppeteer from 'puppeteer-core'

const OUT = process.argv[2] || '.'
const URL = process.argv[3] || 'http://localhost:4173/'
const browser = await puppeteer.launch({
  executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  headless: 'new',
  args: ['--disable-gpu', '--no-first-run', '--autoplay-policy=no-user-gesture-required'],
})

for (const [label, w, h, mobile] of [
  ['desktop', 1440, 900, false],
  ['mobile', 390, 844, true],
]) {
  const page = await browser.newPage()
  await page.setViewport({ width: w, height: h, isMobile: mobile, hasTouch: mobile, deviceScaleFactor: mobile ? 2 : 1 })
  await page.goto(URL, { waitUntil: 'networkidle2', timeout: 90000 })
  await new Promise((r) => setTimeout(r, 6000))
  const info = await page.evaluate(() => {
    const v = document.querySelector('video')
    return v
      ? { file: v.currentSrc.split('/').pop(), res: `${v.videoWidth}x${v.videoHeight}`, playing: !v.paused }
      : null
  })
  console.log(`${label}: ${JSON.stringify(info)}`)
  await page.screenshot({ path: `${OUT}/hq-${label}.png` })
  await page.close()
}

await browser.close()
