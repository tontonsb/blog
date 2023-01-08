import { expect, test } from '@playwright/test'

// Check pages in parallel
test.describe.configure({ mode: 'parallel' })

test('default metadata works', async ({ page }) => {
	await page.goto('/')

	const title = 'Nestandarta analīze'
	const description = 'Šeit mēs runāsim par bezgalīgi maziem un bezgalīgi lieliem lielumiem. Kā pie īstiem vīriem. Kā Leibnics nevis Veierštrāss.'

	await expect(page.locator('title')).toHaveText(title)
	await expect(page.locator('meta[name=description]')).toHaveAttribute('content', description)

	await expect(page.locator('meta[property="og:type"]')).toHaveAttribute('content', 'website')
	await expect(page.locator('meta[property="og:site_name"]')).toHaveAttribute('content', title)
	await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', title)
	await expect(page.locator('meta[property="og:description"]')).toHaveAttribute('content', description)
	await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute('content', 'lv_LV')

	await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute('content', 'summary')
	await expect(page.locator('meta[name="twitter:site"]')).toHaveAttribute('content', '@tontonsb')
	await expect(page.locator('meta[name="twitter:creator"]')).toHaveAttribute('content', '@tontonsb')
})

test('metadata is correct on blog', async ({ page }) => {
	await page.goto('/blog/analitikas')

	const title = 'Bezcepumu analītikas'
	const description = 'Aplūkosim divas Google Analytics alternatīvas — Matomo un Fathom un pieredzi ar tām šajā prodžektā.'

	await expect(page.locator('title')).toHaveText(title)
	await expect(page.locator('meta[name=description]')).toHaveAttribute('content', description)

	await expect(page.locator('meta[property="og:site_name"]')).toHaveAttribute('content', 'Nestandarta analīze')
	await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', title)
	await expect(page.locator('meta[property="article:published_time"]')).toHaveAttribute('content', '2022-12-21')
	await expect(page.locator('meta[property="article:modified_time"]')).toHaveAttribute('content', '2022-12-22')
	await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute('content', 'lv_LV')
})

test('metadata is correct on english article', async ({ page }) => {
	await page.goto('/blog/karatsuba')

	await expect(page.locator('meta[property="article:published_time"]')).toHaveAttribute('content', '2023-01-08')
	await expect(page.locator('meta[property="article:modified_time"]')).toHaveCount(0)
	await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute('content', 'en_US')
})

test('metadata is correct on another page', async ({ page }) => {
	await page.goto('/karatsuba')

	await expect(page.locator('meta[property="og:site_name"]')).toHaveAttribute('content', 'Nestandarta analīze')
	await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', 'Karatsuba algorithm')
	await expect(page.locator('meta[property="article:published_time"]')).toHaveCount(0)
	await expect(page.locator('meta[property="article:modified_time"]')).toHaveCount(0)
	await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute('content', 'en_US')
})
