# IT3040 - Assignment 1: Playwright Test Automation

This repository contains the automated test suite for **Assignment 1 (IT3040 – ITPM)**.  
The tests evaluate the **functional accuracy, robustness, and UI behavior** of the **SwiftTranslator** web application, which converts **Singlish input into Sinhala output**, using the **Playwright** testing framework.

🔗 Application under test: https://www.swifttranslator.com/

---

## 👤 Student Details
- **Name:** E.A.S.N.Dulnara
- **Student ID:** IT23416512
- **Module:** IT3040 – IT Project Management
- **Degree:** BSc (Hons) in Information Technology

---

## 📂 Project Structure

All automated tests are located inside the `tests/` directory.

| File Name | Description |
|----------|-------------|
| **`Positive_TC.spec.js`** | Contains **30 positive functional test cases** validating correct Singlish-to-Sinhala conversion for daily language, sentence structures, tense variations, mixed English terms, numbers, currency, and long paragraph inputs. |
| **`Negative_TC.spec.js`** | Contains **11 negative functional test cases** focusing on robustness scenarios such as URLs, passwords, file paths, hashtags, uppercase inputs, symbols, and formatting edge cases. |
| **`UI_TC.spec.js`** | Contains **UI-related test cases** validating real-time output updates, multiple space handling, undo/redo behavior, and error handling. |

---

## ⚙️ Prerequisites

Ensure the following are installed before running the tests:
1. **Node.js** (v14 or higher)
2. **npm**
3. **Visual Studio Code** (recommended)

---

## 🚀 Installation

1. Clone the repository (or unzip the submitted project folder):

git clone <your-repository-link>
cd <project-folder-name>


2. Install dependencies and Playwright browsers:


npm install
npx playwright install


---

## 🏃‍♂️ How to Run the Tests

### Run All Tests (Headless)


npx playwright test


### Run All Tests (Headed Mode)


npx playwright test --headed


### Run Specific Test Files

* Positive functional test cases:


npx playwright test tests/Positive_TC.spec.js


* Negative functional test cases:


npx playwright test tests/Negative_TC.spec.js


* UI test cases:


npx playwright test tests/UI_TC.spec.js


---

## 📊 Viewing the Test Report

After execution, view the detailed HTML report using:


npx playwright show-report


---

## 📝 Test Case Summary

### Positive Functional Scenarios

**Scope:** Validate accurate Singlish-to-Sinhala transliteration.
**Coverage:** Simple, compound, and complex sentences, interrogative and imperative forms, tense variations, politeness levels, mixed English technical terms, numbers, currency formats, and long narrative inputs.

### Negative Functional Scenarios

**Scope:** Validate system robustness against unsupported or edge-case inputs.
**Coverage:** URLs, passwords, email addresses, file paths, hashtags, uppercase Singlish, symbols, and spacing-related issues.

### UI Scenarios

* **Pos_UI_01:** Verifies real-time Sinhala output updates with spacing variations.
* **Pos_UI_02:** Verifies undo and redo keyboard functionality.
* **Neg_UI_01:** Verifies error handling behavior for invalid inputs.

---

## ✅ Declaration

This project is an **individual academic submission** created solely for **IT3040 – Assignment 1**, following the provided assignment guidelines
