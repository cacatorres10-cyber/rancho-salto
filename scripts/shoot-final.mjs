import puppeteer from 'puppeteer-core'

const OUT = process.argv[2] || '.'
const browser = await puppeteer.launch({
  executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  headless: 'new',
  args: ['--disable-gpu', '--no-first-run', '--autoplay-policy=no-user-gesture-required'],
})

const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 900 })
const errors = []
page.on('console', (m) => {
  if (m.type() === 'error') errors.push(m.text())
})
page.on('requestfailed', (r) => errors.push(`FAILED ${r.url()}`))

await page.goto('http://localhost:4173/', { waitUntil: 'networkidle2', timeout: 60000 })
await new Promise((r) => setTimeout(r, 5000))
await page.screenshot({ path: `${OUT}/fin-hero.png` })
console.log('captured hero')

for (const [name, sel] of [
  ['experiencias', '#experiencias'],
  ['alojamiento', '#alojamiento'],
  ['galeria', '#galeria'],
  ['ubicacion', '#ubicacion'],
]) {
  await page.evaluate((s) => {
    document.querySelector(s)?.scrollIntoView({ behavior: 'instant', block: 'start' })
  }, sel)
  await new Promise((r) => setTimeout(r, 2500))
  await page.screenshot({ path: `${OUT}/fin-${name}.png` })
  console.log(`captured ${name}`)
}

// Seccion de video destacado
await page.evaluate(() => {
  const v = [...document.querySelectorAll('video')].find((x) => x.src.includes('video-rancho'))
  v?.closest('section')?.scrollIntoView({ behavior: 'instant', block: 'start' })
})
await new Promise((r) => setTimeout(r, 3000))
await page.screenshot({ path: `${OUT}/fin-video.png` })
console.log('captured video')

// Estado de los videos
const vids = await page.evaluate(() =>
  [...document.querySelectorAll('video')].map((v) => ({
    src: v.currentSrc.split('/').pop(),
    w: v.videoWidth,
    h: v.videoHeight,
    ready: v.readyState,
    playing: !v.paused,
  })),
)
console.log('VIDEOS: ' + JSON.stringify(vids))
console.log('ERRORS: ' + (errors.length ? errors.slice(0, 8).join(' | ') : 'none'))
await page.close()

const mob = await browser.newPage()
await mob.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 2 })
await mob.goto('http://localhost:4173/', { waitUntil: 'networkidle2', timeout: 60000 })
await new Promise((r) => setTimeout(r, 4000))
await mob.screenshot({ path: `${OUT}/fin-mobile-hero.png` })
console.log('captured mobile-hero')

await browser.close()
