import { test, Page, Browser, expect, Locator } from '@playwright/test';
import accionesConstantes from '../../utils/accionesContantes';
import selectorsPaginaPrincipalMercadoLibre from '../../selectors/MercadoLibreLocators/paginaPrincipalMercadoLibre';

export default class MercadoLibrePagePrincipal {
    private readonly page: Page
    private acciones: accionesConstantes

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

            const titles = await this.page.locator(`//*[@id="root-app"]/div/div[3]/section/ol/li/div//div/div[2]/h2`).allInnerTexts();

            console.log(titles.length)
            for (let title of titles) {
                console.log({title})
                
            }
        }




}
