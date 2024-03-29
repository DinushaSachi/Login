import { test, expect } from '@playwright/test';
import { matchers } from 'expect-playwright'

expect.extend(matchers)

const USERNAME_SELECTOR = '//input[@id="username"]';
const PASSWORD_SELECTOR = '//input[@id="password"]';
const LOGIN_BUTTON_SELECTOR = '//input[@type="submit"]';


test('Login to Wiley Online Library', async ({ page }) => {
  await page.goto('https://onlinelibrary.wiley.com/action/showLogin?role=button&uri=%2F');

  await page.fill(USERNAME_SELECTOR, '999dinusha@gmail.com'); 

  await page.fill(PASSWORD_SELECTOR, 'Willey@123'); 

  await page.click(LOGIN_BUTTON_SELECTOR);

  await page.waitForSelector('#indivLogin > span.profile-text');

  await expect(page).toHaveURL('https://onlinelibrary.wiley.com/');
});



