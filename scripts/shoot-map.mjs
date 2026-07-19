import puppeteer from 'puppeteer-core'

const OUT = process.argv[2] || '.'
const browser = await puppeteer.launch({
  executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  headless: 'new',
  args: ['--disable-gpu', '--no-first-run'],
})

const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 900 })
await page.goto('http://localhost:4173/#ubicacion', { waitUntil: 'networkidle2', timeout: 60000 })
await page.evaluate(() => {
  document.querySelector('#ubicacion')?.scrollIntoView({ behavior: 'instant', block: 'start' })
})
await new Promise((r) => setTimeout(r, 6000))
await page.screenshot({ path: `${OUT}/pp-map2.png` })
console.log('captured map')
await browser.close()
