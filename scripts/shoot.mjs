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
await new Promise((r) => setTimeout(r, 3500))

const targets = [
  ['hero', null],
  ['rancho', '#rancho'],
  ['experiencias', '#experiencias'],
  ['alojamiento', '#alojamiento'],
  ['galeria', '#galeria'],
  ['ubicacion', '#ubicacion'],
  ['contacto', '#contacto'],
  ['footer', 'footer'],
]

for (const [name, sel] of targets) {
  if (sel) {
    await page.evaluate((s) => {
      document.querySelector(s)?.scrollIntoView({ behavior: 'instant', block: 'start' })
    }, sel)
    await new Promise((r) => setTimeout(r, 2200))
  }
  await page.screenshot({ path: `${OUT}/pp-${name}.png` })
  console.log(`captured ${name}`)
}

// Vista media de la galeria circular (mitad del sticky scroll)
await page.evaluate(() => {
  const el = document.querySelector('#galeria')
  if (el) window.scrollTo(0, el.offsetTop + el.offsetHeight * 0.4)
})
await new Promise((r) => setTimeout(r, 2200))
await page.screenshot({ path: `${OUT}/pp-galeria-mid.png` })
console.log('captured galeria-mid')

// Version EN para validar el toggle
await page.evaluate(() => {
  window.scrollTo(0, 0)
  const btns = [...document.querySelectorAll('button')]
  btns.find((b) => b.textContent?.trim() === 'EN')?.click()
})
await new Promise((r) => setTimeout(r, 1500))
await page.screenshot({ path: `${OUT}/pp-hero-en.png` })
console.log('captured hero-en')

await browser.close()
