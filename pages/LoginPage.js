import { expect } from '@playwright/test';

export class LoginPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('button[type="submit"]');
        this.errorMessage = page.locator('#error-for-username');
    }

    async goto() {
        await this.page.goto('https://www.linkedin.com/login');
    }

    async login(username, password) {
        await this.usernameInput.waitFor({ state: 'visible' });
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async verifyLoginError() {
        await expect(this.errorMessage).toBeVisible();
    }
}
