import puppeteer from 'puppeteer-core'

const OUT = process.argv[2] || '.'
const browser = await puppeteer.launch({
  executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  headless: 'new',
  args: ['--disable-gpu', '--no-first-run'],
})

// Desktop
const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 900 })
await page.goto('http://localhost:4173/', { waitUntil: 'networkidle2', timeout: 60000 })
await page.evaluate(() => {
  document.querySelector('#galeria')?.scrollIntoView({ behavior: 'instant', block: 'start' })
})
await new Promise((r) => setTimeout(r, 3000))
await page.screenshot({ path: `${OUT}/car-desktop.png` })
console.log('captured desktop')

// Drag simulation
await page.mouse.move(720, 500)
await page.mouse.down()
for (let x = 720; x > 420; x -= 30) {
  await page.mouse.move(x, 500)
  await new Promise((r) => setTimeout(r, 30))
}
await page.mouse.up()
await new Promise((r) => setTimeout(r, 1200))
await page.screenshot({ path: `${OUT}/car-desktop-dragged.png` })
console.log('captured desktop-dragged')

// Lightbox: click a card
await page.mouse.click(720, 500)
await new Promise((r) => setTimeout(r, 1600))
await page.screenshot({ path: `${OUT}/car-lightbox.png` })
console.log('captured lightbox')
await page.close()

// Mobile
const mob = await browser.newPage()
await mob.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 2 })
await mob.goto('http://localhost:4173/', { waitUntil: 'networkidle2', timeout: 60000 })
await mob.evaluate(() => {
  document.querySelector('#galeria')?.scrollIntoView({ behavior: 'instant', block: 'start' })
})
await new Promise((r) => setTimeout(r, 3000))
await mob.screenshot({ path: `${OUT}/car-mobile.png` })
console.log('captured mobile')

await browser.close()
