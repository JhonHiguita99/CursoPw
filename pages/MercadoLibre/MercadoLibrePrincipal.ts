import {  Page,  expect } from '@playwright/test';
import accionesConstantes from '../../utils/accionesContantes';
import selectorsPaginaPrincipalMercadoLibre from '../../selectors/MercadoLibreLocators/paginaPrincipalMercadoLibre';
import { console } from 'inspector';

export default class MercadoLibrePagePrincipal {
    private readonly page: Page
    readonly acciones: accionesConstantes
    private Nombre

     constructor(page:Page){
        this.page = page;
        this.acciones = new accionesConstantes(page);
                
        }

        async  buscarMercadoLibre(productoABuscar:string) {
            await expect(this.page.locator(selectorsPaginaPrincipalMercadoLibre.selectorBuscarProducto)).toBeEditable();
            await this.page.locator(selectorsPaginaPrincipalMercadoLibre.selectorBuscarProducto).fill(productoABuscar);
            await this.page.keyboard.press("Enter");
        }

        async obtenerelTituloDeLosProductosBuscados() {
            //await this.page.waitForSelector('body'); 
            await this.page.waitForNavigation({ waitUntil: 'domcontentloaded' });

            const containerTitles = await this.page.locator(`.ui-search-result__wrapper`).all();
            const randomIndex =  Math.floor(Math.random() * containerTitles.length);

            const randomItem = containerTitles[randomIndex]

           

            this.Nombre = await randomItem.locator(`.poly-component__title-wrapper`).textContent();

            console.log(this.Nombre)


            return this.Nombre
        }




}
