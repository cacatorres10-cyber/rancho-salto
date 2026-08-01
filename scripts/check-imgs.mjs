import puppeteer from 'puppeteer-core'

const browser = await puppeteer.launch({
  executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  headless: 'new',
  args: ['--disable-gpu', '--no-first-run'],
})
const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 900 })
await page.goto('https://cacatorres10-cyber.github.io/rancho-salto/', {
  waitUntil: 'networkidle2',
  timeout: 90000,
})

// Recorre toda la pagina para disparar el lazy loading
await page.evaluate(async () => {
  const step = window.innerHeight / 2
  for (let y = 0; y < document.body.scrollHeight; y += step) {
    window.scrollTo(0, y)
    await new Promise((r) => setTimeout(r, 250))
  }
  window.scrollTo(0, 0)
})
await new Promise((r) => setTimeout(r, 5000))

const broken = await page.evaluate(() =>
  [...document.querySelectorAll('img')]
    .filter((i) => i.naturalWidth === 0)
    .map((i) => i.src.split('/').pop()),
)
const total = await page.evaluate(() => document.querySelectorAll('img').length)
console.log(`IMAGES: ${total} total, ${broken.length} broken`)
if (broken.length) console.log('BROKEN: ' + broken.join(', '))

await browser.close()
