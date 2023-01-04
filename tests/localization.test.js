import { expect, test } from '@playwright/test'

test('post lang attribute is applied correctly', async ({ page }) => {
	await page.goto('/blog/iepirkumi')
	await expect(page.locator('main')).toHaveAttribute('lang', 'lv')

	await page.goto('/blog/karatsuba')
	await expect(page.locator('main')).toHaveAttribute('lang', 'en')

	await page.goto('/blog/analitikas')
	await expect(page.locator('main')).toHaveAttribute('lang', 'lv')
})
