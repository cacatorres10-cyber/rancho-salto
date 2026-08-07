import puppeteer from 'puppeteer-core'

const OUT = process.argv[2] || '.'
const URL = process.argv[3] || 'http://localhost:4173/'
const browser = await puppeteer.launch({
  executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  headless: 'new',
  args: ['--disable-gpu', '--no-first-run'],
})

const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 900 })
await page.goto(URL, { waitUntil: 'networkidle2', timeout: 90000 })
await new Promise((r) => setTimeout(r, 2500))

// Fondo de cada seccion: todas deben ser verde oscuro
const sections = await page.evaluate(() => {
  const luminance = (rgb) => {
    const m = rgb.match(/\d+/g)
    if (!m) return null
    const [r, g, b] = m.map(Number)
    return Math.round(0.2126 * r + 0.7152 * g + 0.0722 * b)
  }
  return [...document.querySelectorAll('main > section, footer')].map((s) => {
    const bg = getComputedStyle(s).backgroundColor
    return {
      id: s.id || s.tagName.toLowerCase(),
      bg,
      lum: luminance(bg),
    }
  })
})
console.log('SECTIONS:')
sections.forEach((s) => console.log(`  ${s.id.padEnd(14)} ${s.bg}  lum=${s.lum}`))
const light = sections.filter((s) => s.lum !== null && s.lum > 80)
console.log('LIGHT SECTIONS LEFT: ' + (light.length ? light.map((s) => s.id).join(', ') : 'none'))

// Contraste del texto del cuerpo
const body = await page.evaluate(() => {
  const st = getComputedStyle(document.body)
  return { bg: st.backgroundColor, color: st.color }
})
console.log('BODY: ' + JSON.stringify(body))

// Un solo titulo en la seccion del rancho
const rancho = await page.evaluate(() => {
  const s = document.querySelector('#rancho')
  return {
    h2: [...(s?.querySelectorAll('h2') ?? [])].map((h) => h.textContent),
    h3: [...(s?.querySelectorAll('h3') ?? [])].map((h) => h.textContent),
    eyebrows: [...(s?.querySelectorAll('p.uppercase') ?? [])].map((p) => p.textContent),
  }
})
console.log('RANCHO HEADINGS: ' + JSON.stringify(rancho))

for (const [name, sel] of [
  ['rancho', '#rancho'],
  ['excursiones', '#excursiones'],
  ['alojamiento', '#alojamiento'],
  ['ubicacion', '#ubicacion'],
]) {
  await page.evaluate((s) => {
    document.querySelector(s)?.scrollIntoView({ behavior: 'instant', block: 'start' })
  }, sel)
  await new Promise((r) => setTimeout(r, 1800))
  await page.screenshot({ path: `${OUT}/th-${name}.png` })
}
// FAQ y contacto
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight - 2400))
await new Promise((r) => setTimeout(r, 1800))
await page.screenshot({ path: `${OUT}/th-faq.png` })
console.log('captured sections')

await browser.close()
