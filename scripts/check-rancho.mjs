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

// Estructura de la seccion fusionada
const structure = await page.evaluate(() => {
  const s = document.querySelector('#rancho')
  if (!s) return { found: false }
  const exp = s.querySelector('#experiencias')
  const cards = s.querySelectorAll('article')
  return {
    found: true,
    bg: getComputedStyle(s).backgroundColor,
    hasExperiencesInside: !!exp,
    cards: cards.length,
    // el texto debe venir antes que las fotos
    textBeforePhotos:
      s.querySelector('h2')?.compareDocumentPosition(cards[0]) === Node.DOCUMENT_POSITION_FOLLOWING,
    h2: s.querySelector('h2')?.textContent,
    h3: exp?.querySelector('h3')?.textContent,
    // los 3 cards de features ya no existen
    featureCards: s.querySelectorAll('.rounded-2xl.border').length,
  }
})
console.log('SECTION: ' + JSON.stringify(structure))

await page.evaluate(() =>
  document.querySelector('#rancho')?.scrollIntoView({ behavior: 'instant', block: 'start' }),
)
await new Promise((r) => setTimeout(r, 2000))
await page.screenshot({ path: `${OUT}/rancho-top.png` })

await page.evaluate(() =>
  document.querySelector('#experiencias')?.scrollIntoView({ behavior: 'instant', block: 'start' }),
)
await new Promise((r) => setTimeout(r, 2000))
await page.screenshot({ path: `${OUT}/rancho-carousel.png` })

// Ultimas dos fotos del carrusel (las que venian de El Rancho)
await page.evaluate(() => {
  const sc = document.querySelector('#experiencias [role="region"]')
  if (sc) sc.scrollLeft = sc.scrollWidth
})
await new Promise((r) => setTimeout(r, 1400))
await page.screenshot({ path: `${OUT}/rancho-carousel-end.png` })

const last = await page.evaluate(() => {
  const cards = [...document.querySelectorAll('#experiencias article')]
  return cards.slice(-2).map((c) => ({
    title: c.querySelector('h4')?.textContent,
    caption: c.querySelector('p')?.textContent?.slice(0, 45),
    img: c.querySelector('img')?.src.split('/').pop(),
  }))
})
console.log('LAST CARDS: ' + JSON.stringify(last))
await page.close()

const mob = await browser.newPage()
await mob.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 2 })
await mob.goto(URL, { waitUntil: 'networkidle2', timeout: 90000 })
await mob.evaluate(() =>
  document.querySelector('#rancho')?.scrollIntoView({ behavior: 'instant', block: 'start' }),
)
await new Promise((r) => setTimeout(r, 2000))
await mob.screenshot({ path: `${OUT}/rancho-mobile.png` })
console.log('captured mobile')

await browser.close()
