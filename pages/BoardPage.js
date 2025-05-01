class BoardPage {
  constructor(page) {
    this.page = page;
  }

  async goTo(boardName) {
    const nameRegex = new RegExp(boardName, 'i');
    await this.page.getByRole('button', { name: nameRegex }).click();
  }

  /**
   * Find a task within its column container by its utility-classes + text
   * Possible improvement: adding data-testid attributes in the application code to made the code less brittle
   * 
   * @param {string} columnName  e.g. "To Do"
   * @param {string} taskTitle   e.g. "Push notification system"
   */
  findTask(columnName, taskTitle) {
    const column = this.page.locator(
      'div.flex.flex-col.w-80.bg-gray-50.rounded-lg.p-4',
      { hasText: columnName }
    );
    // console.log(`Found column "${columnName}", now finding task "${taskTitle}"`);

    return column.locator(
      'div.bg-white.p-4.rounded-lg.shadow-sm.border.border-gray-200.hover\\:shadow-md.transition-shadow',
      { hasText: taskTitle }
    );
  }
}

module.exports = { BoardPage };
