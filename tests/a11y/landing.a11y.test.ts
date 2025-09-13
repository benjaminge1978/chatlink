import { default as Page } from '@/app/page'
import { renderToString } from 'react-dom/server'
import jsdom from 'jsdom'
import axe from 'axe-core'

// Basic automated a11y smoke test for landing page
describe('Landing page accessibility', () => {
  it('has no critical or serious axe violations', async () => {
    const element = await Page()
    const inner = renderToString(element as any)
    const html = `<!DOCTYPE html><html lang="en"><head><title>Landing</title></head><body>${inner}</body></html>`
    const { JSDOM } = jsdom
    const dom = new JSDOM(html, { runScripts: 'dangerously', resources: 'usable', pretendToBeVisual: true })

    // Inject axe into the JSDOM window and run in-window
    const script = dom.window.document.createElement('script')
    script.textContent = (axe as any).source
    dom.window.document.head.appendChild(script)
    // @ts-ignore - axe is injected on window by the script above
    const results = await dom.window.axe.run(dom.window.document, {
      // Keep default rules; jsdom lacks CSS, so color-contrast can be noisy
      rules: {
        'color-contrast': { enabled: false }
      }
    })

    const seriousOrWorse = results.violations.filter(v => v.impact === 'serious' || v.impact === 'critical')
    expect(seriousOrWorse).toHaveLength(0)
  })
})
