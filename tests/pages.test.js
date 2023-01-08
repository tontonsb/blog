import { expect, test } from '@playwright/test'

// Check pages in parallel
test.describe.configure({ mode: 'parallel' })

test('index page works', async ({ page }) => {
	await page.goto('/')

	expect(await page.textContent('h1')).toBe('Nestandarta analīze')
	await expect(page).toHaveTitle('Nestandarta analīze')
})

test('blog page works', async ({ page }) => {
	await page.goto('/blog')

	expect(await page.textContent('h1')).toBe('Raksti')
	await expect(page).toHaveTitle('Raksti')
})

test('privacy page works', async ({ page }) => {
	await page.goto('/privacy')

	expect(await page.textContent('h1')).toBe('Datu politika')
	await expect(page).toHaveTitle('Datu politika')
})

test('some article works', async ({ page }) => {
	await page.goto('/blog/iepirkumi')

	expect(await page.textContent('h1')).toBe('Valsts iepirkumi')
	await expect(page).toHaveTitle('Valsts iepirkumi')
})

test('calc page works', async ({ page }) => {
	await page.goto('/iepirkumu-kalkulators')

	expect(await page.textContent('h1')).toBe('Iepirkumu kalkulators')
	await expect(page).toHaveTitle('Iepirkumu kalkulators')
})

test('karatsuba page works', async ({ page }) => {
	await page.goto('/karatsuba')

	expect(await page.textContent('h1')).toBe('Karatsuba algorithm')
	await expect(page).toHaveTitle('Karatsuba algorithm')

	// Ensure the calc is rendered
	await expect(page.locator('main')).toContainText('- z0 - z2')
})

test('karatsuba comparison page works', async ({ page }) => {
	await page.goto('/karatsuba/comparison')

	expect(await page.textContent('h1')).toBe('Karatsuba vs classic')
	await expect(page).toHaveTitle('Karatsuba vs classic')
})
