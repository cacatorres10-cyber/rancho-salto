import puppeteer from 'puppeteer-core'

const OUT = process.argv[2] || '.'
const browser = await puppeteer.launch({
  executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  headless: 'new',
  args: ['--disable-gpu', '--no-first-run'],
})
const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 900 })
await page.goto('http://localhost:4173/', { waitUntil: 'networkidle2', timeout: 90000 })

// Cambiar a ingles
await page.evaluate(() => {
  const b = [...document.querySelectorAll('button')].find((x) => x.textContent?.trim() === 'EN')
  b?.click()
})
await new Promise((r) => setTimeout(r, 1200))
await page.evaluate(() =>
  document.querySelector('#excursiones')?.scrollIntoView({ behavior: 'instant', block: 'start' }),
)
await new Promise((r) => setTimeout(r, 2000))
await page.screenshot({ path: `${OUT}/exc-en.png` })

await page.evaluate(() => {
  const b = [...document.querySelectorAll('#excursiones button')].find((x) =>
    /see details/i.test(x.textContent || ''),
  )
  b?.click()
})
await new Promise((r) => setTimeout(r, 1500))
await page.screenshot({ path: `${OUT}/exc-en-modal.png` })

const info = await page.evaluate(() => {
  const d = document.querySelector('[role="dialog"]')
  return {
    heading: d?.querySelector('h3')?.textContent,
    wa: d?.querySelector('a[href*="wa.me"]')?.getAttribute('href')?.slice(40, 130),
  }
})
console.log('EN MODAL: ' + JSON.stringify(info))
await browser.close()
