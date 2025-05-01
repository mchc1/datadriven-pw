// components/CardComponent.js
const { expect } = require('@playwright/test');

class TaskComponent {
  constructor(taskLocator) {
    this.task = taskLocator;
  }

  /**
   * Verifies that within this.task there is a <span> for each expected tag.
   * 
   * @param {string[]} expectedTags
   */
  async expectToHaveTags(expectedTags) {
    for (const tag of expectedTags) {
      // console.log(`Finding tag "${tag}"`);
      await expect(
        this.task.locator(`span:has-text("${tag}")`)
      ).toBeVisible();
    }
  }
}

module.exports = { TaskComponent };
