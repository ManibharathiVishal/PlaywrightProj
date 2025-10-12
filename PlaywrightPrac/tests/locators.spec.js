const {test, expect} = require("@playwright/test")

test("practising mul loc in playwright", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html#")
    await page.locator("//button[text()='Primary Action']").click()
    await page.locator("//button[text()='Toggle Button']").click()
    await page.locator("//input[@id='username']").fill("Mani")
    await page.getByRole("checkbox", {type:'checkbox'})
    const elements = await page.$$("//nav[@role='navigation']")

    for(let i=0;i<elements.length;i++){
        const text = await elements[i].textContent()
        console.log(text)
        await elements[i].click()
    }

    const elements1 = await page.$$("//section[@id='text-locators']/descendant :: ul")

     for(let i=0;i<elements1.length;i++){
        const text = await elements1[i].textContent()
        console.log(text)
        if(i=1){
            await page.locator(("//a[text()='link']")).click()    
        }   
    }

    await page.locator("//button[text()='Submit Form']")

    await page.getByLabel("Email Address:").fill("mani@gmail.com")
    await page.getByLabel("Password:").fill("mani")
    await page.getByLabel("Your Age:").fill("3")
    await page.getByLabel(" Express").click()
    
   await page.getByPlaceholder("Enter your full name").fill("mani")
   await page.getByPlaceholder("Phone number (xxx-xxx-xxxx)").fill("mani")
   await page.getByPlaceholder("Type your message here...").fill("mani")
   await page.getByPlaceholder("Search products...").fill("mani")
   await page.getByRole("//button[text()='Search']")

   await page.locator("//img[@alt='logo image']").click()

   await page.getByTitle("Home page link").click()
   await page.getByTitle("HyperText Markup Language").click()
   await page.getByTitle("Tooltip text").click()
   await page.getByTitle("Click to save your changes").click()

   await page.getByTestId("edit-profile-btn").click()
   await page.getByTestId("product-card-1").click()
   await page.getByTestId("product-card-2").click()
   await page.getByTestId("product-card-3").click()
   await page.getByTestId("nav-home").click()
   await page.getByTestId("nav-products").click()
   await page.getByTestId("nav-contact").click()

   await page.locator("//input[@id='Wikipedia1_wikipedia-search-input']").fill("search")
   await page.locator("//input[@type='submit']").click()
   const results = await page.$("//div[@class='wikipedia-search-results']")

   for(let i=0;i<results.length;i++){
    console.log(results[i].textContent)
   
   }
    
   await page.locator("//button[@onclick='toggleButton(this)']").click()
   await page.waitForTimeout(4000)
   await page.waitForTimeout(4000)

//    await page.locator("//button[@id='alertBtn']").click()
//    await page.waitForTimeout(4000)

//    page.on("dialog", async (d)=>{
//     expect(d.type()).toContain("alert")
//     await page.waitForTimeout(4000)
//     expect(d.message()).toContain("I am an alert box!")
//     await page.waitForTimeout(4000)
//     d.accept()
//     await page.waitForTimeout(4000)
//    })

//    await page.locator("//button[@id='confirmBtn']").click()
//    await page.waitForTimeout(4000)
//    page.on("dialog", async(d)=>{
//     expect(d.type()).toContain("confirm")
//     await page.waitForTimeout(4000)
//     expect(d.message()).toContain("Press a button!")
//     await page.waitForTimeout(4000)
//     d.dismiss()
//     await page.waitForTimeout(4000)
//    })
//    await page.waitForTimeout(4000)

    //   await page.locator("//button[@id='promptBtn']")
    //   await page.waitForTimeout(4000)
    //   page.on("dialog",async(d)=>{
    //     expect (d.type()).toContain("prompt")
    //     expect(d.message()).toContain("Please enter your name:")
    //     await page.waitForTimeout(4000)
    //     d.accept("Mani")
    //     await page.waitForTimeout(4000)
    //   })
        await page.waitForTimeout(4000)
      await page.locator("//button[@class='dropbtn']").hover()
      await page.waitForTimeout(4000)
      await page.locator("//a[text()='Laptops']").click()
      await page.waitForTimeout(4000)

      await page.locator("//input[@id='field1']").focus()

      await page.keyboard.down("Shift")
      await page.waitForTimeout(4000)

      for(let i=0;i<12;i++){
        await page.keyboard.press("ArrowLeft")
      }
      await page.keyboard.up("Shift")
      
      await page.keyboard.press("Control+C")
      
      await page.locator("//input[@id='field2']").focus()
      
      await page.keyboard.press("Control+V")

       //await page.locator("//p[text()='Drag me to my target']").dragTo(page.locator("//div[@id='droppable']"))

        await page.locator("//p[text()='Drag me to my target']").hover()
        await page.mouse.down()
        await page.locator("//div[@id='droppable']").hover()
        await page.mouse.up()

        await page.locator("//input[@id='comboBox']").click()
        await page.mouse.wheel(0,10)
        await page.locator("//div[text()='Item 6']").click()

        
 })

 test("upload validation",async({page})=>{
            await page.goto("https://the-internet.herokuapp.com/upload")
            await page.locator("//input[@id='file-upload']").setInputFiles("/Users/Manibharathi.Kanniya/Downloads/intq.docx")
            await page.locator("//button[text()='Upload Single File']")
        })

 test.only("shadow dom", async ({page})=>{
    page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html#")

    await page.locator('text = "Mobiles"').click()
 })       