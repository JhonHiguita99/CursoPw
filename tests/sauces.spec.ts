import { test, Page, Browser, expect } from '@playwright/test';
import pageSaucesLogin from '../pages/Sauces/pageSaucesLogin';
import pagePaginaProductos from '../pages/Sauces/pagePaginaProductos';
import selectorsPaginaProductos from '../selectors/selectorsPaginaProductos';
import pageCarrito from '../pages/Sauces/pageCarrito';
import { SrvRecord } from 'dns';


(async()=>{

    let page: Page
    let browser: Browser
    let loginSauces: pageSaucesLogin
    let productos: pagePaginaProductos
    let carrito: pageCarrito

    test.beforeEach(async ({ page }) => {
        loginSauces = new pageSaucesLogin(page)
        productos = new pagePaginaProductos(page)
        carrito = new pageCarrito(page)
    })


    test('Validar la Compra del carrito de compras', async ({ page }) => {
         await test.step('Realizar Login Exitoso', async () => {
            await page.goto("https://www.saucedemo.com");
            await loginSauces.ingresarDatosAlLogin("standard_user","secret_sauce");    
        });
        
        await test.step('Validar Que se selecciona una Producto Random', async () => {
           //await productos.listaDeProductos();
           await carrito.ValidarProductosEnELCarrito();
           await carrito.ingresarDatosCheckout("Jhon","Higuita","0500001");
           await carrito.finalizarCompra();
           await loginSauces.suma(2,3,4)

        });
    });

    test('@testParaRecorrerTablas', async ({ page }) => {
        await page.goto("https://cosmocode.io/automation-practice-webtable/");
        const rows = await page.locator(`//*[@id="countries"]//tr`).all();

        const countries: country[] = []
        
    
        for(let row of rows){
           let country: country={
               name: await row.locator(`xpath=.//td[2]`).innerText(),
               capital: await row.locator(`xpath=.//td[3]`).innerText(),
               moneda: await row.locator(`xpath=.//td[4]`).innerText(),
               primerLenguaje: await row.locator(`xpath=.//td[5]`).innerText()


              
           }
            countries.push(country)

        }
        const lenguajePortuguese = countries.filter(country => country.primerLenguaje === 'Portuguese')

        console.log(lenguajePortuguese)




        /*
        for(let country of countries){
            console.log(country)
        }
        
/*
        const row1 = rows.at(2);
        console.log(row1);
        const paisDeLaFila = await row1?.locator(`xpath=.//td[2]`).innerText();
        const capital = await row1?.locator(`xpath=.//td[3]`).innerText();
        const currency = await row1?.locator(`xpath=.//td[4]`).innerText();
        const primeraLengua = await row1?.locator(`xpath=.//td[5]`).innerText();


        console.log( paisDeLaFila, capital,currency,primeraLengua)
*/

        

    })

    interface country {
        name: string
        capital:string
        moneda:string
        primerLenguaje:string
    }

    

})();