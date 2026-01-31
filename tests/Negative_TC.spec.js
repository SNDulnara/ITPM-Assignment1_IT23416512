// tests/Negative_TC.spec.js
const { test, expect } = require('@playwright/test');

test.describe('IT3040 Assignment 1 - Negative functional test cases ', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
  });

  // --- Helper Function ---
  async function checkOutput(page, expectedText) {
    // 1. Force translation
    await page.locator('textarea').first().press('Space');
    
    // 2. Wait for the output box to have text
    const outputLocator = page.locator('div.bg-slate-50');
    await expect(outputLocator).not.toBeEmpty({ timeout: 10000 });

    // 3. Get the actual text and print it (Debug)
    const actualText = await outputLocator.innerText();
    console.log(`Expected: "${expectedText}"`);
    console.log(`Actual:   "${actualText.trim()}"`);
    console.log('------------------------------------------------');

    // 5. Check if the actual text contains what we expect
    await expect(outputLocator).toContainText(expectedText);
  }

test('Neg_Fun_01 Question Form', async ({ page }) => {
    await page.locator('textarea').first().fill('mee website eka vaeda karanavadha "www.swifttranslator.com"?');
    await checkOutput(page, 'මේ website එක වැඩ කරනවද "www.swifttranslator.com"?');
  })

test('Neg_Fun_02 Command Form', async ({ page }) => {
    await page.locator('textarea').first().fill('oyaa mee password eka gahala balanna "PasS#@1234*"');
    await checkOutput(page, 'ඔයා මේ password එක ගහල බලන්න "PaaS#@1234*"');
  })

test('Neg_Fun_03 Question Form', async ({ page }) => {
    await page.locator('textarea').first().fill('oyaata adha havasa 5.00 PM valata meet venna puLuvandha?');
    await checkOutput(page, 'ඔයාට අද හවස 5.00 PM වලට meet වෙන්න පුළුවන්ද?');
  })

test('Neg_Fun_04 Command Form', async ({ page }) => {
    await page.locator('textarea').first().fill('oyaata ooni pinthra "C:\Users\ASUS TUF\Desktop\Images\Henaratgoda" mee folder path eken ganna');
    await checkOutput(page, 'ඔයාට ඕනි පින්ත්‍ර "C:\Users\ASUS TUF\Desktop\Images\Henaratgoda" මේ folder path එකෙන් ගන්න');
  })

test('Neg_Fun_05 Daily language', async ({ page }) => {
    await page.locator('textarea').first().fill('mama baladhdhi nam #apiSriLanka kiyala comment karalaa thibbee');
    await checkOutput(page, 'මම බලද්දි නම් #apiSriLanka කියල comment කරලා තිබ්බේ');
  })

test('Neg_Fun_06 Command Form', async ({ page }) => {
    await page.locator('textarea').first().fill('puluwan haema wadakma hariyata karanna');
    await checkOutput(page, 'පුලුවන් හැම වැඩක්ම හරියට කරන්න');
  })

test('Neg_Fun_07 Command Form', async ({ page }) => {
    await page.locator('textarea').first().fill('ara liyuma "adhya.k@gmail.com" Email ekata yavanna');
    await checkOutput(page, 'අර ලියුම "adhya.k@gmail.com" Email එකට යවන්න');
  })

test('Neg_Fun_08 Command Form', async ({ page }) => {
    await page.locator('textarea').first().fill('iridhata churchyanna enna');
    await checkOutput(page, 'ඉරිදට churchයන්න එන්න');
  })

test('Neg_Fun_09 Command Form', async ({ page }) => {
    await page.locator('textarea').first().fill('"HiruStar" lesa type kara 7788 SMS karanna');
    await checkOutput(page, '“HiruStar” ලෙස type කර 7788 SMS කරන්න');
  })

test('Neg_Fun_10 Future tence', async ({ page }) => {
    await page.locator('textarea').first().fill('MAMA HETA CAMPUS ENAVAA');
    await checkOutput(page, 'මම හෙට campus එනවා');
  })

test('Neg_Fun_11 Present tence', async ({ page }) => {
    await page.locator('textarea').first().fill('adha Gampaha uShNathvaya 86°F venakan vaedi velaa');
    await checkOutput(page, 'අද Gampaha උෂ්ණත්වය 86°F වෙනකන් වැඩි වෙලා');
  })


});
