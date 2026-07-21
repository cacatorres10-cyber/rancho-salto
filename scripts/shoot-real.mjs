import puppeteer from 'puppeteer-core'

const OUT = process.argv[2] || '.'
const browser = await puppeteer.launch({
  executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  headless: 'new',
  args: ['--disable-gpu', '--no-first-run'],
})

const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 900 })
await page.goto('http://localhost:4173/', { waitUntil: 'networkidle2', timeout: 60000 })
await new Promise((r) => setTimeout(r, 3000))

const targets = [
  ['rancho', '#rancho'],
  ['experiencias', '#experiencias'],
  ['alojamiento', '#alojamiento'],
  ['galeria', '#galeria'],
  ['ubicacion', '#ubicacion'],
]

for (const [name, sel] of targets) {
  await page.evaluate((s) => {
    document.querySelector(s)?.scrollIntoView({ behavior: 'instant', block: 'start' })
  }, sel)
  await new Promise((r) => setTimeout(r, 2200))
  await page.screenshot({ path: `${OUT}/real-${name}.png` })
  console.log(`captured ${name}`)
}

// Seccion Instagram (contiene el reel)
await page.evaluate(() => {
  document.querySelector('video[src*="reel"]')?.closest('section')?.scrollIntoView({ behavior: 'instant', block: 'start' })
})
await new Promise((r) => setTimeout(r, 2500))
await page.screenshot({ path: `${OUT}/real-instagram.png` })
console.log('captured instagram')
await page.close()

// Mobile: galeria + instagram
const mob = await browser.newPage()
await mob.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 2 })
await mob.goto('http://localhost:4173/', { waitUntil: 'networkidle2', timeout: 60000 })
await mob.evaluate(() => {
  document.querySelector('video[src*="reel"]')?.closest('section')?.scrollIntoView({ behavior: 'instant', block: 'start' })
})
await new Promise((r) => setTimeout(r, 2500))
await mob.screenshot({ path: `${OUT}/real-instagram-mobile.png` })
console.log('captured instagram-mobile')

await browser.close()
