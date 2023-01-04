import { expect, test } from '@playwright/test'

// Check pages in parallel
test.describe.configure({ mode: 'parallel' })

test('index page works', async ({ page }) => {
	await page.goto('/')

	expect(await page.textContent('h1')).toBe('Nestandarta analīze')
})

test('blog page works', async ({ page }) => {
	await page.goto('/blog')

	expect(await page.textContent('h1')).toBe('Raksti')
})

test('privacy page works', async ({ page }) => {
	await page.goto('/privacy')

	expect(await page.textContent('h1')).toBe('Datu politika')
})

test('some article works', async ({ page }) => {
	await page.goto('/blog/iepirkumi')

	expect(await page.textContent('h1')).toBe('Valsts iepirkumi')
})

test('calc page works', async ({ page }) => {
	await page.goto('/iepirkumu-kalkulators')

	expect(await page.textContent('h1')).toBe('Iepirkumu kalkulators')
})

test('karatsuba page works', async ({ page }) => {
	await page.goto('/karatsuba')

	expect(await page.textContent('h1')).toBe('Karatsuba algorithm')

	// Ensure the calc is rendered
	await expect(page.locator('main')).toContainText('- z0 - z2')
})
