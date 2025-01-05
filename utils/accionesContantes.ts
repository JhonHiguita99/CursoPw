import { test,Page,Browser, expect } from '@playwright/test';


/*
Author: Jhon Higuita
*/

export default class accionesConstantes{
    private readonly page:Page;

    constructor(page:Page){
        this.page = page;
    
    };

    async iniciarBrowser(testInfo:{attach: Function}, URL: String) {
        this.page.goto('');
        
    }
    async screenshot(){
        await test.info().attach('screenshot',{
            body: await this.page.screenshot(),
            contentType: 'image/png'
        })
    }
    

};