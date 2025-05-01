# Data-Driven Playwright Test Suite

A lightweight, maintainable Playwright test project demonstrating a data-driven approach with Page Object Models.

## 📦 Project structure: 
```
.
├── data
│ └── testCases.js # Array of test scenarios
├── pages
│ ├── LoginPage.js # Encapsulates login flow
│ ├── BoardPage.js # Navigation and element locators
│ └── TaskComponent.js # Assertions for task cards
├── tests
│ └── projectBoard.spec.js # Test runner harness
├── .env # Environment variables (not committed)
├── .gitignore
├── package.json
├── package-lock.json
└── playwright.config.js
```

## 🔧 Setup:

1. **Clone the repo**
```
git clone https://github.com/mchc1/datadriven-pw.git
```

2. **Install dependencies**
```
npm install
```

3. **Configure**
Create a `.env` file at the project root with:
```
BASE_URL=https://animated-gingersnap-8cf7f2.netlify.app/
USERNAME=(your username)
PASSWORD=(your password)
```

## 🚀 Running tests:
- Headless (default):
```
npm test
```

- UI (visible browser):
```
npm test -- --ui
```

## 🧩 How it works:

1. **Page Objects**
- `LoginPage` handles the login flow and waits for the board banner.
- `BoardPage` exposes `goTo(boardName)` to navigate to the correct board.
- `TaskComponent` provides `expectToHaveTags()` for verifying tags on a task card.

2. **Data-Driven Scenarios**
- Defined in `data/testCases.js` as an array of objects with board, column, task, and tags.
- `projectBoard.spec.js` loops over each scenario and runs one test per case.

4. **Assertions & Artifacts**
- Screenshots, traces, and videos are captured on first retry (configurable in `playwright.config.js`).
- Test reports are generated in `playwright-report/`.

Happy testing!
