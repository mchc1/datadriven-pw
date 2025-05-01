class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.getByRole('textbox', { name: 'Username' });
    this.password = page.getByRole('textbox', { name: 'Password' });
    this.submit = page.getByRole('button', { name: 'Sign in' });
  }

  async login(user, pass) {
    await this.page.goto('/');
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.submit.click();
    // wait for landing
    const heading = this.page
      .getByRole('banner')
      .getByRole('heading', { name: 'Web Application' });
    await heading.waitFor({ state: 'visible' });
  }
}

module.exports = { LoginPage };
