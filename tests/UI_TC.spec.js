// tests/UI_TC.spec.js
const { test, expect } = require('@playwright/test');

test.describe('IT3040 Assignment 1 - UI Test Cases', () => {

  test.beforeEach(async ({ page }) => {
    // Navigate to the application
    await page.goto('https://www.swifttranslator.com/');
  });

  // Positive UI test case 1
  
  test('Pos_UI_01: Real-time update with multiple spaces', async ({ page }) => {
    const inputLocator = page.locator('textarea').first(); 
    const outputLocator = page.locator('div.bg-slate-50'); 


    console.log('Step 1: Typing "Mama   yanavaa" (with extra spaces)...');
    await inputLocator.fill('Mama   yanavaa');
    
    await page.waitForTimeout(1000); 

    const actualText = await outputLocator.innerText();
    console.log(`[Pos_UI_01] Final Output: "${actualText}"`);

    await expect(outputLocator).toContainText('මම');
    await expect(outputLocator).toContainText('යනවා');
  });


  // Positive UI test case 2

  test('Pos_UI_02: Undo and Redo operations', async ({ page }) => {
    const inputLocator = page.locator('textarea').first(); 
    
    console.log('Step 1: Typing "SLIIT"...');
    await inputLocator.fill('SLIIT');
    await page.waitForTimeout(500);

    console.log('Step 2: Pressing Control+Z (Undo)...');
    await inputLocator.press('Control+z');
    await page.waitForTimeout(500);

    await expect(inputLocator).toHaveValue('');

    console.log('Step 3: Pressing Control+Shift+Z (Redo)...');
    await inputLocator.press('Control+Shift+z');
    await page.waitForTimeout(500);

    const currentValue = await inputLocator.inputValue();
    console.log(`[Pos_UI_02] Value after Redo: "${currentValue}"`);
    await expect(inputLocator).toHaveValue('SLIIT');
  });


  // Negative UI test case 1
  test('Neg_UI_01: Error handling validation', async ({ page }) => {
    const inputLocator = page.locator('textarea').first(); 
    
    console.log('Step 1: Typing invalid input to trigger error...');
    await inputLocator.fill('copy karala ganna');
    
    console.log('Step 2: Waiting for error message (Expect Failure)...');
    
    const errorPopup = page.locator('.error-message-toast'); 
    await expect(errorPopup).toBeVisible({ timeout: 5000 }); 
  });

});