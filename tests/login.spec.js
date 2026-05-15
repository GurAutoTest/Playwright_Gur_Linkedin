import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('LinkedIn Login Tests', () => {
    let loginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    });

    test('should show error message with invalid credentials', async ({ page }) => {
        const username = process.env.LINKEDIN_USERNAME || 'invalid_user@example.com';
        const password = process.env.LINKEDIN_PASSWORD || 'wrongpassword';
        
        await loginPage.login(username, password);
        await loginPage.verifyLoginError();
    });

    test('should have correct page title', async ({ page }) => {
        await expect(page).toHaveTitle(/Login | LinkedIn/);
    });
});
