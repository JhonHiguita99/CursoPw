import { test, Page, Browser, expect } from '@playwright/test';
import selectorsPaginaPrincipalMercadoLibre from '../selectors/MercadoLibreLocators/paginaPrincipalMercadoLibre';
import accionesConstantes from '../utils/accionesContantes';
import MercadoLibrePagePrincipal from '../pages/MercadoLibre/MercadoLibrePrincipal';


(async()=>{
let page: Page
let browser: Browser
let acciones: accionesConstantes
let mercadolibreP:MercadoLibrePagePrincipal

  test.beforeEach(async ({ page }) => {
        mercadolibreP = new MercadoLibrePagePrincipal(page)
        
    })

    test('@CasoValidarMercadoLibre', async ({ page }) => {
        await test.step('Validar Url', async () => {
            await page.goto("https://www.mercadolibre.com.co/");
            //await expect(page).toHaveTitle("Navidad en Mercado Libre Colombia");
        });

        await test.step('Ingresar el valor a buscar', async () => {
            await mercadolibreP.buscarMercadoLibre("Iphone");

        });

        await test.step('@', async () => {
            await mercadolibreP.obtenerelTituloDeLosProductosBuscados()
        })        

       
        
    })
    
})();