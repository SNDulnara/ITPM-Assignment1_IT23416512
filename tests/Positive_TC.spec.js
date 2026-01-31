// tests/Positive_TC.spec.js
const { test, expect } = require('@playwright/test');

test.describe('IT3040 Assignment 1 - Positive functional test cases ', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
  });

  // --- Helper Function ---
  async function checkOutput(page, expectedText) {
    // 1. Force translation
    await page.locator('textarea').first().press('Space');
    
    // 2. Wait for the output box to have text
    const outputLocator = page.locator('div.bg-slate-50');
    await expect(outputLocator).not.toBeEmpty({ timeout: 15000 });

    // 3. Get the actual text and print it (Debug)
    const actualText = await outputLocator.innerText();
    console.log(`Expected: "${expectedText}"`);
    console.log(`Actual:   "${actualText.trim()}"`);
    console.log('------------------------------------------------');

    // 5. Check if the actual text contains what we expect
    await expect(outputLocator).toContainText(expectedText);
  }

 test('Pos_Fun_01: Simple sentence', async ({ page }) => {
    await page.locator('textarea').first().fill('thaaththaa vaedata yanavaa');
    await checkOutput(page, 'තාත්තා වැඩට යනවා');
  })

test('Pos_Fun_02: Compound sentence', async ({ page }) => {
    await page.locator('textarea').first().fill('api sellam karamu eeth iitakalin bath kaalaa imu');
    await checkOutput(page, 'අපි සෙල්ලම් කරමු ඒත් ඊටකලින් බත් කාලා ඉමු');
  })

test('Pos_Fun_03: Compound sentence', async ({ page }) => {
    await page.locator('textarea').first().fill('Eyaalaa vaeradhi thiiraNa gannee  avabooDhayak naethi nisaa');
    await checkOutput(page, 'එයාලා වැරදි තීරණ ගන්නේ අවබෝධයක් නැති නිසා');
  })

  test('Pos_Fun_04: Question Form', async ({ page }) => {
    await page.locator('textarea').first().fill('oyaa monavadha haemaveleema hithanne?');
    await checkOutput(page, 'ඔයා මොනවද හැමවෙලේම හිතන්නෙ?');
  })

  test('Pos_Fun_05: Imperative Form', async ({ page }) => {
    await page.locator('textarea').first().fill('kiyana dhee karanna');
    await checkOutput(page, 'කියන දේ කරන්න');
  })

test('Pos_Fun_06: Question Form', async ({ page }) => {
    
    await page.locator('textarea').first().fill(`mama kathaa karanavaa
       oyaata ahenavadha?`);    
  
    await checkOutput(page, `මම කතා කරනවා
       ඔයාට අහෙනවද?`);
})

test('Pos_Fun_07:  Informal language', async ({ page }) => {
    await page.locator('textarea').first().fill('adoo siraavata!!! eeka maru machan');
    await checkOutput(page, 'අඩෝ සිරාවට!!! ඒක මරු මචන්');
  })

test('Pos_Fun_08: Daily language', async ({ page }) => {
    await page.locator('textarea').first().fill('oyaa aeththamadha kiyanne? mama           kalin hithuvee oyaa boru kiyanava     kiyalaa. mata samaavenna oyaa gaena ehema vaeradhi vidhihata hithuvata. ');
    await checkOutput(page, 'ඔයා ඇත්තමද කියන්නෙ? මම       කලින් හිතුවේ ඔයා බොරු කියනව     කියලා. මට සමාවෙන්න ඔයා ගැන එහෙම වැරදි විදිහට හිතුවට. ');
  })

test('Pos_Fun_09: Request form', async ({ page }) => {
    await page.locator('textarea').first().fill('mama hithuve adha havasata zoom meeting ekak dhaanna. Oyaala oyaalage campus ID eken join venna. oyaalata puluvan nedha?');
    await checkOutput(page, 'මම හිතුවෙ අද හවසට zoom meeting එකක් දාන්න. ඔයාල ඔයාලගෙ campus ID එකෙන් join වෙන්න. ඔයාලට පුලුවන් නේද?');
  })

test('Pos_Fun_10: Question Form', async ({ page }) => {
    await page.locator('textarea').first().fill('puLuvan nam fan eka dhaagenayanavadha? ');
    await checkOutput(page, 'පුළුවන් නම් fan එක දාගෙනයනවද? ');
  })

test('Pos_Fun_11: Question Form', async ({ page }) => {
    await page.locator('textarea').first().fill('ov amme, mama janavaari 30 office yanne naee. ammata monaadha karala dhenna ooni?');
    await checkOutput(page, 'ඔව් අම්මෙ, මම ජනවාරි 30 office යන්නෙ නෑ. අම්මට මොනාද කරල දෙන්න ඕනි?');
  })

test('Pos_Fun_12: Simple sentence', async ({ page }) => {
    await page.locator('textarea').first().fill('anee mata samaavenna, magee athin nodhaenuvathva una vaeraedhdhak eeka.');
    await checkOutput(page, 'අනේ මට සමාවෙන්න, මගේ අතින් නොදැනුවත්ව උන වැරැද්දක් ඒක.');
  })

test('Pos_Fun_13: Slang language', async ({ page }) => {
    await page.locator('textarea').first().fill('ooyi dhiipu vaedee hariyata karapan, naeththam baenum ahanna veyi uBata');
    await checkOutput(page, 'ඕයි දීපු වැඩේ හරියට කරපන්, නැත්තම් බැනුම් අහන්න වෙයි උඹට');
  })

test('Pos_Fun_14: Compound sentence', async ({ page }) => {
    await page.locator('textarea').first().fill('mee Rs.5000 ATM ekata dhaalaa api ikmanata gedhara yamu mokadha mama 4.45 PM vedhdhi gedhara yanna ooni online lecture ekak thiyenava mata');
    await checkOutput(page, 'මේ Rs.5000 ATM එකට දාලා අපි ඉක්මනට ගෙදර යමු මොකද මම 4.45 PM වෙද්දි ගෙදර යන්න ඕනි online lecture එකක් තියෙනව මට');
  })

test('Pos_Fun_15: Daily language', async ({ page }) => {
    await page.locator('textarea').first().fill('hadhissiyak naehae, hemin hemin oyaage vaedee ivara karanna');
    await checkOutput(page, 'හදිස්සියක් නැහැ, හෙමින් හෙමින් ඔයාගෙ වැඩේ ඉවර කරන්න');
  })

test('Pos_Fun_16: Daily language', async ({ page }) => {
    await page.locator('textarea').first().fill('thaaththaa mata pereedha kiyuve nam pebaravaari 25 venidha vedhdhi ee company ekata USD 20 gevanna veyi kiyala');
    await checkOutput(page, 'තාත්තා මට පෙරේද කියුවෙ නම් පෙබරවාරි 25 වෙනිද වෙද්දි ඒ company එකට USD 20 ගෙවන්න වෙයි කියල');
  })

test('Pos_Fun_17: Greeting', async ({ page }) => {
    await page.locator('textarea').first().fill('SLT seevaavan haa sambanDha vuu obata sthuuthii. suBha dhavasak!!');
    await checkOutput(page, 'SLT සේවාවන් හා සම්බන්ධ වූ ඔබට ස්තූතී. සුභ දවසක්!!');
  })

test('Pos_Fun_18: Daily language', async ({ page }) => {
    await page.locator('textarea').first().fill('ammaa iiye hadhapu kaeema vagayak thibbaa ');
    await checkOutput(page, 'අම්මා ඊයෙ හදපු කෑම වගයක් තිබ්බා ');
  })

test('Pos_Fun_19 Present form', async ({ page }) => {
    await page.locator('textarea').first().fill('mama dhaen nam podi vaedak karana gaman inne');
    await checkOutput(page, 'මම දැන් නම් පොඩි වැඩක් කරන ගමන් ඉන්නේ');
  })

test('Pos_Fun_20 Pronoun variation', async ({ page }) => {
    await page.locator('textarea').first().fill('api labana sathiyee sirii paadhee yanavaa. oyaalath enava nam bus ekata Rs. 1500k aran enna');
    await checkOutput(page, 'අපි ලබන සතියේ සිරී පාදේ යනවා. ඔයාලත් එනව නම් bus එකට Rs. 1500ක් අරන් එන්න');
  })

test('Pos_Fun_21 Negative form', async ({ page }) => {
    await page.locator('textarea').first().fill('mata thaniyama vaeda karanna baehae');
    await checkOutput(page, 'මට තනියම වැඩ කරන්න බැහැ');
  })

test('Pos_Fun_22 Daily language', async ({ page }) => {
    await page.locator('textarea').first().fill('amme, mama oyaata thunapaha 50g , haal 1kg, kothmalee fresh milk 1.5L genaavaa');
    await checkOutput(page, 'අම්මෙ, මම ඔයාට තුනපහ 50g , හාල් 1kg, කොත්මලේ fresh milk 1.5L ගෙනාවා');
  })

test('Pos_Fun_23 Question Form', async ({ page }) => {
    await page.locator('textarea').first().fill('oyaage Laptop       ekee RAM eka kochcharakdha?');
    await checkOutput(page, 'ඔයාගෙ Laptop       එකේ RAM එක කොච්චරක්ද?');
  })

test('Pos_Fun_24 Question Form', async ({ page }) => {
    await page.locator('textarea').first().fill('karuNaakarala oyaalata puLuvan velaavaka mata ee vaedea karala dhenna?');
    await checkOutput(page, 'කරුණාකරල ඔයාලට පුළුවන් වෙලාවක මට ඒ  වැඩේ කරල දෙන්න?');
  })

test('Pos_Fun_25 Slang language', async ({ page }) => {
    await page.locator('textarea').first().fill('machan mata anidhdhata      ara potha genath dhiipan');
    await checkOutput(page, 'මචන් මට අනිද්දට      අර පොත ගෙනත් දීපන්');
  })

test('Pos_Fun_26 Daily language', async ({ page }) => {
    await page.locator('textarea').first().fill('giya sathiye api yaluvoo set eka ekka nuvaraELiye trip ekak giyaa. udhea paandharama 4.30 AM ta vithara api Colombo valin pitath vunaa mokadha traffic ekata kalin yanna oone nisaa. api van ekak rent karala thibune, eka nisaa yanna leesi vunaa. paara dhepaththee lassana thea vathu dhaekalaa api hamooma hariyata sathutu vunaa. api Gregory Lake ekata gihin boat ride ekakuth giyaa. iitapasse Hakgala mal vaththeth aevidhdhaa. lassana paata paata mal godak dhaekkaa. raee venakota api naevathuna hotel ekata giyaa, ethana supiri dinner ekak thibunaa. aapahu edhdhi strawberries ganna amathaka kalee naee. mee trip eka mata kavadhaavath amathaka venne naee');
    await checkOutput(page, 'ගිය සතියෙ අපි යලුවෝ සෙට් එක එක්ක නුවරඑළියෙ trip එකක් ගියා. උදේ පාන්දරම 4.30 AM ට විතර අපි Colombo වලින් පිටත් වුනා මොකද traffic එකට කලින් යන්න ඕනෙ නිසා. අපි van එකක් rent කරල තිබුනෙ, එක නිසා යන්න ලේසි වුනා. පාර දෙපත්තේ ලස්සන තේ වතු දැකලා අපි හමෝම හරියට සතුටු වුනා. අපි Gregory Lake එකට ගිහින් boat ride එකකුත් ගියා. ඊටපස්සෙ හක්ගල මල් වත්තෙත් ඇවිද්දා. ලස්සන පාට පාට මල් ගොඩක් දැක්කා. රෑ වෙනකොට අපි නැවතුන hotel එකට ගියා, එතන සුපිරි dinner එකක් තිබුනා. ආපහු එද්දි  strawberries ගන්න අමතක කලේ නෑ. මේ trip එක මට කවදාවත් අමතක වෙන්නෙ නෑ');
  })

test('Pos_Fun_27 Daily language', async ({ page }) => {
    await page.locator('textarea').first().fill('puthaa, mata 5 cm dhiga 10 cm paLala redhi patiyak kapalaa dhenna ikmanata');
    await checkOutput(page, 'පුතා, මට 5 cm දිග 10 cm පළල රෙදි පටියක් කපලා දෙන්න ඉක්මනට');
  })

test('Pos_Fun_28 Negative form', async ({ page }) => {
    await page.locator('textarea').first().fill('ee Lamayi hariyata vaeda karanne naehaenee ');
    await checkOutput(page, 'ඒ ළමයි හරියට වැඩ කරන්නේ නැහැනේ ');
  })

test('Pos_Fun_29 Compound sentence', async ({ page }) => {
    await page.locator('textarea').first().fill('ov oyaa kiyana dhee mata theerenavaa, ehenam api oyaa kiyapu vidhihata vaeda tika karamu');
    await checkOutput(page, 'ඔව් ඔයා කියන දේ මට තේරෙනවා, එහෙනම් අපි ඔයා කියපු විදිහට වැඩ ටික කරමු');
  })

test('Pos_Fun_30 Request Form', async ({ page }) => {
    await page.locator('textarea').first().fill('akkee mata phone ekee PIN eka poddak kiyannakoo');
    await checkOutput(page, 'අක්කේ මට phone එකේ PIN එක පොඩ්ඩක් කියන්නකෝ');
  })

});
