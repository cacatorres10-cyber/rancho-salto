import puppeteer from 'puppeteer-core'

const OUT = process.argv[2] || '.'
const URL = process.argv[3] || 'http://localhost:4173/'
const browser = await puppeteer.launch({
  executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  headless: 'new',
  args: ['--disable-gpu', '--no-first-run', '--autoplay-policy=no-user-gesture-required'],
})

const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 900 })
await page.goto(URL, { waitUntil: 'networkidle2', timeout: 90000 })

// Ir a la seccion del video del rancho
await page.evaluate(() => {
  const v = [...document.querySelectorAll('video')].find((x) => x.src.includes('video-rancho'))
  v?.closest('section')?.scrollIntoView({ behavior: 'instant', block: 'start' })
})
await new Promise((r) => setTimeout(r, 2500))
await page.screenshot({ path: `${OUT}/alb-section.png` })
console.log('captured video section')

// Abrir el album
const opened = await page.evaluate(() => {
  const b = [...document.querySelectorAll('button')].find((x) =>
    /ver todas las fotos|see all the photos/i.test(x.textContent || ''),
  )
  if (!b) return false
  b.click()
  return true
})
console.log('clicked album button: ' + opened)
await new Promise((r) => setTimeout(r, 2500))
await page.screenshot({ path: `${OUT}/alb-grid.png` })

const grid = await page.evaluate(() => {
  const d = document.querySelector('[role="dialog"]')
  const imgs = d ? [...d.querySelectorAll('img')] : []
  return {
    open: !!d,
    thumbs: imgs.length,
    broken: imgs.filter((i) => i.complete && i.naturalWidth === 0).length,
    heading: d?.querySelector('h3')?.textContent,
  }
})
console.log('GRID: ' + JSON.stringify(grid))

// Ampliar una foto
await page.evaluate(() => {
  const d = document.querySelector('[role="dialog"]')
  const btns = d ? [...d.querySelectorAll('button')] : []
  // el primero es la X de cerrar, el segundo ya es una miniatura
  btns[3]?.click()
})
await new Promise((r) => setTimeout(r, 1500))
await page.screenshot({ path: `${OUT}/alb-zoom.png` })

const zoom = await page.evaluate(() => {
  const d = document.querySelector('[role="dialog"]')
  return { caption: d?.querySelector('p')?.textContent, imgs: d?.querySelectorAll('img').length }
})
console.log('ZOOM: ' + JSON.stringify(zoom))

// Flecha derecha pasa a la siguiente foto
await page.keyboard.press('ArrowRight')
await new Promise((r) => setTimeout(r, 800))
const afterArrow = await page.evaluate(() => ({
  caption: document.querySelector('[role="dialog"] p')?.textContent,
}))
console.log('AFTER ARROW: ' + JSON.stringify(afterArrow))

// Escape vuelve al mosaico, no cierra el album
await page.keyboard.press('Escape')
await new Promise((r) => setTimeout(r, 900))
const afterEsc = await page.evaluate(() => {
  const d = document.querySelector('[role="dialog"]')
  return { stillOpen: !!d, backToGrid: (d?.querySelectorAll('img').length ?? 0) > 5 }
})
console.log('AFTER ESC: ' + JSON.stringify(afterEsc))

// Segundo Escape cierra
await page.keyboard.press('Escape')
await new Promise((r) => setTimeout(r, 900))
console.log(
  'CLOSED: ' + JSON.stringify(await page.evaluate(() => !document.querySelector('[role="dialog"]'))),
)
await page.close()

// Mobile
const mob = await browser.newPage()
await mob.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 2 })
await mob.goto(URL, { waitUntil: 'networkidle2', timeout: 90000 })
await mob.evaluate(() => {
  const b = [...document.querySelectorAll('button')].find((x) =>
    /ver todas las fotos|see all the photos/i.test(x.textContent || ''),
  )
  b?.click()
})
await new Promise((r) => setTimeout(r, 2500))
await mob.screenshot({ path: `${OUT}/alb-mobile.png` })
console.log('captured mobile')

await browser.close()
