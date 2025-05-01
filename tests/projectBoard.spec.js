const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { BoardPage } = require('../pages/BoardPage');
const { TaskComponent } = require('../pages/TaskComponent');
const { testCases } = require('../data/testCases');

test.describe('Project Board ', () => {

  test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(process.env.USERNAME, process.env.PASSWORD);
  });

  for (const scenario of testCases) {
    test(`${scenario.board}: "${scenario.task}" [${scenario.column}]`, async ({ page }) => {

      // Navigate to specified Board
      const board = new BoardPage(page);
      await board.goTo(scenario.board);

      // Look for Task Card by Column
      const taskLocator = board.findTask(scenario.column, scenario.task);
      await expect(taskLocator).toBeVisible();

      // Look for Tags in the Task Card
      const task = new TaskComponent(taskLocator);
      await task.expectToHaveTags(scenario.tags);
    });
  }
});
