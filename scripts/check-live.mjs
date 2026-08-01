import puppeteer from 'puppeteer-core'

const OUT = process.argv[2] || '.'
const browser = await puppeteer.launch({
  executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  headless: 'new',
  args: ['--disable-gpu', '--no-first-run', '--autoplay-policy=no-user-gesture-required'],
})

const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 900 })
const failed = []
page.on('requestfailed', (r) => failed.push(r.url()))
page.on('response', (r) => {
  if (r.status() >= 400) failed.push(`${r.status()} ${r.url()}`)
})

await page.goto('https://cacatorres10-cyber.github.io/rancho-salto/', {
  waitUntil: 'networkidle2',
  timeout: 90000,
})
await new Promise((r) => setTimeout(r, 6000))
await page.screenshot({ path: `${OUT}/live-hero.png` })

const vids = await page.evaluate(() =>
  [...document.querySelectorAll('video')].map((v) => ({
    file: v.currentSrc.split('/').pop(),
    size: `${v.videoWidth}x${v.videoHeight}`,
    playing: !v.paused && v.currentTime > 0,
  })),
)
const imgs = await page.evaluate(
  () => [...document.querySelectorAll('img')].filter((i) => !i.complete || i.naturalWidth === 0).length,
)
console.log('VIDEOS: ' + JSON.stringify(vids))
console.log('BROKEN IMAGES: ' + imgs)
console.log('FAILED REQUESTS: ' + (failed.length ? failed.join(' | ') : 'none'))

await browser.close()
