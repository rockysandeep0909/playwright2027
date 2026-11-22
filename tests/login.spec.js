// login using valid username and password
import {test,expect} from 'playwright/test'

test('TC 01 - login to sauce labs using valid username and password', async ({page})=>{
   //implementation  
   // launch url 
   await page.goto("https://www.saucedemo.com/");
   // enter username
   await page.locator("//input[@id='user-name']").fill("standard_user");
   // enter password 
   await page.locator("//input[@name='password']").fill("secret_sauce");
   // click on login button
   await page.locator("//input[@type='submit']").click();
   await page.waitForTimeout(5000);

   // Pending Assertion
   await  expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

})


test('TC 02 - Dropdown example', async ({page})=>{
//implementation  
   // launch url 
   await page.goto("https://www.saucedemo.com/");
   // enter username
   await page.locator("//input[@id='user-name']").fill("standard_user");
   // enter password 
   await page.locator("//input[@name='password']").fill("secret_sauce");
   // click on login button
   await page.locator("//input[@type='submit']").click();
   await page.waitForTimeout(5000);

   // Pending Assertion
   await  expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");


   let dropDown=await page.locator("//select[@class='product_sort_container']")
   await dropDown.selectOption("za");
   await page.waitForTimeout(4000);
   await dropDown.selectOption("lohi");
   await page.waitForTimeout(5000);
   await dropDown.selectOption("hilo");
   await page.waitForTimeout(4000);

})

test('TC 03 - Assertion examples', async ({page})=>{
   //implementation  
   // launch url
   await page.goto("https://www.saucedemo.com/");
  
   // enter username
   await page.locator("//input[@id='user-name']").fill("standard_user");
   // enter password 
   await page.locator("//input[@name='password']").fill("secret_sauce");
   // click on login button
   await page.locator("//input[@type='submit']").click();
   await page.waitForTimeout(5000);

   await  expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
   
   await expect(page.locator("//div[text()='Swag Labs']")).toBeVisible();

   await expect(page.locator("//span[text()='Products']")).toHaveText("Products");

})

test("TC 04 -Navigation methods in playwright", async ({page})=>{
   await page.goto("https://playwright.dev/");
   await page.locator("//a[text()='Get started']").click();

   await page.waitForTimeout(2000);
   await page.goBack();
   await page.waitForTimeout(2000);
   await page.goForward();
   await page.waitForTimeout(2000);
   await page.reload();
   await page.waitForTimeout(2000);
   await page.goBack();
   await page.waitForTimeout(2000);
   await page.goForward();
   await page.waitForTimeout(2000);

})

test("TC 05- keyboard events in playwright", async ({page})=>{
   await page.goto("https://www.saucedemo.com/");
   await page.locator("//input[@id='user-name']").fill("standard_user");
   //await page.pause();
   await page.keyboard.press("Tab");
   await page.locator("//input[@name='password']").fill("secret_sauce");

   
   await page.keyboard.press("Enter");
   await  expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
})

test("TC 06- auto suggestive dropdown", async ({page})=>{

   await page.goto("https://www.wikipedia.org/");
   await page.locator("//input[@id='searchInput']").fill("Playwright");
   await page.waitForTimeout(3000)

   const suggestions=await page.locator("//div[@class='suggestions-dropdown']/a");
   const count = await suggestions.count();
   console.log("Total number of suggestions are "+ count);

   const expectedText="Playwright (software)End-to-end testing framework"

   for(let i=0;i<count;i++){
       const actualText=await suggestions.nth(i).textContent();
       console.log(actualText)

       if(actualText==expectedText){
         await suggestions.nth(i).click();
         break;
       }

   }

   await page.waitForTimeout(4000)

   await page.locator("//span[text()='Further reading']").click();
   
})

test("@visual testing TC 07 - Visual Testing in instagram", async ({page})=>{

   await page.goto("https://playwright.dev/");
   await expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");
   await page.waitForTimeout(5000)
   expect(await page.screenshot()).toMatchSnapshot("playwright.png")

})

test('TC 08 Browser context', async ({browser})=>{

   const context=await browser.newContext();
   const page=await context.newPage();

   await page.goto("https://www.saucedemo.com/");
   // enter username
   await page.locator("//input[@id='user-name']").fill("standard_user");
   // enter password 
   await page.locator("//input[@name='password']").fill("secret_sauce");
   // click on login button
   await page.locator("//input[@type='submit']").click();
   await page.waitForTimeout(5000);

   // Pending Assertion
   await  expect(page).toHaveURL("https://www.saucedemo.com/inventory1.html");
   await  browserContext.close()

} )

test ('TC 09 -File upload example', async ({page})=>{

   await page.goto("https://the-internet.herokuapp.com/upload");
   await page.locator("//input[@id='file-upload']").setInputFiles("testdata/concepts.txt");
   await page.locator("//input[@id='file-submit']").click();
   await page.waitForTimeout(5000);

   await expect(page.locator("//h3")).toBeVisible();

})

test('TC 10 - Handling simple alert in playwright', async ({page})=>{

   await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
   
   page.on('dialog', async dialog=>{
     await  dialog.accept();
    })

   await page.locator("//button[text()='Click for JS Alert']").click();


   
})


test('TC 11 - Handling confirm box ---dismiss in playwright', async ({page})=>{

   await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
   

   page.on('dialog', async dialog=>{
     await  dialog.dismiss();
    })

   await page.locator("//button[text()='Click for JS Confirm']").click();


})


test('TC 12 -Handling prompt box using playwright ', async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    

    page.on('dialog',async dialog=>{
         await dialog.accept("THis is my input");
    })

    await page.locator("//button[text()='Click for JS Prompt']").click();    

})