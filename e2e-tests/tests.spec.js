const { test, describe, expect } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(
      page.getByText(
        'Pokémon and Pokémon character names are trademarks of Nintendo.'
      )
    ).toBeVisible()
  })
  test('can go to ivysaur', async ({ page }) => {
    await page.goto('/')
    const ivysaur = page.getByText('ivysaur')
    await ivysaur.click()
    await expect(page.getByText('chlorophyll')).toBeVisible()
  })
})
